import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export default function Home() {
	return (
		<main
			className="w-full h-screen bg-gray-100 flex flex-col
    justify-center items-center"
		>
			<h1 className="text-3xl font-bold">Gerenciador de Tarefas 2.0</h1>
			<Card className="w-2xl p-4">
				<div className="flex p-2 gap-2">
					<Input type="text" placeholder="Adicionar tarefa" />
					<Button
						className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700 hover:text-white"
						variant={"outline"}
					>
						<Plus />
						Cadastrar
					</Button>
				</div>

				<Separator />
			</Card>
		</main>
	);
}
