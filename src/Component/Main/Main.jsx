import React from 'react';
import Header from '../Home/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;