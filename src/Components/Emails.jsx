import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URL } from "../Services/api.url";
import useApi from "../Hooks/useApi";
import { Box, Checkbox, List, ListItem, styled } from "@mui/material"
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";

const StyledMailHeader = styled(Box)({
    padding: '20px 10px 0 10px',
    display: 'flex',
    alignItems: 'center'
})

const Emails = () => {
    const { openDrawer } = useOutletContext();
    const {type} = useParams();

    const [selectedEmails, setSelectedEmails] = useState([]);
    const [refreshScreen, setRefreshScreen] = useState(false);

    const getEmailsService = useApi(API_URL.getEmailFromType);
    const moveEmailsToBinService = useApi(API_URL.moveEmailsToBin);

    useEffect(() => {
      getEmailsService.call({}, type);
    }, [type, refreshScreen])

    const selectAllEmails = (e) => {
        if (e.target.checked) {
            const emails = getEmailsService?.response?.map(email => email._id);
            setSelectedEmails(emails);
            } else {
            setSelectedEmails([]);
        }
    }

    const deleteSelectedEmails = (e) => {
        if (type === 'bin') {
            
        } else {
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prev => !prev);
    }
    
    return (
        <Box style={ openDrawer ? { marginLeft: 250, width: 'calc(100% - 250px)' } : { width: '100%' }}>
            <StyledMailHeader>
                <Checkbox size="small" onChange={(e)=>selectAllEmails(e)} />
                <DeleteOutline style={{color: '#5F6368'}} onClick={(e)=>deleteSelectedEmails(e)} />
            </StyledMailHeader>
                {console.log(getEmailsService.response)}
            <List>
                {
                    getEmailsService?.response?.map(mail => (
                        <Email key={mail._id} email={mail} selectedEmails={selectedEmails} />
                    ))
                }
            </List>
        </Box>
    )
}

export default Emails;