import connectMongoDB from "@/libs/mongodb";
import Projects from "@/models/projects";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const projects = await Projects.find();
    return NextResponse.json({ projects });
}