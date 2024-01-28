"use client";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavBarListDrawer from "./NavBarListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image';


const navLinks = [
    {title: 'Home', path: '/', icon: <HomeIcon/>},
    {title: 'Cargar', path: '/uploadDataSet', icon: <LoginIcon/>},
    {title: 'Predecir', path: '/testTree', icon: <LogoutIcon/>},
    {title: 'Arbol', path:'/viewTree', icon:<RemoveRedEyeIcon/>}
    
];

export default function NavBar() {

    const [open, setOpen] = useState(false);
    //toolbar or app bar works with flex, need to check the documentation in order to use some of the align methods
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" onClick={() => setOpen(true)}><MenuIcon/></IconButton>
                    <Typography sx={{flexGrow:1}}>Menu </Typography>

                    <Box component="img" sx={{height:100, width:200, pointerEvents: 'none'}} src="/assets/Logo-TecNM.png" alt="TECNM Logo"/>
                    <Box sx={{display: {xs: "none" , sm: "block"}}}>
                        {navLinks.map(item=> (
                            <Button color="inherit" component='a' href={item.path} key={item.title}>{item.title}</Button>
                        ))}
                    </Box>
                    
                 
                </Toolbar>
            </AppBar>
            <Drawer open={open} anchor="left" onClose={()=>setOpen(false)}>
                <NavBarListDrawer navLinks={navLinks}/>
            </Drawer>
        </>
    );
}