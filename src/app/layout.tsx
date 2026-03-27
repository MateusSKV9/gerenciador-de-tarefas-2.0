import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
		<html lang="pt-br" className={`${inter.className} h-full antialiased`}>
			<body className="min-h-full flex items-center justify-center">{children}</body>
		</html>
	);
}
