import React, {useState} from 'react';
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material';
import { Close as CloseIcon, DeleteOutline} from '@mui/icons-material';
import { lightGrayBg } from '../Constants/constant';
import useApi from '../Hooks/useApi';
import { API_URL } from '../Services/api.url';

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
    const sendEmailService = useApi(API_URL.saveSentEmail);

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
        const mailFrom="nomeshdadhich9057@gmail.com";
        window.Email.send({
            ...emailConfig,
            To : data.to,
            From : mailFrom,
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );

        const payLoad = {
            to: data.to,
            from: mailFrom,
            subject: data.subject,
            body: data.body,
            date: new Date(),
            attechment: '',
            name: 'Nomesh Vyas',
            starred: false,
            type: 'sent'
        }

        sendEmailService.call(payLoad);

        if (!sendEmailService.error) {
            setOpenDailog(false);
            setData({});
        } else {
            
        }

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