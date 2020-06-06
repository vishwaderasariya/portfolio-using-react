import React, { Component } from 'react';
import './css/Home.css';
import Hero from '../Components/Home/Hero'
import Feature from '../Components/Home/Feature';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Feature />
            </div>
        )
    }
}

export default Home
