import React from 'react';
import MainLayouts from '../../layouts/MainLayouts';
import {Avatar, Button, Paper, Tabs, Tab} from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import {ProfileCard} from '../../components';

const subscriptions = [
    {
        name: 'Заголовки',
        avatar: 'https://leonardo.osnova.io/398f1ede-bd1e-5afc-8945-e27282a12678/-/format/webp/',
    },
    {
        name: 'Путешествия',
        avatar: 'https://leonardo.osnova.io/0015c9ef-0eb5-5868-6c0a-cd0cbc204404/-/format/webp/',
    },
];

const links = [
    {
        name: 'thegaliahka',
        avatar: 'https://cdn-icons-png.flaticon.com/512/25/25684.png',
    },
];

const Profile = () => {
    return (
        <MainLayouts hideMenu contentFullWidth hideComments>
            <Paper className="pt-20 pl-20 pr-20" style={{width: '900px'}} elevation={0}>
                <div className="d-flex align-start justify-between">
                    <Avatar
                        style={{width: '112px', height: '112px'}}
                        variant='rounded'
                        src='https://sun9-55.userapi.com/impg/WLtoFa7rMXqLRHINfvto7xa6cWN0ynNLlHiSlQ/TUGPsdGSUyY.jpg?size=1280x720&quality=95&sign=cfaca872754de100a4769d9fd48bb6bb&type=album'
                    />

                    <div>
                        <Button style={{minWidth: '44px', minHeight: '40px'}} variant='contained'>
                            <SettingsIcon />
                        </Button>
                        <Button
                            className='d-flex align-center ml-10'
                            color='primary'
                            variant='contained'
                            style={{width: '137px', height: '40px', fontSize: '16px'}}
                        >
                            <MessageIcon className="mr-15" />
                                Написать
                        </Button>
                    </div>
                </div>

                <div>
                    <h1 style={{fontWeight: 700, fontSize: '36px'}} className="mt-10">
                        Ильнур Галиахметов
                    </h1>
                    <p style={{color: '#346EB8', fontSize: '16px'}} className='cu-p mt-5 mb-10'>
                        Изменить имя или описание
                    </p>
                    <p style={{fontSize: '16px'}} className='mt-5'>
                        На проекте с 27 авг 2021
                    </p>
                    <Tabs className="mt-20" value={0} indicatorColor="primary">
                        <Tab label="Статьи" />
                        <Tab label="Комментарии" />
                        <Tab label="Закладки" />
                    </Tabs>
                </div>
            </Paper>

            <div className='d-flex justify-between mt-15' style={{width: '900px'}}>
                <div style={{width: '65%'}}>
                    <Paper className="p-15" elevation={0}>
                        Записи
                    </Paper>
                </div>
                <div style={{width: '33%'}}>
                    <ProfileCard title='Подписчики' />
                    <ProfileCard title='Подписки' items={subscriptions} />
                    <ProfileCard title='Ссылки' items={links} />
                </div>
            </div>
        </MainLayouts>
    );
};

export default Profile;
