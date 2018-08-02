'format cjs';

var wrap = require('word-wrap');
var map = require('lodash.map');
var longest = require('longest');
var rightPad = require('right-pad');

var filter = function(array) {
  return array.filter(function(x) {
    return x;
  });
};

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = function(options) {
  var types = options.types;
  var types2 = options.types2;

  var length = longest(Object.keys(types)).length + 1;
  var choicesPrefix = map(types, function(type, key) {
    return {
      name: rightPad(key + ':', length) + ' ' + type.description,
      value: key
    };
  });
  var choicesEmojiPrefix = map(types2, function(type, key) {
    return {
      name: rightPad(key + ':', length) + ' ' + type.description,
      value: key
    };
  });

  return {
    // When a user runs `git cz`, prompter will
    // be executed. We pass you cz, which currently
    // is just an instance of inquirer.js. Using
    // this you can ask questions and get answers.
    //
    // The commit callback should be executed when
    // you're ready to send back a commit template
    // to git.
    //
    // By default, we'll de-indent your commit
    // template and will keep empty lines.
    prompter: function(cz, commit) {
      // console.log('\nLine 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.\n');
      console.log(
        '\n1行目は100文字で切り取られ、超過分は次行以降に記載されます。\n'
      );

      // Let's ask some questions of the user
      // so that we can populate our commit
      // template.
      //
      // See inquirer.js docs for specifics.
      // You can also opt to use another input
      // collection library if you prefer.
      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: 'コミットする変更タイプを選択:',
          choices: choicesPrefix
        },
        {
          type: 'input',
          name: 'scope',
          message:
            '変更内容のスコープ(例:コンポーネントやファイル名):（enterでスキップ）\n'
        },
        {
          type: 'list',
          name: 'emoji',
          message: 'コミット内容に合うemojiを選択:',
          choices: choicesEmojiPrefix
        },
        {
          type: 'input',
          name: 'subject',
          message: '変更内容を要約した本質的説明:\n'
        },
        {
          type: 'input',
          name: 'body',
          message: '変更内容の詳細:（enterでスキップ）\n'
        },
        {
          type: 'confirm',
          name: 'isBreaking',
          message: '破壊的変更を含みますか？',
          default: false
        },
        {
          type: 'input',
          name: 'breaking',
          message: '破壊的変更についての記述:\n',
          when: function(answers) {
            return answers.isBreaking;
          }
        },
        {
          type: 'confirm',
          name: 'isIssueAffected',
          message: 'issueに関連した変更ですか？',
          default: false
        },
        {
          type: 'input',
          name: 'issues',
          message: '関連issueを追記 (例:"fix #123", "re #123"):\n',
          when: function(answers) {
            return answers.isIssueAffected;
          }
        }
      ]).then(function(answers) {
        var maxLineWidth = 100;

        var wrapOptions = {
          trim: true,
          newline: '\n',
          indent: '',
          width: maxLineWidth
        };

        // parentheses are only needed when a scope is present
        var scope = answers.scope.trim();
        scope = scope ? `(${answers.scope.trim()})` : '';

        // Hard limit this line
        var head = `${answers.type}${scope}: :${
          answers.emoji
        }: ${answers.subject.trim()}`.slice(0, maxLineWidth);

        // Wrap these lines at 100 characters
        var body = wrap(answers.body, wrapOptions);

        // Apply breaking change prefix, removing it if already present
        var breaking = answers.breaking ? answers.breaking.trim() : '';
        breaking = breaking
          ? 'BREAKING CHANGE: ' + breaking.replace(/^BREAKING CHANGE: /, '')
          : '';
        breaking = wrap(breaking, wrapOptions);

        var issues = answers.issues ? wrap(answers.issues, wrapOptions) : '';

        var footer = filter([breaking, issues]).join('\n\n');

        commit(head + '\n\n' + body + '\n\n' + footer);
      });
    }
  };
};
