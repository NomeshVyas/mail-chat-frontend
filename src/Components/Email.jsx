import { Star, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)({
    padding: '0 0 0 10px',
    background: '#F2F6FC',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
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

const Email = ({ email, selectedEmails }) => {
    return(
        <Wrapper>
            <Checkbox size="small" checked={selectedEmails.includes(email._id)}/>
            <StarBorder fontSize="small" style={{marginRight: 10}} />
            <Box>

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