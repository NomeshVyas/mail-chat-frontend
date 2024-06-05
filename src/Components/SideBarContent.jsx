import { Box, Button, List, ListItem, styled } from '@mui/material'
import { CreateOutlined as CreateIcon } from '@mui/icons-material';
import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../config/SideBar.config';
import ComposeMail from './ComposeMail';


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
        cursor: 'pointer'
    },
    '& > ul > li > svg': {
        marginRight: 20
    },
    '& > button: hover': {
        background: '#c2e7ff',
        boxShadow: '1px 1px 5px #989898',
        opacity: 0.9
    }
})

export default function SideBarContent() {
    const [openDailog, setOpenDailog] = useState(false);


  return (
    <Container>
        <ComposeBtn onClick={()=> setOpenDailog(true)} ><CreateIcon/>Compose</ComposeBtn>
        <List>
            {
                SIDEBAR_DATA.map(data=> (
                    <ListItem key={data.name}>
                        <data.icon fontSize='small' />{data.title}
                    </ListItem>
                ))
            }
        </List>
        <ComposeMail openDailog={openDailog} setOpenDailog={setOpenDailog} />
    </Container>
  )
}
