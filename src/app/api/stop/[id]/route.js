import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const stop = await prisma.stop.findUnique({
            where: { id: id }
        });

        if (!stop) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(stop), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const id = parseInt(params.id);
        await prisma.stop.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "Stop deleted successfully" }), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const id = parseInt(params.id);
        const data = await request.json();
        const updatedStop = await prisma.stop.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedStop), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}