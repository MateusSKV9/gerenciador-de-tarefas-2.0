import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	try {
		await prisma.tasks.findFirst({ select: { id: true } });

		return NextResponse.json({ status: "ok", message: "Database active" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ status: "error", message: "Failed to connect to database" }, { status: 500 });
	}
}
