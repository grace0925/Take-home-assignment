import React from 'react';
import {Container, Button} from 'react-bootstrap';
import axios from 'axios';
import '../Css/task1.css'

class Task2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temp: 0,
            feelsLike: 0,
            main: '',
            humidity: 0,
            received: false
        }

        this.retrieveData = this.retrieveData.bind(this);
    }

    async retrieveData(){
        try{
            let url = "http://api.openweathermap.org/data/2.5/weather?q=Kitchener&units=metric&appid=afcec505a9534fb58ea1fce54b9367e0";
            const resp = await axios.get(url);
            this.setState({
                received: true,
                temp: resp.data.main.temp,
                feelsLike: resp.data.main.feels_like,
                main: resp.data.weather[0].main,
                humidity: resp.data.main.humidity
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Container>
                <div id='task2-header'>
                    <h4>OpenWeatherMap API</h4>
                    <p>Get the current temperature in Kitchener, Ontario by making a GET call to the openWeatherMap API.
                        <br/> Click the button below to retrieve weather information!
                    </p>
                </div>
                {this.state.received ? 
                <div className='text-align-left mt-2'>
                    <hr/>
                    <h4>Current weather in Kitchener, Ontario: </h4>
                    <p><b>Overall:</b> {this.state.main}</p>
                    <p><b>Temperature:</b> {this.state.temp} degree celsius</p>
                    <p><b>Feels Like:</b> {this.state.feelsLike} degree celsius</p>
                    <p><b>Humidity:</b> {this.state.humidity}</p>
                </div>
                : 
                <Button className='pink-btn' variant='danger' size='sm' onClick={this.retrieveData}>Tell me about the weather in Kitchener!</Button>
                }
            </Container>
        )
    }
}

export default Task2;