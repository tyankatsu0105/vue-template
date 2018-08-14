'format cjs';

const engine = require('./engine');
const conventionalCommitTypes = require('./commit-types');
const emojiCommitTypes = require('./commit-types-emoji');

module.exports = engine({
  types: conventionalCommitTypes.types,
  types2: emojiCommitTypes.types
});
