import { NextResponse } from "next/server";

type FeedBack = {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  const  data: FeedBack = await request.json();
  console.log('data: ', data);

  const { email, message, name } = data;

  return NextResponse.json({ email, message, name });
}