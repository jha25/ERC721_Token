/** @format */

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Drizzle, generateStore } from "@drizzle/store"
import { DrizzleContext } from "@drizzle/react-plugin"

import drizzleOptions from "./utils/drizzleOptions"

const drizzleStore = generateStore(drizzleOptions)
const drizzle = new Drizzle(drizzleOptions, drizzleStore)

ReactDOM.render(
	<DrizzleContext.Provider drizzle={drizzle}>
		<App />
	</DrizzleContext.Provider>,
	document.getElementById("root"),
)
