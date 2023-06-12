import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <>
            <header>
                <h1>
                    <Link to={'/'} className={'header-link'}>Student Management</Link>
                </h1>
            </header>
            <div id={'main'}>
                <Outlet/>
            </div>
        </>

    )
}

export default Layout;