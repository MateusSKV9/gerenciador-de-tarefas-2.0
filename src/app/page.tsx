import { TaskList } from "@/components/TaskList";
import { prisma } from "@/lib/prisma";

export default async function Home() {
	const tasks = await prisma.tasks.findMany();

	const qttCompleted = tasks.filter((task) => task.done).length;

	const percentual = tasks.length > 0 ? Math.round(Math.max(0, (qttCompleted / tasks.length) * 100)) : 0;

	return (
		<main
			className="w-full h-screen bg-gray-100 flex flex-col
    justify-center items-center"
		>
			<h1 className="text-3xl font-bold m-2">Gerenciador de Tarefas 2.0</h1>

			<TaskList initialTasks={tasks} percentual={percentual} qttCompleted={qttCompleted} />
		</main>
	);
}
