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
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom'; 

import ArticlesService from "../services/articles.service";
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
      old: {
        title: "",
        description: "",
        markdown: "",
        sanitizedHtml: ""
      },
      new: {},
      successful: false,
      message: "",
      dialog: true,
      loading: false,
      slug: "",
      editting: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    
    this.setState({slug});

    this.getArticle(slug);

    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  getArticle = (slug) => {
		ArticlesService.getArticle(slug).then(
      response => {
        this.setState({
          old: response.data,
          new: response.data
        });
      },
      error => {
        console.log(error);
        this.setState({
          error:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({
      new: {
        ...this.state.new,
        [e.target.name]: e.target.value
      }
    });
	}

  handleSubmit = async e =>  {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
      loading: true
    });

    ArticlesService.updateArticle(
      this.state.new._id,
      this.state.new.title,
      this.state.new.description,
      this.state.new.markdown
    ).then(
      response => {
        this.setState({
          old: response.data,
          new: response.data,
          editting: false
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
    const { currentUser } = this.state;
    
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        {this.state.old ?
          this.state.editting ? 
            <Card className={classes.paper}>
              <Button style={{alignSelf: 'flex-end'}} onClick={() => {this.setState({editting: false})}}>
                <CancelIcon></CancelIcon>
              </Button>
              <CardContent>
                <Typography component="h1" variant="h5">
                  Editting Post
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
                    value={this.state.new.title}
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
                    value={this.state.new.description}
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
                    value={this.state.new.markdown}
                    onChange={this.handleChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Update
                  </Button>
                </form>
              </CardContent>
            </Card>
            :
            <Card className={classes.paper}>
              <CardContent style={{width: '100%'}}>
                <Typography variant="h3" align="center">
                  <Link to="/blog">
                    <Button style={{float: 'left'}}>
                      <ArrowBackIcon></ArrowBackIcon>
                    </Button>
                  </Link>
                  {this.state.old.title}
                  {currentUser && 
                    <Button style={{float: 'right', color: 'forestgreen'}} onClick={() => {this.setState({editting: true})}}>
                      <EditIcon></EditIcon>
                    </Button>
                  }
                </Typography>
                <Typography dangerouslySetInnerHTML={{__html: this.state.old.sanitizedHtml}}>
                </Typography>
              </CardContent>
            </Card>
          :
          <Typography  className={classes.paper} component="h1" variant="h5">
            {this.state.slug} not found!
          </Typography>
        }
      </Container>
    )
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Article));