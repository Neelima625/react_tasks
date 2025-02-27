import React from "react"
class Child extends React.Component{
    render(){
        return(
            <div>
                <p>passing props in child based components</p>
                {this.props.p_n}
                {this.props.cost}
            </div>
        )

        }
    }
    export default Child
