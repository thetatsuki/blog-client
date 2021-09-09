import React from 'react';
import {Button, Input} from '@material-ui/core';
import dynamic from 'next/dynamic';

import styles from './write-form.module.scss';


const Editor = dynamic(() => import('../editor'), {ssr: false});

interface WriteFormProps {
    title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({title}) => {
    return (
        <div>
            <Input classes={{root: styles.textField}} placeholder='Заголовок' defaultValue={title}/>
            <div className={styles.editor}>
                <Editor />
            </div>

            <Button style={{minWidth: '140px', minHeight: '40px'}} variant='contained' color='primary'>
              Опубликовать
            </Button>
        </div>
    );
};

export default WriteForm;
