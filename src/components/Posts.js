import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Pagination } from "./Pagination";
import TextField from '@material-ui/core/TextField';


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
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export const PostList = () => {
  const classes = useStyles();
  const inputEl = useRef("");
  const token = "insert your token here";
  const [posts, setposts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newPost = posts.filter((post) => {
        return Object.values(post)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newPost);
    } else {
      setSearchResults(posts);
    }
  };

  useEffect(() => {
    postsGet()
  }, [])
  
  const postsGet = () => {
    fetch("https://gorest.co.in/public/v1/posts", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        (res) => {
          setposts(res.data)
        }
      )
  }
  const getSearchTerm = () => {
    posts.searchKeyword(inputEl.current.value);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                POSTS DETAIL
              </Typography>
            </Box>
            <TextField term={searchTerm} 
            posts={searchTerm.length < 1 ? posts : searchResults}
            searchKeyword={searchHandler} 
            ref={inputEl} 
            id="outlined-search" 
            value={posts.term} 
            label="Search Title" 
            type="search" 
            onChange={getSearchTerm}/>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="left">User_ID</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell align="right">{post.id}</TableCell>
                  <TableCell align="left">{post.user_id}</TableCell>
                  <TableCell align="left">{post.title}</TableCell>
                  <TableCell align="left">{post.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination />
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}