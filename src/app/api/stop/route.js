import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const stop = await prisma.stop.create({
            data: {
                name: data.name,
                trajectoryGeom: data.trajectoryGeom,
                address: data.address
            }
        });

        return new NextResponse(JSON.stringify(stop), {
            headers: { "Content-Stop": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const stops = await prisma.stop.findMany();

        return new NextResponse(JSON.stringify(stops), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
