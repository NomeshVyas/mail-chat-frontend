import React, {useState} from 'react'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import { Close as CloseIcon, DeleteOutline} from '@mui/icons-material'
import { lightGrayBg } from '../Constants/constant'

const dialogStyle = {
    height: '90%',
    width: '70%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}
const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#F2F6FC',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }
})
const RecipientSubjectWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 14,
        borderBottom: `1px solid ${lightGrayBg} `
    }
})
const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 15px'
})
const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#FFF',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
})

function ComposeMail({ openDailog, setOpenDailog }) {

    const [data, setData] = useState({});

    const onValueChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const emailConfig ={
        Host : process.env.REACT_APP_SMTP_HOST,
        Username : process.env.REACT_APP_SMTP_USERNAME,
        Password : process.env.REACT_APP_SMTP_PASSWORD,
        Port: process.env.REACT_APP_SMTP_PORT,
    }

    const closeComposeMail = (e) => {
        e.preventDefault();
        setOpenDailog(false);
    }

    const sendMail = (e) => {
        e.preventDefault();
        window.Email.send({
            ...emailConfig,
            To : data.to,
            From : "nomeshdadhich9057@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
        setOpenDailog(false);
    }

    return(
        <Dialog open={openDailog} PaperProps={{sx: dialogStyle}}>
            <Header>
                <Typography>New Message</Typography>
                <CloseIcon onClick={(e)=>closeComposeMail(e)} fontSize='small' sx={{cursor: 'pointer'}} />
            </Header>
            <RecipientSubjectWrapper>
                <InputBase onChange={(e)=>onValueChange(e)} name='to' placeholder='Recipients' />
                <InputBase onChange={(e)=>onValueChange(e)} name='subject' placeholder='Subject' />
            </RecipientSubjectWrapper>
            <Box>
                <TextField onChange={(e)=>onValueChange(e)} multiline name='body' rows={17} sx={{width: '100%', '& .MuiOutlinedInput-notchedOutline': {border: 'none'}}} />
            </Box>
            <Footer>
                <SendButton onClick={(e)=>sendMail(e)} >Send</SendButton>
                <DeleteOutline onClick={() => setOpenDailog(false)} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;