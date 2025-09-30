import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

const api = axios.create({
	baseURL: API_BASE_URL,
})

api.interceptors.request.use(config => {
	if (typeof window !== "undefined") {
		const token = localStorage.getItem("access_token")

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
	}

	return config
})

export default api
