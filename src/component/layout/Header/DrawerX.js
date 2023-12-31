import * as React from 'react';
import {useState ,useEffect} from 'react';
import { useAlert } from "react-alert";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom';
import { clearErrors, getProduct } from "../../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function DrawerX() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [category,setCategory]=useState("");
  
    const dispatch =useDispatch();
    
    const alert = useAlert();
    const [currentPage, setCurrentPage] = useState(1);
    
    
    const {products,loading,error,productsCount,resultPerPage}=useSelector(
        (state)=> state.products
    );
  
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  
  useEffect (()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  
      dispatch(getProduct(currentPage,category));
  },[dispatch,currentPage,alert,error,category]);

  return (
    
    <Box sx={{ display: 'flex',height:'60px' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{background:'black'}}>
        <Toolbar>
          <Typography  component={Link}
          to="/" noWrap sx={{ flexGrow: 1 ,color:'white', fontSize:'25px' ,marginLeft:'30px',fontweight:'bold' , textDecoration: "none",
          boxShadow: "none"}} >
            ORLOV
          </Typography>
          <IconButton
          color="inherit"
            aria-label="open drawer"
            edge="start"
            component={Link}
            to="/search"
            sx={{ ...(open && { display: 'none'}) }}>
            <SearchIcon/>
          </IconButton>
          <IconButton 
          color="inherit"
            aria-label="open drawer"
            
            
            sx={{ ...(open && { display: 'none' }) }}>
            <ShoppingBagIcon/>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography sx={{fontSize:'25px'}}> Menu </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem sx={{padding:'4px',marginLeft:'4px'}}>
            <ListItemButton component={Link} to="/products">
              <ListItemText primary={'All Products'}/>
           </ListItemButton>
          </ListItem>
          {['TShirt', 'Shirts', 'Cargo', 'Hoodie' , 'Denim'].map((text, index) => (
            <ListItem key={text} sx={{padding:'4px',marginLeft:'4px'}}>
              <ListItemButton component={Link} to={`/products/${text}`}>
                
                <ListItemText primary={`${text}s`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Account', 'Contact'].map((text, index) => (
            <ListItem key={text} sx={{padding:'4px',marginLeft:'4px'}}>
              <ListItemButton component={Link} to={index%2===0?"/login":"/contact"}>
                <ListItemIcon>
                  {index % 2 === 0 ? <AccountCircleIcon/> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}