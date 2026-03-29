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

export function TaskList({ initialTasks, percentual, qttCompleted }: TaskListProps) {
	return (
		<Card className="w-2xl">
			<CardHeader>
				<form action={createTask} className="flex gap-2">
					<Input id="title" name="title" className="p-4" type="text" placeholder="Adicionar tarefa" />

					<SubmitButton />
				</form>
			</CardHeader>

			<CardContent className="flex flex-col gap-2">
				<Separator className="mb-2" />

				<div className="flex gap-2">
					<Badge className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer">
						<List size={18} />
						Todas
					</Badge>

					<Badge variant={"secondary"} className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer">
						<CircleDot size={18} />
						Não finalizadas
					</Badge>

					<Badge variant={"secondary"} className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer">
						<Check size={18} />
						Concluídas
					</Badge>
				</div>

				{initialTasks.length > 0 ? (
					<ul className="flex flex-col gap-2 list-inside list-none">
						{initialTasks.map((task) => (
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
								Tarefas concluídas ({qttCompleted}/{initialTasks.length})
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
									<AlertDialogTitle>Tem certeza que deseja excluir {initialTasks.length} itens?</AlertDialogTitle>
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
						<span className="text-xs">{initialTasks.length} tarefas no total</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
