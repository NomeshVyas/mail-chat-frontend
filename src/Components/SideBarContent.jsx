import { Box, Button, List, ListItem, styled } from '@mui/material'
import { CreateOutlined as CreateIcon } from '@mui/icons-material';
import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../config/SideBar.config';
import ComposeMail from './ComposeMail';
import { useParams, NavLink } from 'react-router-dom';
import { routes } from '../Constants/routes';

const ComposeBtn = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    padding: 15,
    borderRadius: 16,
    minWidth: 140,
    textTransform: 'none'
})
const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        '& > a': {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    '& > ul > a > li > svg': {
        marginRight: 18
    },
    '& > button: hover': {
        background: '#c2e7ff',
        boxShadow: '1px 1px 5px #989898',
        opacity: 0.9
    }
})

export default function SideBarContent() {
    const [openDailog, setOpenDailog] = useState(false);

    const {type} = useParams();

    const ActiveListItemStyle = {
        background: '#D3E3FD',
        borderRadius: '0 16px 16px 0'
    }

  return (
    <Container>
        <ComposeBtn onClick={()=> setOpenDailog(true)} ><CreateIcon/>Compose</ComposeBtn>
        <List>
            {
                SIDEBAR_DATA.map(data=> (
                    <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                        <ListItem style={
                        type===data.name.toLowerCase() ?
                        ActiveListItemStyle: {}
                        }>
                            <data.icon fontSize='small' />{data.title}
                        </ListItem>
                    </NavLink>
                ))
            }
        </List>
        <ComposeMail openDailog={openDailog} setOpenDailog={setOpenDailog} />
    </Container>
  )
}