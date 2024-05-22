import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const type = await prisma.unit.create({
            data: {
                name: data.name,
                capacity: data.capacity
            }
        });

        return new NextResponse(JSON.stringify(unit), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}


export async function GET(request) {
    try {
        const units = await prisma.unit.findMany();

        return new NextResponse(JSON.stringify(units), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}