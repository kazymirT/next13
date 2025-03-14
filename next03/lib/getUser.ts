export default async function getUser(userId: string): Promise<UserType> {
  console.log(userId);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!res.ok) undefined;

  const data = await res.json();
  return data as UserType;
}
