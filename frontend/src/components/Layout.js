import { Fragment } from 'react';
import NavBar from './Nav';

function Layout({children}) {
  return (
    <Fragment>
    <NavBar/>
    <div className='container'>
        {children}
    </div>

    </Fragment>
  );
}

export default Layout;