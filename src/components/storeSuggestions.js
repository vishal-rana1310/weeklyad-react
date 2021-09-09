import React from 'react';
import Autosuggest from 'react-autosuggest';
import {Baseurl} from './url'
class ServerAutoSuggest extends React.Component {
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: []
        };
    }

    // Filter logic
    getSuggestions = async (value) => {
        const inputValue = value.trim().toLowerCase();
        let response = await fetch(`${Baseurl}/v1/search?s=${inputValue}` );
        let data = await response.json()
        console.log(data);
        return data;
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.storeTitle;

    // Render Each Option
    renderSuggestion = suggestion => (
        <span className="sugg-option">
            <a href={"/"+ suggestion.storeTitle } target="_blank">
                <span className="icon-wrap" style={{width:"30%", paddingLeft:"10px"}}><img style={{objectFit:"contain", height:"100%"}} src={suggestion.storeLogoImg} /></span>
                <span className="name" style={{width:"70%"}}>
                    {suggestion.storeTitle}
                </span>
            </a>
        </span>
    );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.getSuggestions(value)
            .then(data => {
                if (data.Error) {
                    this.setState({
                        suggestions: []
                    });
                } else {
                    this.setState({
                        suggestions: data.stores
                    });
                }
            })
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Search Here...',
            value,
            onChange: this.onChange
        };

    


        // Adding AutoSuggest component
        return (
            <Autosuggest
                
                
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default ServerAutoSuggest;