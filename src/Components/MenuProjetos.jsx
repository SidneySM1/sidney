/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";


import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhp,
	faNode,
	faJs,
	faReact,
	faGithub,
	faPython,
	faGitlab
} from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'; // Importe o ícone do Bootstrap
import { faCode, faCube, faDatabase, faLink, faPuzzlePiece, faPlay } from "@fortawesome/free-solid-svg-icons";

import "./Projetos.css";


const MenuProjetos = () => {



	function LinguagemBox({ linguagem, cor }) {
		const estilo = {
			className: 'lBox',
			backgroundColor: cor,
			padding: '10px',
			borderRadius: '5px',
			display: 'inline-block',
			transition: 'transform 0.3s',
			cursor: 'pointer',
			position: 'relative',
			width: '45px',
			height: '45px',
			marginRight: '10px',
			marginBottom: '10px',
		};

		const hoverEstilo = {
			transform: 'scale(1.1)', // Aumenta o tamanho em 10% no hover
		};

		const tituloEstilo = {
			position: 'absolute',
			top: '100%',
			left: '50%',
			transform: 'translateX(-50%)',
			display: 'none',
			padding: '5px',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			color: 'white',
			borderRadius: '5px',
		};

		const spanEstilo = {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100%', // Garante que o span tenha altura completa
			textAlign: 'center', // Centraliza horizontalmente
		};

		return (
			<div
				style={{ ...estilo, ...hoverEstilo }}
				onMouseEnter={() => (tituloEstilo.display = 'block')}
				onMouseLeave={() => (tituloEstilo.display = 'none')}
			>
				<span style={spanEstilo}>
					<FontAwesomeIcon icon={linguagem} color="white" size="2x" />
				</span>
			</div>
		);
	}

	return (
		<div className="projetos">

			<h1 style={{ marginTop: '15px' }}><FontAwesomeIcon icon={faPuzzlePiece} color="white" /> Portfólio</h1>

			<div className='projeto-container' style={{ marginTop: '50px', marginBottom: '100px' }}>
				<div className="projeto-images imgWrapper">
					<img src="https://raw.githubusercontent.com/SidneySM1/sidney/refs/heads/main/src/assets/projeto4.png" className="imgPC" alt="Visualização PC" />
					<img src="https://raw.githubusercontent.com/SidneySM1/sidney/refs/heads/main/src/assets/projeto4mobile.png" className="imgMobile" alt="Visualização Mobile" />
				</div>
				<div className="projeto-details">
					<div className="projeto-info">
						<h3>CSH Chauffeur & Premium Taxi Services</h3>
						<p style={{ textAlign: "left", marginLeft: "15px", marginRight: "10px" }}>
							Sistema Web, PWA e APP para serviço de taxi internacional, desenvolvido em Adianti Framework com diversas integrações e incluindo sua propria biblioteca de componentes.
							<br></br>Possuindo integrações com o Google Maps, Places, Geolocation e Geocoding, além de um sistema de zonas unico, que permite a criação de zonas de atendimento, restrições e descontos.
							<br></br>O sistema é capaz de calcular o valor da corrida, gerar rota, gerar faturas, serviço completo de e-mail e templates personalizados pelo usuario, além de envios agendados.
						</p>
						<LinguagemBox linguagem={faCube} cor="#58CC4D" /><LinguagemBox linguagem={faPhp} cor="#8892BF" /><LinguagemBox linguagem={faJs} cor="#F0DB4F" /><LinguagemBox linguagem={faGitlab} cor="#FCA121" />

					</div>
				</div>
			</div>

			<div className='projeto-container' style={{ marginTop: '50px', marginBottom: '100px' }}>
				<div className="projeto-images imgWrapper">
					<img src="https://raw.githubusercontent.com/SidneySM1/sidney/refs/heads/main/src/assets/projeto3.png" className="imgPC" alt="Visualização PC" />
					{/* <img src="https://raw.githubusercontent.com/SidneySM1/sidney/main/src/assets/Projeto1mobile2.png" className="imgMobile" alt="Visualização Mobile" /> */}
				</div>
				<div className="projeto-details">
					<div className="projeto-info">
						<h3>Canal Dark com IA generativa</h3>
						<p style={{ textAlign: "left", marginLeft: "15px", marginRight: "10px" }}>
							Automação construida com Python (google-genai) para gerar a imagem, video, dublagem e até legendas utilizando IA (Gemini).
							<br></br>Sendo possivel agentar, definir tags e temas, além de publicar diretamente no YouTube, gerando videos a partir de um unico prompt.
							<br></br>Integrações: <strong>gemini-2.5-flash-preview-tts, gemini imagen-3.0-generate-002, veo3, google-genai, google-tts</strong>.
						</p>
						<LinguagemBox linguagem={faPython} cor="#8892BF" /> <LinguagemBox linguagem={faGithub} cor="#525252" />

					</div>
				</div>
			</div>

			<div className='projeto-container' style={{ marginTop: '50px', marginBottom: '100px' }}>
				<div className="projeto-images imgWrapper">
					<img src="https://raw.githubusercontent.com/SidneySM1/sidney/main/src/assets/projeto1.png" className="imgPC" alt="Visualização PC" />
					<img src="https://raw.githubusercontent.com/SidneySM1/sidney/main/src/assets/Projeto1mobile2.png" className="imgMobile" alt="Visualização Mobile" />
				</div>
				<div className="projeto-details">
					<div className="projeto-info">
						<h3>IDESQ+</h3>
						<p style={{ textAlign: "left", marginLeft: "15px", marginRight: "10px" }}>Sistema web desenvolvido com framework PHP proprio baseado em MVC, Bootstrap 4 em todo front-end.
							Capacidade de prover video aulas, materiais, atividades e testes.<br></br> Video aulas por upload ou index
							de link do youtube, sistema de login e autenticação com google auth, logs e logout por inatividade.</p>
						<LinguagemBox linguagem={faPhp} cor="#8892BF" /><LinguagemBox linguagem={faBootstrap} cor="#8100CF" /><LinguagemBox linguagem={faDatabase} cor="#00758F" />
					</div>
					<p>
						<a href="http://idesqplus.com/" target="_blank" rel="noopener noreferrer">
							<button className="buttonD"><FontAwesomeIcon icon={faPlay} /> Ver Deploy</button>
						</a>
						{/* <small className="buttonD">login: admin, senha 123.</small> */}
					</p>
				</div>
			</div>



			<div className="projeto-container">
				<div className="projeto-images imgWrapper">
					<img src="https://raw.githubusercontent.com/SidneySM1/sidney/main/src/assets/projeto2.png" className="imgPC" alt="Visualização PC" />
					<img src="https://raw.githubusercontent.com/SidneySM1/sidney/main/src/assets/projeto2mobile.png" className="imgMobile" alt="Visualização Mobile" />
				</div>
				<div className="projeto-details">
					<div className="projeto-info">
						<h3>The Movie Now</h3>
						<p style={{ textAlign: "left", marginLeft: "15px", marginRight: "10px" }}>Site com intuito de interagir a API TMDB, principalmente com React.
							interação com a API TMDB, convertendo o retorno dinamico em cards pesquisáveis.
						</p>
						<LinguagemBox linguagem={faJs} cor="#F0DB4F" /><LinguagemBox linguagem={faReact} cor="#61DAFB" /><LinguagemBox linguagem={faPhp} cor="#8892BF" />

					</div>
					<p>
						<a href="http://themovienow.site/" target="_blank" rel="noopener noreferrer">
							<button className="buttonD" style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faPlay} /> Ver Deploy</button>
						</a>
					</p>
				</div>
			</div>









		</div>
	);

};

export default MenuProjetos;
