import { Box, Typography, styled, Divider } from "@mui/material";
import { mailBoxbg } from "../../Constants/constant";

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 70,
    opacity: 0.8,
    width: '95%',
    marginInline: '2.5%',
    // height: '80%',
    padding: '20px 10px',
    // border: '1px solid black',
    borderRadius: 20,
    background: mailBoxbg,
    '& > p': {
        textAlign: 'center',
        marginTop: 15
    }
})
const StyledDivider = styled(Divider)({
    width: '100%',
    marginTop: 50
})


const NoEmails = ({ message }) => {
    return(
        <Container>
            <Typography>{message.heading}</Typography>
            <Typography style={{opacity: '0.8'}}>{message.subHeading}</Typography>
            <StyledDivider />
        </Container>
    )
}

export default NoEmails;