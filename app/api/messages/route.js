import connectMongoDB from "@/libs/mongodb";
import Messages from "@/models/messages";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email, subject, text } = await request.json();
    await connectMongoDB();
    await Messages.create( {name, email, subject, text });
    return NextResponse.json({ message: "Message is sended" }, { status: 201 });
}