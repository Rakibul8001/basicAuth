import { Fragment } from 'react';
import NavBar from './Nav';
import { useAuth } from '../utilities/AuthContext';

function Layout({children}) {
  const {currentUser} = useAuth();
  return (
    <Fragment>
      <NavBar/>
      <div className='container mt-2'>
          {children}
      </div>

      </Fragment>
  );
}

export default Layout;