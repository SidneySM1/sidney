/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./Components/Navbar"; // Importando o novo Navbar
import MenuTudo from "./Components/MenuTudo"; // Importando o novo MenuTudo
import MenuSobre from "./Components/MenuSobre"; // Importando o novo MenuSobre
import MenuProjetos from "./Components/MenuProjetos"; // Importando o novo MenuProjetos
import MenuContato from "./Components/MenuContato"; // Importando o novo MenuContato
import Footer from "./Components/Footer"; // Importando o novo MenuContato




function App() {
  const [tudo, setTudo] = useState(true);
  const [sobre, setSobre] = useState(false);
  const [projetos, setProjetos] = useState(false);
  const [contato, setContato] = useState(false);

  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  
    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
      }};
  return (
    <div
      className="App"
      css={css`
        background: #f0eff1;
        height: 100%;
        padding: 70px 0;
      `}
    >
      <Navbar
        setTudo={setTudo}
        setSobre={setSobre}
        setProjetos={setProjetos}
        setContato={setContato}
      />
      

      <motion.div
      className="MenuItems container"
      variants={container}
      initial="hidden"
      animate="visible"
      css={css`
        
        margin-top: 15px;
        
        background: #2F2F2F;
        border-radius: 20px;
        min-height: 80vh;
        
        
      `}
    >
      {tudo && <MenuTudo />} {/* Renderiza o MenuTudo se 'tudo' for verdadeiro */}
      {sobre && <MenuSobre />} {/* Renderiza o MenuSobre se 'sobre' for verdadeiro */}
      {projetos && <MenuProjetos />} {/* Renderiza o MenuProjetos se 'projetos' for verdadeiro */}
      {contato && <MenuContato />} {/* Renderiza o MenuContato se 'contato' for verdadeiro */}
    </motion.div>
    <Footer />

      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

          ::selection {
            background: #000;
            color: #f0eff1;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            --webkit-tap-highlight-color: transparent;
          }

          body::-webkit-scrollbar {
            width: 12px; /* width of the entire scrollbar */
          }

          body::-webkit-scrollbar-track {
            background: #f0eff1; /* color of the tracking area */
          }

          body::-webkit-scrollbar-thumb {
            background-color: #444444; /* color of the scroll thumb */
            border-radius: 20px; /* roundness of the scroll thumb */
            border: 3px solid #f0eff1; /* creates padding around scroll thumb */
          }

          body {
            background: #f0eff1;
          }

          .container {
            width: 80%;
            margin: auto;
            display: flex;
            justify-content: center;
            overflow: auto;
            padding: 40px;
          }
          @media (max-width: 768px) {
            .container {
              padding: 0;
            }
          }
        `}
      />
    </div>
  );
}

export default App;
