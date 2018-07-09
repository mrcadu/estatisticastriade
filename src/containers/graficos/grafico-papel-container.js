import {Component} from "react";
import React from "react";
import Grafico from "../../components/grafico";

export default class GraficoPapelContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            musico:0,
            siga:0,
            festeiro:0,
            familiar:0,
            esportista:0,
            escritor:0,
            amigo:0,
            estudante:0
        }
    }
    componentDidMount(){
        this.getAmigo();
        this.getEscritor();
        this.getEsportistas();
        this.getEstudante();
        this.getFamiliar();
        this.getFesteiros();
        this.getMusicos();
        this.getSigas();
    }
    getMusicos(){
        fetch("http://localhost:4000/musico")
            .then(response => response.json())
            .then(response => this.setState({musico:response.data.musico}))
            .catch(err => console.log(err))
    }
    getSigas(){
        fetch("http://localhost:4000/siga")
            .then(response => response.json())
            .then(response => this.setState({siga:response.data.siga}))
            .catch(err => console.log(err))
    }
    getFesteiros(){
        fetch("http://localhost:4000/festeiro")
            .then(response => response.json())
            .then(response => this.setState({siga:response.data.festeiro}))
            .catch(err => console.log(err))
    }
    getFamiliar(){
        fetch("http://localhost:4000/familiar")
            .then(response => response.json())
            .then(response => this.setState({siga:response.data.familiar}))
            .catch(err => console.log(err))
    }
    getEsportistas(){
        fetch("http://localhost:4000/esportistas")
            .then(response => response.json())
            .then(response => this.setState({siga:response.data.esportista}))
            .catch(err => console.log(err))
    }
    getEscritor(){
        fetch("http://localhost:4000/escritor")
            .then(response => response.json())
            .then(response => this.setState({siga:response.data.escritor}))
            .catch(err => console.log(err))
    }
    getAmigo(){
        fetch("http://localhost:4000/amigo")
            .then(response => response.json())
            .then(response => this.setState({siga:response.data.amigo}))
            .catch(err => console.log(err))
    }
    getEstudante(){
        fetch("http://localhost:4000/estudante")
            .then(response => response.json())
            .then(response => this.setState({siga:response.data.estudante}))
            .catch(err => console.log(err))
    }
    render(){
        return <Grafico labels = {["Músico","Siga","Festeiro","Familiar","Esportista","Escritor","Amigo","Estudante"]}
                        name = {"Papéis"}
                        description = {"Gráfico de Papéis"}
                        data = {[this.state.musico,this.state.siga,this.state.festeiro,this.state.familiar,this.state.esportista,this.state.escritor,this.state.amigo,this.state.estudante]} />
    }
}