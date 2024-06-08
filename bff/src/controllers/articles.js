
const { getData: getDataService } = require('../services/articles')
const { handleSuccessResponse, handleErrorResponse } = require('../utils/response-handler')

const getData = (req, res) => {
    getDataService(req.query)
        .then((data) => {
            res.status(200).json(handleSuccessResponse(data))
        })
        .catch((error) =>
            res.status(error.code || 500).json(handleErrorResponse(error.message))
        )
}
module.exports = {
    getData,
}
