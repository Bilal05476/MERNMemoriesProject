import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

const App = () => {
  const styles = useStyles();
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
              alignItems="stratch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
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
