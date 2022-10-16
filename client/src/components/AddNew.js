import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, fetchPost } from "../store/actionCreators/postActions";
import { useNavigate } from "react-router-dom";

function AddNew() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPost(10, 0));
  }, [dispatch]);

  function changeTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function changeContent(e) {
    const value = e.target.value;
    setContent(value);
  }

  function changeCategory(e) {
    const value = e.target.value;
    setCategory(value);
  }

  function changeStatus(e) {
    const value = e.target.value;
    setStatus(value);
  }

  function submitHandler(e) {
    const data = {
      Title: title,
      Content: content,
      Category: category,
      Status: status,
    };

    dispatch(addPost(data));
    dispatch(fetchPost(10, 0));
  }

  function publishHandler() {
    const data = {
      Title: title,
      Content: content,
      Category: category,
      Status: "Publish",
    };

    dispatch(addPost(data));
    dispatch(fetchPost(10, 0));
    navigate("/posts");
  }

  function draftHandler() {
    const data = {
      Title: title,
      Content: content,
      Category: category,
      Status: "Draft",
    };

    dispatch(addPost(data));
    dispatch(fetchPost(10, 0));
    navigate("/posts");
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div class='form-group'>
          <label for='title'>Title</label>
          <input
            type='text'
            class='form-control'
            id='title'
            value={title}
            onChange={changeTitle}
          />
        </div>
        <div class='form-group'>
          <label for='content'>Content</label>
          <textarea
            class='form-control'
            id='content'
            rows='3'
            value={content}
            onChange={changeContent}
          ></textarea>
        </div>
        <div class='form-group'>
          <label for='category'>Category</label>
          <input
            type='text'
            class='form-control mb-3'
            id='category'
            value={category}
            onChange={changeCategory}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary me-3'
          onClick={publishHandler}
        >
          Publish
        </button>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={draftHandler}
        >
          Draft
        </button>
      </form>
    </>
  );
}

export default AddNew;
