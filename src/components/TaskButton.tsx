type TaskButtonProps = {
	children: React.ReactNode;
};

export function TaskButton({ children }: TaskButtonProps) {
	return (
		<button
			className={`bg-black rounded-sm text-white p-1.5 cursor-pointer hover:-translate-y-0.5 transition-all hover:bg-primary`}
			type="button"
			title="Deletar"
		>
			{children}
		</button>
	);
}
