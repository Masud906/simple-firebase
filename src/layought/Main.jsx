
import { Outlet } from 'react-router-dom';
import Herder from '../component/Header/Herder';

const Main = () => {
    return (
        <div>
            <Herder></Herder>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;