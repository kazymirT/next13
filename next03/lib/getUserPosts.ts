export default async function getUserPosts(userId: string): Promise<PostType[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } });

  if (!res.ok) undefined;

  const data = await res.json();
  return data as PostType[];
}
