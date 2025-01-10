// FooterBar.tsx
import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NewPostIcon from '@mui/icons-material/Add'; 
import ProfileIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

import { styled, Box } from '@mui/material';
import { Navigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0.5),
    },
}));

const FooterContainer = styled(Box)(() => ({
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        opacity: 0,
        transition: 'opacity 0.3s, transform 0.3s',
        transform: 'scale(0.5)',
    },
    '&:active::after': {
        opacity: 1,
        transform: 'scale(.7)',
    },
}));

const FooterBar: React.FC<{onAddContent: () => void}> = ({onAddContent}) => {
    const navigate = useNavigate();
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
                    <CustomIconButton color="inherit" disableRipple>
                        <HomeIcon fontSize="large" />
                    </CustomIconButton>
                    <CustomIconButton color="inherit" disableRipple onClick={onAddContent}> 
                        <NewPostIcon fontSize="large" />
                    </CustomIconButton>
                    <CustomIconButton color="inherit" disableRipple onClick={()=> navigate('/login')}>
                        <ProfileIcon fontSize="large" />
                    </CustomIconButton>
                </StyledToolbar>
            </FooterContainer>
        </AppBar>
    );
};

export default FooterBar;

