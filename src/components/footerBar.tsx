import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    styled,
} from '@mui/material';
import {
    Home as HomeIcon,
    AddCircleOutline as NewPostIcon,
    AccountCircle as ProfileIcon,
} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '8px 0',
}));

const FooterBar: React.FC = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                top: 'auto',
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                borderTop: '2px solid rgba(145, 145, 145, 0.23)',
            }}
        >
            <StyledToolbar>
                <IconButton color="inherit">
                    <HomeIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit">
                    <NewPostIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit">
                    <ProfileIcon fontSize="large" />
                </IconButton>
            </StyledToolbar>
        </AppBar>
    );
};

export default FooterBar;
