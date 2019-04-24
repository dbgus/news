import React from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Flag from '@material-ui/icons/Flag';
import NewsCardItem from './NewsCardItem'

import LoadingCmp from './Loading'



const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    iconBox: {
        padding: 15
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});




function NewsCard({ loading, data, CountryChoice, CatOp, CatCl, CtaChange, catOpen, open, DrawerOp, DrawerCl, classes, theme, CoinChange, coin, category }) {
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={DrawerOp}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        NEWS !!!! :)
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={DrawerCl}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Divider />

                <ListItem onClick={CountryChoice} className={classes.iconBox} button key="country" >
                    <ListItemIcon>
                        <Flag />
                    </ListItemIcon>
                    <ListItemText primary="국가 설정" />
                </ListItem>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">기사 카테고리</InputLabel>
                    <Select
                        open={catOpen}
                        onClose={CatCl}
                        onOpen={CatOp}
                        value={category}
                        onChange={CtaChange}
                        inputProps={{
                            name: 'category',
                            id: 'demo-controlled-open-select',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="business">business</MenuItem>
                        <MenuItem value="entertainment">entertainment</MenuItem>
                        <MenuItem value="general">general</MenuItem>
                        <MenuItem value="health">health</MenuItem>
                        <MenuItem value="science">science</MenuItem>
                        <MenuItem value="sports">sports</MenuItem>
                        <MenuItem value="technology">technology</MenuItem>

                    </Select>
                </FormControl>





                <Divider />
                <Divider />
                <ListItem key="coin">
                    <ListItemIcon>
                        <AttachMoney />
                    </ListItemIcon>
                    <ListItemText primary="비트코인" />
                    <Switch
                        checked={coin}
                        onChange={CoinChange}
                    />
                </ListItem>
            </Drawer>
            {loading ? <LoadingCmp /> :
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className="NewsCardItemBox">
                        {
                            data.map((res, index) =>
                                <NewsCardItem key={index} data={res} />
                            )
                        }
                    </div>

                    <div className={classes.drawerHeader} />

                </main>}
        </div>
    );
}


export default withStyles(styles, { withTheme: true })(NewsCard);
