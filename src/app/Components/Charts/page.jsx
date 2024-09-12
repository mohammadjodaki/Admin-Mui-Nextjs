"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import img1 from "../../Image/2.jpg";
import Logo from "../../Image/Logo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useRouter } from "next/navigation";
import Chartone from './Chartone'
import Charttoo from './Charttoo'
import Chartthree from './Chartthree'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

function Page() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="w-full bg-white">
          <IconButton
            color="Black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <div className="w-full flex justify-between items-center *:cursor-pointer">
            <Typography className="hidden md:flex text-gray-600">
              <Image className="" alt="Lpgo" src={Logo} />
              <input
                className="w-72 outline-none ml-6 h-8 rounded-md px-5 border-2 border-gray-200"
                type="search"
                placeholder="search"
              />
            </Typography>
            <div className="flex ml-60 md:ml-0 items-center">
              <Badge className="mr-5" badgeContent={2} color="primary">
                <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={5} color="error">
                <NotificationsIcon color="action" />
              </Badge>
              <Image
                className="rounded-full ml-6 w-10"
                alt="Remy Sharp"
                src={img1}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              text: "Dashboard",
              icon: <HomeIcon className="text-purple-500" />,
              link: "/Dashboard",
            },
            {
              text: "Products",
              icon: <ProductionQuantityLimitsIcon className="text-amber-500" />,
              link: "/Components/Products",
            },
            {
              text: "Users",
              icon: <PeopleIcon className="text-green-500" />,
              link: "/Components/Users",
            },
            {
              text: "CreateUser",
              icon: <AddBoxIcon className="text-red-500" />,
              link: "/Components/CreateUser",
            },
            {
              text: "Charts",
              icon: <BarChartIcon className="text-blue-500" />,
              link: "/Components/Charts",
            },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Link href={item.link || "#"} passHref>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              text: "Customers",
              icon: <MarkEmailUnreadIcon className="text-black" />,
            },
            { text: "Vendors", icon: <EventIcon className="text-amber-500" /> },
            { text: "Blog", icon: <RssFeedIcon className="text-green-500" /> },
            {
              text: "Peges",
              icon: <PictureInPictureAltIcon className="text-fuchsia-500" />,
            },
            {
              text: "Tickets",
              icon: <SupportAgentIcon className="text-teal-500" />,
            },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Logout" disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon className="text-red-500" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div className="flex flex-wrap md:flex-nowrap gap-5">
          <div className="w-full md:w-1/2 mt-20 bg-white shadow-lg rounded-xl">
        <Chartone/>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-20 bg-white shadow-lg rounded-xl">
        <Charttoo/>
        </div>
        </div>
        <div className="w-full md:w-1/2 h-96 mx-auto mt-20 bg-white shadow-lg rounded-xl">
        <Chartthree/>
        </div>
      </Box>
    </Box>
  );
}

export default Page;
