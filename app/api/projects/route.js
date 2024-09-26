import connectMongoDB from "@/libs/mongodb";
import Projects from "@/models/projects";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const projects = await Projects.find().sort({ number: 1 });
        // console.log('Fetched Projects:', projects); debugging
        return NextResponse.json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}