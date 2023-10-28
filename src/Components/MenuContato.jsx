/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';

import { motion } from 'framer-motion';

const contatoOptions = [
  {
    title: 'WhatsApp',
    description: 'Contate-me (85)99430-8471',
    icon: <FaWhatsapp size={40} />,
    link: 'https://api.whatsapp.com/send?phone=5585994308471',
  },
  {
    title: 'Email',
    description: 'sidneymota.sss@gmail.com',
    icon: <AiOutlineMail size={40} />,
    link: 'mailto:sidneymota.sss@gmail.com',
  },
  
  {
    title: 'LinkedIn',
    description: 'Conecte-se comigo no LinkedIn.',
    icon: <FaLinkedin size={40} />,
    link: 'https://www.linkedin.com/in/sidneysm',
  },
  {
    title: 'GitHub',
    description: 'Confira e me siga no GitHub.',
    icon: <FaGithub size={40} />,
    link: 'https://github.com/SidneySM1/',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const options = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
};

const MenuContato = () => {
  return (
    <div>
      <h1 style={{ marginTop: '15px', color: 'white', textAlign: 'center' }}>Contato</h1>
    <motion.div
      className="contato-container"
      variants={container}
      {...options}
      css={css`
        display: grid;
        grid-template-columns: 2fr 1fr; /* Define o grid com 2 colunas para contato-options e 1 coluna para contato-newsletter */
        grid-template-rows: auto; /* Altura automática */
        grid-template-areas: 'contato-options contato-newsletter';
        margin: 30px 0;
        justify-content: center;

        @media (max-width: 768px) {
          grid-template-columns: 1fr; /* Uma coluna em dispositivos móveis */
          grid-template-areas:
            'contato-options'
            'contato-newsletter';
        }
      `}
    >
      <div
      
        className="contato-options"
        
        css={css`
          grid-area: contato-options;
          display: grid;
          grid-template-columns: 1fr 1fr; /* Exibe as opções de contato em duas colunas em telas maiores */
          gap: 20px;
          margin-top: 20px;
          cursor: 'pointer';

          @media (max-width: 768px) {
            grid-template-columns: 1fr ; /* Exibe as opções de contato em uma coluna centralizada em telas menores */
            margin-left: 20px;
            margin-right: 20px;
          }
        `}
      >
        
        {contatoOptions.map((option, index) => (
          <motion.div
          
            key={index}
            className="contato-option"
            onClick={option.onClick}
            whileHover={{ scale: 1.05, }}
            transition={{ duration: 0.2 }}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              background-color: #fff;
              border: 1px solid #ccc;
              border-radius: 10px;
              padding: 20px;
              width: 100%;
              justify-content: center;
              
              @media (max-width: 768px) {
                max-widht: 50%;
              }
            `}
          >
            {option.icon}
            
            <h2>{option.title}</h2>
            <p>{option.description}</p>
            <a
              className="contato-link"
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {option.title}
            </a>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="contato-newsletter"
        css={css`
          grid-area: contato-newsletter;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 20px;
        `}
      >
        <h2 style={{ color: 'white', textAlign: 'center' }}>Newsletter</h2>
        <p style={{ color: 'white', marginBottom: '10px' }}>Receba minha apresentação formal e assine minha newsletter por email </p>
        <form
          css={css`
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          `}
        >
          <input
            type="email"
            placeholder="Seu endereço de e-mail"
            css={css`
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
            `}
          />
          <input
            type="name"
            placeholder="Seu nome"
            css={css`
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
            `}
          />
          <input
            type="tel"
            placeholder="(XX)00000-0000"
            css={css`
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
            `}
          />
          <button
            type="submit"
            css={css`
              padding: 10px;
              background-color: #0077b5;
              color: #fff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s;
            `}
          >
            Inscrever-se
          </button>
        </form>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default MenuContato;