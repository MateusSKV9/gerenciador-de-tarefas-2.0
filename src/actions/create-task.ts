"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
	const title = String(formData.get("title"));
	if (!title || title.trim() === "") return;

	try {
		await prisma.tasks.create({
			data: {
				title: title,
				done: false,
			},
		});

		revalidatePath("/");
	} catch (error) {
		console.error(error);
	}
}
