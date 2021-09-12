import React from 'react';
import {Dialog, Paper} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import BackIcon from '@material-ui/icons/ArrowBackRounded';

import MainForm from './forms/main';

import styles from './auth-dialog.module.scss';
import LoginForms from './forms/login';
import RegisterForm from './forms/register';


interface AuthDialogProps {
    visible: boolean,
    handleClose: () => void,
}

const AuthDialog: React.FC<AuthDialogProps> = ({visible, handleClose}) => {
    const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');

    return (
        <Dialog
            maxWidth={false}
            open={visible}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Paper className={styles.dialog}>
                <div className={styles.backgroundImage} />

                <div className={styles.dialogForm}>
                    <CloseIcon className={styles.buttonClose} onClick={handleClose}/>

                    <div>
                        {formType === 'main' ? (
                            <h1>
                                Вход в TJ
                            </h1>
                        ) : (
                            <p className={styles.backForms} onClick={() => setFormType('main')}>
                                <BackIcon /> К авторизации
                            </p>
                        )}
                    </div>

                    <div className="mt-15">
                        {formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')} />}
                        {formType === 'login' && <LoginForms opOpenRegister={() => setFormType('register')} />}
                        {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
                    </div>

                </div>
            </Paper>
        </Dialog>
    );
};

export default AuthDialog;
