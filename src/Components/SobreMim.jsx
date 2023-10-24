import React, { useEffect, useState } from 'react';

const SobreMim = () => {
  const handleDownloadCurriculo = () => {
    // Substitua o URL com o link do seu currículo em PDF
    const curriculoURL = 'https://drive.google.com/file/d/13BiqD0EJXJYCbFfRphz6zQDyvW94IoaA/view?usp=sharing';
    window.open(curriculoURL, '_blank');
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Verificar a largura da tela e definir a variável de estado isSmallScreen
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Adicionar um ouvinte de redimensionamento para atualizar isSmallScreen
    window.addEventListener('resize', checkScreenSize);

    // Chamar checkScreenSize no carregamento inicial
    checkScreenSize();

    // Remover o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const sectionStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    marginLeft: '20px',
    marginTop: '20px'
  };

  const contentStyle = {
    flex: 1,
    textAlign: 'justify', // Alinhamento justificado ao conteúdo
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '200px',
    borderRadius: '50%',
    marginBottom: '20px',
    float: 'right',
    marginLeft: '15px',
  };

  const titleStyle = {
    textAlign: "left"
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
      <h2 style={titleStyle}>Um pouco sobre...</h2>
        

        <p>
        Olá! Me chamo Sidney, e sou um desenvolvedor back-end!<br></br>
          Apesar de conhecer bem o front, minha paixão por de fato, criar soluções tecnicas que ajudem outros dev's,
          e minha base de estudos, me voltou para a area do back-end. Gosto de tocar guitarra nas horas vagas(??). :)
        </p>

        <button style={buttonStyle} className="buttonD" onClick={handleDownloadCurriculo}>Baixar Currículo</button>
      </div>
      <img
        src="https://raw.githubusercontent.com/SidneySM1/sidney/main/src/assets/sidney.jpg" // Substitua com o URL da sua imagem
        alt="Sidney"
        className={isSmallScreen ? 'hideOnSmallScreen' : 'showOnLargeScreen'}
        style={imageStyle} // Estilo da imagem
      />
    </section>
  );
};

export default SobreMim;
