"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTask(id: string) {
	try {
		await prisma.tasks.delete({
			where: {
				id: id,
			},
		});

		revalidatePath("/");
	} catch (error) {
		console.error(error);
	}
}
