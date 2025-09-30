"use client"

import s from "./CartButton.module.scss"

export function CartButton() {
	const totalPrice = "0,00 ₽"

	const handleClick = () => {
		console.log("Cart button clicked!")
	}

	return (
		<button className={s.cartButton} onClick={handleClick}>
			Корзина {totalPrice}
		</button>
	)
}
