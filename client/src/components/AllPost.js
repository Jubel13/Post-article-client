import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Post from "./PostTable";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../store/actionCreators/postActions";

function AllPost() {
  const [key, setKey] = useState("published");

  console.log(key);

  const { posts } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  let defLimit = 10;
  let defOffset = 0;

  useEffect(() => {
    dispatch(fetchPost(defLimit, defOffset));
  }, [dispatch, defLimit, defOffset]);

  let filteredPost;

  if (key === "published") {
    filteredPost = posts.filter((p) => p.Status === "Publish");
  }
  if (key === "draft") {
    filteredPost = posts.filter((p) => p.Status === "Draft");
  }
  if (key === "thrased") {
    filteredPost = posts.filter((p) => p.Status === "Thrash");
  }

  return (
    <Tabs
      defaultActiveKey='Published'
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className='mb-3'
      justify
    >
      <Tab eventKey='published' title='Published'>
        <Post data={filteredPost} />
      </Tab>
      <Tab eventKey='draft' title='Draft'>
        <Post data={filteredPost} />
      </Tab>
      <Tab eventKey='thrased' title='Thrased'>
        <Post data={filteredPost} />
      </Tab>
    </Tabs>
  );
}

export default AllPost;
