const {check} =require('express-validator');
module.exports = [
    check('title').notEmpty().withMessage('Requerido: title'),
    check('rating').notEmpty().withMessage('Requerido: reating'),
    check('awards').notEmpty().withMessage('Requerido: awards'),
    check('release_date').notEmpty().withMessage('Requerido: release date'),
    check('genre_id').notEmpty().withMessage('Requerido: Genero'),
]