import React from 'react';
import {
    IconButton,
    Paper,
    Tab,
    Tabs,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import NotificationsIcon from '@material-ui/icons/Notifications';

import CommentPost from '../comment-post';
import styles from './comments-post.module.scss';

const CommentsPost: React.FC = () => {
    return (
        <Paper square elevation={0}>
            <div className='m-auto pt-30' style={{width: '720px'}}>
                <Typography variant='h6'>
                  69 комментариев
                </Typography>
                <div className={clsx('d-flex align-center justify-between')}>
                    <Tabs className="mt-20" value={0} indicatorColor="primary">
                        <Tab label="Популярные" />
                        <Tab label="По порядку" />
                    </Tabs>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                </div>
            </div>

            <div className={styles.borderBottom}/>

            <div className={styles.comments}>
                <input placeholder="Написать комментарий..." />

                {[1, 2, 2, 1, 1, 2].map((item, index) => (
                    <CommentPost key={index}/>
                ))}
            </div>
        </Paper>
    );
};

export default CommentsPost;
