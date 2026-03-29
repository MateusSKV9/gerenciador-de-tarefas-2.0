"use server";

import { prisma } from "@/lib/prisma";

export async function getTasks() {
	const tasks = await prisma.tasks.findMany();

	if (!tasks) return;

	console.log(tasks);
	return tasks;
}
