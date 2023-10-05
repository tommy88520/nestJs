import { Fragment } from 'react';
import MainHeader from './main-header';

const Layout = (props: any) => {
  return (
    <Fragment>
      <MainHeader />
      <main className='main'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
