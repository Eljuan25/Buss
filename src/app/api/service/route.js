import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const type = await prisma.service.create({
            data: {
                name: data.name,
                cost: data.cost,
            }
        });

        return new NextResponse(JSON.stringify(service), {
            headers: { "Content-Service": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const service = await prisma.service.findMany();

        return new NextResponse(JSON.stringify(service), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
