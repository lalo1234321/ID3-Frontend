"use client";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
//Use component to change the tag generated in the html, an use case will be when you need to use a component to redirect, just change the component to an anchor then use the href
export default function NavBarListDrawer({navLinks}) {
    return(
    <>
        <Box sx={{
            width: 250, bgcolor: "primary"
        }}>
            <nav>
                {/*<List>
                    <ListItem>
                        <ListItemIcon><EmailIcon/></ListItemIcon>
                        <ListItemText primary="Inbox"></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><MarkEmailReadIcon/></ListItemIcon>
                        <ListItemText primary="Outbox"></ListItemText>
                    </ListItem>
                </List>
    <Divider/>*/}
                <List>
                    {navLinks.map(item=>(
                        <ListItemButton component="a" href={item.path} key={item.title}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title}></ListItemText>
                        </ListItemButton>
                        ))}
                    
                </List>
            </nav>

        </Box>
    </>);
}