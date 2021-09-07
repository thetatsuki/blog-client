import React from 'react';
import clsx from 'clsx';
import CommentItem from './comment-item';

import RowIcon from '@material-ui/icons/ChevronRightRounded';

import styles from './right-comments.module.scss';

const RightComments = () => {
    const [visible, setVisible] = React.useState(true);

    const changeVisible = () => {
        setVisible(!visible);
    };

    return (
        <div className={clsx(styles.comments, !visible && styles.rotated)}>
            <p className='cu-p mb-10' onClick={changeVisible}>
                Комментарии
                <RowIcon />
            </p>

            {visible &&
              <CommentItem />
            }
        </div>
    );
};

export default RightComments;
