/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setTudo, setSobre, setProjetos, setContato }) => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Buttons"
      css={css`
        display: flex;

        button {
          margin: 0 2rem;
          border: none;
          padding: 10px;
          cursor: pointer;
          transition: 0.3s linear;
          outline: none;

          ${mq[2]} {
            margin: 0 1rem;
          }
          ${mq[0]} {
            margin: 0;
            margin-top: 2rem;
          }

          &::after {
            content: "";
            display: block;
            height: 2px;
            width: 0;
            background: #24242a;
            transition: width 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;
          }

          span {
            padding: 0 5px;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1rem;
            margin: auto;
            ${mq[2]} {
              padding: 0;
            }
            ${mq[0]} {
              font-size: 0.9rem;
            }
          }
        }
      `}
    >
      <button
        onClick={() => {
          setTudo(true);
          setSobre(false);
          setProjetos(false);
          setContato(false);
        }}
      >
        <span>Tudo</span>
      </button>

      <button
        onClick={() => {
          setSobre(true);
          setTudo(false);
          setProjetos(false);
          setContato(false);
        }}
      >
        <span>Habilidades</span>
      </button>

      <button
        onClick={() => {
          setProjetos(true);
          setTudo(false);
          setSobre(false);
          setContato(false);
        }}
      >
        <span>Projetos</span>
      </button>


      <button
        onClick={() => {
          setContato(true);
          setTudo(false);
          setSobre(false);
          setProjetos(false);
        }}
      >
        <span>Contato</span>
      </button>
    </div>
  );
};

export default Buttons;
