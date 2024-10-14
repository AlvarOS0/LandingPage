import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TikTokIcon from './TikTokIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const pages = ['Nosotros', 'Servicios', 'Nuevos Pacientes', 'Contacto'];
const settings = ['Perfil', 'Cuenta', 'Tablero', 'Cerrar sesión'];

const primaryColor = '#006d66';
const hoverColor = '#00524f';




const LandingPage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleReserve = () => {
    console.log("Reservar clickeado");
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar src="/static/images/image1.png" sx={{ width: 56, height: 56, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'arial',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
                lineHeight: 1.2, 
              }}
            >
              <span style={{ fontWeight: 700 }}>Magia Dental</span> 
              <br />
              <span style={{ fontWeight: 400 }}>Clínica Odontológica</span> 
            </Typography>
          

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: 'black', 
                    display: 'block', 
                    fontWeight: 'bold',  
                    textTransform: 'none' 
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="DarkMode" size="large" sx={{ color: primaryColor }} >
             <DarkModeOutlinedIcon fontSize="inherit" />
          </IconButton>

              <Button 
                onClick={handleReserve}
                sx={{
                  my: 2,
                  color: 'white',
                  backgroundColor: primaryColor, 
                  borderRadius: '25px',
                  padding: '8px 16px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: hoverColor,
                  }
                }}
              >
                Reservar
              </Button>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="xl" sx={{ textAlign: 'left', mt: 4 }}>
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
    <Typography variant="h5" sx={{ mb: 2, color: primaryColor }}>
        Clinica Odontologica especializada
        
      </Typography>
      <Typography variant="h2" sx={{ mb: 2, color: primaryColor }}>
        
        Atención para todas las edades
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: primaryColor,
          color: 'white',
          borderRadius: '25px',
          padding: '8px 16px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: hoverColor,
          }
        }}
      >
        Reserva en Línea
      </Button>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        o llama al 800-10-01-02
      </Typography>
    </Grid>

    <Grid item xs={12} md={6}>
      <CardMedia
        component="img"
        image="/static/images/image2.png"
        alt="Atención odontológica"
        sx={{ width: '100%', mt: 4 }}
      />
    </Grid>
  </Grid>
  
  </Container>

      <Container maxWidth="xl" sx={{ mt: 6, backgroundColor: '#f5f5f5', p: 4}}>
        <Typography variant="h4" sx={{ textAlign: 'left', mb: 4 }}>
          Nuestros Servicios
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: 'Odontología Cosmética', image: '/static/images/image4.png' },
            { name: 'Odontología Restaurativa', image: '/static/images/image3.png' },
            { name: 'Odontopediatría', image: '/static/images/image6.png' },
            { name: 'Ortodoncia', image: '/static/images/image5.png' },
          ].map((service) => (
            <Grid item xs={12} md={3} key={service.name}>
              <Card sx={{ boxShadow: 'none' }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={service.image}
                  alt={service.name}
                  sx={{ objectFit: 'contain' }} 
                />
                <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {service.name}
                  </Typography>
                  <Button size="small" sx={{ color: primaryColor, textTransform: 'none', fontWeight: 'bold'}} endIcon={<ArrowForwardIosIcon />}>
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'left', mb: 4 }}>
          Opiniones de nuestros pacientes
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: 'Lucía P.', comment: 'Excelente servicio en Brillo \nDental. Trato amable,\n procedimientos indoloros. ¡Mi sonrisa nunca ha estado mejor!' },
            { name: 'Jorge F.', comment: 'En Magia Dental me sentí como en casa. Profesionales excepcionales y resultados sorprendentes. ¡Muy recomendado!' },
            { name: 'Sofía M.', comment: 'Magia Dental transformó mi sonrisa con eficiencia y cuidado. ¡El mejor dentista al que he ido!' }
          ].map((opinion, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ boxShadow: 'none',border: '1px solid #000000', borderRadius: '8px'  }}>
                <CardContent>
                  <Typography variant="body1" color="text.secondary">
                    "{opinion.comment}"
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 2 , fontSize: '1rem'}}>
                    {opinion.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ mt: 8, py: 4, backgroundColor: '#f1f1f1', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>
          Síguenos en redes sociales:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <IconButton
            href="https://www.whatsapp.com"
            target="_blank"
            sx={{ color: '#000000', mx: 1 }}
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>

          <IconButton
          href="https://www.tiktok.com" 
          target="_blank"
          sx={{ color: '#000000', mx: 1 }}
        >
          <TikTokIcon color="#000000" /> 
        </IconButton>

          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            sx={{ color: '#000000', mx: 1 }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            sx={{ color: '#000000', mx: 1 }}
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>
          Política de privacidad
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
