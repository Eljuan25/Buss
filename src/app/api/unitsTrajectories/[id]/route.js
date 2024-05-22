import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const unitTrajectory = await prisma.UnitsTrajectories.findUnique({
            where: { id: id }
        });

        if (!unitTrajectory) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(unitTrajectory), {
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
        await prisma.UnitsTrajectories.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "UnitsTrajectory deleted successfully" }), {
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
        const updatedUnitTrajectory = await prisma.UnitsTrajectories.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedUnitTrajectory), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}