const fs = require('fs');

let listadoPorHarcer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHarcer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar')
            //else
            //console.log('data.json guardado exitosamente');
    })
}

const cargarDB = () => {
    try {
        listadoPorHarcer = require('../db/data.json');
    } catch (error) {
        listadoPorHarcer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHarcer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHarcer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHarcer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHarcer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHarcer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHarcer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}