/** @format */

import React, { useState, useEffect } from "react"
import { newContextComponents } from "@drizzle/react-components"

const { ContractForm } = newContextComponents

const Admin = ({ drizzle, drizzleState }) => {
	const [isAdmin, setIsAdmin] = useState(false)

	useEffect(() => {
		;(async () => {
			const admin = await drizzle.contracts.ERC721Token.methods.admin().call()
			setIsAdmin(admin.toLowerCase() === drizzleState.accounts[0].toLowerCase())
		})()
	}, [])

	if (!isAdmin) {
		return null
	}
	return (
		<div className='App'>
			<div>
				<h2>Mint</h2>
				<ContractForm
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract='ERC721Token'
					method='mint'
				/>
			</div>
		</div>
	)
}

export default Admin
