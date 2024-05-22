import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        const trajectory = await prisma.trajectory.create({ // Utilizando el nombre correcto del modelo
            data: {
                name:  data.name,
                passingFrequency:  data.passingFrequency,
                estimatedTime:     data.estimatedTime,
                serviceCost:       data.serviceCost,
                startTime:         data.startTime,
                endTime:           data.endTime,
                trajectoryGeom:     data.trajectoryGeom,
                city:              data.city,           
                cityId:            data.cityId, 
            }
        });

        return new NextResponse(JSON.stringify(trajectory), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}



export async function GET(request) {
    try {
        const trajectories = await prisma.trajectory.findMany();

        return new NextResponse(JSON.stringify(trajectories), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
