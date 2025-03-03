import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default MainLayouts;