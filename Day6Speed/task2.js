function getWaysToRecord(arg) {
	const timeArray = []
	const distanceArray = []
	const result = []
	function transformData() {
		let time = arg.split('\n')[0]
		let distance = arg.split('\n')[1]
		timeArray.push(time.split(':')[1].trim().split(' ').join(''))
		distanceArray.push(distance.split(':')[1].trim().split(' ').join(''))
	}
	transformData()
	for (let i = 0; i < timeArray.length; i++) {
		let counter = 0
		for ( let j = 0; j <= timeArray[i]; j++) {
			let speed = j
			let remainingTime = timeArray[i] - speed
			let perspectiveDistance = remainingTime * speed
			if (perspectiveDistance > distanceArray[i]) {
				counter++
			}
		}
		result.push(counter)
	}

	console.log(`output->result`,result.reduce((acc, curr) => acc * curr))


}
const fs = require('node:fs');

const samplePath = 'Day6Speed/sample.txt'
const fullPath = 'Day6Speed/full.txt' 

fs.readFile(fullPath, 'utf-8', (error, data) => {
	if (error) {
		console.log(`output->error`,error)
	}
	getWaysToRecord(data)
})
