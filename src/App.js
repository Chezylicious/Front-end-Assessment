import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UserList } from "./components/Users";
import { UserCreate } from "./components/UserCreate";
import { UserUpdate } from "./components/UserUpdate";
import { PostList } from "./components/Posts";

function App() {
  return(
    <Router>
    <Navbar />
      <Routes>
            <Route exact path='/' element={<UserList />} />
            <Route exact path='/post' element={<PostList />} />
            <Route exact path='/create' element={<UserCreate />} />
            <Route exact path="/update/:id" element={<UserUpdate />} />
      </Routes>
    
    </Router>
  )
}

export default App;
