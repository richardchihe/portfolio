import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MessageIcon from '@material-ui/icons/Message';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import { db } from "./../services/Firebase/firebase"

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'cornflowerblue',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: 'cornflowerblue',
		height: '3em'
	},
	contact: {
    marginTop: 'inherit',
	},
	loading: {
		width: '2em !important',
		height: 'auto !important'
	}
});

class Contact extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = this.props.contact;
	}

	componentDidMount(){
		this.setState({name: this.props.contact.name});
  }

	componentWillUnmount() {
    this.props.saveState(this.state);
  }
	
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = async e =>  {
		e.preventDefault();

		this.setState({ isSending: true });

		try {
			await db.collection('messages').add({
				email: this.state.email,
				name: this.state.name,
				message: this.state.message,
				timestamp: Date.now()
			});
			
			this.setState({ isSent: true });
			this.setState({ isSending: false });
		} catch (error) {
			console.log(error);
			this.setState({ sending: false });
		}
	}

	render() {
		const { classes } = this.props;

		return (
			<Container component="main" maxWidth="xs">
				<Card className={classes.contact}>
					<CardContent className={classes.paper}>
						<Avatar className={classes.avatar}>
							{ this.state.isSent ?
								<SentimentVerySatisfiedIcon /> :
								<MessageIcon />
							}	
						</Avatar>
						<Typography component="h1" variant="h5">
							{ this.state.isSent ? 'Thank You!' : 'Send Me A Message' }
						</Typography>
						<form className={classes.form} onSubmit={this.handleSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								value={this.state.email}
								onChange={this.handleChange}
								disabled={this.state.isSent}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="name"
								label="Name"
								type="name"
								id="name"
								autoComplete="name"
								value={this.state.name}
								onChange={this.handleChange}
								disabled={this.state.isSent}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="message"
								label="Message"
								type="message"
								id="message"
								multiline
								rows={6}
								rowsMax={10}
								value={this.state.message}
								onChange={this.handleChange}
								disabled={this.state.isSent}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								disabled={this.state.isSent}
							>
								{
									this.state.isSent ? 'Sent' : 
										!this.state.isSending ? 'Send' :
										<CircularProgress className={classes.loading}/> 
								}
							</Button>
						</form>
					</CardContent>
				</Card>
			</Container>
		);
	}
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Contact));