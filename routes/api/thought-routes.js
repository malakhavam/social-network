const router = require("express").Router();

const {

  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought

} = require('../../controllers/thought-controller');

// GET all and POST at /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;