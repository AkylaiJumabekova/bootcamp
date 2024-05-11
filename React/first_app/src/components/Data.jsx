import React from "react";

const Data = ({arr, getInfo}) => {
    // console.log(props);
    let obj = {
        name: 'Kate',
        age: '30',
        work: 'Nurce'
    };

    getInfo(obj);

    return (
        <ul>
            {arr.map(item => {
                return <li>{item}</li>
            })}
        </ul>
    )
};

export default Data;