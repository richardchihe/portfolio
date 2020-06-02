import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BookIcon from '@material-ui/icons/Book';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles  } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { Link, withRouter } from 'react-router-dom'; 

import AuthService from "../services/auth.service";

const styles = theme => ({
  appBar: {
    backgroundColor: 'black',
    minHeight: '4vh'
  },
  toolBar: {
    position: 'relative',
    marginLeft: '30vw',
    marginRight: '-20vw',
    textAlign: 'center'
  },
  nav: {
    color: 'lightgray',
    width: '1.5em',
    height: '1.5em'
  },
  navActive: {
    color: 'cornflowerblue !important',
  },
  navDanger: {
    color: 'red',
  },
  navCreate: {
    color: 'lightgreen',
  }
});

class NavBar extends React.Component {
  constructor(props) {
		super(props);
		
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
		};
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut = e => {
    AuthService.logout();
    this.setState({
      currentUser: undefined
    });
	}

  render() {
    const { classes } = this.props;
    const { location } = this.props;

    const { currentUser } = this.state;

    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            
            <Container maxWidth="md">
              {currentUser && (
                <Link to="/articles/new">
                  <Button>
                    <CreateIcon className={`${classes.nav} ${classes.navCreate}  ${location.pathname === '/articles/new' ? classes.navActive : ''}`} />
                  </Button>
                </Link>
              )}
              <Link to="/">
                <Button size="small">
                  <HomeIcon className={`${classes.nav} ${location.pathname === '/' ? classes.navActive : ''}`} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="small">
                  <ContactMailIcon className={`${classes.nav} ${location.pathname === '/contact' ? classes.navActive : ''}`} />
                </Button>
              </Link>
              <Link to="/blog">
                <Button>
                  <BookIcon className={`${classes.nav} ${location.pathname.split('/')[1] === 'blog' ? classes.navActive : ''}`} />
                </Button>
              </Link>
              {currentUser && (
                <Link to="/" onClick={this.logOut}>
                  <Button>
                    <ExitToAppIcon className={`${classes.nav} ${classes.navDanger}`} />
                  </Button>
                </Link>
              )}
            </Container>
          </Toolbar>
        </AppBar>
      </>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter((withStyles(styles)(NavBar)));