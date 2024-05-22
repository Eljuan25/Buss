import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const data = await request.json();
        const type = await prisma.schedule.create({
            data: {
                time: data.time,
                trajectoryId: data.trajectoryId
            }
        });

        return new NextResponse(JSON.stringify(schedule), {
            headers: { "Content-Stop": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const trajectories = await prisma.schedule.findMany();

        return new NextResponse(JSON.stringify(schedule), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}