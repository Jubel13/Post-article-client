import Post from "./Post";

function Preview(posts) {
  console.log(posts.post);

  return (
    <>
      {posts.post
        .filter((p) => p.Status === "Publish")
        .map((p) => {
          return <Post post={p} key={p.id} />;
        })}
    </>
  );
}

export default Preview;
