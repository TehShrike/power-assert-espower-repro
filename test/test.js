const assert = require('power-assert')

const test = () => {
	const value1 = true
	const value2 = 3
	assert.deepEqual({ value: value1 }, { value: value2 })
}

test()
