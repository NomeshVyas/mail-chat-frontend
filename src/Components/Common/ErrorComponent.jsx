import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <Box>
            <Typography style={{marginLeft: 250}}>
                There was an error in loading this page</Typography>
        </Box>
    )
}

export default ErrorComponent;