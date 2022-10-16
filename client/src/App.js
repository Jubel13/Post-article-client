import "./App.css";
import Posts from "./pages/Posts";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AllPost from "./components/AllPost";
import AddNew from "./components/AddNew";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Products

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
          {/* <Route path='payment' element={<PaymentList />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
