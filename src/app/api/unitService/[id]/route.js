import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        const unitService = await prisma.UnitsService.findUnique({
            where: { id: id }
        });

        if (!unitService) {
            return new NextResponse(JSON.stringify({}), {
                headers: { "Content-Type": "application/json" },
                status: 404
            });
        }

        return new NextResponse(JSON.stringify(unitService), {
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
        await prisma.UnitsService.delete({
            where: { id: id }
        });

        return new NextResponse(JSON.stringify({ message: "UnitService deleted successfully" }), {
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
        const updatedUnitService = await prisma.UnitsService.update({
            where: { id: id },
            data: data
        });

        return new NextResponse(JSON.stringify(updatedUnitService), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}