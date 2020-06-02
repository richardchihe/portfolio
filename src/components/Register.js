import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import AuthService from "../services/auth.service";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'cornflowerblue'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'cornflowerblue'
  },
  dialog: {
    minWidth: '300px'
  }
});

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      dialog: true,
    };
  }

  handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

  handleSubmit = async e =>  {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    // Validate here

    // if there are no errors procede to login
    AuthService.register(
      this.state.username,
      this.state.email,
      this.state.password
    ).then(
      response => {
        this.setState({
          message: response.data.message,
          successful: true
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );
  }

  closeDialog = e => {
    this.setState({dialog: false});
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card className={classes.paper}>
          <CardContent>
            <Avatar style={{marginLeft: 'auto', marginRight: 'auto'}} className={classes.avatar}>
              <EmojiPeopleIcon />
            </Avatar>
            <Typography align="center"  component="h1" variant="h5">
              Sign Up
            </Typography>
            {this.state.message && (
              <Dialog
                open={this.state.dialog}
                onClose={this.closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle className={classes.dialog}>Hey!</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {this.state.message}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.closeDialog} color="primary" autoFocus>
                    Okay
                  </Button>
                </DialogActions>
              </Dialog>
            )}
            <form className={classes.form} 
              onSubmit={this.handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={this.state.username}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Register));