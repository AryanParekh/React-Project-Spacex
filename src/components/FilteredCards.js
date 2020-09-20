import React from 'react';
import CardLayout from './CardLayout';

export default class FilteredCards extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.spacexdata.com/v3/launches?limit=15&start=${this.props.start}&end=${this.props.end}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            this.setState({data:data})
        })
    }
    render(){
        return (
            <div className='row px-3'>
                {this.state.data.map((flight_data) => <CardLayout key={flight_data.flight_number} flight_data={flight_data} />)}
            </div>
        )
    }
}
