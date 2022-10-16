function Post({ post }) {
  return (
    <>
      <h1>{post.Title}</h1>
      <p>Category: {post.Category}</p>
      <h6 className='mb-3'>{post.Content}</h6>
    </>
  );
}

export default Post;
