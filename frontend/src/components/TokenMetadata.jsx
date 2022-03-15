/** @format */

import React, { useState } from "react"
import { newContextComponents } from "@drizzle/react-components"

const { ContractData } = newContextComponents

const TokenMetadata = ({ drizzle, drizzleState }) => {
	const [ownerOfArg, setOwnerOfArg] = useState(undefined)
	const [getApprovedArg, setGetApprovedArg] = useState(undefined)
	const [isApprovedForAllArgs, setIsApprovedForAllArgs] = useState(undefined)

	const handleSubmitOwnerOf = (e) => {
		e.preventDefault()
		setOwnerOfArg(e.target.elements[0].value)
	}

	const handleSubmitGetApproved = (e) => {
		e.preventDefault()
		setGetApprovedArg(e.target.elements[0].value)
	}

	const handleSubmitIsApprovedForAll = (e) => {
		e.preventDefault()
		setIsApprovedForAllArgs([
			e.target.elements[0].value,
			e.target.elements[1].value,
		])
	}
	return (
		<div className='App'>
			<div>
				<h2>Admin</h2>
				<ContractData
					drizzle={drizzle}
					drizzleState={drizzleState}
					contract='ERC721Token'
					method='admin'
				/>
			</div>
			<div>
				<h2>Owner of Token</h2>
				<form onSubmit={handleSubmitOwnerOf}>
					<input type='text'></input>
					<button>Submit</button>
				</form>
				{ownerOfArg && (
					<ContractData
						drizzle={drizzle}
						drizzleState={drizzleState}
						contract='ERC721Token'
						method='ownerOf'
						methodArgs={[ownerOfArg]}
					/>
				)}
			</div>
			<div>
				<h2>Approved address of token</h2>
				<form onSubmit={handleSubmitGetApproved}>
					<input type='text'></input>
					<button>Submit</button>
				</form>
				{getApprovedArg && (
					<ContractData
						drizzle={drizzle}
						drizzleState={drizzleState}
						contract='ERC72Token'
						method='getApproved'
						methodArgs={[getApprovedArg]}
					/>
				)}
			</div>
			<div>
				<h2>Is approved for all</h2>
				<form onSubmit={handleSubmitIsApprovedForAll}>
					<label htmlFor='ownerAddress'>Owner address</label>
					<input id='ownerAddress' type='text'></input>
					<label htmlFor='operatorAddress'>Operator</label>
					<input id='operatorAddress' type='text'></input>
					<button>Submit</button>
				</form>
				{isApprovedForAllArgs && (
					<ContractData
						drizzle={drizzle}
						drizzleState={drizzleState}
						contract='ERC721Token'
						method='isApprovedForAll'
						methodArgs={isApprovedForAllArgs}
					/>
				)}
			</div>
		</div>
	)
}

export default TokenMetadata
