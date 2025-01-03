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
import {
    Search as SearchIcon,
    Home as HomeIcon,
    FavoriteBorder as FavoriteBorderIcon, // Updated icon
    AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const Logo = styled(Typography)(() => ({
    flexGrow: 1,
    textAlign: 'center',
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

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '2px solid rgba(145, 145, 145, .23)' }}>
            <StyledToolbar>
                <IconButton color="inherit">
                    <HomeIcon />
                </IconButton>
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
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <FavoriteBorderIcon />
                        </Badge>
                    </IconButton>
                </div>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
