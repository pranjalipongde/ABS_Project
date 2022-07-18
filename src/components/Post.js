import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import "./post.css";
import AddComment from "./AddComment";

const Post = () => {
  return (
    <div className="post">
      <div className="post__header">
        <ListItem>
          <ListItemAvatar>
            <Avatar className="post__avatar" alt="User" />
          </ListItemAvatar>
          <ListItemText primary="username" secondary="Nagpur , India" />
        </ListItem>
        <img
          className="post__image"
          src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt="Post pic"
        />
        <h4 className="post__text">
          <strong>username: </strong>Life is beautiful :)
        </h4>

        <FormControlLabel
          className="like"
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
            />
          }
        />
        <AddComment />
      </div>
      
    </div>
  );
};

export default Post;
