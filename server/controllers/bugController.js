const asyncHandler = require('express')

const BugTracker = require('../models/bugModel');

// @desc    Get bugs
// @route   GET /  
// @access  Public
const getBugs = ((req, res) => {
  res.status(200).json({ message: 'get goals' })
});

// @desc    Post bugs
// @route   Post /  
// @access  Public
const setBugs = ((req, res) => {
  res.status(200).json({ message: 'set goals' })
});


// @desc    Put bugs
// @route   POST /  
// @access  Public
const updateBugs = ((req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` })
});

// @desc    Deltet bugs
// @route   DELETE /  
// @access  Public
const deleteBugs = ((req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` })
});

module.exports = {
  getBugs,
  setBugs,
  updateBugs,
  deleteBugs,
};

// status(200).json({ message: 'get goals' })