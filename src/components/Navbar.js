import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { PostList } from './Posts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navlink:{
    color: 'white',
    textDecoration: 'none'
  }
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link className={classes.navlink} to="/">
            <Typography variant="h6" className={classes.title}>
              HOME|
            </Typography>
          </Link>
          <Link className={classes.navlink} to="/post" element={<PostList />}>
            <Typography variant="h6" className={classes.title}>
              POSTS
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}