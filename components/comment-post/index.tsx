import React from 'react';
import {Avatar, Typography} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHoriz';

import styles from './comment-post.module.scss';

const CommentPost = () => {
    return (
        <div className={styles.comment}>
            <div className="d-flex align-center">
                <Avatar/>
                <Typography className="ml-10">
                    Marhal_New _Arleana
                </Typography>
                <Typography className="ml-10" variant={'inherit'} style={{color: '#595959'}}>
                    1 час
                </Typography>
            </div>

            <Typography className="mt-5 mb-10">
                Если не постановка и губернатор начал снимать заранее потому что увидел
                издалека например пьяную походку,
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
