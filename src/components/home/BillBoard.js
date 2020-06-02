import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import me from './../../images/me.jpg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    color: "white",
    backgroundColor: "black",
    padding: theme.spacing(8, 0, 6),
    backgroundImage: 'url(' + me + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '55vw',
    minHeight: '45vh',
  },
  gray: {
    color: 'rgba(255, 255, 255, 0.50)'
  },
}));

export default function BillBoard() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="left" gutterBottom>
            Richard R. <br/>
            Cachero Jr.
          </Typography>
          <Typography className={classes.gray} variant="h5" align="center" paragraph>
            A web developer.
          </Typography>
        </Container>
      </div>
    </>
  )
}