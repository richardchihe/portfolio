import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BookIcon from '@material-ui/icons/Book';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import me from './../images/me.jpg';
import jsLogo from './../logos/javascript.png';
import htmlLogo from './../logos/html.png';
import cssLogo from './../logos/css.png';
import nodeLogo from './../logos/node.png';
import angularLogo from './../logos/angular.png';
import reactLogo from './../logos/react.png';
import expressLogo from './../logos/express.png';
import jqueryLogo from './../logos/jquery.png';
import phpLogo from './../logos/php.png';
import ciLogo from './../logos/code_igniter.png';
import laravelLogo from './../logos/laravel.png';
import mDBLogo from './../logos/mongodb.png';
import mySqlLogo from './../logos/mysql.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Richard R. Cachero Jr.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    color: "white",
    backgroundColor: "black",
    padding: theme.spacing(8, 0, 6),
    backgroundImage: 'url(' + me + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '55vw',
    minHeight: '55vh',
    marginTop: '4em'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  appBar: {
    backgroundColor: 'black',
  },
  toolBar: {
    position: 'relative',
    marginLeft: '30vw',
    marginRight: '-20vw'
  },
  gray: {
    color: 'rgba(255, 255, 255, 0.50)'
  },
  nav: {
    color: 'lightgray',
    width: '1.5em',
    height: '1.5em'
  },
  navActive: {
    color: 'cornflowerblue',
    width: '1.5em',
    height: '1.5em'
  },
  forestgreen: {
    color: 'forestgreen'
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  fitContent: {
    width: 'fit-content'
  },
  listIcon: {
    minWidth: '3em'
  }
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {/* <ComputerIcon className={classes.icon} /> */}
          <Container maxWidth="md">
            <Button size="small">
              <HomeIcon className={classes.navActive} />
            </Button>
            <Button size="small">
              <ContactMailIcon className={classes.nav} />
            </Button>
            <Button>
              <BookIcon className={classes.nav} />
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="left" gutterBottom>
              Richard R. <br/>
              Cachero Jr.
            </Typography>
            <Typography className={classes.gray} variant="h5" align="center" paragraph>
              A web developer.
            </Typography>

            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Resume
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Demos
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h4" align="center" paragraph>
            Resume
          </Typography>
          <Typography variant="h5" align="left" paragraph>
            SKILLS
          </Typography>
          <Typography variant="h6" align="left">
            Programming Languages
          </Typography>
          <Grid>
            <div>
              <List dense={true} className={classes.flex}>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`js`}
                      src={jsLogo}
                    />
                  </ListItemAvatar>
                  <Typography variant="h6">
                    JavaScript
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`node`}
                      src={nodeLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    Node
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`express`}
                      src={expressLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    Express
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`react`}
                      src={reactLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    React
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`angular`}
                      src={angularLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    Angular
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`jquery`}
                      src={jqueryLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    jQuery
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid>
            <div>
              <List dense={true} className={classes.flex}>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`php`}
                      src={phpLogo}
                    />
                  </ListItemAvatar>
                  <Typography variant="h6">
                    PHP
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`ci`}
                      src={ciLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    Code Igniter
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`laravel`}
                      src={laravelLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    Laravel
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid>
            <div>
              <List dense={true} className={classes.flex}>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`html`}
                      src={htmlLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    HTML
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`css`}
                      src={cssLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    CSS
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <br></br>
          <Typography variant="h6" align="left">
            Databases
          </Typography>
          <Grid>
            <div>
              <List dense={true} className={classes.flex}>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`mongodb`}
                      src={mDBLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    MongoDB
                  </Typography>
                </ListItem>
                <ListItem className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`mysql`}
                      src={mySqlLogo}
                    />
                  </ListItemAvatar>
                  <Typography>
                    MySQL
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h5" align="left" paragraph>
            PROFESSIONAL EXPERIENCES
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Project Title
                    </Typography>
                    <Typography>
                      Description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <GitHubIcon />
                    </Button>
                    <Button size="small" color="secondary">
                      <VisibilityIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <Button size="small" color="primary">
            <FacebookIcon />
          </Button>
          <Button size="small" color="secondary">
            <InstagramIcon />
          </Button>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}