import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, Button, Menu, MenuItem, ListItemText, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FilterListIcon from '@material-ui/icons/FilterList';

import useStyles from './styles.js';

// Header component to display the app bar and search/filter options
const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectType = (type) => {
    // Handle the selected type here (you can pass a function from the parent component if needed)
    console.log('Selected type:', type);
    handleCloseMenu();
  };

  // Header component displaying the app bar and search/filter options
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          TRAVEL GUIDER
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" flex="1">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Where to?..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              onChange={(e) => {}}
            />
          </div>
        </Box>
        <div>
          <Button
            aria-label="filter"
            aria-controls="type-menu"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
            endIcon={<ArrowDropDownIcon />}
            className={classes.button}
          >
            AttractionS
          </Button>
          <Menu
            id="type-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => handleSelectType('Museums')}>
              <ListItemText primary="Museums" />
            </MenuItem>
            <MenuItem onClick={() => handleSelectType('Malls')}>
              <ListItemText primary="Malls" />
            </MenuItem>
            <MenuItem onClick={() => handleSelectType('Religious Sites')}>
              <ListItemText primary="Religious Sites" />
            </MenuItem>
            <MenuItem onClick={() => handleSelectType('Parks and Gardens')}>
              <ListItemText primary="Parks and Gardens" />
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
