/** @format */

import React from "react"
import { newContextComponents } from "@drizzle/react-components"

const { ContractData, ContractForm } = newContextComponents

const TokenWallet = ({ drizzle, drizzleState }) => {
	return (
		<div className='App'>
			<div>
				<h2>Balance</h2>
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract='ERC721Token'
					method='balanceOf'
					methodArgs={[drizzleState.accounts[0]]}
				/>
			</div>
			<div>
				<h2>Transfer from</h2>
				<ContractForm
					drizzle={drizzle}
					contract='ERC721Token'
					method='transferFrom'
				/>
			</div>
			<div>
				<h2>Safe Transfer from</h2>
				<ContractForm
					drizzle={drizzle}
					contract='ERC721Token'
					method='safeTransferFrom'
				/>
			</div>
			<div>
				<h2>Approve</h2>
				<ContractForm
					drizzle={drizzle}
					contract='ERC721Token'
					method='approve'
				/>
			</div>
		</div>
	)
}

export default TokenWallet
