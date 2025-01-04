import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    styled,
    Box,
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
    width: '100%',
}));

const FooterContainer = styled(Box)(() => ({
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
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
            <FooterContainer>
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
            </FooterContainer>
        </AppBar>
    );
};

export default FooterBar;
