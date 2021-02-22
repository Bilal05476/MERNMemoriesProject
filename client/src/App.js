import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";

const App = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <AppBar position="static" color="inherit" className={styles.appBar}>
          <Typography variant="h2" align="center" className={styles.heading}>
            Memories
          </Typography>
          <img
            src={memories}
            alt="memories"
            height="60"
            width="60"
            className={styles.image}
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item xs={12} sm={12} md={8}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
