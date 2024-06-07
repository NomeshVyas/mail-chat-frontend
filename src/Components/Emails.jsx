import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API_URL } from "../Services/api.url";
import useApi from "../Hooks/useApi"

const Emails = () => {
    const { openDrawer } = useOutletContext();
    const {type} = useParams();

    const getEmailsService = useApi(API_URL.getEmailFromType)

    useEffect(() => {
      getEmailsService.call({}, type);
    }, [type])
    
    return (
        <div style={ openDrawer ? { marginLeft: 250, width: 'calc(100% - 250px)' } : { width: '100%' }}>
            Hello from Emails
        </div>
    )
}

export default Emails;