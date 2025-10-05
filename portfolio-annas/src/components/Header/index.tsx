import React from "react";
import {
  HeaderContainer,
  TerminalBox,
  Name,
  Slogan,
  FloatingPixel
} from "./styles";

import TerminalFrame from "./TerminalFrame";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TerminalFrame activeTab="about.sh">\
        <TerminalBox style={{ marginBottom: 12 }}>
          <Name>Ana Mickaelly</Name>
          <Slogan>Front-End Developer</Slogan>
        </TerminalBox>

       
      </TerminalFrame>
\w
      <FloatingPixel size={12} top="10%" left="15%" color="#ff00cc" />
      <FloatingPixel size={8}  top="28%" left="72%" color="#00ffea" />
      <FloatingPixel size={10} top="62%" left="40%" color="#3333ff" />
      <FloatingPixel size={6}  top="82%" left="82%" color="#ff00cc" />
    </HeaderContainer>
  );
};

export default Header;
