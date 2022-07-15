// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Create complex multi-dimensional arrays</h1>`;

/** TODO:
 * We have defined a variable, myNestedArray, set equal to an array.  Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember,  the outer-most array is level 1).
 * Somewhere on the third level, include the string 'deep', on the fourth leve, include the string 'deeper', and on the fifth level, include the string 'deepest'.
 
 let myNestedArray = [
   // Only change code below this line
   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
   ['loop', 'shift', 6, 7, 1000, 'method'],
   ['concat', false, true, 'spread', 'array'],
   ['mutate', 1327.98, 'splice', 'slice', 'push'],
   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
 ];
 */

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]],
  // Only change code above this line
];

/** HINT:
 * 1. The first string - 'deep' - must be inserted three levels deep.  This means within exactly three sets of [square-brackets].
 *    EXAMPLE:
 *    let threeLevelArray = [
 *      "first level",
 *      ["Two levels deep", ["Three levels deep"]]
 *    ];
 * 2. Using this logic insert strings 'deep', 'deeper' and 'deepest', in the matrix three levels deep, four levels deep and five levels deep respectively.
 */

// THE SECOND WAY:
let myNestedArray2 = [
  'level 1' /* myNestedArray2[0] */,
  ['level 2'] /* myNestedArray2[1][0] */,
  [['level 3', 'deep']] /* myNestedArray2[2][0][0] */,
  [[['level 4', 'deeper']]] /* myNestedArray2[3][0][0][0] */,
  [[[['level 5', 'deepest']]]] /* myNestedArray2[4][0][0][0][0] */,
];

let myNestedArray3 = [
  'unshift',
  false,
  1,
  2,
  3,
  'complex',
  'nested',
  ['loop', 'shift', 6, 7, 1000, 'method'],
  [['concat', false, true, 'spread', 'array', 'deep']],
  [[['mutate', 1327.98, 'splice', 'slice', 'push', 'deeper']]],
  [[[['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', 'deepest']]]],
];
