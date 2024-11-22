


// // import * as React from 'react';
// // import { styled, alpha, useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import InputBase from '@mui/material/InputBase';
// // import Badge from '@mui/material/Badge';
// // import MenuItem from '@mui/material/MenuItem';
// // import Menu from '@mui/material/Menu';
// // import Drawer from '@mui/material/Drawer';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import List from '@mui/material/List';
// // import Divider from '@mui/material/Divider';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemText from '@mui/material/ListItemText';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import SearchIcon from '@mui/icons-material/Search';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import MoreIcon from '@mui/icons-material/MoreVert';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// // import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// // import logo from '../Componet/img/Screenshot 2024-07-19 112046.png';
// // import Dialog from '@mui/material/Dialog';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogActions from '@mui/material/DialogActions';
// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import Birthday from '../Componet/img/birthday_flowers.webp'
// // import Anniversary from '../Componet/img/Anniversary.jpg'
// // import Engagement from '../Componet/img/Engagement.jpg'
// // import Opening from '../Componet/img/Opening.webp'
// // import Congratulations from '../Componet/img/Congratulations.webp'



// // const drawerWidth = 240;

// // const Search = styled('div')(({ theme }) => ({
// //   position: 'relative',
// //   borderRadius: theme.shape.borderRadius,
// //   backgroundColor: alpha(theme.palette.common.black, 0.15),
// //   '&:hover': {
// //     backgroundColor: alpha(theme.palette.common.black, 0.25),
// //   },
// //   marginRight: theme.spacing(2),
// //   marginLeft: 0,
// //   width: '100%',
// //   [theme.breakpoints.up('sm')]: {
// //     marginLeft: theme.spacing(3),
// //     width: '30%',
// //     left: '250px'
// //   },
// // }));

// // const SearchIconWrapper = styled('div')(({ theme }) => ({
// //   padding: theme.spacing(0, 2),
// //   height: '100%',
// //   position: 'absolute',
// //   pointerEvents: 'none',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   color: 'black',
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //   color: 'black',
// //   '& .MuiInputBase-input': {
// //     padding: theme.spacing(1, 1, 1, 0),
// //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //     transition: theme.transitions.create('width'),
// //     width: '100%',
// //     [theme.breakpoints.up('md')]: {
// //       width: '20ch',
// //     },
// //   },
// // }));

// // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
// //   ({ theme, open }) => ({
// //     flexGrow: 1,
// //     padding: theme.spacing(3),
// //     transition: theme.transitions.create('margin', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     marginLeft: -drawerWidth,
// //     ...(open && {
// //       transition: theme.transitions.create('margin', {
// //         easing: theme.transitions.easing.easeOut,
// //         duration: theme.transitions.duration.enteringScreen,
// //       }),
// //       marginLeft: 0,
// //     }),
// //     position: 'relative',
// //   }),
// // );

// // const DrawerHeader = styled('div')(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   padding: theme.spacing(0, 1),
// //   ...theme.mixins.toolbar,
// //   justifyContent: 'flex-start',
// // }));

// // function Navbar() {
// //   const theme = useTheme();
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
// //   const [open, setOpen] = React.useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
// //   const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
// //   const [openSignUpDialog, setOpenSignUpDialog] = React.useState(false);
// //   const [loginDetails, setLoginDetails] = React.useState({ username: '', password: '' });
// //   const [signupDetails, setSignupDetails] = React.useState({ username: '', password: '' });

// //   const isMenuOpen = Boolean(anchorEl);
// //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// //   const handleProfileMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMobileMenuClose = () => {
// //     setMobileMoreAnchorEl(null);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //     handleMobileMenuClose();
// //   };

// //   const handleMobileMenuOpen = (event) => {
// //     setMobileMoreAnchorEl(event.currentTarget);
// //   };

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   const handleLoginOpen = () => {
// //     setOpenLoginDialog(true);
// //   };

// //   const handleLoginClose = () => {
// //     setOpenLoginDialog(false);
// //   };

// //   const handleSignUpOpen = () => {
// //     setOpenSignUpDialog(true);
// //   };

// //   const handleSignUpClose = () => {
// //     setOpenSignUpDialog(false);
// //   };

// //   const handleLoginChange = (event) => {
// //     setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value });
// //   };

// //   const handleSignupChange = (event) => {
// //     setSignupDetails({ ...signupDetails, [event.target.name]: event.target.value });
// //   };

// //   const handleLogin = () => {
// //     // Replace with real authentication logic
// //     setIsLoggedIn(true);
// //     handleLoginClose();
// //   };

// //   const handleSignUp = () => {
// //     // Replace with real sign-up logic
// //     console.log('Sign Up Details:', signupDetails);
// //     handleSignUpClose();
// //   };

// //   const handleLogout = () => {
// //     setIsLoggedIn(false);
// //     handleMenuClose();
// //   };

// //   const menuId = 'primary-search-account-menu';
// //   const renderMenu = (
// //     <Menu
// //       anchorEl={anchorEl}
// //       anchorOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       id={menuId}
// //       keepMounted
// //       transformOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       open={isMenuOpen}
// //       onClose={handleMenuClose}
// //     >
// //       {isLoggedIn ? (
// //         <>
// //           <MenuItem onClick={handleLogout}>Logout</MenuItem>
// //         </>
// //       ) : (
// //         <>
// //           <MenuItem onClick={handleLoginOpen}>Login</MenuItem>
// //           <MenuItem onClick={handleSignUpOpen}>Sign Up</MenuItem>
// //         </>
// //       )}
// //     </Menu>
// //   );

// //     const ProductBox = styled(Box)(({ theme }) => ({
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: theme.spacing(1),
// // }));

// // const ProductImage = styled('img')(({ theme }) => ({
// //     borderRadius: '50%',
// //     padding: theme.spacing(1),
// //     backgroundColor: 'transparent', 
// //     width: '100px',
// //     height: '100px',
// //     marginBottom: theme.spacing(1),
// //     border: 'none', 
// // }));


// // const products = [
// //     {
// //         name: 'Birthday',
// //         imageUrl: Birthday
// //     },
// //     {
// //       name: 'Engagement',
// //       imageUrl: Engagement 
// //     },
// //     {
// //       name: 'Anniversary',
// //       imageUrl: Anniversary 
// //     },

// //     {
// //       name: 'Opening-Ceremony',
// //       imageUrl: Opening 
// //     },
// //     {
// //         name: 'Congratulations',
// //         imageUrl: Congratulations
// //     },
// // // //     {
// // // //         name: 'Photo Frames',
// // // //         imageUrl: photoFrem, // Replace with the actual image URL
// // // //     },
// // // //     {
// // // //         name: 'Phone Cases',
// // // //         imageUrl: phoneCase, // Replace with the actual image URL
// // // //     },
// // ];


// //   const mobileMenuId = 'primary-search-account-menu-mobile';
// //   const renderMobileMenu = (
// //     <Menu
// //       anchorEl={mobileMoreAnchorEl}
// //       anchorOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       id={mobileMenuId}
// //       keepMounted
// //       transformOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       open={isMobileMenuOpen}
// //       onClose={handleMobileMenuClose}
// //     >
// //       <MenuItem>
// //         <IconButton size="large" aria-label="show new mails" color="inherit">
// //           <Badge color="error">
// //             <FavoriteBorderIcon sx={{ color: 'black' }} />
// //           </Badge>
// //         </IconButton>
// //         <p style={{ color: 'black' }}>Messages</p>
// //       </MenuItem>
// //       <MenuItem>
// //         <IconButton size="large" aria-label="show new notifications" color="inherit">
// //           <Badge color="error">
// //             <NotificationsNoneIcon sx={{ color: 'black' }} />
// //           </Badge>
// //         </IconButton>
// //         <p style={{ color: 'black' }}>Notifications</p>
// //       </MenuItem>
// //       <MenuItem>
// //         <IconButton size="large" aria-label="show cart items" color="inherit">
// //           <Badge color="error">
// //             <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />
// //           </Badge>
// //         </IconButton>
// //         <p style={{ color: 'black' }}>Cart</p>
// //       </MenuItem>
// //       <MenuItem onClick={handleProfileMenuOpen}>
// //         <IconButton
// //           size="large"
// //           aria-label="account of current user"
// //           aria-controls={menuId}
// //           aria-haspopup="true"
// //           color="inherit"
// //         >
// //           <AccountCircle sx={{ color: 'black' }} />
// //         </IconButton>
// //         <p style={{ color: 'black' }}>Profile</p>
// //       </MenuItem>
// //     </Menu>
// //   );



// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CssBaseline />
// //       <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
// //         <Toolbar>
// //           <IconButton
// //             size="large"
// //             edge="start"
// //             color="inherit"
// //             aria-label="open drawer"
// //             sx={{ mr: 2 }}
// //             onClick={handleDrawerOpen}
// //           >
// //             <MenuIcon sx={{ color: 'black' }} />
// //           </IconButton>
// //           <img src={logo} width={'12%'} alt="Logo" />
// //           <Search sx={{ left: '320px' }}>
// //             <SearchIconWrapper>
// //               <SearchIcon />
// //             </SearchIconWrapper>
// //             <StyledInputBase
// //               placeholder="Search for bouquet"
// //               inputProps={{ 'aria-label': 'search' }}
// //             />
// //           </Search>
// //           <Box sx={{ flexGrow: 1 }} />
// //           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
// //             <IconButton size="large" aria-label="show new mails" color="inherit">
// //               <Badge color="error">
// //                 <FavoriteBorderIcon sx={{ color: 'black' }} />
// //               </Badge>
// //             </IconButton>
// //             <IconButton size="large" aria-label="show new notifications" color="inherit">
// //               <Badge color="error">
// //                 <NotificationsNoneIcon sx={{ color: 'black' }} />
// //               </Badge>
// //             </IconButton>
// //             <IconButton size="large" aria-label="show cart items" color="inherit">
// //               <Badge color="error">
// //                 <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />
// //               </Badge>
// //             </IconButton>
// //             <IconButton
// //               size="large"
// //               edge="end"
// //               aria-label="account of current user"
// //               aria-controls={menuId}
// //               aria-haspopup="true"
// //               onClick={handleProfileMenuOpen}
// //               color="inherit"
// //             >
// //               <AccountCircle sx={{ color: 'black' }} />
// //             </IconButton>
// //           </Box>
// //           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
// //             <IconButton
// //               size="large"
// //               aria-label="show more"
// //               aria-controls={mobileMenuId}
// //               aria-haspopup="true"
// //               onClick={handleMobileMenuOpen}
// //               color="inherit"
// //             >
// //               <MoreIcon sx={{ color: 'black' }} />
// //             </IconButton>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>
// //       {renderMobileMenu}
// //       {renderMenu}
// //       <Drawer
// //         sx={{
// //           width: drawerWidth,
// //           flexShrink: 0,
// //           '& .MuiDrawer-paper': {
// //             width: drawerWidth,
// //           },
// //         }}
// //         variant="persistent"
// //         anchor="left"
// //         open={open}
// //       >
// //         <DrawerHeader>
// //           <IconButton onClick={handleDrawerClose}>
// //             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
// //           </IconButton>
// //         </DrawerHeader>
// //         <Divider />
// //         <List>
// //           {['Same Day Delivery Gifts', 'Birthday Gifts', 'Personalized Gifts', 'Rakhi'].map((text) => (
// //             <ListItem key={text} disablePadding>
// //               <ListItemButton>
// //                 <ListItemText primary={text} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //         <Divider />
// //         <Typography className='shop'>Shop By:</Typography>
// //         <List>
// //           {['Personal Occasions', 'Festivals', 'Special Days'].map((text) => (
// //             <ListItem key={text} disablePadding>
// //               <ListItemButton>
// //                 <ListItemText primary={text} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //       </Drawer>
// //       <Main open={open}>
// //         <DrawerHeader />
// //       </Main>

// //       {/* Login Dialog */}
// //       <Dialog open={openLoginDialog} onClose={handleLoginClose}>
// //         <DialogTitle>Login</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             name="username"
// //             label="Username"
// //             type="text"
// //             fullWidth
// //             variant="outlined"
// //             value={loginDetails.username}
// //             onChange={handleLoginChange}
// //           />
// //           <TextField
// //             margin="dense"
// //             name="password"
// //             label="Password"
// //             type="password"
// //             fullWidth
// //             variant="outlined"
// //             value={loginDetails.password}
// //             onChange={handleLoginChange}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleLoginClose}>Cancel</Button>
// //           <Button onClick={handleLogin}>Login</Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Sign Up Dialog */}
// //       <Dialog open={openSignUpDialog} onClose={handleSignUpClose}>
// //         <DialogTitle>Sign Up</DialogTitle>
// //         <DialogContent>
// //           <TextField
// //             autoFocus
// //             margin="dense"
// //             name="username"
// //             label="Username"
// //             type="text"
// //             fullWidth
// //             variant="outlined"
// //             value={signupDetails.username}
// //             onChange={handleSignupChange}
// //           />
// //           <TextField
// //             margin="dense"
// //             name="password"
// //             label="Password"
// //             type="password"
// //             fullWidth
// //             variant="outlined"
// //             value={signupDetails.password}
// //             onChange={handleSignupChange}
// //           />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleSignUpClose}>Cancel</Button>
// //           <Button onClick={handleSignUp}>Sign Up</Button>
// //         </DialogActions>
// //       </Dialog>

// //        <Box
// //                 sx={{
// //                     width: '70%',
// //                     display: 'flex',
// //                     justifyContent: 'center', // Center the content horizontally
// //                     flexWrap: 'wrap',
// //                     // backgroundColor: '#f7f7f7',
// //                     padding: 8 ,
// //                     marginleft: '250px' ,
// //                     margin: '0 auto', // Center the Box itself
// //                     marginRight: '200px'
// //                 }}
// //             >
// //                 {products.map((product) => (
// //                     <ProductBox key={product.name}>
// //                         <ProductImage src={product.imageUrl} alt={product.name} />
// //                         <Typography>{product.name}</Typography>
// //                     </ProductBox>
// //                 ))}
// //             </Box> 

// //     </Box>
// //   );
// // }

// // export default Navbar;






// // // import * as React from 'react';
// // // import { styled, alpha, useTheme } from '@mui/material/styles';
// // // import Box from '@mui/material/Box';
// // // import AppBar from '@mui/material/AppBar';
// // // import Toolbar from '@mui/material/Toolbar';
// // // import IconButton from '@mui/material/IconButton';
// // // import Typography from '@mui/material/Typography';
// // // import InputBase from '@mui/material/InputBase';
// // // import Badge from '@mui/material/Badge';
// // // import MenuItem from '@mui/material/MenuItem';
// // // import Menu from '@mui/material/Menu';
// // // import Drawer from '@mui/material/Drawer';
// // // import CssBaseline from '@mui/material/CssBaseline';
// // // import List from '@mui/material/List';
// // // import Divider from '@mui/material/Divider';
// // // import ListItem from '@mui/material/ListItem';
// // // import ListItemButton from '@mui/material/ListItemButton';
// // // import ListItemText from '@mui/material/ListItemText';
// // // import MenuIcon from '@mui/icons-material/Menu';
// // // import SearchIcon from '@mui/icons-material/Search';
// // // import AccountCircle from '@mui/icons-material/AccountCircle';
// // // import MoreIcon from '@mui/icons-material/MoreVert';
// // // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // // import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// // // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // // import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// // // import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// // // import logo from '../Componet/img/Screenshot 2024-07-19 112046.png';
// // // import Dialog from '@mui/material/Dialog';
// // // import DialogTitle from '@mui/material/DialogTitle';
// // // import DialogContent from '@mui/material/DialogContent';
// // // import DialogActions from '@mui/material/DialogActions';
// // // import TextField from '@mui/material/TextField';
// // // import Button from '@mui/material/Button';
// // // import Birthday from '../Componet/img/birthday_flowers.webp'
// // // import Anniversary from '../Componet/img/Anniversary.jpg'
// // // import Engagement from '../Componet/img/Engagement.jpg'
// // // import Opening from  '../Componet/img/Opening.webp'
// // // import Congratulations from '../Componet/img/Congratulations.webp'

// // // const drawerWidth = 240;

// // // const Search = styled('div')(({ theme }) => ({
// // //   position: 'relative',
// // //   borderRadius: theme.shape.borderRadius,
// // //   backgroundColor: alpha(theme.palette.common.black, 0.15),
// // //   '&:hover': {
// // //     backgroundColor: alpha(theme.palette.common.black, 0.25),
// // //   },
// // //   marginRight: theme.spacing(2),
// // //   marginLeft: 0,
// // //   width: '100%',
// // //   [theme.breakpoints.up('sm')]: {
// // //     marginLeft: theme.spacing(3),
// // //     width: '30%',
// // //     left: '250px'
// // //   },
// // // }));

// // // const SearchIconWrapper = styled('div')(({ theme }) => ({
// // //   padding: theme.spacing(0, 2),
// // //   height: '100%',
// // //   position: 'absolute',
// // //   pointerEvents: 'none',
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   justifyContent: 'center',
// // //   color: 'black',
// // // }));

// // // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// // //   color: 'black',
// // //   '& .MuiInputBase-input': {
// // //     padding: theme.spacing(1, 1, 1, 0),
// // //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// // //     transition: theme.transitions.create('width'),
// // //     width: '100%',
// // //     [theme.breakpoints.up('md')]: {
// // //       width: '20ch',
// // //     },
// // //   },
// // // }));

// // // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
// // //   ({ theme, open }) => ({
// // //     flexGrow: 1,
// // //     padding: theme.spacing(3),
// // //     transition: theme.transitions.create('margin', {
// // //       easing: theme.transitions.easing.sharp,
// // //       duration: theme.transitions.duration.leavingScreen,
// // //     }),
// // //     marginLeft: -drawerWidth,
// // //     ...(open && {
// // //       transition: theme.transitions.create('margin', {
// // //         easing: theme.transitions.easing.easeOut,
// // //         duration: theme.transitions.duration.enteringScreen,
// // //       }),
// // //       marginLeft: 0,
// // //     }),
// // //     position: 'relative',
// // //   }),
// // // );

// // // const DrawerHeader = styled('div')(({ theme }) => ({
// // //   display: 'flex',
// // //   alignItems: 'center',
// // //   padding: theme.spacing(0, 1),
// // //   ...theme.mixins.toolbar,
// // //   justifyContent: 'flex-start',
// // // }));

// // // function Navbar() {
// // //   const theme = useTheme();
// // //   const [anchorEl, setAnchorEl] = React.useState(null);
// // //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
// // //   const [open, setOpen] = React.useState(false);
// // //   const [isLoggedIn, setIsLoggedIn] = React.useState(false);
// // //   const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
// // //   const [openSignUpDialog, setOpenSignUpDialog] = React.useState(false);
// // //   const [loginDetails, setLoginDetails] = React.useState({ username: '', password: '' });
// // //   const [signupDetails, setSignupDetails] = React.useState({ username: '', password: '' });

// // //   const isMenuOpen = Boolean(anchorEl);
// // //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// // //   const handleProfileMenuOpen = (event) => {
// // //     setAnchorEl(event.currentTarget);
// // //   };

// // //   const handleMobileMenuClose = () => {
// // //     setMobileMoreAnchorEl(null);
// // //   };

// // //   const handleMenuClose = () => {
// // //     setAnchorEl(null);
// // //     handleMobileMenuClose();
// // //   };

// // //   const handleMobileMenuOpen = (event) => {
// // //     setMobileMoreAnchorEl(event.currentTarget);
// // //   };

// // //   const handleDrawerOpen = () => {
// // //     setOpen(true);
// // //   };

// // //   const handleDrawerClose = () => {
// // //     setOpen(false);
// // //   };

// // //   const handleLoginOpen = () => {
// // //     setOpenLoginDialog(true);
// // //   };

// // //   const handleLoginClose = () => {
// // //     setOpenLoginDialog(false);
// // //   };

// // //   const handleSignUpOpen = () => {
// // //     setOpenSignUpDialog(true);
// // //   };

// // //   const handleSignUpClose = () => {
// // //     setOpenSignUpDialog(false);
// // //   };

// // //   const handleLoginChange = (event) => {
// // //     setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value });
// // //   };

// // //   const handleSignupChange = (event) => {
// // //     setSignupDetails({ ...signupDetails, [event.target.name]: event.target.value });
// // //   };

// // //   const handleLogin = () => {
// // //     // Replace with real authentication logic
// // //     setIsLoggedIn(true);
// // //     handleLoginClose();
// // //   };

// // //   const handleSignUp = () => {
// // //     // Replace with real sign-up logic
// // //     console.log('Sign Up Details:', signupDetails);
// // //     handleSignUpClose();
// // //   };

// // //   const handleLogout = () => {
// // //     setIsLoggedIn(false);
// // //     handleMenuClose();
// // //   };

// // //   const menuId = 'primary-search-account-menu';
// // //   const renderMenu = (
// // //     <Menu
// // //       anchorEl={anchorEl}
// // //       anchorOrigin={{
// // //         vertical: 'top',
// // //         horizontal: 'right',
// // //       }}
// // //       id={menuId}
// // //       keepMounted
// // //       transformOrigin={{
// // //         vertical: 'top',
// // //         horizontal: 'right',
// // //       }}
// // //       open={isMenuOpen}
// // //       onClose={handleMenuClose}
// // //     >
// // //       {isLoggedIn ? (
// // //         <>
// // //           <MenuItem onClick={handleLogout}>Logout</MenuItem>
// // //         </>
// // //       ) : (
// // //         <>
// // //           <MenuItem onClick={handleLoginOpen}>Login</MenuItem>
// // //           <MenuItem onClick={handleSignUpOpen}>Sign Up</MenuItem>
// // //         </>
// // //       )}
// // //     </Menu>
// // //   );

// // //   const mobileMenuId = 'primary-search-account-menu-mobile';
// // //   const renderMobileMenu = (
// // //     <Menu
// // //       anchorEl={mobileMoreAnchorEl}
// // //       anchorOrigin={{
// // //         vertical: 'top',
// // //         horizontal: 'right',
// // //       }}
// // //       id={mobileMenuId}
// // //       keepMounted
// // //       transformOrigin={{
// // //         vertical: 'top',
// // //         horizontal: 'right',
// // //       }}
// // //       open={isMobileMenuOpen}
// // //       onClose={handleMobileMenuClose}
// // //     >
// // //       <MenuItem>
// // //         <IconButton size="large" aria-label="show new mails" color="inherit">
// // //           <Badge color="error">
// // //             <FavoriteBorderIcon sx={{ color: 'black' }} />
// // //           </Badge>
// // //         </IconButton>
// // //         <p style={{ color: 'black' }}>Messages</p>
// // //       </MenuItem>
// // //       <MenuItem>
// // //         <IconButton size="large" aria-label="show new notifications" color="inherit">
// // //           <Badge color="error">
// // //             <NotificationsNoneIcon sx={{ color: 'black' }} />
// // //           </Badge>
// // //         </IconButton>
// // //         <p style={{ color: 'black' }}>Notifications</p>
// // //       </MenuItem>
// // //       <MenuItem>
// // //         <IconButton size="large" aria-label="show cart items" color="inherit">
// // //           <Badge color="error">
// // //             <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />
// // //           </Badge>
// // //         </IconButton>
// // //         <p style={{ color: 'black' }}>Cart</p>
// // //       </MenuItem>
// // //       <MenuItem onClick={handleProfileMenuOpen}>
// // //         <IconButton
// // //           size="large"
// // //           aria-label="account of current user"
// // //           aria-controls={menuId}
// // //           aria-haspopup="true"
// // //           color="inherit"
// // //         >
// // //           <AccountCircle sx={{ color: 'black' }} />
// // //         </IconButton>
// // //         <p style={{ color: 'black' }}>Profile</p>
// // //       </MenuItem>
// // //     </Menu>
// // //   );

// // //   const ProductBox = styled(Box)(({ theme }) => ({
// // //     display: 'flex',
// // //     flexDirection: 'column',
// // //     alignItems: 'center',
// // //     padding: theme.spacing(1),
// // // }));

// // // const ProductImage = styled('img')(({ theme }) => ({
// // //     borderRadius: '50%',
// // //     padding: theme.spacing(1),
// // //     backgroundColor: 'transparent', 
// // //     width: '100px',
// // //     height: '100px',
// // //     marginBottom: theme.spacing(1),
// // //     border: 'none', 
// // // }));


// // // const products = [
// // //     {
// // //         name: 'Birthday',
// // //         imageUrl: Birthday
// // //     },
// // //     {
// // //       name: 'Engagement',
// // //       imageUrl: Engagement 
// // //     },
// // //     {
// // //       name: 'Anniversary',
// // //       imageUrl: Anniversary 
// // //     },

// // //     {
// // //       name: 'Opening-Ceremony',
// // //       imageUrl: Opening 
// // //     },
// // //     {
// // //         name: 'Congratulations',
// // //         imageUrl: Congratulations, 
// // //     },
// // // //     {
// // // //         name: 'Photo Frames',
// // // //         imageUrl: photoFrem, // Replace with the actual image URL
// // // //     },
// // // //     {
// // // //         name: 'Phone Cases',
// // // //         imageUrl: phoneCase, // Replace with the actual image URL
// // // //     },
// // // ];


// // //   return (
// // //     <Box sx={{ display: 'flex' }}>
// // //       <CssBaseline />
// // //       <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
// // //         <Toolbar>
// // //           <IconButton
// // //             size="large"
// // //             edge="start"
// // //             color="inherit"
// // //             aria-label="open drawer"
// // //             sx={{ mr: 2 }}
// // //             onClick={handleDrawerOpen}
// // //           >
// // //             <MenuIcon sx={{ color: 'black' }} />
// // //           </IconButton>
// // //           <img src={logo} width={'12%'} alt="Logo" />
// // //           <Search sx={{ left: '320px' }}>
// // //             <SearchIconWrapper>
// // //               <SearchIcon />
// // //             </SearchIconWrapper>
// // //             <StyledInputBase
// // //               placeholder="Search for bouquet"
// // //               inputProps={{ 'aria-label': 'search' }}
// // //             />
// // //           </Search>
// // //           <Box sx={{ flexGrow: 1 }} />
// // //           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
// // //             <IconButton size="large" aria-label="show new mails" color="inherit">
// // //               <Badge color="error">
// // //                 <FavoriteBorderIcon sx={{ color: 'black' }} />
// // //               </Badge>
// // //             </IconButton>
// // //             <IconButton size="large" aria-label="show new notifications" color="inherit">
// // //               <Badge color="error">
// // //                 <NotificationsNoneIcon sx={{ color: 'black' }} />
// // //               </Badge>
// // //             </IconButton>
// // //             <IconButton size="large" aria-label="show cart items" color="inherit">
// // //               <Badge color="error">
// // //                 <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />
// // //               </Badge>
// // //             </IconButton>
// // //             <IconButton
// // //               size="large"
// // //               edge="end"
// // //               aria-label="account of current user"
// // //               aria-controls={menuId}
// // //               aria-haspopup="true"
// // //               onClick={handleProfileMenuOpen}
// // //               color="inherit"
// // //             >
// // //               <AccountCircle sx={{ color: 'black' }} />
// // //             </IconButton>
// // //           </Box>
// // //           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
// // //             <IconButton
// // //               size="large"
// // //               aria-label="show more"
// // //               aria-controls={mobileMenuId}
// // //               aria-haspopup="true"
// // //               onClick={handleMobileMenuOpen}
// // //               color="inherit"
// // //             >
// // //               <MoreIcon sx={{ color: 'black' }} />
// // //             </IconButton>
// // //           </Box>
// // //         </Toolbar>
// // //       </AppBar>
// // //       {renderMobileMenu}
// // //       {renderMenu}
// // //       <Drawer
// // //         sx={{
// // //           width: drawerWidth,
// // //           flexShrink: 0,
// // //           '& .MuiDrawer-paper': {
// // //             width: drawerWidth,
// // //           },
// // //         }}
// // //         variant="persistent"
// // //         anchor="left"
// // //         open={open}
// // //       >
// // //         <DrawerHeader>
// // //           <IconButton onClick={handleDrawerClose}>
// // //             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
// // //           </IconButton>
// // //         </DrawerHeader>
// // //         <Divider />
// // //         <List>
// // //           {['Same Day Delivery Gifts', 'Birthday Bouquet', 'Engagement Bouquet', 'Anniversary Bouquet' ,'Opening-Ceremony' ,'Congratulations Bouqut'].map((text) => (
// // //             <ListItem key={text} disablePadding>
// // //               <ListItemButton>
// // //                 <ListItemText primary={text} />
// // //               </ListItemButton>
// // //             </ListItem>
// // //           ))}
// // //         </List>
// // //         <Divider />
// // //         <Typography className='shop'>Shop By:</Typography>
// // //         <List>
// // //           {['Personal Occasions', 'Festivals', 'Special Days'].map((text) => (
// // //             <ListItem key={text} disablePadding>
// // //               <ListItemButton>
// // //                 <ListItemText primary={text} />
// // //               </ListItemButton>
// // //             </ListItem>
// // //           ))}
// // //         </List>
// // //       </Drawer>
// // //       <Main open={open}>
// // //         <DrawerHeader />
// // //       </Main>

// // //       {/* Login Dialog */}
// // //       <Dialog open={openLoginDialog} onClose={handleLoginClose}>
// // //         <DialogTitle>Login</DialogTitle>
// // //         <DialogContent>
// // //           <TextField
// // //             autoFocus
// // //             margin="dense"
// // //             name="username"
// // //             label="Username"
// // //             type="text"
// // //             fullWidth
// // //             variant="outlined"
// // //             value={loginDetails.username}
// // //             onChange={handleLoginChange}
// // //           />
// // //           <TextField
// // //             margin="dense"
// // //             name="password"
// // //             label="Password"
// // //             type="password"
// // //             fullWidth
// // //             variant="outlined"
// // //             value={loginDetails.password}
// // //             onChange={handleLoginChange}
// // //           />
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleLoginClose}>Cancel</Button>
// // //           <Button onClick={handleLogin}>Login</Button>
// // //         </DialogActions>
// // //       </Dialog>

// // //       {/* Sign Up Dialog */}
// // //       <Dialog open={openSignUpDialog} onClose={handleSignUpClose}>
// // //         <DialogTitle>Sign Up</DialogTitle>
// // //         <DialogContent>
// // //           <TextField
// // //             autoFocus
// // //             margin="dense"
// // //             name="username"
// // //             label="Username"
// // //             type="text"
// // //             fullWidth
// // //             variant="outlined"
// // //             value={signupDetails.username}
// // //             onChange={handleSignupChange}
// // //           />
// // //           <TextField
// // //             margin="dense"
// // //             name="password"
// // //             label="Password"
// // //             type="password"
// // //             fullWidth
// // //             variant="outlined"
// // //             value={signupDetails.password}
// // //             onChange={handleSignupChange}
// // //           />
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={handleSignUpClose}>Cancel</Button>
// // //           <Button onClick={handleSignUp}>Sign Up</Button>
// // //         </DialogActions>
// // //       </Dialog>



// // //       <Box
// // //                 sx={{
// // //                     width: '70%',
// // //                     display: 'flex',
// // //                     justifyContent: 'center', // Center the content horizontally
// // //                     flexWrap: 'wrap',
// // //                     // backgroundColor: '#f7f7f7',
// // //                     padding: 8 ,
// // //                     marginleft: '250px' ,
// // //                     margin: '0 auto', // Center the Box itself
// // //                     marginRight: '200px'
// // //                 }}
// // //             >
// // //                 {products.map((product) => (
// // //                     <ProductBox key={product.name}>
// // //                         <ProductImage src={product.imageUrl} alt={product.name} />
// // //                         <Typography>{product.name}</Typography>
// // //                     </ProductBox>
// // //                 ))}
// // //             </Box>
// // //     </Box>
// // //   );
// // // }

// // // export default Navbar;



// // import React from 'react';
// // import { styled, alpha } from '@mui/material/styles';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import InputBase from '@mui/material/InputBase';
// // import Badge from '@mui/material/Badge';
// // import MenuItem from '@mui/material/MenuItem';
// // import Menu from '@mui/material/Menu';
// // import Button from '@mui/material/Button';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import SearchIcon from '@mui/icons-material/Search';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// // import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// // import MoreIcon from '@mui/icons-material/MoreVert';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import HelpIcon from '@mui/icons-material/Help';
// // import logo from '../Componet/img/Screenshot 2024-07-19 112046.png'
// // import Birthday from '../Componet/img/birthday_flowers.webp'
// // import Engagement from '../Componet/img/Engagement.jpg'
// // import Anniversary from '../Componet/img/Anniversary.jpg';
// // import Opening from '../Componet/img/Opening.webp';
// // import Congratulations from '../Componet/img/Congratulations.webp';


// // const Search = styled('div')(({ theme }) => ({
// //     position: 'relative',
// //     borderRadius: theme.shape.borderRadius,
// //     backgroundColor: alpha(theme.palette.common.black, 0.15),
// //     '&:hover': {
// //         backgroundColor: alpha(theme.palette.common.black, 0.25),
// //     },
// //     marginRight: theme.spacing(2),
// //     marginLeft: 0,
// //     width: '100%',
// //     right: '10%',
// //     [theme.breakpoints.up('md')]: {
// //         width: '85%',
// //     },
// // }));

// // const SearchIconWrapper = styled('div')(({ theme }) => ({
// //     padding: theme.spacing(0, 2),
// //     height: '100%',
// //     position: 'absolute',
// //     pointerEvents: 'none',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     // width: '20%'
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //     color: 'inherit',
// //     '& .MuiInputBase-input': {
// //         padding: theme.spacing(1, 1, 1, 0),
// //         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //         transition: theme.transitions.create('width'),
// //         width: '100%',
// //         [theme.breakpoints.up('md')]: {
// //             width: '35ch',
// //         },
// //     },
// // }));

// // const ProductBox = styled(Box)(({ theme }) => ({
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: theme.spacing(2),
// // }));

// // const ProductImage = styled('img')(({ theme }) => ({
// //     borderRadius: '50%',
// //     padding: theme.spacing(1),
// //     backgroundColor: 'transparent',
// //     width: '80px',
// //     height: '80px',
// //     marginBottom: theme.spacing(1),
// //     border: 'none',
// // }));

// // const ProductTypography = styled(Typography)(({ theme }) => ({
// //     fontFamily: '"Kaushan Script", cursive',
// // }));


// // const LogoTypography = styled(Typography)(({ theme }) => ({
// //     fontFamily: '"Kaushan Script", cursive',
// //     fontSize: '24px',
// // }));

// // const StyledButton = styled(Button)(({ theme }) => ({
// //     fontFamily: '"Kaushan Script", cursive',
// //     '&:hover': {
// //         color: theme.palette.secondary.main,
// //     },
// // }));

// // function Navbar() {
// //     const [anchorEl, setAnchorEl] = React.useState(null);
// //     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
// //     const [isNotificationsActive, setIsNotificationsActive] = React.useState(false);

// //     const isMenuOpen = Boolean(anchorEl);
// //     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// //     const handleProfileMenuOpen = (event) => {
// //         setAnchorEl(event.currentTarget);
// //     };

// //     const handleMobileMenuClose = () => {
// //         setMobileMoreAnchorEl(null);
// //     };

// //     const handleMenuClose = () => {
// //         setAnchorEl(null);
// //         handleMobileMenuClose();
// //     };

// //     const handleMobileMenuOpen = (event) => {
// //         setMobileMoreAnchorEl(event.currentTarget);
// //     };

// //     const handleNotificationsClick = () => {
// //         setIsNotificationsActive(!isNotificationsActive);
// //     };

// //     const menuId = 'primary-search-account-menu';
// //     const renderMenu = (
// //         <Menu
// //             anchorEl={anchorEl}
// //             anchorOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //             }}
// //             id={menuId}
// //             keepMounted
// //             transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //             }}
// //             open={isMenuOpen}
// //             onClose={handleMenuClose}
// //         >
// //             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
// //             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
// //         </Menu>
// //     );



// //     const mobileMenuId = 'primary-search-account-menu-mobile';
// //     const renderMobileMenu = (
// //         <Menu
// //             anchorEl={mobileMoreAnchorEl}
// //             anchorOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //             }}
// //             id={mobileMenuId}
// //             keepMounted
// //             transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //             }}
// //             open={isMobileMenuOpen}
// //             onClose={handleMobileMenuClose}
// //         >
// //             <MenuItem>
// //                 <IconButton size="large" color="inherit">
// //                     <Badge color="error">
// //                         <FavoriteIcon />
// //                     </Badge>
// //                 </IconButton>
// //                 <p>Favorites</p>
// //             </MenuItem>
// //             <MenuItem>
// //                 <IconButton size="large" color="inherit">
// //                     <Badge color="error">
// //                         <ShoppingCartIcon />
// //                     </Badge>
// //                 </IconButton>
// //                 <p>Cart</p>
// //             </MenuItem>
// //             <MenuItem>
// //                 <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
// //                     <Badge color="error">
// //                         {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
// //                     </Badge>
// //                 </IconButton>
// //                 <p>Notifications</p>
// //             </MenuItem>
// //             <MenuItem onClick={handleProfileMenuOpen}>
// //                 <IconButton
// //                     size="large"
// //                     aria-label="account of current user"
// //                     aria-controls="primary-search-account-menu"
// //                     aria-haspopup="true"
// //                     color="inherit"
// //                 >
// //                     <AccountCircle />
// //                 </IconButton>
// //                 <p>Profile</p>
// //             </MenuItem>
// //             <MenuItem>
// //                 <IconButton size="large" color="inherit">
// //                     <Badge color="error">
// //                         <HelpIcon />
// //                     </Badge>
// //                 </IconButton>
// //                 <p>Help</p>
// //             </MenuItem>
// //         </Menu>
// //     );

// //     const products = [
// //         {
// //             name: 'Birthday',
// //             imageUrl: Birthday,
// //         },
// //         {
// //             name: 'Engagement',
// //             imageUrl: Engagement,
// //         },
// //         {
// //             name: 'Anniversary',
// //             imageUrl: Anniversary,
// //         },
// //         {
// //             name: 'Opening',
// //             imageUrl: Opening,
// //         },
// //         {
// //             name: 'Congratulations',
// //             imageUrl: Congratulations,
// //         },

// //     ];

// //     return (
// //         <div>
// //             <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
// //                 <Toolbar>
// //                     <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
// //                         <MenuIcon />
// //                     </IconButton>
// //                     <LogoTypography
// //                         variant="h6"
// //                         noWrap
// //                         component="div"
// //                         sx={{ display: { xs: 'none', sm: 'block' } }}
// //                     >
// //                         <img src={logo} alt="Clotya" width={'35%'} />
// //                     </LogoTypography>
// //                     <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //                         {/* <StyledButton color="inherit">Home</StyledButton>
// //                         <StyledButton color="inherit">Blog</StyledButton>
// //                         <StyledButton color="inherit">Contact</StyledButton> */}
// //                         <Search>
// //                             <SearchIconWrapper>
// //                                 <SearchIcon />
// //                             </SearchIconWrapper>
// //                             <StyledInputBase
// //                                 placeholder="Search for Products..."
// //                                 inputProps={{ 'aria-label': 'search' }}
// //                             />
// //                         </Search>
// //                     </Box>
// //                     <Box sx={{ flexGrow: 1 }} />
// //                     <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
// //                         <IconButton size='large' color="inherit" className='FavoriteIcon' aria-label="add to favorites">
// //                             <FavoriteIcon />
// //                         </IconButton>
// //                         <IconButton size="large" color="inherit">
// //                             <Badge color="error">
// //                                 <ShoppingCartIcon />
// //                             </Badge>
// //                         </IconButton>
// //                         <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
// //                             <Badge color="error">
// //                                 {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
// //                             </Badge>
// //                         </IconButton>
// //                         <IconButton
// //                             size="large"
// //                             edge="end"
// //                             aria-label="account of current user"
// //                             aria-controls={menuId}
// //                             aria-haspopup="true"
// //                             onClick={handleProfileMenuOpen}
// //                             color="inherit"
// //                         >
// //                             <AccountCircle />
// //                         </IconButton>
// //                         <IconButton
// //                             size="large"
// //                             edge="end"
// //                             sx={{ ml: 1 }}
// //                             color="inherit"
// //                         >
// //                             <HelpIcon />
// //                         </IconButton>
// //                     </Box>
// //                     <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
// //                         <IconButton
// //                             size="large"
// //                             aria-label="show more"
// //                             aria-controls={mobileMenuId}
// //                             aria-haspopup="true"
// //                             onClick={handleMobileMenuOpen}
// //                             color="inherit"
// //                         >
// //                             <MoreIcon />
// //                         </IconButton>
// //                     </Box>
// //                 </Toolbar>
// //                 {renderMobileMenu}
// //                 {renderMenu}
// //             </AppBar>
// //             <Box
// //                 sx={{
// //                     width: '70%',
// //                     display: 'flex',
// //                     justifyContent: 'center', // Center the content horizontally
// //                     flexWrap: 'wrap',
// //                     padding: 2,
// //                     margin: '0 auto', // Center the Box itself
// //                 }}
// //             >
// //                 {products.map((product) => (
// //                     <ProductBox key={product.name}>
// //                         <ProductImage src={product.imageUrl} alt={product.name} />
// //                         <ProductTypography>{product.name}</ProductTypography>
// //                     </ProductBox>
// //                 ))}
// //             </Box>
// //         </div>
// //     );
// // }

// // export default Navbar;

// import React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import HelpIcon from '@mui/icons-material/Help';
// import logo from '../Componet/img/Screenshot 2024-07-19 112046.png'
// import Birthday from '../Componet/img/birthday_flowers.webp'
// import Engagement from '../Componet/img/Engagement.jpg'
// import Anniversary from '../Componet/img/Anniversary.jpg';
// import Opening from '../Componet/img/Opening.webp';
// import Congratulations from '../Componet/img/Congratulations.webp';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.black, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.black, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     right: '10%',
//     [theme.breakpoints.up('md')]: {
//         width: '85%',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '35ch',
//         },
//     },
// }));

// const ProductBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(1),
// }));

// const ProductImage = styled('img')(({ theme }) => ({
//     borderRadius: '50%',
//     padding: theme.spacing(1),
//     backgroundColor: 'transparent',
//     width: '90px',
//     height: '90px',
//     marginBottom: theme.spacing(1),
//     border: 'none',
// }));

// const ProductTypography = styled(Typography)(({ theme }) => ({
//     fontFamily: '"Courgette", cursive',
//     fontSize: '18px',
//     fontWeight: '400'
// }));

// const LogoTypography = styled(Typography)(({ theme }) => ({
//     fontFamily: '"Courgette", cursive',
//     fontSize: '24px',
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//     fontFamily: '"Courgette", cursive',
//     '&:hover': {
//         color: theme.palette.secondary.main,
//     },
// }));

// function Navbar() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//     const [isNotificationsActive, setIsNotificationsActive] = React.useState(false);

//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const handleProfileMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMobileMenuClose = () => {
//         setMobileMoreAnchorEl(null);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         handleMobileMenuClose();
//     };

//     const handleMobileMenuOpen = (event) => {
//         setMobileMoreAnchorEl(event.currentTarget);
//     };

//     const handleNotificationsClick = () => {
//         setIsNotificationsActive(!isNotificationsActive);
//     };

//     const menuId = 'primary-search-account-menu';
//     const renderMenu = (
//         <Menu
//             anchorEl={anchorEl}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             id={menuId}
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//         >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//         </Menu>
//     );

//     const mobileMenuId = 'primary-search-account-menu-mobile';
//     const renderMobileMenu = (
//         <Menu
//             anchorEl={mobileMoreAnchorEl}
//             anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             id={mobileMenuId}
//             keepMounted
//             transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//             }}
//             open={isMobileMenuOpen}
//             onClose={handleMobileMenuClose}
//         >
//             <MenuItem>
//                 <IconButton size="large" color="inherit">
//                     <Badge color="error">
//                         <FavoriteIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Favorites</p>
//             </MenuItem>
//             <MenuItem>
//                 <IconButton size="large" color="inherit">
//                     <Badge color="error">
//                         <ShoppingCartIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Cart</p>
//             </MenuItem>
//             <MenuItem>
//                 <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
//                     <Badge color="error">
//                         {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
//                     </Badge>
//                 </IconButton>
//                 <p>Notifications</p>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <AccountCircle />
//                 </IconButton>
//                 <p>Profile</p>
//             </MenuItem>
//             <MenuItem>
//                 <IconButton size="large" color="inherit">
//                     <Badge color="error">
//                         <HelpIcon />
//                     </Badge>
//                 </IconButton>
//                 <p>Help</p>
//             </MenuItem>
//         </Menu>
//     );

//     const products = [
//         {
//             name: 'Birthday',
//             imageUrl: Birthday,
//         },
//         {
//             name: 'Engagement',
//             imageUrl: Engagement,
//         },
//         {
//             name: 'Anniversary',
//             imageUrl: Anniversary,
//         },
//         {
//             name: 'Opening',
//             imageUrl: Opening,
//         },
//         {
//             name: 'Congratulations',
//             imageUrl: Congratulations,
//         },
//     ];

//     return (
//         <div>
//             <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//                         <MenuIcon />
//                     </IconButton>
//                     <LogoTypography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ display: { xs: 'none', sm: 'block' } }}
//                     >
//                         <img src={logo} alt="Clotya" width={'35%'} />
//                     </LogoTypography>
//                     <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                         <Search>
//                             <SearchIconWrapper>
//                                 <SearchIcon />
//                             </SearchIconWrapper>
//                             <StyledInputBase
//                                 placeholder="Search for Bouquet..."
//                                 inputProps={{ 'aria-label': 'search' }}
//                             />
//                         </Search>
//                     </Box>
//                     <Box sx={{ flexGrow: 1 }} />
//                     <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
//                         <IconButton size='large' color="inherit" className='FavoriteIcon' aria-label="add to favorites">
//                             <FavoriteIcon />
//                         </IconButton>
//                         <IconButton size="large" color="inherit">
//                             <Badge color="error">
//                                 <ShoppingCartIcon />
//                             </Badge>
//                         </IconButton>
//                         <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
//                             <Badge color="error">
//                                 {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
//                             </Badge>
//                         </IconButton>
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             onClick={handleProfileMenuOpen}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             sx={{ ml: 1 }}
//                             color="inherit"
//                         >
//                             <HelpIcon />
//                         </IconButton>
//                     </Box>
//                     <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="show more"
//                             aria-controls={mobileMenuId}
//                             aria-haspopup="true"
//                             onClick={handleMobileMenuOpen}
//                             color="inherit"
//                         >
//                             <MoreIcon />
//                         </IconButton>
//                     </Box>
//                 </Toolbar>
//                 {renderMobileMenu}
//                 {renderMenu}
//             </AppBar>
//             <Box
//                 sx={{
//                     width: '70%',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     flexWrap: 'wrap',
//                     padding: 2,
//                     margin: '0 auto',
//                 }}
//             >
//                 {products.map((product) => (
//                     <ProductBox key={product.name}>
//                         <ProductImage src={product.imageUrl} alt={product.name} />
//                         <ProductTypography>{product.name}</ProductTypography>
//                     </ProductBox>
//                 ))}
//             </Box>
//         </div>
//     );
// }

// export default Navbar;






import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';  // Import Link for navigation
import logo from '../Componet/img/Screenshot 2024-07-19 112046.png'
import Birthday from '../Componet/img/birthday_flowers.webp'
import Engagement from '../Componet/img/Engagement.jpg'
import Anniversary from '../Componet/img/Anniversary.jpg';
import Opening from '../Componet/img/Opening.webp';
import Congratulations from '../Componet/img/Congratulations.webp';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    right: '10%',
    [theme.breakpoints.up('md')]: {
        width: '85%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '35ch',
        },
    },
}));

const ProductBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
}));

const ProductImage = styled('img')(({ theme }) => ({
    borderRadius: '50%',
    padding: theme.spacing(1),
    backgroundColor: 'transparent',
    width: '90px',
    height: '90px',
    marginBottom: theme.spacing(1),
    border: 'none',
}));

const ProductTypography = styled(Typography)(({ theme }) => ({
    fontFamily: '"Courgette", cursive',
    fontSize: '18px',
    fontWeight: '400'
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
    fontFamily: '"Courgette", cursive',
    fontSize: '24px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    fontFamily: '"Courgette", cursive',
    '&:hover': {
        color: theme.palette.secondary.main,
    },
}));

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [isNotificationsActive, setIsNotificationsActive] = React.useState(false);
    const history = useHistory()
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleNotificationsClick = () => {
        setIsNotificationsActive(!isNotificationsActive);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Favorites</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
                    <Badge color="error">
                        {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <HelpIcon />
                    </Badge>
                </IconButton>
                <p>Help</p>
            </MenuItem>
        </Menu>
    );

    const products = [
        {
            name: 'Birthday',
            image: Birthday,
            link: '/birthday', // Add link for the product
        },
        {
            name: 'Engagement',
            image: Engagement,
            link: '/engagement', // Add link for the product
        },
        {
            name: 'Anniversary',
            image: Anniversary,
            link: '/anniversary', // Add link for the product
        },
        {
            name: 'Opening',
            image: Opening,
            link: '/opening', // Add link for the product
        },
        {
            name: 'Congratulations',
            image: Congratulations,
            link: '/congratulations', // Add link for the product
        },
    ];

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <LogoTypography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src={logo} alt="Clotya" width={'35%'} />
                    </LogoTypography>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search for Bouquet..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <IconButton size='large' color="inherit" className='FavoriteIcon' aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton size="large" color="inherit">
                            <Badge color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" color="inherit" onClick={handleNotificationsClick}>
                            <Badge color="error">
                                {isNotificationsActive ? <NotificationsActiveIcon /> : <NotificationsIcon />}
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            sx={{ ml: 1 }}
                            color="inherit"
                        >
                            <HelpIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                {renderMobileMenu}
                {renderMenu}
            </AppBar>
            <Box
                sx={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    padding: 2,
                    margin: '0 auto',
                }}
            >
                {products.map((product) => (
                    // <Link to={product.link} key={product.name} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProductBox onClick={()=> history.push(product.link)}>
                            <ProductImage src={product.image} alt={product.name} />
                            <ProductTypography>{product.name}</ProductTypography>
                        </ProductBox>
                    // </Link>
                ))}
            </Box>
        </div>
    );
}

export default Navbar;






