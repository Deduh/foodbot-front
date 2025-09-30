export interface DecodedToken {
	sub: string
	telegramUserId: string
	role: "ADMIN" | "RESTAURANT_OWNER" | "CUSTOMER"
	restaurantId: string | null
}
