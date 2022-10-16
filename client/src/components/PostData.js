import { useState } from "react";
import PostModal from "./PostModal";
import { useDispatch } from "react-redux";
import { editPost, fetchPost } from "../store/actionCreators/postActions";

function PostData({ post }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  console.log(post);

  function thrashHandler() {
    const data = {
      Title: post.Title,
      Content: post.Content,
      Category: post.Category,
      Status: "Thrash",
    };
    dispatch(editPost(data, post.id));
    dispatch(fetchPost(10, 0));
  }

  return (
    <>
      <PostModal post={post} show={show} setShow={setShow} />
      <tr>
        <td>{post.Title}</td>
        <td>{post.Category}</td>
        <td>
          <i
            class='fa-solid fa-pen-to-square fa-lg icon'
            onClick={handleShow}
          ></i>

          <i class='fa-solid fa-trash fa-lg icon' onClick={thrashHandler}></i>
        </td>
      </tr>
    </>
  );
}

export default PostData;
