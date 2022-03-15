/** @format */

import ERC721Token from "./ERC721Token.json"

const options = {
	contracts: [ERC721Token],
	events: { ERC721Token: ["Transfer", "Approval"] },
}

export default options
