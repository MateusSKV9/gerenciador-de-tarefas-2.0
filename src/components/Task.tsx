import { SquarePen, Trash2 } from "lucide-react";
import { TaskButton } from "./TaskButton";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type TaskProps = {
	title: string;
	completed: boolean;
};

export function Task({ title, completed }: TaskProps) {
	return (
		<li
			className={`flex justify-between bg-gray-100 p-2 rounded-sm items-center border-l-4 border ${
				completed ? "border-l-green-400" : "border-l-red-400"
			}`}
		>
			<span className="font-semibold">{title}</span>

			<div className="flex  gap-2">
				<Dialog>
					<DialogTrigger>
						<TaskButton title="Editar">
							<SquarePen size={18} />
						</TaskButton>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Editar tarefa</DialogTitle>
						</DialogHeader>

						<div className="flex gap-2">
							<Input placeholder="Editar tarefa" />
							<Button>Editar</Button>
						</div>
					</DialogContent>
				</Dialog>

				<TaskButton title="Excluir">
					<Trash2 size={18} />
				</TaskButton>
			</div>
		</li>
	);
}
