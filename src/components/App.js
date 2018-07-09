import React, { Component } from 'react';
import '../App.css';
import GraficoTriade from '../containers/graficos/grafico-triade-container'
import GraficoEquilibrio from '../containers/graficos/grafico-equilibrio-container'
import GraficoPapel from '../containers/graficos/grafico-papel-container'


class App extends Component {
    render() {
        return (<div>
                    <GraficoTriade/>
                    <GraficoEquilibrio/>
                    <GraficoPapel/>
                </div>)
    }
}

export default App;
