import React from 'react';
import Styled from 'styled-components';
import Proptypes from 'prop-types'
import Comentario from './components/Comentario/index'
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import './App.css'

const ContainerPrincipal = Styled.div`
background-color:#ffe2b3;
min-height: 100vh;
`

const Container = Styled.div`	
	display: block;
	width: 400px;
    height:520px;
    background-color: #fff;
    -webkit-box-shadow: 6px 6px 10px #999; 
	-moz-box-shadow: 6px 6px 10px #999;
     box-shadow: 6px 6px 10px #999;
	display: grid;
	grid-template:92vh 8vh/ 600px;
	justify-content:center;
	align-items: center;	
	text-align:center;
	margin:auto;
	margin-top: 0.5px;
	padding: 0;
	box-sizing:border-box;
	overflow-x: scroll;
	scroll-behavior: smooth;

::-webkit-scrollbar {
	 width: 6px;
	 height:6px;
}


::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
	border-radius: 10px;
	background-color: #f29600
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
`;

const InfoUsuario = Styled.div`
	width:400px;
	height: 50px;
	position:fixed;
	background-color:#ff7700;
	display:flex;
	
`

const NomeUsuario = Styled.h2`
	margin-left:5px;
`

const InfoAvatar = Styled.div`
	margin-left: 10px;
	display:flex;
	justify-content:center;
	align-items:center;
`

const InfoConfig = Styled.div`
	display:flex;
	align-items:center;
	margin-left: 180px;
	justify-content: space-between;
	
`

const ListaComentarios = Styled.div`
	grid-row:1/2;
	grid-column:1/2;
	display:flex;
	margin-left:100px;
	margin-bottom:40px;
	flex-direction:column;
	justify-content:flex-end;
	padding:15px;
	min-height:100%;
	align-items:flex-start;
`;

const Formulario = Styled.div`
	background-color: #fff;
    -webkit-box-shadow: 6px 6px 10px #999; 
	-moz-box-shadow: 6px 6px 10px #999;
     box-shadow: 6px 6px 10px #999;
	grid-row:2/3;
	grid-column:1/2;
	display:grid;
	align-items:center;
	margin:auto;
	margin-top:-50px;
	grid-template:5vh/105px 175px 100px;
	position:fixed;
	top: 572px;
	background-color:white;
	padding:10px;
`;

const InputNome = Styled.input`
	padding:5px 10px;
	border-radius:5px;
	border:none;
	margin:10px;
	margin-bottom:0;
	background-color:#ffc059;
	::-webkit-input-placeholder {
		  color: black;
		  font-weight: bold;
	}
`;

const BotaoEnviar = Styled.button`
	border:none;
	margin:10px;
	margin-left:50px;
	margin-bottom:0;
	background-color:#fff;
	cursor:pointer;
`;

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inputUsuario : "",
			inputMensagem: "",
			arrListaMensagem:[],
			
		}  
		
	}

	/* funções */
	controleUsuario = e => {
		this.setState({
		  inputUsuario: e.target.value
		});
	  };

	controleMensagem = e => {
	this.setState({
		inputMensagem: e.target.value
	});
	};

	adicionarMensagem = () =>{
		const novaMensagem = {nomeUsuario: this.state.inputUsuario, mensagem: this.state.inputMensagem};
		const arrListaMensagemCopy = [...this.state.arrListaMensagem, novaMensagem];
		this.setState({
			arrListaMensagem: arrListaMensagemCopy, // 
			inputMensagem:"",
		});
	}

	pressionarEnterEnviaMessagem = e =>{
		if (e.keyCode === 13){
			this.adicionarMensagem()
		}
	}

	apagarMensagem = argument =>{
		if (window.confirm('Tem certeza que deseja deletar essa mensagem?')){
			for (const msg of this.state.arrListaMensagem){
				if (this.state.arrListaMensagem.indexOf(msg)=== argument){	
					const arrListaMensagemCopy = [...this.state.arrListaMensagem]
					const index = this.state.arrListaMensagem.indexOf(msg)

					arrListaMensagemCopy.splice(index,1)
					
					this.setState({
						arrListaMensagem:arrListaMensagemCopy
					})
					

				}
			}	
		
		}
	}
	render(){
		return (
			<ContainerPrincipal>
			<Container>
				<InfoUsuario>
					<InfoAvatar>
						<Avatar alt="Lucas" src="https://static.tvtropes.org/pmwiki/pub/images/anakin_skywalker_rots_6.png" />
						<NomeUsuario>Anakin </NomeUsuario>
					</InfoAvatar>
					<InfoConfig>
						<VideocamIcon />
						<CallIcon />
						<MoreVertIcon />
					</InfoConfig>

					
				</InfoUsuario>
				<ListaComentarios>
					{this.state.arrListaMensagem.map(element =>{
						return (
							<Comentario aoClicarDuasVezes={this.apagarMensagem} kay={this.state.arrListaMensagem.indexOf(element)} name={element.nomeUsuario} msg={element.mensagem}/>
						)
					})
					}

					
				</ListaComentarios>
				<Formulario>
					<InputNome value={this.state.inputUsuario} onChange={this.controleUsuario} placeholder="Usuário"></InputNome>
					<InputNome onKeyDown={this.pressionarEnterEnviaMessagem} value={this.state.inputMensagem} onChange={this.controleMensagem} placeholder="Digite sua mensagem"></InputNome>
					
					<BotaoEnviar  onClick={this.adicionarMensagem} ><SendIcon fontSize="small"/></BotaoEnviar>
				</Formulario>
			</Container>
			</ContainerPrincipal>
		);
	}
}

InputNome.propTypes = {
	value: Proptypes.string.isRequired
}




export default App;
