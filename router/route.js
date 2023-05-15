const express = require('express');
const router = express.Router();
const company = require('../controller/companyController')
// const{auth} = require('../middleware/auth')

router.post('/orders/create',company.order)
router.post('/orders/update/',company.update)
router.get('/orders/list',company.list)
router.delete('/orders/delete',company.delete)
router.get('/orders/search',company.searchList)


module.exports = router;
