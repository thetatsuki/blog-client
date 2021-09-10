import React from 'react';
import type {NextPage} from 'next';
import MainLayouts from '../../layouts/MainLayouts';

import {
    Avatar,
    Button,
    Paper,
    Typography,
} from '@material-ui/core';
import PostLayout from '../../layouts/PostLayout';

import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import AddIcon from '@material-ui/icons/PersonAdd';
import CommentsPost from '../../components/comments-post';

import {comments} from '../../data/comments';

const PostPage: NextPage = () => {
    return (
        <MainLayouts contentWidth='full' hideMenu>
            <Paper square elevation={0}>
                <div className="m-auto pt-25 pb-25" style={{maxWidth: '620px'}}>
                    <PostLayout>
                    </PostLayout>
                    <div className='d-flex align-center mt-25 justify-between'>
                        <div className='d-flex align-center'>
                            <Avatar variant='rounded' className='mt-5'/>
                            <div className='ml-10'>
                                <Typography variant='h6'>
                                    Яна Ломакина
                                </Typography>
                                <Typography variant='inherit'>
                                    вот и юмореска // заходите в инсту
                                </Typography>
                            </div>
                        </div>
                        <div className='mr-10'>
                            <Button style={{minWidth: '44px', minHeight: '40px'}} variant='contained'>
                                <MessageIcon />
                            </Button>
                            <Button
                                className='d-flex align-center ml-10'
                                color='inherit'
                                variant='contained'
                                style={{width: '157px', height: '40px', fontSize: '16px'}}
                            >
                                <AddIcon className="mr-15" />
                                Подписаться
                            </Button>
                        </div>
                    </div>
                </div>
            </Paper>
            <div className="mt-20 mb-20"/>

            <CommentsPost comments={comments} />

        </MainLayouts>
    );
};

export default PostPage;
