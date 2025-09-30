import { useEffect, useState } from "react"
import type { WebApp } from "telegram-web-app"

export function useTelegram() {
	const [webApp, setWebApp] = useState<WebApp | null>(null)

	useEffect(() => {
		if (typeof window !== "undefined" && window.Telegram?.WebApp) {
			const app = window.Telegram.WebApp

			app.expand()

			setWebApp(app)
		}
	}, [])

	return {
		webApp,
		user: webApp?.initDataUnsafe?.user,
	}
}
