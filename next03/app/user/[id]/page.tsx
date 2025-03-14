import { Suspense } from "react";
import { notFound } from 'next/navigation'
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts/UserPosts";
import getAllUsers from "@/lib/getAllUsers";

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const id = params.id
  const userData: Promise<UserType> = getUser(id);

  const user = await userData;

  if (!user.name) {
    return {
      title: 'User Not Found',
    }
  }
  return {
    title: user.name || '',
    description: `Page of user ${user.name || ''}`,
  };
}

export default async function UserPage(props: {
  params: Params
  searchParams: SearchParams
}) {
  const params = await props.params
  const id = params.id

  const userData: Promise<UserType> = getUser(id);
  const postsData: Promise<PostType[]> = getUserPosts(id);

  const user = await userData;

  if (!user.name) {
    return notFound();
  }
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h3>Loading...</h3>}>
        <UserPosts promise={postsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const userData: Promise<UserType[]> = getAllUsers();
  const users = await userData;

  return users.map((user) => ({ id: user.id.toString() }));
}