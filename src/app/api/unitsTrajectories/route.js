import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const unitTrajectory = await prisma.UnitsTrajectories.create({
            data: {
                unitId: data.unitId,
                trajectoryId: data.trajectoryId
            }
        });

        return new NextResponse(JSON.stringify(unitTrajectory), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const unitsTrajectories = await prisma.UnitsTrajectories.findMany();

        return new NextResponse(JSON.stringify(unitsTrajectories), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}