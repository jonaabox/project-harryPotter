const { response } = require('express');
const { append } = require('express/lib/response');



const userGet = ('/', (req, res = response)=>{

    const { q, nombre = 'No name', apikey, page , limit } = req.query;

    res.json({
        msg: 'get API',
        q,
        nombre,
        apikey,
        page, 
        limit
    })
});

const userPut = ('/', (req, res = response)=>{
    const {id} = req.params;

    res.json({
        msg: 'put API',
        id

    })
});

const userPost = ('/', (req, res = response)=>{
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
});


const userPatch = ('/', (req, res = response)=>{
    res.json({
        msg: 'patch API'
    })
});

const userDelete = ('/', (req, res = response)=>{
    res.json({
        msg: 'delete API'
    })
});

module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}

