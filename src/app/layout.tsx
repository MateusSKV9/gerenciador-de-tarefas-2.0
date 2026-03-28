import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Gerenciador de Tarefas 2.0",
	description: "Gerenciador de tarefas com CRUD completo integrado com backend.",
};

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-br" className={cn("h-full", "antialiased", inter.className, "font-sans", geist.variable)}>
			<body className="min-h-full flex items-center justify-center flex-col">{children}</body>
		</html>
	);
}
