import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const trajectoryStop = await prisma.TrajectoriesStops.findUnique({
            where: { id: id }
        });

        if (!trajectoryStop) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(trajectoryStop), {
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
        await prisma.TrajectoriesStops.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "TrajectoryStop deleted successfully" }), {
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
        const updatedTrajectoryStop = await prisma.TrajectoriesStops.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedTrajectoryStop), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}