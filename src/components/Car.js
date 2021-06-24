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
        <Container>
            <Paper>
                <h1>{thisCar.Name}</h1>
                {
                    Object.keys(thisCar).map((key,indx) => {
                        return<Chip key={indx} label={`${key}: ${thisCar[key]}`}/>
                    })
                }
                {/* <Chip label={`MPG: ${thisCar["Miles_per_Gallon"]}`}/>
                <Chip label={thisCar["Cylinders"]} />
                <Chip label={thisCar["Displacement"]} />
                <Chip label={thisCar["Horsepower"]} /> */}
            </Paper>
        </Container>

    )
}




export default Car