import {Component} from "react";
import React from "react";
import Grafico from "../../components/grafico";

export default class GraficoTriadeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            importante:1,
            urgente:1,
            circunstancial:1
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
            .then(response => this.setState({importante:response.data.getImportantes()}))
            .catch(err => console.log(err));
    };
    getUrgentes = _ =>{
        fetch("http://localhost:4000/urgentes")
            .then(response => response.json())
            .then(response => this.setState({urgente:response.data.getUrgentes()}))
            .catch(err => console.log(err));
    };
    getCircunstanciais = _ => {
        fetch("http://localhost:4000/circunstanciais")
            .then(response => response.json())
            .then(response => this.setState({circunstancial:response.data.getCircunstanciais()}))
            .catch(err => console.log(err));
    };
    render(){
        return <Grafico labels = {["importante","urgente","circunstancial"]} name = {"triade"} description = {"Gráfico da Tríade"} data = {[this.state.importante,this.state.urgente,this.state.circunstancial]} />
    }
}