import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const unit = await prisma.unit.findUnique({
            where: { id: id }
        });

        if (!unit) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(unit), {
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
        await prisma.unit.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "Unit deleted successfully" }), {
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
        const updatedUnit = await prisma.unit.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedUnit), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}