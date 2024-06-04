import React from 'react'
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import {Menu as MenuIcon, Search as SearchIcon, Tune as TuneIcon, HelpOutline as HelpOutlineIcon, Settings as SettingsIcon, Apps as AppsIcon, AccountCircle as AccountCircleIcon} from '@mui/icons-material';
import { gmailLogo, lightGrayBg, darkText } from '../Constants/constant';


// Styling
const StyledAppBar = styled(AppBar)({
    background: lightGrayBg,
    boxShadow: "none"
})
const SearchWrapper = styled(Box)({
    background: '#EAF1FB',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    padding: '4px 12px',
    marginLeft: 80,
    minWidth: 540,
    maxWidth: 720,
    justifyContent: 'space-between',
    '& > div': {
        width: '100%',
        padding: '0 10px' 
    }
})
const OptionWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > svg': {
        marginLeft: '10px'
    }
})


function Header({ toggleDrawer }) {
  return (
    <StyledAppBar position='static'>
        <Toolbar>
            <MenuIcon color={darkText} onClick={toggleDrawer} />
            <img src={gmailLogo} alt="logo" style={{width: 110, marginLeft: 15}} />
            <SearchWrapper>
                <SearchIcon color={darkText} />
                <InputBase 
                    placeholder='Search mail'
                />
                <TuneIcon color={darkText} />
            </SearchWrapper>
            <OptionWrapper>
                <HelpOutlineIcon color={darkText} />
                <SettingsIcon color={darkText} />
                <AppsIcon color={darkText} />
                <AccountCircleIcon color={darkText} />
            </OptionWrapper>
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header