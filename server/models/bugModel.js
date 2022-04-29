const mongoose = require('mongoose');

const bugSchema = mongoose.Schema(
  {
    text: {type: String}
  },
  {timestamps: true}
);

module.exports = mongoose.model('BugTracker', bugSchema);