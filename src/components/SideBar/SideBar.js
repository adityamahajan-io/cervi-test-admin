import { AppsOutlined, FileCopyOutlined, FindReplace, InfoOutlined, Logout, PersonOutline, SyncLockOutlined, ManageAccountsOutlined } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function PSideBar() {

    const {pathname} = useLocation()


    return (
        <Box className="sideBar">
            <List className="sideBarListWrapper">
                <ListItem disablePadding>
                    <NavLink exact to={'/'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton">
                        <AppsOutlined className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Home</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>


                <ListItem disablePadding>
                    <NavLink exact to={'/manageUsers'} isActive={()=>['/manageUsers', "/manageUsers/list"].includes(pathname)}  activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <ManageAccountsOutlined className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Manage Users</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>


                <ListItem disablePadding>
                    <NavLink exact to={'/pendingRequests'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <SyncLockOutlined className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Pending Requests</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>

                <ListItem disablePadding>
                    <NavLink exact to={'pProfile'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <PersonOutline className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">Profile</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>



                <ListItem disablePadding>
                    <NavLink exact to={'pAbout'} activeClassName="linkActive" className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" >
                        <InfoOutlined className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">About</span>
                    </ListItemButton>
                    </NavLink> 
                </ListItem>

                <ListItem disablePadding>
                    <div className="sideListButtonParent">
                    <ListItemButton className="sideBarListButton" onClick={()=>{
                        localStorage.removeItem('accessToken')
                        localStorage.removeItem('userType')
                        window.location.reload()
                    }}>
                        <Logout className="sideBarListIcon" fontSize="large"/>
                        <span className="sideBarListText">LogOut</span>
                    </ListItemButton>
                    </div> 
                </ListItem>
            </List>
        </Box>
  );
}