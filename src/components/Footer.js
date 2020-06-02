import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Richard R. Cachero Jr. {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto'
  },
}));

export default function Footer() {
  const classes = useStyles();
    
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <a rel="noopener noreferrer" href="https://www.facebook.com/RichiraChihe" target="_blank">
            <Button size="small" color="primary">
              <FacebookIcon />
            </Button>
          </a>
          <a rel="noopener noreferrer" href="https://www.instagram.com/richardjrrc/" target="_blank">
            <Button size="small" color="secondary">
              <InstagramIcon />
            </Button>
          </a>
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}