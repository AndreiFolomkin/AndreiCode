import React from 'react';

export default class extends React.Component{
    render() {
        return(
            <div>
                <h3>{props.name}</h3>
                <img src={props.img} alt=""/>
                <p>price:{props.price}</p>
                <button onChange={props.onChange}>add to card</button>
                {}

            </div>
        )
    }
}