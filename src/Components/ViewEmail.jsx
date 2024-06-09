import { useOutletContext, useLocation } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { darkText, emptyProfileLogo } from "../Constants/constant";
import useApi from "../Hooks/useApi";
import { API_URL } from "../Services/api.url";

const IconWrapper = styled(Box)({
    padding: 15
})
const Subject = styled(Typography)({
    fontSize: 22,
    margin: '10px 0 20px 85px',
    display: 'flex'
})
const Indicator = styled(Box)({
    fontSize: 12,
    background: '#DDD',
    color: '#222',
    padding: '3px 7px',
    borderRadius: 7,
    marginLeft: 6,
    alignSelf: 'center'  
})
const Image = styled('img')({
    borderRadius: '50%',
    width: 40,
    height: 40,
    margin: '5px 20px 0 10px',
    background: '#CCCCCC'
})
const Container = styled(Box)({
    marginLeft: 15,
    // width: '100%',
    display: 'flex'
})
const Wrapper = styled(Box)({
    display: 'flex',
    width: '100%',
    '& > p > span': {
        fontSize: 12,
        color: '#5E5E5E'
    }
})
const DateBox = styled(Typography)({
    margin: '0 50px 0 auto !important',
    fontSize: 12,
    color: '#5E5E5E'
})


const ViewEmail = () => {
    const {openDrawer} = useOutletContext();
    const moveEmailToBinService = useApi(API_URL.moveEmailsToBin);

    const { state } = useLocation();
    const {email} = state;


    const deleteEmail = () => {
        moveEmailToBinService.call([email._id]);
        window.history.back();
    }

    return(
        <Box style={ openDrawer ? { marginLeft: 250 } : { width: '100%' }}>
            <IconWrapper>
                <ArrowBack onClick={() => window.history.back()} color={darkText} fontSize="small" />
                <Delete onClick={deleteEmail} color={darkText} fontSize='small' style={{marginLeft: 40}} />
            </IconWrapper>
            <Subject>
                {email.subject} <Indicator component='span'>Inbox</Indicator>
            </Subject>
            <Container>
                <Image src={emptyProfileLogo} alt="dp" />
                <Box width={'100%'} >
                    <Wrapper>
                        <Typography>{email.name}
                            <Box component='span'>&nbsp;&#60;{email.to}&#62;</Box>
                        </Typography>
                        <DateBox>
                            {(new Date(email.date).getDate())}&nbsp;
                            {(new Date(email.date).toLocaleString('default', {month: 'long'}))}&nbsp;
                            {(new Date(email.date).getFullYear())}
                        </DateBox>
                    </Wrapper>
                    <Typography>{email.body}</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default ViewEmail;
 