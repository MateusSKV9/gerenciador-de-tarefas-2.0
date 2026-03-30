"use server";

import { prisma } from "@/lib/prisma";
import { ActionResponse } from "./create-task";
import { revalidatePath } from "next/cache";

export async function toggleTaskStatus(id: string, currentStatus: boolean): Promise<ActionResponse> {
	try {
		await prisma.tasks.update({
			where: { id: id },
			data: {
				done: !currentStatus,
			},
		});

		revalidatePath("/");
		return { success: true, message: "Atualizada com sucesso!" };
	} catch (error) {
		console.error(error);
		return { success: false, message: "Erro ao estabelecer conexão!" };
	}
}
