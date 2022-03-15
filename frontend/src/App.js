/** @format */

import "./App.css"
import React from "react"
import { DrizzleContext } from "@drizzle/react-plugin"
import { Drizzle } from "@drizzle/store"
import drizzleOptions from "./utils/drizzleOptions"
import TokenMetadata from "./components/TokenMetadata"
import TokenWallet from "./components/TokenWallet"
import Admin from "./components/Admin"

const drizzle = new Drizzle(drizzleOptions)

const App = () => {
	return (
		<div className='container'>
			<h1>ERC721 Token</h1>
			<DrizzleContext.Provider drizzle={drizzle}>
				<DrizzleContext.Consumer>
					{(drizzleContext) => {
						const { drizzle, drizzleState, initialized } = drizzleContext
						console.log(drizzle)
						console.log(drizzleState)
						if (!initialized) {
							return "Loading..."
						}
						return (
							<>
								<TokenMetadata drizzle={drizzle} drizzleState={drizzleState} />
								<TokenWallet drizzle={drizzle} drizzleState={drizzleState} />
								<Admin drizzle={drizzle} drizzleState={drizzleState} />
							</>
						)
					}}
				</DrizzleContext.Consumer>
			</DrizzleContext.Provider>
		</div>
	)
}

export default App
