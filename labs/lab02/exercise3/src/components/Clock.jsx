import React from 'react';
function addHours(date, numOfHours) {
    const clone = new Date(date.getTime());
    clone.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return clone;
}


export default function Clock(props) {
    const [time, setTime] = React.useState(new Date())
    const [hourDifference, setHourDifference] = React.useState(0)

    // mounted hook
    React.useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    }, []);

    React.useEffect(() => {
        // console.log("tick tock")
    }, [time])



    return (
        <>
            <p>{addHours(time, hourDifference).toLocaleString()}</p>
            <span>
                <button onClick={() => setHourDifference(hourDifference + 1)}>+</button>
                <button onClick={() => setHourDifference(hourDifference - 1)}>-</button>
            </span>
            <p>{hourDifference}-hour difference</p>
        </>
    )
}