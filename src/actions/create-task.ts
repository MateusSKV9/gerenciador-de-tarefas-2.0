"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Tasks } from "../../generated/prisma/client";

export type ActionResponse = {
	data?: Tasks;
	success: boolean;
	message: string;
};

export async function createTask(formData: FormData): Promise<ActionResponse> {
	const title = String(formData.get("title"));

	if (!title || title.trim() === "") {
		return { success: false, message: "Tarefa inválida!" };
	}

	try {
		const newTask = await prisma.tasks.create({
			data: {
				title: title,
				done: false,
			},
		});

		revalidatePath("/");
		console.log(newTask);
		return { success: true, data: newTask, message: "Tarefa adicionada com sucesso!" };
	} catch (error) {
		console.error(error);
		return { success: false, message: "Erro ao estabelecer conexão!" };
	}
}
