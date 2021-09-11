import React, { Component  } from 'react'

class Horizontalad extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"100%",height:"300px"} }
                data-ad-client = "ca-pub-9441468239903088"
                data-ad-slot = "2016817033"></ins>
        </div>)
    }
}

export default Horizontalad