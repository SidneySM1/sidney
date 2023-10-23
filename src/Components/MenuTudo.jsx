/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

import React from 'react';
import MenuSobre from './MenuSobre';
import MenuProjetos from './MenuProjetos';
import MenuContato from './MenuContato';

import SobreMim from './SobreMim';

import "./Habilidades.css";
import "./Projetos.css";

const MenuTudo = () => {
  return (
    <div>
      <SobreMim />
      <MenuSobre />
      <MenuProjetos />
      <MenuContato />
    </div>
  );
};

export default MenuTudo;

