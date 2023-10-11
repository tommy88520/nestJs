import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext<iContext>({
  notification: null, // { title, message, status }
  showNotification: function (notificationData: iNotificationData) {},
  hideNotification: function () {},
});
interface iNotificationData {
  title: string;
  message: string;
  status: string;
}

interface iContext {
  notification: iNotificationData | null | undefined;
  showNotification: (e: any) => void;
  hideNotification: () => void;
}

export function NotificationContextProvider(props: any) {
  const [activeNotification, setActiveNotification] = useState<iNotificationData | null>();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' || activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: iNotificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>
  );
}

export default NotificationContext;
