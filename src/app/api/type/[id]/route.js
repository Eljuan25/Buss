import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const type = await prisma.type.findUnique({
            where: { id: id }
        });

        if (!type) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(type), {
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
        await prisma.type.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "Type deleted successfully" }), {
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
        const updatedType = await prisma.type.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedType), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}