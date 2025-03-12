import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts/UserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    id: string
  }
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const id = await params.id;

  const userData: Promise<UserType> = getUser(id);

  const user = await userData;
  return {
    title: user.name,
    description: `Page of user ${user.name}`
  }
}

export default async function UserPage({ params }: Params) {
  const id = await params.id;

  const userData: Promise<UserType> = getUser(id);
  const postsData: Promise<PostType[]> = getUserPosts(id);

  const user = await userData;
  // const [user, posts] = Promise.all([userData, postsData])
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h3>Loading...</h3>}>
        <UserPosts promise={postsData} />
      </Suspense>
      </>
  )
}
