import React, { Component } from 'react'

class MenuItem extends Component {
    render() {
        //id="menu" for main div
        return (
            <div className="menu-item"> 
                <img src={this.props.image} alt={this.props.name}/>
                <div className='menu-description'>
                    <div className='menu-item-name'>{this.props.name}</div>
                    <div><strong>Price: </strong>{this.props.price}</div>
                    <div>{this.props.description}</div>
                </div>
            </div>
        )
    }
}

export default MenuItem