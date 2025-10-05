import React from "react";
import {
  HeaderContainer,
  TerminalBox,
  Name,
  Slogan,
  FloatingPixel
} from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TerminalBox>
        <Name>Ana Aguiar</Name>
        <Slogan>Developer</Slogan>
      </TerminalBox>

      {/* Floating pixels */}
      <FloatingPixel size={12} top="10%" left="15%" color="#ff00cc" />
      <FloatingPixel size={8} top="30%" left="70%" color="#00ffea" />
      <FloatingPixel size={10} top="60%" left="40%" color="#3333ff" />
      <FloatingPixel size={6} top="80%" left="80%" color="#ff00cc" />
    </HeaderContainer>
  );
};

export default Header;
