import React from 'react';
import {Avatar, IconButton, Typography} from '@material-ui/core';
import styles from '../news-post/news-post.module.scss';
import clsx from 'clsx';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import CommentsIcon from '@material-ui/icons/ModeCommentOutlined';
import SaveToMeIcon from '@material-ui/icons/LoopRounded';
import SaveIcon from '@material-ui/icons/BookmarkBorderRounded';
import RepostIcon from '@material-ui/icons/PublishRounded';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUpRounded';

const HeaderPost: React.FC = ({children}) => {
    return (
        <div>
            <div className="d-flex align-center justify-between">
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
                {children}
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
        </div>
    );
};

export default HeaderPost;
