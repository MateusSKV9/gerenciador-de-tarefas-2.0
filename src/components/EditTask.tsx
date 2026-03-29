import { SquarePen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function EditTask() {
	return (
		<Dialog>
			<DialogTrigger className="bg-black text-white p-2 rounded-sm hover:bg-primary cursor-pointer transition-all hover:-translate-y-0.5">
				<SquarePen size={18} />
			</DialogTrigger>
			<DialogContent aria-describedby={undefined}>
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
