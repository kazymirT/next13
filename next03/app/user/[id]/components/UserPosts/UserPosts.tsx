type UserPostsType = {
  promise: Promise<PostType[]>
}
export default async function UserPosts({ promise }: UserPostsType) {
  const posts = await promise;
  return (
    <>
    {posts.map(({ body, id, title }) => (
      <article key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
        <br />
      </article>
    ))}
    </>
  )
}
