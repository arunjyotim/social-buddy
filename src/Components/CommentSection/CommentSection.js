import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    maxWidth: '50em',
    backgroundColor: theme.palette.action.hover,
  },
  inline: {
    display: 'inline',
  },
}));




const CommentSection = (props) => {
    const classes = useStyles();
    const{postId,email,body,name}=props.comment;
    let number=Math.floor(Math.random()*9);
    return (
        <div>
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`https://randomuser.me/api/portraits/men/${number}.jpg`} />
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={
                    <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary" 
                        >
                        </Typography>
                      <a href="https://mail.google.com/"> <h9 id="email">{email}</h9> </a>  
                      <br/>
                        -   {body}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
            
            
        </div>
        
    );
};

export default CommentSection;