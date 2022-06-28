const { Router } = require('express')
const router = Router()


const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controller/user')
const { getRelation, createRelation } = require('../controller/relation')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);


router.get('/relations', getRelation)
router.post('/relations', createRelation)
module.exports = router;

