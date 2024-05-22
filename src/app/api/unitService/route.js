import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const unitService = await prisma.UnitsService.create({
            data: {
                unitId: data.unitId,
                serviceId: data.serviceId
            }
        });

        return new NextResponse(JSON.stringify(unitService), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const unitsServices = await prisma.UnitsService.findMany();

        return new NextResponse(JSON.stringify(unitsServices), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
