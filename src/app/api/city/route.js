import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const type = await prisma.city.create({
            data: {
                cityName: data.cityName,
            }
        });

        return new NextResponse(JSON.stringify(city), {
            headers: { "Content-City": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}


export async function GET(request) {
    try {
        const cities = await prisma.city.findMany();

        return new NextResponse(JSON.stringify(cities), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}