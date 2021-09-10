import React from 'react';
import {Avatar, Typography} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHoriz';

import styles from './comment-post.module.scss';


interface CommentPostProps {
    user: {
        fullName: string,
        avatar: string,
    },
    text: string,
    createdAd: string
}

const CommentPost: React.FC<CommentPostProps> = ({user, text, createdAd}) => {
    return (
        <div className={styles.comment}>
            <div className="d-flex align-center">
                <Avatar src={user.avatar}/>
                <Typography className="ml-10">
                    {user.fullName}
                </Typography>
                <Typography className="ml-10" variant={'inherit'} style={{color: '#595959'}}>
                    {createdAd}
                </Typography>
            </div>

            <Typography className="mt-5 mb-10">
                {text}
            </Typography>
            <div className="d-flex align-center">
                <h4>
                    Ответить
                </h4>
                <MoreIcon className="ml-10"/>
            </div>
        </div>
    );
};

export default CommentPost;
