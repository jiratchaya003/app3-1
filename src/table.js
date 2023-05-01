import React from 'react'
import Button from './func-event'

export default function Table(){
    const data=[
            ['JavaScript',100,],
            ['React',200],
            ['React-Native',150]

    ]
    const onMuseOverRow = (ev) =>{
        ev.target.parentNode.style.backgroundColor='#FF6699'
    }
    const onMuseOverOut = (ev) =>{
        ev.target.parentNode.style.backgroundColor='White'
    }

    const onClick = (ev) =>{
        let cal = ev.target.innerText
            alert(`${cal}`)
     }
    return(
        <table border="1">
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Select</th>
            </tr>
    {       
        data.map(item =>{
            return (
            <tr onMouseOver={onMuseOverRow}
            onMouseOut={onMuseOverOut}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td><button onClick={(ev) => onClick(ev)}>{item[0]}</button></td>
            </tr>
            
            )
        
})
    }
        </table>
    )
}