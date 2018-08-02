'format cjs';

var engine = require('./engine');
var conventionalCommitTypes = require('./commit-types');
var emojiCommitTypes = require('./commit-types-emoji');

module.exports = engine({
  types: conventionalCommitTypes.types,
  types2: emojiCommitTypes.types
});
