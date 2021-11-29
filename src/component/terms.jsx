import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

let numbers = [];

 for (let j=0; j < 4; j++) {
    let n = Math.floor(Math.random() * 40);
    numbers.push(n)}


function Terms() {

    return(
        <div>

        <ul className='list-group'>{numbers.map(n => <li key={numbers.indexOf(n)+1} className='list-group-item'>Term{numbers.indexOf(n)+1}:{n}</li>)}</ul>
        </div>
    )
}

export default Terms;