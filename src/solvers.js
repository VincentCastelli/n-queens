/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};
      
window.findNRooksSolution = function(n) {
  //debugger;
  //var matrix = makeEmptyMatrix(n);
  var board = new Board({n: n});
  //board.togglePiece(0, 0);
  var count = 0;
  var currentCol = 0;
  var currentRow = 0;
  //var matrix = makeEmptyMatrix(n);
  while (count < n) {
    board.togglePiece(currentRow, currentCol);
    currentCol++;
    currentRow++;
    count++;
    if (currentCol >= n) {
      currentCol = 0;
    }
    if (currentRow >= n) {
      currentRow = 0;
    }
  }
  var matrix = [];
  for (var i = 0; i < n; i++) {
    matrix.push(board.get(i));
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(matrix));
  return matrix; 
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
