import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    styled,
    alpha,
} from '@mui/material';
import { Search as SearchIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const Logo = styled(Typography)(() => ({
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: 'Grand Hotel, cursive',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.12),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    opacity: 0.5,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    boxSizing: 'border-box',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 5),
        paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(1),
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
        transform: 'scale(0.4)',
        pointerEvents: 'none',
    },
    '&:active::after': {
        opacity: 1,
        transform: 'scale(1)',
    },
}));


const Navbar: React.FC = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderBottom: '2px solid rgba(145, 145, 145, .23)',
            }}
        >
            <StyledToolbar>
                <Logo variant="h6" noWrap>
                    Catstagram
                </Logo>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <div>
                    <CustomIconButton color="inherit" disableRipple>
                        <Badge badgeContent={4} color="secondary">
                            <FavoriteBorderIcon />
                        </Badge>
                    </CustomIconButton>
                </div>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
