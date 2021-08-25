const { response } = require("express");



const usuariosGet=(req, res=response)=> {
    const {nombre="no name",id,key,page="1",limit="10"}=req.query;
    
    res.status(200).json({
        msg:'get api- controlador',
        nombre,
        id,
        key,
        page,
        limit
    })
}

const usuariosPost=(req, res=response)=> {

    const {nombre, edad}=req.body;
    res.status(200).json({
        msg:'post api - controlador',
        nombre,
        edad,
    })
}

const usuariosPut=(req, res=response)=> {

    const {id}=req.params;
    res.status(200).json({
        msg:'put api - controlador',
        id
    })
}
const usuariosPatch=(req, res=response)=> {
    res.status(200).json({
        msg:'Patch api - controlador'
    })
}

const usuariosDelete=(req, res=response)=> {
    res.status(200).json({
        msg:'Delete api - controlador'
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,

}