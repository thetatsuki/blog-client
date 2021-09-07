import React from 'react';
import styles from './right-comments.module.scss';
import {Avatar} from '@material-ui/core';

const CommentItem = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.comment__title}>
                <Avatar
                    src={'https://sun9-55.userapi.com/impg/WLtoFa7rMXqLRHINfvto7xa6cWN0ynNLlHiSlQ/TUGPsdGSUyY.jpg?size=1280x720&quality=95&sign=cfaca872754de100a4769d9fd48bb6bb&type=album'}
                    variant='rounded'
                    className={styles.avatar}
                />
                <h3>
                    Семен Прозов
                </h3>
            </div>
            <p>
                Ну так они никогда не продумывали ничего
                на шаг вперёд. Полная уверенность в своих действи…
            </p>
        </div>
    );
};

export default CommentItem;
