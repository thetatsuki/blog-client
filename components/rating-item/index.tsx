import React from 'react';
import {Avatar, Button, Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface RatinItemProps {
    rate: number,
    place: number,
    name: string,
    avatarUrl?: string,
}


const RatingItem: React.FC<RatinItemProps> = ({rate, place, name, avatarUrl}) => {
    return (
        <ol>
            <div className="d-flex align-center justify-between m-auto mb-10 mt-10" style={{width: '90%'}}>
                <div className="d-flex align-center" style={{width: '58%'}}>
                    <p>
                        {place}
                    </p>
                    <Avatar src={avatarUrl} variant={'square'} className="mr-10 ml-20" style={{width: '30px', height: '30px'}}/>
                    <Typography style={{fontSize: '15px', fontWeight: 500}}>
                        {name}
                    </Typography>
                </div>

                <Typography style={{fontSize: '13px'}}>
                    {rate}
                </Typography>

                <Button className="button--add">
                    <AddIcon />
                </Button>
            </div>
            <div style={{borderBottom: '1px solid #D9D9D9'}} />
        </ol>
    );
};

export default RatingItem;
