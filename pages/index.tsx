import type {NextPage} from 'next';
import React from 'react';
import {NewsPost} from '../components';
import MainLayouts from '../components/layouts/MainLayouts';

const Home: NextPage = () => {
    return (
        <MainLayouts>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
        </MainLayouts>
    );
};

export default Home;
