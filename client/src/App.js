import "./App.css";
import Posts from "./pages/Posts";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AllPost from "./components/AllPost";
import AddNew from "./components/AddNew";
import Preview from "./components/Preview";
import { fetchPost } from "./store/actionCreators/postActions";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { posts } = useSelector((state) => state.postReducer);

  // Fetch Products
  useEffect(() => {
    dispatch(fetchPost(10, 0));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Navigate to='/posts' />}></Route>
        <Route path='/' element={<Posts />}>
          <Route
            path='posts'
            element={<AllPost isLoading={isLoading} />}
          ></Route>
          <Route path='add' element={<AddNew />}></Route>
          <Route path='preview' element={<Preview post={posts} />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
