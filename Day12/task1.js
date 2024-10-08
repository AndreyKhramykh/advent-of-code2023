function getResult(data) {
	const input = data.split('\n')

	let result = 0
	// console.log(`output->input`,input)

	for (let line of input) {
		let [code, numbers] = line.split(' ')
		numbers = numbers.split(',').map(Number)

		// console.log(`output->`,code)
		// console.log(`output->`,numbers)

		let number = [0]
		let dictionary = code + '?'
		// console.log(`output->dictionary`,dictionary)

		number = number.concat(numbers)
		// console.log(`output->`,dictionary)
		// console.log(`output->number`,number)

		let counts = []
		for (let i = 0; i < dictionary.length; i++) {
			counts[i] = []
		}
		// console.log(`output->`,dictionary)
		// console.log(`output->counts`,counts)

		let calculate = (m, n) => {
			if (m == -1 && n == 0) return 1
			if (counts[m]) return counts[m][n] ?? 0
			return 0
		}

		for (let i = 0; i < number.length; i++) {
			for (let j = 0; j < dictionary.length; j++) {
				let cur = 0
				if (dictionary[j] != '#') {
					cur += calculate(j - 1, i)
					// console.log(`output->cur`,cur)
				}
				if (i > 0) {
					let d = true
					for (let k = 1; k <= number[i]; k++) {
						if (dictionary[j - k] == '.') d = false
					}
					if (dictionary[j] == '#') d = false
					if (d) cur += calculate(j - number[i] - 1, i - 1)
				}
				counts[j][i] = cur
			}
		}

		result += counts[dictionary.length - 1][number.length - 1]
	}
	console.log(result)
}
const fs = require('node:fs')

const samplePath = 'Day12/sample.txt'
const fullPath = 'Day12/full.txt'

fs.readFile(fullPath, 'utf-8', (error, data) => {
	if (error) {
		console.log(`output->error`, error)
	}
	getResult(data)
})
