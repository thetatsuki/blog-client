import React from 'react';
import Link from 'next/link';
import {Paper} from '@material-ui/core';
import clsx from 'clsx';


import styles from './news-post.module.scss';
import PostLayout from '../../layouts/PostLayout';

const NewsPost: React.FC = () => {
    return (
        <Link href="/post/1">
            <Paper elevation={0} className={clsx('p-20 mb-20', styles.post)}>
                <PostLayout>
                    <div>
                        <h1 className={styles.title}>
                            Пользователь «Хабра» нашёл в кнопочных телефонах вредоносные функции
                            для перехвата SMS и тайной отправки данных в сеть
                        </h1>
                        <p className={styles.text}>
                            Трояны и бэкдоры позволяют злоумышленникам списывать деньги со счёта
                            и следить за личной перепиской.
                        </p>
                    </div>

                    <div className={styles.imagePreview}>
                        <img src='https://leonardo.osnova.io/1abe3697-7e6c-52cd-9d47-3cc8a54e3448/-/preview/1100/-/format/webp/'/>
                    </div>
                </PostLayout>
            </Paper>
        </Link>
    );
};

export default NewsPost;
