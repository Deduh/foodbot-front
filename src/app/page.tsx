"use client"

import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import api from "./lib/api"
import { useTelegram } from "./lib/telegram"
import { DecodedToken } from "./types/auth"

export default function HomePage() {
	const router = useRouter()
	const { webApp } = useTelegram()
	const [status, setStatus] = useState("Аутентификация...")

	useEffect(() => {
		if (!webApp) {
			return
		}

		const initData = webApp.initData

		if (!initData) {
			setStatus("Ошибка: Запустите приложение через Telegram.")

			return
		}

		const authenticate = async () => {
			try {
				const urlParams = new URLSearchParams(window.location.search)
				const botId = urlParams.get("bot_id")

				if (!botId) {
					setStatus("Ошибка: Не найден идентификатор бота в URL.")

					return
				}

				const response = await api.post("/auth/telegram", { initData, botId })
				const { access_token } = response.data

				localStorage.setItem("access_token", access_token)

				const decodedToken: DecodedToken = jwtDecode(access_token)
				const { role, restaurantId } = decodedToken

				if (role === "RESTAURANT_OWNER" && restaurantId) {
					localStorage.setItem("restaurant_id", restaurantId)
				}

				if (role === "RESTAURANT_OWNER" || role === "ADMIN") {
					router.replace("/dashboard")
				} else {
					router.replace("/menu")
				}
			} catch (error) {
				console.error("Authentication failed:", error)

				setStatus(
					`Не удалось войти. Попробуйте перезапустить Mini App. ${error}`
				)
			}
		}

		authenticate()
	}, [webApp, router])

	return <div>{status}</div>
}
