import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const schedule = await prisma.schedule.findUnique({
            where: { id: id }
        });

        if (!schedule) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(schedule), {
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
        await prisma.schedule.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "Schedule deleted successfully" }), {
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
        const updatedSchedule = await prisma.schedule.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedSchedule), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}