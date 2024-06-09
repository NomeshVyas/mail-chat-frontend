import { Star, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography, styled } from "@mui/material";
// import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { routes } from "../Constants/routes";
import useApi from "../Hooks/useApi";
import { API_URL } from "../Services/api.url";
import { mailBoxbg } from "../Constants/constant";

const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background: mailBoxbg,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 5,
    height: '45px',
    '& > div': {
        display: 'flex',
        width: '100%',
        '& > p': {
            fontSize: '14px'
        }
    }
});

const Indicator = styled(Typography)({
    fontSize: '12px !important',
    background: '#DDD',
    color: '#222',
    padding: '0 4px',
    borderRadius: 4,
    marginRight: 6,
    display: 'flex',
    alignItems: 'center'
})

const DateBox = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    color: '#5F6368'
})



const Email = ({ email, selectedEmails, setRefreshScreen, type, setSelectedEmails }) => {
    const navigate = useNavigate();

    const toggleStarredService = useApi(API_URL.toggleStarredEmail);
    
    const toggleStar = () => {
        toggleStarredService.call({ id: email._id, value: !email.starred });
        setRefreshScreen(prev => !prev);
    }

    const onValueChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prev => prev.filter(id => id !== email._id));
        } else {
            setSelectedEmails(prev => [...prev, email._id]);
        }
    }
    return(
        <Wrapper>
            <Checkbox onClick={onValueChange} size="small" checked={selectedEmails.includes(email._id)}/>
            {
            type!=='bin' ?
                email.starred ? 
                    <Star onClick={toggleStar} fontSize="small" style={{marginRight: 10, color: '#FEBE10'}} />
                :
                    <StarBorder onClick={toggleStar} fontSize="small" style={{marginRight: 10}} />
            :
            ''
            }
            <Box onClick={() => navigate(routes.view.path, {state: {email: email}})}>
            <Typography style={{width: 200, overflow: 'hidden'}} >{email.name}</Typography>
            <Indicator>Inbox</Indicator>
            <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
            <DateBox>
                {(new Date(email.date).getDate())}
                {(new Date(email.date).toLocaleString('default', {month: 'long'}))}
            </DateBox>
            </Box>
        </Wrapper>
    )
}

export default Email;