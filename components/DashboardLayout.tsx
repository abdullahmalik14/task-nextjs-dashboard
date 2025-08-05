"use client"
import React from 'react';
import { LuBus } from 'react-icons/lu';
import { LuUsers } from 'react-icons/lu';
import Link from 'next/link';
import { RiUserLine } from 'react-icons/ri';
import { BsCalendar4 } from 'react-icons/bs';
import { LiaFirstOrder } from 'react-icons/lia';
import { MdOutlineLogout } from 'react-icons/md';
import { MdOutlineSettings } from 'react-icons/md';
import { MdOutlineDashboard } from 'react-icons/md';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  InputBase,
  Badge,
  Avatar,
} from '@mui/material';
import { usePathname } from 'next/navigation';



const drawerWidth = 240;

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
  if (isMobile) setMobileOpen(false);
};

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: 'none',
    color: isActive ? '#fff' : '#afb7c2',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '7px',
    borderRadius: '10px',
    backgroundColor: isActive ? '#5396d5' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  });


const drawer = (
  <Box sx={{ p: 0, backgroundColor: '#334154', height: '100%', color: '#fff' }}>
    <Box
      component="nav"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        px: 2,
        py: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Link href="/" style={linkStyle({ isActive: pathname === '/' })} onClick={handleLinkClick}>
          <MdOutlineDashboard size={24} color="#222222" /> Дашборд
        </Link>
        <Link href="/clients" style={linkStyle({ isActive: pathname === '/clients' })} onClick={handleLinkClick}>
          <LuUsers size={24} color="#222222" /> Клиенты
        </Link>
        <Link href="/products" style={linkStyle({ isActive: pathname === '/products' })} onClick={handleLinkClick}>
          <LiaFirstOrder size={24} color="#222222" /> Заказы
        </Link>
        <Link href="/calender" style={linkStyle({ isActive: pathname === '/calender' })} onClick={handleLinkClick}>
          <BsCalendar4 size={18} color="#222222" /> Календарь
        </Link>
        <Link href="/team" style={linkStyle({ isActive: pathname === '/team' })} onClick={handleLinkClick}>
          <LuUsers size={24} color="#222222" /> Бригады
        </Link>
        <Link href="/transport" style={linkStyle({ isActive: pathname === '/transport' })} onClick={handleLinkClick}>
          <LuBus size={24} color="#222222" /> Транспорт
        </Link>
        <Link href="/reports" style={linkStyle({ isActive: pathname === '/reports' })} onClick={handleLinkClick}>
          <AlignVerticalBottomOutlinedIcon sx={{ color: '#222222', fontSize: '24px' }} /> Отчеты
        </Link>
        <Link href="/settings" style={linkStyle({ isActive: pathname === '/settings' })} onClick={handleLinkClick}>
          <MdOutlineSettings size={24} color="#222222" /> Настройки
        </Link>
      </Box>

      <Link href="/logout" style={linkStyle({ isActive: pathname === '/logout' })} onClick={handleLinkClick}>
        <MdOutlineLogout size={24} color="#0b1839" /> Выход
      </Link>
    </Box>
  </Box>
);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />

      {/* Top Header */}
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(to right, #5194d3, #447fb6)',
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {/* Logo */}
            <Typography variant="h5" noWrap sx={{ cursor: 'pointer' }}>
              Мувeр CRM
            </Typography>

            {/* Right Side Items */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                width: { xs: '100%', sm: 'auto' },
                mt: { xs: 1, sm: 0 },
              }}
            >
              {/* Search Bar - Optional: hide on xs */}
              {!isMobile && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#7eabd2',
                    px: 1,
                    borderRadius: '50px',
                    width: '240px',
                  }}
                >
                  <SearchIcon sx={{ color: '#0b1839' }} />
                  <InputBase
                    placeholder="Поиск..."
                    sx={{
                      ml: 1,
                      input: {
                        color: 'black',
                        '&::placeholder': {
                          color: 'white',
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </Box>
              )}

              {/* Notifications */}
              <IconButton>
                <Badge variant="dot" color="error" overlap="circular">
                  <NotificationsNoneIcon sx={{ color: '#0b1839' }} />
                </Badge>
              </IconButton>

              {/* Profile */}
              <IconButton>
                <RiUserLine color="#0b1839" size={20} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar"
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              top: '64px',
              height: 'calc(100% - 64px)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pl: { xs: 1, sm: 2 },
          pr: { xs: 1, sm: 4 },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: '85px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
