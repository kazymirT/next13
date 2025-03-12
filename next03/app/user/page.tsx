import getAllUsers from "@/lib/getAllUsers"
import { Metadata } from "next"
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: 'User page'
}
export default async function User() {
  const userData: Promise<UserType[]> = getAllUsers();

  const users = await userData;

  return (
    <><div>User page</div><section>
      <h2><Link href={'/'}>Back to Home page</Link></h2>
      <br />

      {users.map(({ id, name }) => (
        <Fragment key={id}><p>
          <Link href={`/user/${id}`}>{name}</Link>
        </p><br /></Fragment>
      ))}
    </section></>
  )
}
