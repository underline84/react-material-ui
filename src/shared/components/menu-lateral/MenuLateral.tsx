import { Box, Drawer, useTheme, Avatar, 
        Divider, List, ListItemButton, 
        ListItemIcon, ListItemText, Icon} from "@mui/material";


export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const theme = useTheme();

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(24)} height="100%" display="flex" flexDirection="column">

                    <Box width="100%" height={theme.spacing(16)} display="flex"
                        alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="https://avatars.githubusercontent.com/u/84279332?s=400&u=c0d53f49c83fc07f3b4254d57ee3a165003c3e29&v=4" />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial" />
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>

            </Drawer>

            <Box height="100vh" marginLeft={theme.spacing(24)}>
                {children}
            </Box>

        </>
    );
}