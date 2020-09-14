import  React ,{ useEffect, createContext} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import shortId from "shortid";
import { AnimatePresence } from "framer-motion";

import  Notification  from "./notification";
import { NotifiactionProps } from './types';


const NotificationsContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  pointer-events: none;
`;

const useCreateDomElement = () => {
  const [domElement, setDomElement] = React.useState<HTMLDivElement>();

  useEffect((): any => {
    const element = document.createElement("div");
    document.body.appendChild(element);
    setDomElement(element);

    return () => document.body.removeChild(element);
  }, []);

  return domElement;
}


function useNotifications() {
  
  const [notifications, setNotifications] = React.useState<NotifiactionProps[]>([]);

  const notify = React.useCallback((notificationPayload: NotifiactionProps)=> {
    const id = shortId();

    function removeNotification() {
      setNotifications(notifications => notifications.filter(n => n.id !== id));
    }

    setNotifications(notifications => [
      ...notifications,
      { 
        id, 
        onClose: removeNotification,
        onMore: notificationPayload.onMore && notificationPayload.onMore,
        title:  notificationPayload.title,
        description: notificationPayload.description  && notificationPayload.description,
        type: notificationPayload.type  && notificationPayload.type
       }
    ]);

    setTimeout(removeNotification, 2000);
  }, []);

  return { notify, notifications };
}

type ContextProps = {
  notify?: (notificationPayload:NotifiactionProps) => void;
  // notifications?: NotifiactionProps[]
};
export const NotifyContext = createContext<ContextProps>({});

const NotificationProvider = ({ children }) => {
  const notificationRoot = useCreateDomElement();

  const { notify, notifications } = useNotifications();
  const value = { notify}
  return (
    <>
    <NotifyContext.Provider value={value}>{children}</NotifyContext.Provider>
      {notificationRoot &&
        createPortal(
          <NotificationsContainer>
            <AnimatePresence>
              {notifications.map((notification:NotifiactionProps)  => (
                <Notification key={notification.id} {...notification} />
              ))}
            </AnimatePresence>
          </NotificationsContainer>,
          notificationRoot
        )}
    </>
  )

}

export default NotificationProvider;
