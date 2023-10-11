import { Fragment, useContext } from 'react';
import MainHeader from './main-header';
import Notification from '@/components/notification/notification';
import NotificationContext from '@/store/index';

const Layout = (props: any) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main className='main'>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
