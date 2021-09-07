import React from 'react';
import {Button} from '@material-ui/core';

import FireIcon from '@material-ui/icons/WhatshotOutlined';
import ClockIcon from '@material-ui/icons/QueryBuilderOutlined';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UpIcon from '@material-ui/icons/TrendingUpOutlined';
import SubscribeIcon from '@material-ui/icons/FormatListBulletedOutlined';

import styles from './left-navbar.module.scss';

const LeftNavbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Button>
                        <FireIcon />
                        Популярное
                    </Button>
                </li>
                <li>
                    <Button>
                        <ClockIcon />
                        Свежее
                    </Button>
                </li>
                <li>
                    <Button>
                        <MessageIcon />
                        Сообщения
                    </Button>
                </li>
                <li>
                    <Button>
                        <UpIcon />
                        Рейтинг TJ
                    </Button>
                </li>
                <li>
                    <Button>
                        <SubscribeIcon />
                        Подписки
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default LeftNavbar;
