import React, {useState} from 'react';
import {
  IconButton, Input,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import NotificationsIcon from '@material-ui/icons/Notifications';

import CommentPost from '../comment-post';
import styles from './comments-post.module.scss';
import CommentForm from '../comment-form';

type Comment = {
  id: number,
  text: string,
  createdAt: string,
  user: {
    fullName: string,
    avatar: string,
  }
}

interface CommentsPostProps {
  comments: Comment[]
}


const CommentsPost: React.FC<CommentsPostProps> = ({comments}) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeActiveTab = (_, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Paper square elevation={0}>
            <div className="m-auto pt-30" style={{width: '620px'}}>
                <Typography variant="h6">
                    69 комментариев
                </Typography>
                <div className={clsx('d-flex align-center justify-between')}>
                    <Tabs
                        onChange={changeActiveTab}
                        className="mt-20"
                        value={activeTab}
                        textColor="primary"
                        indicatorColor="primary"
                    >
                        <Tab label="Популярные"/>
                        <Tab label="По порядку"/>
                    </Tabs>

                    <IconButton>
                        <NotificationsIcon/>
                    </IconButton>
                </div>
            </div>

            <div className={styles.borderBottom}/>

            <div className={styles.comments}>
                <CommentForm />

                {comments.map((obj) => (
                    <CommentPost
                        key={obj.id}
                        text={obj.text}
                        createdAd={obj.createdAt}
                        user={obj.user}
                    />
                ))}
            </div>
        </Paper>
    );
};

export default CommentsPost;
