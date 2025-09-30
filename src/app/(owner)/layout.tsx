export default function OwnerLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<main>{children}</main>
		</div>
	)
}
