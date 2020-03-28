const express = require('express')
const app = express()
const port = 3001

app.get('/orders/:id', function (req, res) {
	const user = {
  "orders": [
			{
			  "orderId": 1,
			  "orderAmount": 250,
			  "orderDate": "14-Apr-2020"
			},
		   {
			  "orderId": 2,
			  "orderAmount": 450,
			  "orderDate": "15-Apr-2020"
			}
		]
	}

        res.json(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))