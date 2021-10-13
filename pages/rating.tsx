import React from 'react';
import type {NextPage} from 'next';
import MainLayouts from '../components/layouts/MainLayouts';
import {Paper, Typography, Tabs, Tab, Avatar, Button} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import {RatingItem} from '../components';

const RatingPage: NextPage = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const changeActiveTab = (_, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <MainLayouts>
            <Paper className="pt-20 pr-15 pl-20" elevation={0} square>
                <Typography style={{fontWeight: 600, fontSize: '30px'}}>
                    Рейтинг сообществ и блогов
                </Typography>
                <Typography className="mt-10" style={{fontSize: '15px'}}>
                    Десять лучших авторов и комментаторов, а также администраторы первых
                    десяти сообществ из рейтинга по итогам месяца бесплатно получают
                    Plus-аккаунт на месяц.
                </Typography>

                <Tabs
                    onChange={changeActiveTab}
                    className="mt-15"
                    value={activeTab}
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab label="Сентябрь" style={{fontSize: '15px'}}/>
                    <Tab label="3 месяца" style={{fontSize: '15px'}}/>
                    <Tab label="За все время" style={{fontSize: '15px'}}/>
                </Tabs>
            </Paper>

            <Paper elevation={0} square>
                <div className="d-flex align-center justify-between pt-20 pr-15 pl-20 mt-15" style={{width: '80%'}}>
                    <Typography style={{fontSize: '15px', fontWeight: 500}}>
                        Сообщества
                    </Typography>
                    <Typography style={{fontSize: '13px', fontWeight: 400, color: '#595959'}}>
                        Рейтинг
                    </Typography>
                </div>

                <ul className="mt-20">
                    {[1, 2, 2, 2, 2].map((item, index) => (
                        <RatingItem
                            key={index}
                            name="TJ No Context"
                            rate={1599}
                            place={index + 1}
                            avatarUrl='https://leonardo.osnova.io/ffe817cf-8f00-93bd-aa44-8595887baf29/-/format/webp/'
                        />
                    ))}
                </ul>
            </Paper>
        </MainLayouts>
    );
};

export default RatingPage;
