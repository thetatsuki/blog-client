import React from 'react';
import {IconButton, Paper, Avatar, Button, Link} from '@material-ui/core';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import CreateIcon from '@material-ui/icons/Create';

import styles from './header.module.scss';

const Header: React.FC = () => {
    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <div className={styles.logo}>
                    <Link href="/">
                        <svg viewBox="0 0 24 25" id="site_logo">
                            <path fill="#e8a427" className="st0"
                                d="M0 19h8.5v6H0v-6z"></path>
                            <path className="st1" d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                            <path fill="rgba(0,0,0,0.15)" className="st2"
                                d="M7.5 19h1v6l-1-6z"></path>
                        </svg>
                    </Link>
                </div>

                <div className={styles.inputAndCreate}>
                    <div className={styles.searchInput}>
                        <SearchIcon />
                        <input placeholder="Поиск"/>
                    </div>

                    <Link href="/write">
                        <Button className={styles.penIcon} variant="contained">
                            <CreateIcon />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <div className="d-flex align-center">
                    <Link href="/profile/1">
                        <Avatar
                            className="ml-15"
                            variant="rounded"
                            src="https://sun9-55.userapi.com/impg/WLtoFa7rMXqLRHINfvto7xa6cWN0ynNLlHiSlQ/TUGPsdGSUyY.jpg?size=1280x720&quality=95&sign=cfaca872754de100a4769d9fd48bb6bb&type=album"
                        />
                    </Link>
                    <ArrowDown className={clsx('ml-10', styles.arrowIcon)} />
                </div>
            </div>
        </Paper>
    );
};

export default Header;
