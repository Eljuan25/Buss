import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const type = await prisma.type.create({
            data: {
                name: data.name,
                description: data.description,
            }
        });

        return new NextResponse(JSON.stringify(type), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}


export async function GET(request) {
    try {
        const types = await prisma.type.findMany();

        return new NextResponse(JSON.stringify(types), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}