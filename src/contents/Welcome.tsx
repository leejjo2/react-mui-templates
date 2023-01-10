import React, { Component } from 'react'
import Main from '../layout/Main';
import Typography from '@material-ui/core/Typography';

const Welcome = () => {
        return (
            <Main data={getMainContent} />
        )
}

const getMainContent=()=> {
    return (
        <React.Fragment>
            <Typography paragraph>
                게시판
            </Typography>
            <Typography paragraph>
                부트캠프
            </Typography>
        </React.Fragment>
    )
}

export default Welcome