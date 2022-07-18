import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./comment.css";

const getNewComment = (commentValue, isRootNode = false, parentNodeId) => {
  return {
    id: uuidv4(),
    commentText: commentValue,
    childCommments: [],
    isRootNode,
    parentNodeId,
  };
};

const initialState = {};

function AddComment()  {
  const [comments, setComments] = useState(initialState);
  const [rootComment, setRootComment] = useState("");
  const addComment = (parentId, newCommentText) => {
    let newComment = null;
    if (parentId) {
      newComment = getNewComment(newCommentText, false, parentId);
      setComments((comments) => ({
        ...comments,
        [parentId]: {
          ...comments[parentId],
          childCommments: [...comments[parentId].childCommments, newComment.id],
        },
      }));
    } else {
      newComment = getNewComment(newCommentText, true, null);
    }
    setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
  };
  const commentMapper = (comment) => {
    return {
      ...comment,
      childCommments: comment.childCommments
        .map((id) => comments[id])
        .map((comment) => commentMapper(comment)),
    };
  };
  const enhancedComments = Object.values(comments)
    .filter((comment) => {
      return !comment.parentNodeId;
    })
    .map(commentMapper);
  const onAdd = () => {
    addComment(null, rootComment);
    setRootComment("");
  };
  return (
    <div className="App">
      <div className="comments-container">
        <input className="input"
          type="text"
          value={rootComment}
          onChange={(e) => setRootComment(e.target.value)}
          placeholder="add comment"
          style={{ width: "80%", marginRight: "1rem" }}
        />{" "}
        <button className="btn" onClick={onAdd}>Add</button>
      </div>
      <div className="reply">
        {enhancedComments.map((comment, key) => {
          return (
            <Comment key={key} comment={comment} addComment={addComment} />
          );
        })}
      </div>
    </div>
  );
}

const Comment = ({ comment, addComment }) => {
  const { commentText, childCommments, id } = comment;
  const [childComment, setChildComment] = useState("");
  const [show, setShow] = useState(true);
  const [showAddComponet, setShowAddComponet] = useState(false);
  const onAdd = () => {
    addComment(id, childComment);
    setChildComment("");
    setShowAddComponet(false);
  };
  return (
    <div className="Comment">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "left" }}>{commentText}</div>
        &nbsp;
        {childCommments.length > 0 && (
          <button onClick={() => setShow((show) => !show)}>
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
      <div>
        <div>
          {showAddComponet ? (
            <>
              <input className="input"
                type="text"
                value={childComment}
                onChange={(e) => setChildComment(e.target.value)}
                placeholder="add comment"
              />{" "}
              <button className="btn" onClick={onAdd}>Submit</button>
            </>
          ) : (
            <a
              onClick={() => setShowAddComponet(true)}
            >
              reply
            </a>
          )}
        </div>
      </div>
      {show &&
        childCommments.map((childCommentEl, key) => {
          return (
            <Comment className="addcomment"
              key={key}
              comment={childCommentEl}
              addComment={addComment}
            />
          );
        })}
    </div>
  );
};

export default AddComment;