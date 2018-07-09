import {Component} from "react";
import React from "react";
import Grafico from "../../components/grafico";

export default class GraficoTriadeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            importantes:0,
            urgentes:0,
            circunstanciais:0
        }
    }
    componentDidMount(){
        this.getImportantes();
        this.getCircunstanciais();
        this.getUrgentes();
    }
    getImportantes = _ =>{
        fetch("http://localhost:4000/importantes")
            .then(response => response.json())
            .then(response => this.setState({ importantes: response.data.importantes}))
            .catch(err => console.log(err));
    };
    getUrgentes = _ =>{
        fetch("http://localhost:4000/urgentes")
            .then(response => response.json())
            .then(response => this.setState({urgentes:response.data.urgentes}))
            .catch(err => console.log(err));
    };
    getCircunstanciais = _ => {
        fetch("http://localhost:4000/circunstanciais")
            .then(response => response.json())
            .then(response => this.setState({circunstanciais:response.data.circunstanciais}))
            .catch(err => console.log(err));
    };
    render(){
        return <Grafico labels = {["importante","urgente","circunstancial"]}
                        name = {"triade"}
                        description = {"Gráfico da Tríade"}
                        data = {[this.state.importantes,this.state.urgentes,this.state.circunstanciais]} />
    }
}