export default async function getAllUsers(): Promise<UserType[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error('failed to fetch data');

  const data = await res.json();
  return data as UserType[];
}
