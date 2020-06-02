import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';

import ArticlesService from "../services/articles.service";

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '15em',
    display: 'flex',
    flexDirection: 'row',
  },
  cardMedia: {
		paddingTop: '56.25%', // 16:9
		width: '-webkit-fill-available'
  },
  cardContent: {
		width: '-webkit-fill-available',
    display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
  },
});

class Blog extends React.Component { 
  constructor(props){
		super(props);

    this.state = {
			articles: [],
			error: ""
    }
	}
	
	componentDidMount() {
    this.getArticles();
  }

	getArticles = () => {
		ArticlesService.getArticles().then(
      response => {
        this.setState({
          articles: response.data
        });
      },
      error => {
        this.setState({
          error:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

	render() {
		const { classes } = this.props;
		const { articles } = this.state;

		return (
			<main>
				<Container className={classes.cardGrid} maxWidth="lg">
					<Typography variant="h4" align="center" paragraph>
						Blog
					</Typography>
          <Grid container spacing={4}>
            {articles.map((article) => (
              <Grid item key={article._id} xs={12} sm={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardContent}>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{article.title}
											</Typography>
											<Typography variant="subtitle1" color="textSecondary">
												{moment(article.createdAt).format("MMM D, YYYY")}
											</Typography>
											<Typography>
												{article.description}
											</Typography>
										</CardContent>
										<CardActions>
											<Link to={`/blog/${article.slug}`}>
												<Button color="primary">
													Read
												</Button>
											</Link>
										</CardActions>
									</div>
									{/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
		)
	}
} 

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter((withStyles(styles)(Blog)));