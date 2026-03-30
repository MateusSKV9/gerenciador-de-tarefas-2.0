import { SquarePen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { updateTask } from "@/actions/update-task";
import { toast } from "sonner";
import { useState } from "react";
import { useFormStatus } from "react-dom";

type EditTaskProps = {
	id: string;
	title: string;
};

export function EditTask({ id, title }: EditTaskProps) {
	const [task, setTask] = useState({ title });
	const [open, setOpen] = useState(false);
	const { pending } = useFormStatus();

	const handleAction = async (formData: FormData) => {
		const result = await updateTask(id, formData);

		if (result.success) {
			toast.success(result.message);
			setOpen(false);
		} else toast.error(result.message);
	};

	const handleOnOpenChange = (open: boolean) => {
		setOpen(open);
		if (!open) setTask({ title });
	};

	return (
		<Dialog open={open} onOpenChange={handleOnOpenChange}>
			<DialogTrigger className="bg-black text-white p-2 rounded-sm hover:bg-primary cursor-pointer transition-all hover:-translate-y-0.5">
				<SquarePen size={18} />
			</DialogTrigger>
			<DialogContent aria-describedby={undefined}>
				<DialogHeader>
					<DialogTitle>Editar tarefa</DialogTitle>
				</DialogHeader>

				<form action={handleAction} className="flex gap-2">
					<Input
						onChange={(e) => setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
						value={task.title}
						id="title"
						name="title"
						placeholder="Editar tarefa"
						autoFocus
					/>
					<Button disabled={pending} type="submit">
						{pending ? "Editando..." : "Editar"}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
