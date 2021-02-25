import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumpUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={styles.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={styles.details}>
        <Typography
          style={{
            backgroundColor: "lightskyblue",
            padding: "0",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
          variant="body2"
          color="textSecondary"
        >
          {post.tags.map((tag) => `${tag} `)}
        </Typography>
      </div>
      <Typography className={styles.title} variant="h5">
        {post.title}
      </Typography>
      <CardContent>
        <Typography className={styles.message} variant="h5">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumpUpAltIcon fontSize="small" />
          Like &nbsp;
          <strong>{post.likeCount}</strong>
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
