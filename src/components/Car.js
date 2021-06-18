import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';


const Car = (props) => {
    const id = +props.match.params.id
    let thisCar = cars.find(function (car) {
        if (car.id === id) {
            return car
        }
    })
    console.log(thisCar)
    return (

        cars.map((car) => (

            <Paper>
                <h1>{thisCar.Name}</h1>
                <Chip label={car["Miles_per_Gallon"]} />
                <Chip label={car["Cylinders"]} />
                <Chip label={car["Displacement"]} />
                <Chip label={car["Horsepower"]} />
            </Paper>

        ))

    )
}




export default Car