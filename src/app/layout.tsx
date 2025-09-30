import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import Script from "next/script"
import "./styles/index.scss"

const manrope = Manrope({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "700"],
	variable: "--font-manrope",
})

export const metadata: Metadata = {
	title: "FoodBot",
	description: "Your food delivery app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={manrope.variable}>
				{children}

				<Script
					src="https://telegram.org/js/telegram-web-app.js"
					strategy="beforeInteractive"
				/>
			</body>
		</html>
	)
}
