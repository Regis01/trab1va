import React from 'react'

class PlayerDetail extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.VetorPlayer.nome}</h1>
                <h2>{this.props.VetorPlayer.pais}</h2>
                <h3>{this.props.VetorPlayer.time}</h3>
            </div>
        )
    }
}

export default PlayerDetail