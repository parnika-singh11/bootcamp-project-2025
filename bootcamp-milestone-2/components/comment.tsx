

import React from "react";
import styles from "./comment.module.css";
import { IComment } from "@/database/blogSchema"; // Import the type

// Remove the type definition here, use the imported one
type CommentProps = {
  comment: IComment;
};


// Function to parse the date into a readable format
function parseCommentDate(date: Date) {  // Renamed function
  const commentDate = new Date(date);
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const month = months[commentDate.getMonth()];
  const day = commentDate.getDate();
  const year = commentDate.getFullYear();
  
  let hours = commentDate.getHours();
  const minutes = commentDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  
  return `${month} ${day} ${year} ${hours}:${minutesStr}${ampm}`;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <h4 className={styles.user}>{comment.user}</h4>
      <p className={styles.commentText}>{comment.comment}</p>
      <span className={styles.time}>{parseCommentDate(comment.date)}</span>
    </div>
  );
}

export default Comment;