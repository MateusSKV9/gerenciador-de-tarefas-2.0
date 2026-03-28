import { Task } from "@/components/Task";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, CircleDot, ListTodo, Trash, Sigma } from "lucide-react";

const tasks = [
	{ id: 1, title: "Estudar React.js", completed: true },
	{ id: 2, title: "Estudar Next.js", completed: false },
	{ id: 3, title: "Estudar Prisma", completed: false },
];

const qttCompleted = tasks.filter((task) => task.completed).length;

const percentual = tasks.length > 0 ? Math.round(Math.max(0, (qttCompleted / tasks.length) * 100)) : 0;

export default function Home() {
	return (
		<main
			className="w-full h-screen bg-gray-100 flex flex-col
    justify-center items-center"
		>
			<h1 className="text-3xl font-bold m-2">Gerenciador de Tarefas 2.0</h1>
			<Card className="w-2xl">
				<CardHeader className="flex gap-2">
					<Input className="p-4" type="text" placeholder="Adicionar tarefa" />
					<Button className="cursor-pointer" variant={"default"}>
						<Plus />
						Cadastrar
					</Button>
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

					<ul className="flex flex-col gap-2 list-inside list-none">
						{tasks.map((task) => (
							<Task key={task.id} title={task.title} completed={task.completed} />
						))}
					</ul>

					<div className="flex flex-col gap-2.5">
						<div className="flex justify-between mt-2">
							<div className="flex items-center gap-1">
								<ListTodo size={18} />
								<span>
									Tarefas concluídas ({qttCompleted}/{tasks.length})
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
										<AlertDialogTitle>Tem certeza que deseja excluir {tasks.length} itens?</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete your account from our servers.
										</AlertDialogDescription>
									</AlertDialogHeader>

									<AlertDialogFooter>
										<AlertDialogAction>Sim</AlertDialogAction>
										<AlertDialogCancel>Cancelar</AlertDialogCancel>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>{" "}
						</div>

						<Progress value={percentual} />

						<div className="flex gap-0.5 justify-end items-center">
							<Sigma size={18} />
							<span className="text-xs">{tasks.length} tarefas no total</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
