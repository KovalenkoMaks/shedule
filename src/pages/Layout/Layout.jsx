import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
