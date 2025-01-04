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

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(1), // Reduced padding
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0.5), // Smaller padding for larger screens
    },
}));

const FooterContainer = styled(Box)(() => ({
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
}));

const CenterIconButton = styled(IconButton)(({ theme }) => ({
    fontSize: '2.5rem', 
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem', 
    },
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
                    <CenterIconButton color="inherit">
                        <NewPostIcon fontSize="inherit" />
                    </CenterIconButton>
                    <IconButton color="inherit">
                        <ProfileIcon fontSize="large" />
                    </IconButton>
                </StyledToolbar>
            </FooterContainer>
        </AppBar>
    );
};

export default FooterBar;
