"use client";

import { Trash2 } from "lucide-react";
import { TaskButton } from "./TaskButton";
import { EditTask } from "./EditTask";
import { deleteTask } from "@/actions/delete-task";
import { toggleTaskStatus } from "@/actions/toggle-task-status";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";

type TaskProps = {
	id: string;
	title: string;
	completed: boolean;
};

export function Task({ id, title, completed }: TaskProps) {
	const { pending } = useFormStatus();

	const handleDelete = async () => {
		await deleteTask(id);
	};

	const handleToggleStatus = async () => {
		await toggleTaskStatus(id, completed);
	};

	return (
		<li
			className={`flex justify-between bg-gray-100 p-2 rounded-sm items-center border-l-4 border ${
				completed ? "border-l-green-400" : "border-l-red-400"
			}`}
		>
			<span onClick={handleToggleStatus} className="font-semibold cursor-pointer hover:text-primary">
				{title}
			</span>

			<div className="flex  gap-2">
				<EditTask id={id} title={title} />

				<TaskButton onClick={handleDelete} title="Excluir">
					<Trash2 size={18} />
				</TaskButton>
			</div>
		</li>
	);
}
