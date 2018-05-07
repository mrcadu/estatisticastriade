import React, { Component } from 'react';
import { GraficoEquilibrio } from './components/GraficoEquilibrio';
import './App.css';

class App extends Component {
    render() {
        let labelsEquilibrio = ['importante','circunstancial','urgente' ];
        return (
            <GraficoEquilibrio labels = {labelsEquilibrio} name = 'Equilíbrio' />
        );
    }
}

export default App;
