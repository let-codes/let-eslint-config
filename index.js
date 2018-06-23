module.exports = {
	extends: ["prettier", "plugin:react/recommended"],
	plugins: ["prettier", "react"],
	parserOptions: {
		ecmaVersion: 7,
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true
		},
		sourceType: "module"
	},
	rules: {
		"react/jsx-curly-spacing": [2, "always"],
		"react/jsx-pascal-case": [2, { allowAllCaps: true }],
		"react/react-in-jsx-scope": [0],
		"array-bracket-spacing": ["error", "never"],
		"arrow-spacing": ["error", { before: true, after: true }],
		"block-spacing": ["error"],
		"brace-style": ["warn", "1tbs", { allowSingleLine: true }],
		camelcase: 0,
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", { before: false, after: true }],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never"],
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		indent: ["error", "tab", { SwitchCase: 1 }],
		"key-spacing": ["error", { beforeColon: false }],
		"keyword-spacing": [
			"error",
			{
				overrides: {
					if: { after: false },
					for: { after: false },
					switch: { after: false },
					while: { after: false }
				}
			}
		],
		"line-comment-position": ["error", { position: "above" }],
		"lines-around-comment": [
			"error",
			{ beforeBlockComment: true, beforeLineComment: true }
		],
		"lines-around-directive": ["error", "always"],
		"max-len": ["warn", { code: 140 }],
		"newline-after-var": ["error", "always"],
		"newline-before-return": "error",
		"newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
		"no-bitwise": "error",
		"no-delete-var": "error",
		"no-duplicate-imports": "error",
		"no-lone-blocks": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
		"no-restricted-globals": ["error", "event"],
		"no-trailing-spaces": "error",
		"no-undefined": "error",
		"no-use-before-define": "warn",
		"no-unused-vars": "error",
		"no-var": "error",
		"no-whitespace-before-property": "error",
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": [0, "never"],
		"padded-blocks": [0, "never"],
		quotes: ["error", "double", { allowTemplateLiterals: true }],
		semi: ["error", "never"],
		"semi-spacing": ["error", { before: false, after: true }],
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"spaced-comment": ["error", "always", { block: { balanced: true } }],
		"template-curly-spacing": ["error", "always"]
	}
}
