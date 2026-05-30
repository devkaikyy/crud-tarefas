const express = require('express')
const router = express.Router()
const cont = require('../controllers/cont')

router.get('/', cont.BancoGet)
router.post('/', cont.BancoPost)
router.delete('/:id', cont.BancoDelete)
router.put('/:id', cont.BancoPut)


module.exports = router