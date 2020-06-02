import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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

import ArticlesService from "../services/articles.service";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  dialog: {
    minWidth: '300px'
  }
});

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      markdown: "",
      successful: false,
      message: "",
      dialog: true,
      loading: false,
      action: "New Post"
    };
  }

  handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

  handleSubmit = async e =>  {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
      loading: true
    });

    ArticlesService.postArticle(
      this.state.title,
      this.state.description,
      this.state.markdown
    ).then(
      response => {
        console.log(response.data);
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
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
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Card className={classes.paper}>
          <CardContent>
            <Typography component="h1" variant="h5">
              {this.state.action}
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
                id="title"
                label="Title"
                name="title"
                autoFocus
                value={this.state.title}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows={15}
                name="markdown"
                label="Content"
                type="markdown"
                id="markdown"
                value={this.state.markdown}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Post
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Article));