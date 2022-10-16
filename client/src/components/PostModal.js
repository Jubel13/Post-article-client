import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editPost, fetchPost } from "../store/actionCreators/postActions";

function PostModal({ post, show, setShow }) {
  const handleClose = () => setShow(false);
  const [title, setTitle] = useState(post.Title);
  const [content, setContent] = useState(post.Content);
  const [category, setCategory] = useState(post.Category);
  const [status, setStatus] = useState(post.Status);

  const dispatch = useDispatch();

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
    const id = post.id;
    const data = {
      Title: title,
      Content: content,
      Category: category,
      Status: status,
    };

    dispatch(editPost(data, id));
    dispatch(fetchPost(10, 0));

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                class='form-control'
                id='category'
                value={category}
                onChange={changeCategory}
              />
            </div>
            <div class='form-group mb-3'>
              <label for='status'>Status</label>
              <select
                class='form-control'
                id='status'
                value={status}
                onChange={changeStatus}
              >
                <option>----</option>
                <option value='Publish'>Publish</option>
                <option value='Draft'>Draft</option>
              </select>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostModal;
