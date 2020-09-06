import React from 'react';
import RateReviewTwoToneIcon from '@material-ui/icons/RateReviewTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Post.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '2px 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
    },
    pos: {
        marginBottom: 12,
    },
});





const Post = (props) => {
    const { userId, title, id, body } = props.post;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (

        <div className="area">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                        <br />
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={'/post/' + id}>
                        <Button size="medium" className="button"><RateReviewTwoToneIcon></RateReviewTwoToneIcon>See more</Button>
                    </Link>
                </CardActions>
                
            </Card>
        </div>
    )
};

export default Post;