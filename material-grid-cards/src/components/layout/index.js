import React, { Component, Children } from 'react';
import {
    AppBar, Toolbar, Typography, Drawer, Hidden, Divider,IconButton, MenuList, MenuItem
} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link,withRouter  } from 'react-router-dom';
import {compose} from 'recompose';

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});



class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            names:[{name:"ganesh",id:1},{name:"kevin",id:2},{name:"bob",id:3},{name:"gru",id:4}]
        }
        this.setMobileOpen = this.setMobileOpen.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }
    handleDrawerToggle() {
        console.log("called",this.state.mobileOpen);
        this.setMobileOpen();
    }
    setMobileOpen() {
        this.setState({ mobileOpen:!this.state.mobileOpen });
        console.log("after called",this.state.mobileOpen);
    }
    render() {
       // let { mobileOpen } = this.state.mobileOpen;
        let {children} =this.props;
        let {classes} =this.props;
        const { window } = this.props;
        const {location : {pathname}} = this.props;

        console.log(pathname);
        console.log("mobileOpen :" ,this.state.mobileOpen);
        const drawer = (
            <div>
                 <Hidden smDown>
                <div className={classes.toolbar} />
                </Hidden>
                <MenuList>
                 <MenuItem component={Link} to="/" selected={"/"===pathname}> 
                  Home
                 </MenuItem>
                 <MenuItem>
                  Team
                 </MenuItem>
                 <MenuList>
                  {this.state.names.map(person=>{
                      const to=`/users/${person.name}`;
                   return <MenuItem className={classes.nested} 
                                key={person.id}
                                component={Link} 
                                to={to}
                                selected={to===pathname}
                                >
                                {person.name}
                          </MenuItem>
                  })

                  }

                 </MenuList>
                </MenuList>

               

            </div>
        );
        const container = window !== undefined ? () => window().document.body : undefined;

        return (

            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Agile Team Diary
                </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"

                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        dfdfd
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>


        );
    }
}


export default compose(
    withRouter,
    withStyles(useStyles)
)(Layout);