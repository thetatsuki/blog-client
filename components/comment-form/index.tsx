import React from 'react';
import styles from './comment-form.module.scss';
import {Button, Input} from '@material-ui/core';

const CommentForm: React.FC = () => {
    const [clicked, setClicked] = React.useState(false);
    const [value, setValue] = React.useState('');

    console.log(value);

    return (
        <div className={styles.input}>
            <Input
                onChange={(e) => setValue(e.target.value)}
                onClick={() => setClicked(true)}
                multiline
                fullWidth
                classes={{root: styles.rootInput}}
                placeholder="Написать комментарий"
            />

            {clicked &&
            <Button
                classes={{disabled: styles.disableButton}}
                disabled={!value}
                color='primary'
                variant='contained'
            >
              Отправить
            </Button>
            }
        </div>
    );
};

export default CommentForm;
