"use server";

import { prisma } from "@/lib/prisma";

export async function getTasks() {
	try {
		const tasks = await prisma.tasks.findMany();

		console.log(tasks);
		return tasks;
	} catch (error) {
		console.error(error);
		return [];
	}
}
