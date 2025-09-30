import { CartButton } from "../components/CartButton"
import s from "../layout.module.scss"

export default function CustomerLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className={s.customerLayout}>
			<div className={s.customerLayoutContent}>{children}</div>

			<div className={s.customerCartButtonWrapper}>
				<CartButton />
			</div>
		</main>
	)
}
