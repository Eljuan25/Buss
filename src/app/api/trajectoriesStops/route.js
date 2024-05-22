import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const trajectoryStop = await prisma.TrajectoriesStops.create({
            data: {
                trajectoryId: data.trajectoryId,
                stopId: data.stopId
            }
        });

        return new NextResponse(JSON.stringify(trajectoryStop), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const trajectoryStops = await prisma.TrajectoriesStops.findMany();

        return new NextResponse(JSON.stringify(trajectoryStops), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}