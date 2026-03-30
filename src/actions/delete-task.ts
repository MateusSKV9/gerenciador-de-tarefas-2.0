"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTask(id: string) {
	try {
		const deletedTask = await prisma.tasks.delete({
			where: {
				id: id,
			},
		});

		revalidatePath("/");
		console.log(deletedTask);
	} catch (error) {
		console.error(error);
	}
}
