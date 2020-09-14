import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {MdCheck, MdWarning, MdErrorOutline} from 'react-icons/md'
import { NotifiactionProps } from './types';

const Base = styled(motion.div)`
  display: flex;
  color: white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  width: 350px;
  margin-bottom: 24px;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
` as any;

const Main = styled.div`
  padding: 20px 28px 24px 20px;
  display: flex;
  flex: 1;

  & > div:first-child {
    margin-right: 20px;
  }
`;

const Description = styled.div`
  line-height: 1.3;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
`;

const Title = styled.div`
  line-height: 1.3;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Buttons = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;

  & > button:not(:first-child) {
    border-top: 1px solid #404040;
  }
`;

const Button = styled.button`
  pointer-events: all;
  transition: background-color 0.15s ease-in-out;
  flex: 1;
  padding: 8px;
  background-color: rgb(255, 255, 255, 0.05);
  outline: 0;
  border: 0;
  color: white;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }
`;

function getIcon(notificationType) {
  if (notificationType === "error") {
    return {
      Icon: MdErrorOutline,
      iconColor: "hsl(360,64%,55%)"
    };
  }

  if (notificationType === "warning") {
    return {
      Icon: MdWarning,
      iconColor: "hsl(44,92%,63%)"
    };
  }

  return {
    Icon: MdCheck,
    iconColor: "hsl(122, 40%, 52%)"
  };
}

const Notification: React.FC<NotifiactionProps> = ({ title, description, type, onClose, onMore }) => {
  const { Icon, iconColor } = getIcon(type);

  return (
    <Base
      initial={{ opacity: 0, scale: 0.8, x: 300 }} // animate from
      animate={{ opacity: 1, scale: 1, x: 0 }} // animate to
      exit={{ opacity: 0, scale: 0.8, x: 300 }} // animate exit
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40
      }}
      positionTransition// auto animates the element when it's position changes
    >
      <Main>
        <div>
          <Icon size={32} style={{ color: iconColor }} />
        </div>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </Main>
      <Buttons>
        <Button onClick={onClose}>Close</Button>
        {onMore && <Button onClick={onMore}>More...</Button>}
      </Buttons>
    </Base>
  );
}

export default Notification;
