import { SquarePen } from "lucide-react";
import { TaskButton } from "./TaskButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function EditTask() {
	return (
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
	);
}
