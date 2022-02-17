
const { Router } = require('express');
const { 
     userPut,
     userGet,
     userPost,
     userPatch,
     userDelete } = require('../controller/users');

const router = Router();

router.get('/',userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.patch('/', userPatch);

router.delete('/', userDelete);


module.exports = router;


