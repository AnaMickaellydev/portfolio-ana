import styled from "styled-components";

const prefersReduce = "@media (prefers-reduced-motion: reduce)";

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  background: rgba(18, 18, 28, 0.7);
  backdrop-filter: blur(6px);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  ${prefersReduce} {
    backdrop-filter: none;
  }
`;

export const WindowControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const dotCSS = (c: string) => `
  width: 12px; height: 12px; border-radius: 50%;
  background: ${c}; box-shadow: 0 0 6px ${c}55 inset;
`;

export const DotRed = styled.span`${dotCSS("#ff5f56")}`;
export const DotYellow = styled.span`${dotCSS("#ffbd2e")}`;
export const DotGreen = styled.span`${dotCSS("#27c93f")}`;

export const Title = styled.div`
  margin-left: 6px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const Tabs = styled.nav.attrs({ role: "tablist" })`
  margin-left: auto;
  display: flex;
  gap: 6px;
`;

export const Tab = styled.button.attrs<{ active?: boolean }>(p => ({
  role: "tab",
  "aria-selected": p.active ?? false,
}))<{ active?: boolean }>`
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.06);
  background: ${({ active }) => (active ? "rgba(255,255,255,0.08)" : "transparent")};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.85rem;
  cursor: pointer;
  transition: transform .12s ease;

  &:hover { transform: translateY(-1px); }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const TerminalBody = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary}55;
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 22px;
  background:
    radial-gradient(1200px 600px at 60% 20%, rgba(255,0,204,0.05), transparent),
    radial-gradient(900px 600px at 20% 80%, rgba(0,255,234,0.05), transparent),
    #12121c;
  box-shadow: 0 0 24px ${({ theme }) => theme.colors.primary}22;
  min-width: min(92vw, 900px);

  @media (max-width: 600px) { padding: 16px; }
`;
