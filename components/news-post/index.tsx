import React from 'react';
import {Avatar, IconButton, Paper, Typography} from '@material-ui/core';
import clsx from 'clsx';

import MoreIcon from '@material-ui/icons/MoreHoriz';
import CommentsIcon from '@material-ui/icons/ModeCommentOutlined';
import SaveToMeIcon from '@material-ui/icons/LoopRounded';
import SaveIcon from '@material-ui/icons/BookmarkBorderRounded';
import RepostIcon from '@material-ui/icons/PublishRounded';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUpRounded';

import styles from './news-post.module.scss';

const NewsPost: React.FC = () => {
    return (
        <Paper elevation={0} className={clsx('p-20 mb-20', styles.post)}>
            <div className="d-flex align-center  justify-between">
                <div className="d-flex align-center">
                    <Avatar className={styles.avatar} variant="rounded"
                        src="https://leonardo.osnova.io/7364676d-692b-5858-b614-b3bf26d86c4b/-/format/webp/"/>
                    <Typography className="ml-10" style={{fontWeight: 500}} variant="subtitle1">
                        Технологии
                    </Typography>
                    <Typography className={clsx('ml-10 mr-10', styles.textOverflow)} variant="inherit">
                        Никита Логинов
                    </Typography>
                    <Typography className={clsx(styles.textOverflow, styles.forHidden)} variant="inherit">
                        час назад
                    </Typography>
                </div>
                <IconButton>
                    <MoreIcon/>
                </IconButton>
            </div>

            <div>
                <h1 className={styles.title}>
                    Пользователь «Хабра» нашёл в кнопочных телефонах вредоносные функции
                    для перехвата SMS и тайной отправки данных в сеть
                </h1>
                <p className={styles.text}>
                    Трояны и бэкдоры позволяют злоумышленникам списывать деньги со счёта
                    и следить за личной перепиской.
                </p>
            </div>

            <div className={styles.imagePreview}>
                <img src='https://leonardo.osnova.io/1abe3697-7e6c-52cd-9d47-3cc8a54e3448/-/preview/1100/-/format/webp/'/>
            </div>

            <div className="d-flex align-center justify-between">
                <div className="d-flex align-center">
                    <div className={styles.iconWithComments}>
                        <CommentsIcon />
                        <p>
                            15
                        </p>
                    </div>
                    <SaveToMeIcon className={styles.icon} />
                    <SaveIcon className={styles.icon}/>
                    <RepostIcon className={clsx(styles.icon, styles.forHidden)} />
                </div>
                <div className="d-flex align-center">
                    <IconButton>
                        <ArrowDownIcon />
                    </IconButton>
                    <Typography>
                        38
                    </Typography>
                    <IconButton>
                        <ArrowUpIcon />
                    </IconButton>
                </div>
            </div>
        </Paper>
    );
};

export default NewsPost;
