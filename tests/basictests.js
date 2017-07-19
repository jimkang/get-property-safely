var test = require('tape');
var GetPropertySafely = require('../index');

var testCases = [
  {
    name: 'Property exists',
    opts: {
      property: 'deeds',
      default: [],
      object: {
        deeds: ['get groceries', 'eat sandwich']
      }
    },
    expected: ['get groceries', 'eat sandwich']
  },
  {
    name: 'Property does not exist',    
    opts: {
      property: 'deeds',
      default: [],
      object: {
      }
    },
    expected: []
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test(testCase.name, basicTest);

  function basicTest(t) {
    var get = GetPropertySafely(testCase.opts.property, testCase.opts.default);
    t.deepEqual(get(testCase.opts.object), testCase.expected);
    t.end();
  }
}
