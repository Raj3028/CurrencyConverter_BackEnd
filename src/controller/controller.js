const axios = require('axios')
const coinFun = async function (req, res) {
    try {

        let resultFrom = req.query.from
        let resultTo = req.query.to
        let searchValue = req.query.price
        let result = []

        let options1 = {
            method: "get",
            url: "https://api.exchangerate-api.com/v4/latest/USD",
        }

        let currency
        const result1 = await axios(options1)
            .then((response) => currency = response)
            .catch((error) => console.log(error))
        //  console.log(currency.data.rates);
        let fromRate = currency.data.rates[resultFrom];
        let toRate = currency.data.rates[resultTo];
        convertedCurrency = ((toRate / fromRate) * searchValue).toFixed(2);

        result.push(parseInt(convertedCurrency))

        let currency2
        const result2 = await axios(`https://api.apilayer.com/exchangerates_data/convert?to=${resultTo}&from=${resultFrom}&amount=${searchValue}`,
            {
                headers: {
                    "apikey": "Mxbufiq0CyqtpI77JMGQ6VW4m26g6SLW"
                }
            }
        )
            .then((response) => currency2 = response)
            .catch((error) => console.log(error))
        result.push(currency2.data.result)

        result.sort((a, b) => a - b)

        return res.status(200).send({ status: true, data: { min: result[0], max: result[1] } })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}



module.exports.coinFun = coinFun