import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
} from '@mui/material';
import { Search as SearchIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar className="navbar-toolbar">
                <Typography variant="h6" noWrap className="navbar-logo">
                    Catstagram
                </Typography>
                <div className="navbar-search">
                    <div className="navbar-search-icon-wrapper">
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        className="navbar-input-base"
                    />
                </div>
                <div>
                    <IconButton color="inherit" className="navbar-icon-button" disableRipple>
                        <Badge badgeContent={4} color="secondary">
                            <FavoriteBorderIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
