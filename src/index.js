// 1# IMPORTAR BIBLIOTECAS
// 2# CRIAR COMPONENTES
// 3# MOSTRAR COMPONENTES NA TELA

import React from 'react';
//interface de programação para documentos HTML e XML
import ReactDOM from 'react-dom';
//Importando arquivos de BoobDetail
import BoobDetail from './BoobDetail';
import 'bootstrap/dist/css/bootstrap.css'

//Passando de Função para class
class App extends  React.Component {  
      
      VetorPlayer = [
            {
                  nome : 'Rafael',
                  pais : 'Portugal',
                  time : 'Inter'
                  },
            {
                  nome : 'Regis',
                  pais : 'Iran',
                  time : 'Sao Paulo'
                  },
            {
                  nome : 'Carlos',
                  pais : 'Butao',
                  time : 'o melhor'
                  }
      ]


      constructor(props){
            //Busca na clase pai o props
            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.VetorPlayer.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <BoobDetail nome="Jetulio Vargas" VetorPlayer={this.VetorPlayer[this.state.indice]}>
                        </BoobDetail>
                        <br/>

                        <button type="button" className ="btn btn-primary" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-primary"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
