import React, { Component } from 'react';
import CardLayout from './CardLayout';

export default class AllCards extends Component{
    render(){
        return (
            <div className="row px-3">
                {this.props.data.map((flight_data) => <CardLayout key={flight_data.flight_number} flight_data={flight_data} />)}
            </div>
        )
    }
}
