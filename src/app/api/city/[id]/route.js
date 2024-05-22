import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const city = await prisma.city.findUnique({
            where: { id: id }
        });

        if (!city) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(city), {
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
        await prisma.city.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "City deleted successfully" }), {
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
        const updatedCity = await prisma.city.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedCity), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}