import { Box, Button, List, ListItem, styled } from '@mui/material'
import {CreateOutlined as CreateIcon, StarBorderOutlinedIcon as StarBorderOutlined} from '@mui/icons-material';
import React from 'react'
import { SIDEBAR_DATA } from '../config/SideBar.config';

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
    }
})

export default function SideBarContent() {
  return (
    <Container>
        <ComposeBtn><CreateIcon/>Compose</ComposeBtn>
        <List>
            {
                SIDEBAR_DATA.map(data=> (
                    <ListItem>
                        <data.icon fontSize='small' />{data.title}
                    </ListItem>
                ))
            }
        </List>
    </Container>
  )
}
