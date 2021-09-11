import React, { Component  } from 'react'

class Verticalad extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"300px",height:"600px"} }
                data-ad-client = "ca-pub-9441468239903088"
                data-ad-slot = "7209789181"></ins>
        </div>)
    }
}

export default Verticalad