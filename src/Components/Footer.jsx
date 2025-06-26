/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Footer = () => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Footer"
      css={css`
        color: black;
        padding: 20px 0;
        text-align: center;

        .logo {
          font-size: 1.8rem;
        }

        ${mq[2]} {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          place-items: center;

          .FooterButtons {
            grid-row: 2;
            grid-column: 1/4;
          }

          .logo {
            grid-row: 1;
            grid-column: 1/4;
            font-size: 1.3rem;
          }

          .dwu {
            margin-top:50px;
            color: black;
            grid-row: 1;
            grid-column: 1/4;
            font-weight: 400;
            font-size: 1.3rem;
          }
        }
      `}
    >
      <h3 className="logo">&copy; 2025 Sidney Mota.</h3>
      <div className="FooterButtons">
        www.sidneymota.dev
      </div>
      <h3 className="dwu">Back-end dev.</h3>
    </div>
  );
};

export default Footer;
