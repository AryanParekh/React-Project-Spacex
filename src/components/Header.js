import React from 'react';

export default function Header() {
    return (
        <div style={header}>
            <h1 style={{fontSize:'60px'}}>SPACE X</h1>
        </div>
    )
}
const header={
    textAlign:'center',
    padding:'40px 20px',
    background:'#004774',
    color:'white',
    height:'160px',
    borderTop:'6px solid black',
}
