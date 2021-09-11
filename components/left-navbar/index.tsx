import React from 'react';
import {Button} from '@material-ui/core';
import Link from 'next/link';

import FireIcon from '@material-ui/icons/WhatshotOutlined';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UpIcon from '@material-ui/icons/TrendingUpOutlined';
import SubscribeIcon from '@material-ui/icons/FormatListBulletedOutlined';

import styles from './left-navbar.module.scss';
import {useRouter} from 'next/router';


const menu = [
    {text: 'Поплуярное', icon: <FireIcon />, path: '/'},
    {text: 'Сообщения', icon: <MessageIcon />, path: '/messages'},
    {text: 'Рейтинг TJ', icon: <UpIcon />, path: '/rating'},
    {text: 'Подписки', icon: <SubscribeIcon />, path: '/follows'},
];

const LeftNavbar: React.FC = () => {
    const router = useRouter();

    return (
        <div className={styles.navbar}>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path}>
                            <Button variant={router.asPath === item.path ? 'contained' : 'text'}>
                                {item.icon}
                                {item.text}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftNavbar;
