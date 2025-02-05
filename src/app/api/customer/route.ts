import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, address } = await request.json();

  console.log(name, email, phone, address);
  return NextResponse.json({ message: "Post criado" });
}
