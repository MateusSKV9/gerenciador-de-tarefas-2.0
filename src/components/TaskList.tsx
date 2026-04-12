"use client";

import { List, CircleDot, Check, ListTodo, Trash, Sigma } from "lucide-react";

import { Task } from "./Task";
import {
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialog,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { createTask } from "@/actions/create-task";
import { SubmitButton } from "./SubmitButton";
import { toast } from "sonner";
import { useState } from "react";

type TaskType = {
	id: string;
	title: string;
	done: boolean;
};

type TaskListProps = {
	initialTasks: TaskType[];
	percentual: number;
	qttCompleted: number;
};

type categoryListType = "all" | "completed" | "uncompleted";

export function TaskList({ initialTasks, percentual, qttCompleted }: TaskListProps) {
	const [categoryList, setCategoryList] = useState<categoryListType>("all");

	const displayedTasks = initialTasks
		.filter((task) => {
			if (categoryList === "completed") return task.done;
			if (categoryList === "uncompleted") return !task.done;
			return true;
		})
		.sort((a, b) => Number(a.done) - Number(b.done));

	const handleAction = async (formData: FormData) => {
		const result = await createTask(formData);

		if (result.success) toast.success(result.message);
		else toast.error(result.message);
	};

	return (
		<Card className="w-2xl">
			<CardHeader>
				<form action={handleAction} className="flex gap-2">
					<Input id="title" name="title" className="p-4" type="text" placeholder="Adicionar tarefa" />
					<SubmitButton />
				</form>
			</CardHeader>

			<CardContent className="flex flex-col gap-2">
				<Separator className="mb-2" />

				<div className="flex gap-2">
					<Badge
						onClick={() => setCategoryList("all")}
						variant={categoryList === "all" ? "default" : "secondary"}
						className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer"
					>
						<List size={18} />
						Todas
					</Badge>

					<Badge
						onClick={() => setCategoryList("uncompleted")}
						variant={categoryList === "uncompleted" ? "default" : "secondary"}
						className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer"
					>
						<CircleDot size={18} />
						Não finalizadas
					</Badge>

					<Badge
						onClick={() => setCategoryList("completed")}
						variant={categoryList === "completed" ? "default" : "secondary"}
						className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer"
					>
						<Check size={18} />
						Concluídas
					</Badge>
				</div>

				{displayedTasks.length > 0 ? (
					<ul className="flex flex-col gap-2 list-inside list-none">
						{displayedTasks.map((task) => (
							<Task key={task.id} id={task.id} title={task.title} completed={task.done} />
						))}
					</ul>
				) : (
					<p>Lista vazia.</p>
				)}

				<div className="flex flex-col gap-2.5">
					<div className="flex justify-between mt-2">
						<div className="flex items-center gap-1">
							<ListTodo size={18} />
							<span>
								Tarefas concluídas ({qttCompleted}/{displayedTasks.length})
							</span>
						</div>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button className="cursor-pointer" variant={"outline"}>
									<Trash size={18} />
									<span>Limpar tarefas concluídas</span>
								</Button>
							</AlertDialogTrigger>

							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Tem certeza que deseja excluir {displayedTasks.length} itens?</AlertDialogTitle>
									<AlertDialogDescription>
										Essa ação apagará todos os itens marcados como concluído.
									</AlertDialogDescription>
								</AlertDialogHeader>

								<AlertDialogFooter>
									<AlertDialogAction>Sim</AlertDialogAction>
									<AlertDialogCancel>Cancelar</AlertDialogCancel>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>

					<Progress value={percentual} />

					<div className="flex gap-0.5 justify-end items-center">
						<Sigma size={18} />
						<span className="text-xs">{displayedTasks.length} tarefas no total</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
