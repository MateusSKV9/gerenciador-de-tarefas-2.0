import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" className="cursor-pointer" variant={"default"} disabled={pending}>
			<Plus />
			{pending ? "Cadastrando..." : "Cadastrar"}
		</Button>
	);
}
