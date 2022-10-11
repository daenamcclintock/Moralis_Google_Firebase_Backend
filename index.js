const express = require('express')

const app = express()

// run API on designated port (4741 in this case)
app.listen(3000, () => {
	console.log('listening on port 3000')
})