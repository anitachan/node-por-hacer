const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea.'
}

const argv = require('yargs')
    .command('crear', 'Permite crear una nueva tarea', { descripcion })
    .command('actualizar', 'Permite crear una nueva tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Permite borrar una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}