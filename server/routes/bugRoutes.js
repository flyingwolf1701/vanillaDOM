const express = require('express');
const router = express.Router();
const { getBugs, setBugs, updateBugs, deleteBugs } = require('../controllers/bugController')

router.get('/', getBugs);
router.post('/', setBugs);
router.put('/:id', updateBugs);
router.delete('/:id', deleteBugs)


module.exports = router;

// 

// (req, res) => {
//   res.send('hello')
// }