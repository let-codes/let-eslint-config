const index = require("./index")

describe("@let-codes eslint", () => {
	it("Exported object have rules", () =>
		expect(index).toHaveProperty("rules"))

	it("Exported object have parserOptions", () =>
		expect(index).toHaveProperty("parserOptions"))
})
