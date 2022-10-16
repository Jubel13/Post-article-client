import Table from "react-bootstrap/Table";
import { useState } from "react";
import PostData from "./PostData";

function Post(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((p) => {
            return <PostData post={p} key={p.id} />;
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Post;
