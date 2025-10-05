import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-15px); }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(160deg, #0d0d0d, #1a1a2e);
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const TerminalBox = styled.div`
  background: rgba(20, 20, 30, 0.85);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  padding: 2rem 3rem;
  max-width: 700px;
  box-shadow: 0 0 20px rgba(255, 0, 204, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const Slogan = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  display: inline-block;

  &:after {
    content: '|';
    margin-left: 5px;
    animation: ${blink} 1s infinite;
  }
`;

export const FloatingPixel = styled.div<{ size: number; top: string; left: string; color: string }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ color }) => color};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  animation: ${float} 4s ease-in-out infinite alternate;
`;
