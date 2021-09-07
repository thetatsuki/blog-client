import React from 'react';
import {Avatar, Paper, Typography} from '@material-ui/core';

interface itemProps {
    avatar: string;
    name: string;
}

interface ProfileCardProps {
  title: string;
  items?: itemProps[];
};

const ProfileCard = ({title, items}: ProfileCardProps) => {
    return (
        <Paper className="p-15 mb-10" elevation={0}>
            <Typography style={{fontWeight: 500}}>
                {title}
            </Typography>
            {items ? (
                <ul className='mt-15'>
                    {items.map((item, index) => (
                        <li key={index} className='d-flex mt-10'>
                            <Avatar src={item.avatar} style={{width: '24px', height: '24px'}} variant='rounded' />
                            <Typography className='ml-10'>
                                {item.name}
                            </Typography>
                        </li>
                    ))}
                </ul>) : (
                <Typography className='mt-10' style={{color: 'rgba(0,0,0,0.65)'}}>
                    У вас нет ещё подписчиков
                </Typography>
            )}
        </Paper>
    );
};

export default ProfileCard;
