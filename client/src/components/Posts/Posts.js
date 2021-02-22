import Post from "./Post/Post";
import { useSelector } from "react-redux";
const Posts = () => {
  const post = useSelector((state) => state.posts);
  console.log(post);
  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
