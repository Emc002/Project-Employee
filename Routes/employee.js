const express = require('express');
const router = express.Router()

const employeePack = require('../Controllers/Employee')

router.route('/').get(employeePack.getAllEmployee).post(employeePack.createEmployee)
router.route('/:id').get(employeePack.getOneEmployee).patch(employeePack.updateEmployee).delete(employeePack.deleteEmployee)

module.exports = router;