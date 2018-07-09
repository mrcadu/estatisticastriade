import React from 'react'
import Grafico from "../../components/grafico";


export default class GraficoTriadeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emocional:0,
            espiritual:0,
            mental:0,
            fisico:0
        }
    }
    componentDidMount(){
        this.getEmocional();
        this.getEspiritual();
        this.getMental();
        this.getFisico();
    }

    getEmocional = _ => {
        fetch("http://localhost:4000/emocional")
            .then(response => response.json())
            .then(response => this.setState({emocional:response.data.emocional}))
    };
    getEspiritual = _ => {
        fetch("http://localhost:4000/espiritual")
            .then(response => response.json())
            .then(response => this.setState({espiritual:response.data.espiritual}))
    };
    getMental = _ => {
        fetch("http://localhost:4000/mental")
            .then(response => response.json())
            .then(response => this.setState({mental:response.data.mental}))
    };
    getFisico = _ => {
        fetch("http://localhost:4000/fisico")
            .then(response => response.json())
            .then(response => this.setState({fisico:response.data.fisico}))
    };
    render(){
        return <Grafico labels = {["Emocional","Espiritual","Mental","Fisico"]}
                        name = {"Equilíbrio"}
                        description = {"Gráfico de Equilíbrio"}
                        data = {[this.state.emocional,this.state.espiritual,this.state.mental,this.state.fisico]} />
    }
}
