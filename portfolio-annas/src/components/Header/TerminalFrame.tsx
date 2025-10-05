import React from "react";
import {
  HeaderBar, WindowControls, DotRed, DotYellow, DotGreen,
  Title, Tabs, Tab, TerminalBody
} from "./terminal.styles";

type TerminalFrameProps = {
  title?: string;
  activeTab?: string;
  tabs?: string[];
  children: React.ReactNode;
};

const TerminalFrame: React.FC<TerminalFrameProps> = ({
  title = "aninha@dev — zsh",
  activeTab = "about.sh",
  tabs = ["about.sh", "projects.sh", "contact.sh"],
  children
}) => {
  return (
    <section aria-label="Terminal window" style={{ borderRadius: 12, overflow: "hidden" }}>
      <HeaderBar>
        <WindowControls aria-label="Window controls">
          <DotRed aria-label="Close" />
          <DotYellow aria-label="Minimize" />
          <DotGreen aria-label="Zoom" />
        </WindowControls>
        <Title>{title}</Title>
        <Tabs aria-label="Terminal tabs">
          {tabs.map((t) => (
            <Tab key={t} active={t === activeTab}>{t}</Tab>
          ))}
        </Tabs>
      </HeaderBar>

      <TerminalBody>
        {children}
      </TerminalBody>
    </section>
  );
};

export default TerminalFrame;
