import React from "react";
import { Drawer } from "@mui/material";
import { lightGrayBg } from "../Constants/constant";
import SideBarContent from "./SideBarContent";

function SideBar({openDrawer}) {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper': {
            marginTop: '64px',
            width: 250,
            background: lightGrayBg,
            borderRight: 'none',
            height: 'calc(100vh - 64px)'
        }
      }}
    >
      <SideBarContent />
    </Drawer>
  );
}

export default SideBar;
