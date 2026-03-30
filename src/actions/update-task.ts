"use server";

import { prisma } from "@/lib/prisma";
import { ActionResponse } from "./create-task";
import { revalidatePath } from "next/cache";

export async function updateTask(id: string, formData: FormData): Promise<ActionResponse> {
	const title = String(formData.get("title"));

	if (!title || title.trim() === "") {
		return { success: false, message: "Título inválido!" };
	}

	try {
		const updatedtasks = await prisma.tasks.update({
			where: {
				id: id,
			},
			data: {
				title: title,
				done: false,
			},
		});

		revalidatePath("/");
		return { success: true, data: updatedtasks, message: "Tarefa atualizada com sucesso!" };
	} catch (error) {
		console.log(error);
		return { success: false, message: "Erro ao estabelecer conexão!" };
	}
}
