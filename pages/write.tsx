import React from 'react';
import type {NextPage} from 'next';
import MainLayouts from '../layouts/MainLayouts';
import {WriteForm} from '../components';

const WritePage: NextPage = () => {
    return (
        <MainLayouts className='main-layout-white' hideComments hideFullMenu>
            <WriteForm />
        </MainLayouts>
    );
};

export default WritePage;
