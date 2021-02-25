import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(0);

  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Container>
        <AppBar position="static" color="inherit" className={styles.appBar}>
          <Typography variant="h3" align="center" className={styles.heading}>
            Memories
          </Typography>
          <img
            src={memories}
            alt="memories"
            height="40"
            width="40"
            className={styles.image}
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item sm={12} md={8}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item sm={12} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
