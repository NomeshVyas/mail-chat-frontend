import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URL } from "../Services/api.url";
import useApi from "../Hooks/useApi";
import { Box, Checkbox, List, styled } from "@mui/material"
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import { EMPTY_TABS, darkText } from "../Constants/constant";
import NoEmails from "./Common/NoEmails";

const StyledMailHeader = styled(Box)({
    padding: '20px 10px 0 10px',
    display: 'flex',
    alignItems: 'center'
})

const StyledEmailList = styled(List)({
    marginInline: 10
})

const Emails = () => {
    const { openDrawer } = useOutletContext();
    const {type} = useParams();

    const [selectedEmails, setSelectedEmails] = useState([]);
    const [refreshScreen, setRefreshScreen] = useState(false);

    const getEmailsService = useApi(API_URL.getEmailFromType);
    const moveEmailsToBinService = useApi(API_URL.moveEmailsToBin);
    const deleteEmailsService = useApi(API_URL.deleteEmails);

    useEffect(() => {
      getEmailsService.call({}, type);
      // eslint-disable-next-line 
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
            deleteEmailsService.call(selectedEmails);
        } else {
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prev => !prev);
    }
    
    return (
        <Box style={ openDrawer ? { marginLeft: 250, width: 'calc(100% - 250px)' } : { width: '100%' }}>
            <StyledMailHeader>
                {
                    getEmailsService?.response?.length!==0 &&
                    <>
                        <Checkbox size="small" onChange={(e)=>selectAllEmails(e)} />
                        <DeleteOutline style={{color: darkText}} onClick={(e)=>deleteSelectedEmails(e)} />
                    </>
                }
            </StyledMailHeader>
            <StyledEmailList>
                {
                    getEmailsService?.response?.map(mail => (
                        <Email key={mail._id} email={mail} selectedEmails={selectedEmails} setRefreshScreen={setRefreshScreen} type={type} setSelectedEmails={setSelectedEmails} />
                    ))
                }
            </StyledEmailList>
            {
                getEmailsService?.response?.length===0 &&
                <NoEmails message={EMPTY_TABS[type]} />
            }
        </Box>
    )
}

export default Emails;