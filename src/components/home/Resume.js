
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import VisibilityIcon from '@material-ui/icons/Visibility';

import jsLogo from './../../logos/javascript.png';
import htmlLogo from './../../logos/html.png';
import cssLogo from './../../logos/css.png';
import nodeLogo from './../../logos/node.png';
import angularLogo from './../../logos/angular.png';
import reactLogo from './../../logos/react.png';
import expressLogo from './../../logos/express.png';
import jqueryLogo from './../../logos/jquery.png';
import phpLogo from './../../logos/php.png';
import ciLogo from './../../logos/code_igniter.png';
import laravelLogo from './../../logos/laravel.png';
import mDBLogo from './../../logos/mongodb.png';
import mySqlLogo from './../../logos/mysql.png';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  forestgreen: {
    color: 'forestgreen'
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  fitContent: {
    width: 'fit-content'
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
  cardActions: {
    flexDirection: 'row-reverse'
  },
  whitesmoke: {
    backgroundColor: 'whitesmoke'
  }
}));

export default function Resume() {
  const classes = useStyles();

  const jsPowers = [
    {
      variant: 'h6',
      logo: jsLogo,
      alt: 'js',
      text: 'JavaScript'
    },
    {
      logo: nodeLogo,
      alt: 'node',
      text: 'Node'
    },
    {
      logo: expressLogo,
      alt: 'express',
      text: 'Express'
    },
    {
      logo: reactLogo,
      alt: 'react',
      text: 'React'
    },
    {
      logo: angularLogo,
      alt: 'angular',
      text: 'Angular'
    },
    {
      logo: jqueryLogo,
      alt: 'jquery',
      text: 'jQuery'
    },
  ];

  const phpPowers = [
    {
      variant: 'h6',
      logo: phpLogo,
      alt: 'php',
      text: 'PHP'
    },
    {
      logo: laravelLogo,
      alt: 'laravel',
      text: 'Laravel'
    },
    {
      logo: ciLogo,
      alt: 'ci',
      text: 'CodeIgniter'
    },
  ];

  const basePowers = [
    {
      logo: htmlLogo,
      alt: 'html',
      text: 'HTML'
    },
    {
      logo: cssLogo,
      alt: 'css',
      text: 'CSS'
    },
  ];

  return (
    <>
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
              {jsPowers.map((power) => (
                <ListItem key={power.alt} className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={power.alt}
                      src={power.logo}
                    />
                  </ListItemAvatar>
                  <Typography variant={power.variant}>
                    {power.text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid>
          <div>
            <List dense={true} className={classes.flex}>
              {phpPowers.map((power) => (
                <ListItem key={power.alt} className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={power.alt}
                      src={power.logo}
                    />
                  </ListItemAvatar>
                  <Typography variant={power.variant}>
                    {power.text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <Grid>
          <div>
            <List dense={true} className={classes.flex}>
              {basePowers.map((power) => (
                <ListItem key={power.alt} className={classes.fitContent}>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={power.alt}
                      src={power.logo}
                    />
                  </ListItemAvatar>
                  <Typography variant={power.variant}>
                    {power.text}
                  </Typography>
                </ListItem>
              ))}
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
          <Grid item xs={12} sm={12} md={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  GOBOLAND
                </Typography>
                <div className={`${classes.flex} ${classes.flowRow}`}>
                  <Typography>
                    Web Developer 
                  </Typography>
                  <Typography>
                    <i>&nbsp;(July 2018 - February 2020)</i>
                  </Typography>
                </div>
                <List>
                  <Card>
                    <CardContent className={`${classes.flex} ${classes.whitesmoke}`}>
                      <Grid item xs={12} sm={6} md={6}>
                        Maintained, debugged, and developed modules 
                        for an existing e-commerce website. Updated both 
                        QuickBooks Online and PayPal API's to use OAuth 2.
                        Fixed implementation of QBO API by determining and 
                        using the proper tax code for each invoice.
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ul>
                          <li>PHP 5.6</li>
                          <li>MySQL</li>
                          <li>jQuery</li>
                          <li>PayPal API</li>
                          <li>QuickBooks Online API</li>
                        </ul>
                      </Grid>
                    </CardContent>
                  </Card>
                </List>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <a rel="noopener noreferrer" href="https://www.goboland.com/" target="_blank">
                  <Button size="small" color="secondary">
                    <VisibilityIcon />
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  Syner G Outsourcing Inc.
                </Typography>
                <div className={`${classes.flex}`}>
                  <Typography>
                    Web Developer 
                  </Typography>
                  <Typography>
                    <i>&nbsp;(July 2016 - July 2018)</i>
                  </Typography>
                </div>
                <List>
                  <Card>
                    <CardContent className={`${classes.flex} ${classes.whitesmoke}`}>
                      <Grid item xs={12} sm={6} md={6}>
                        Full-stack developer of a quality control web app. Clients 
                        can send calls through this web app, it then forwards each 
                        call to quality assurance agents logged in to the platform for quality control. 
                        If a call's handling fails quality standards, the client will 
                        be notified. Also the clients can determine how their own CSR's  
                        are performing.
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ul>
                          <li>Meteor.js</li>
                          <li>Angular2</li>
                          <li>MongoDB</li>
                          <li>CentOS 7</li>
                        </ul>
                      </Grid>
                    </CardContent>
                  </Card>
                  <br></br>
                  <Card>
                    <CardContent className={`${classes.flex} ${classes.whitesmoke}`}>
                      <Grid item xs={12} sm={6} md={6}>
                        Developed an SMS Voting System using an android phone 
                        which receives texts and a web app. The texts received by the phone 
                        are processed by an app that determines if the each text is a vote and 
                        then sends received votes to the web app through its API. The web app 
                        then tallies the votes and updates the display.
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ul>
                          <li>Meteor.js</li>
                          <li>Angular2</li>
                          <li>MongoDB</li>
                          <li>Android Studio</li>
                          <li>CentOS 7</li>
                        </ul>
                      </Grid>
                    </CardContent>
                  </Card>
                  <br></br>
                  <Card>
                    <CardContent className={`${classes.flex} ${classes.whitesmoke}`}>
                      <Grid item xs={12} sm={6} md={6}>
                        Continued work on an E-learning System. Worked on the accounting 
                        system and enrollment system. Implemented a video conferencing 
                        and screen sharing module using jitsi-meet.
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <ul>
                          <li>CodeIgniter</li>
                          <li>MariaDB</li>
                          <li>Ubuntu</li>
                        </ul>
                      </Grid>
                    </CardContent>
                  </Card>
                </List>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <a rel="noopener noreferrer" href="https://www.synergbpo.com/" target="_blank">
                  <Button size="small" color="secondary">
                    <VisibilityIcon />
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
