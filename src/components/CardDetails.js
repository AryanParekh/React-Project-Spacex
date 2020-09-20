import React from 'react';

export default class CardDetails extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.spacexdata.com/v3/launches/${this.props.match.params.id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            this.setState({
                data:{
                    mission_name:data.mission_name,
                    launch_year:data.launch_year,
                    image:data.links.mission_patch,
                    launch_date:data.launch_date_utc,
                    details:data.details,
                    wiki:data.links.wikipedia,
                    video:data.links.video_link
                }
            })
        })
        console.log(this.state.data)
    }
    render(){
        const flight=this.state.data;
        return (
            <div className='container' style={layout}>
            <br/>
              <h1>All About <span style={imp}>{flight.mission_name}</span></h1>
              <center>
              <table style={table}>
                <tr>
                  <th style={th}>Launch Year</th>
                  <td style={td}>{flight.launch_year}</td>
                </tr>
                <tr>
                  <th style={th}>Image</th>
                  <td style={td}><img src={flight.image} alt="" width="200" height="200"/></td>
                </tr>
                <tr>
                  <th style={th}>Launch Date</th>
                  <td style={td}>{flight.launch_date}</td>
                </tr>
                <tr>
                  <th style={th}>Details</th>
                  <td style={td}>{flight.details}</td>
                </tr>
                <tr>
                  <th style={th}>Wikipedia</th>
                  <td style={td}><a href={flight.wiki}>Click Here</a></td>
                </tr>
                <tr>
                  <th style={th}>Video</th>
                  <td style={td}><a href={flight.video}>Click Here to watch</a></td>
                </tr>
              </table>
              </center>
              <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

let table ={
    height:'100px',
    width:'140px',
    color:'black',
    fontFamily: 'arial, sans-serif',
    borderCollapse: 'collapse',
}
  
let th= {
    color:'white',
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
}
  
let td= {
    backgroundColor:'#dddddd',
    border: '1px solid #fff',
    textAlign: 'left',
    padding: '8px',
}
  
const layout={
    textAlign:'center',
    border:'2px solid black',
  
}
const imp={
    color:'#004774'
}
