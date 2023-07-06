import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="hoya" body="Hello Everybody!" />
        <Post author="gwangho" body="Hi Everyone!" />
      </ul>
    </>
  );
}

export default PostList;
