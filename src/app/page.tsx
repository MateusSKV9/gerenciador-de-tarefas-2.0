import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, CircleDot } from "lucide-react";

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

				<CardContent>
					<Separator className="mb-2" />

					<div className="flex gap-2">
						<Badge className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer">
							<List size={18} />
							Todas
						</Badge>

						<Badge variant={"secondary"} className="text-sm p-3 pt-3.5 pb-3.5cursor-pointer">
							<CircleDot size={18} />
							Não finalizadas
						</Badge>

						<Badge variant={"secondary"} className="text-sm p-3 pt-3.5 pb-3.5 cursor-pointer">
							<Check size={18} />
							Concluídas
						</Badge>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
