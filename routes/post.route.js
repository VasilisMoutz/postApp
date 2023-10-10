const express = require('express');
const router = express.Router();

const { body, param, validationResult } = require('express-validator');
const postController = require('../controllers/post.controller')


const textAndTitleValidator = () => {
    return [
        body('title').not().isEmpty().withMessage('The field is required'),
        body('title').isString().withMessage('Enter only letters'),
        body('text').not().isEmpty().withMessage('Field is required'),
        body('text').isAlpha().withMessage('Enter only letters')
    ]
}

router.get('/', postController.findAll);
router.post('/', textAndTitleValidator(), (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty){
        return res.status(400).json({
            status: false,
            data: errors.array()
        });
    }
    next();
},postController.create);
router.get('/:id', postController.findOne);
router.patch('/:id', postController.updatePost);
router.patch('/:id/category', postController.updateCategory);
router.delete('/:id', postController.deletePost);
router.delete('/:id/categories', postController.deletePostCategories);

module.exports = router;