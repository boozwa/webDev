  var player = true;
  var board = [];
  var gameOver = false;
  var winningCells = [];
  var tally = {
      red: 0,
      blk: 0
  };
  var cell = function (x, y) {
      return {
          "x": x,
          "y": y,
          color: "",
      };
  };

  //games won tally
  var redScore = document.getElementById("redScore");
  redScore.innerText = tally.red;
  var blkScore = document.getElementById("blkScore");
  blkScore.innerText = tally.red;

  //highlight the active player
  var redTurn = document.getElementById("player1");
  var blkTurn = document.getElementById("player2");
  blkTurn.classList.toggle("highlight");



  //---------------------------------------------------------------------------
  //                      Set up the Board
  //---------------------------------------------------------------------------

  createBoard();
  makeTopRowBlank();
  makeTopRowHover();

  //------------------------------------------------------------------------------
  //                          Start of Game Logic
  //------------------------------------------------------------------------------

  // Click Event Listener drops a token in a column and checks win conditions
  for (i = 0; i < 7; i++) {
      var topRowElems = document.querySelector("#cell" + i + "6")
      topRowElems.addEventListener("click", function () {
          dropInColumn(this.id.charAt(4));
          if (rowWin() == true | columnWin() == true | diagnalWin() == true) {
              alert(getColor() + " WINS!");
              winTally();
              for (j = 0; j < 4; j++) {
                  var blah = document.getElementById("cell" + winningCells[j].x + winningCells[j].y);
                  blah.classList.add("outline");
              }
          }
          nextTurn();
      });
  }

  //-----------------------------------------------------------------------------
  //                          Functions
  //-----------------------------------------------------------------------------

  function clearBoard() {
      for (i = 6; i > -1; i--) { //rows y cord
          for (j = 0; j < 7; j++) { //columns x cord
              var cellId = document.getElementById("cell" + i + j);
              if (cellId.id == "cell" + i + "6") {
                  cellId.classList = "isBlank";
              } else {
                  cellId.classList = "isEmpty";
                  board[i][j].color = "";
              }
          }
      }
      winningCells = [];
  }

  function createBoard() {
      table = document.createElement("table");
      for (i = 6; i > -1; i--) { //rows y cord
          var tr = document.createElement('tr');
          board[i] = [];
          for (j = 0; j < 7; j++) { //columns x cord
              var td = document.createElement('td');
              td.className = "cell";
              td.id = "cell" + j + i;
              tr.appendChild(td);
              board[i][j] = cell(i, j);
          }
          table.appendChild(tr);
      }
      document.getElementById("boardSpace").appendChild(table);
  }

  //Make top row blank by toggling css class
  function makeTopRowBlank() {
      for (i = 0; i < 7; i++) {
          var cellID = document.getElementById("cell" + i + "6");
          cellID.classList.remove("isEmtpy");
          cellID.classList.add("isBlank");
      }
  }

  //Make top row hover
  function makeTopRowHover() {
      for (i = 0; i < 7; i++) {
          var aTopCell = document.querySelector("#cell" + i + "6")
          aTopCell.addEventListener("mouseover", function () {
              if (player) {
                  this.classList.remove("hovBlack");
                  this.classList.add("hovRed");
              } else {
                  this.classList.remove("hovRed");
                  this.classList.add("hovBlack");
              }
          })
      }
  }

  //drop token in column 
  function dropInColumn(x) {
      var index = 0;
      while (index < 6) {
          var cellId = document.getElementById("cell" + x + index);
          var emptyCell = getColumn(x)[index].color;

          if (!emptyCell) {
              if (!player) {
                  cellId.classList.add("isBlack");
                  board[x][index].color = "black";
                  console.log("Black droped in " + x + "," + index);

              } else {
                  cellId.classList.add("isRed");
                  board[x][index].color = "red";
                  console.log("Red droped in " + x + "," + index);
              }
              index++
              break;
          }
          index++;
      }
  }

  //check if any row has a win condition and return color
  function rowWin() {
      for (j = 0; j < 6; j++) {
          for (i = 1; i < 5; i++) {
              if (board[i][j].color != "") {
                  if (board[i][j].color == board[i - 1][j].color) {
                      if (board[i][j].color == board[i + 1][j].color) {
                          if (board[i + 1][j].color == board[i + 2][j].color) {
                              //gameOver = true;
                              for (k = -1; k < 3; k++) {
                                  winningCells.push(board[i + k][j]);
                              }
                              return true;
                          }
                      }
                  }
              }
          }
      }
  }

  //check if single column has a win condition and return color
  function columnWin() {
      for (x = 0; x < 7; x++) {
          for (j = 1; j < 4; j++) {
              if (board[x][j].color != "") {
                  if (board[x][j].color == board[x][j - 1].color) {
                      if (board[x][j].color == board[x][j + 1].color) {
                          if (board[x][j + 1].color == board[x][j + 2].color) {
                              for (k = -1; k < 3; k++) {
                                  winningCells.push(board[x][j + k]);
                              }
                              return true;
                          }
                      }
                  }
              }
          }
      }
  }

  //check if a diagnal in either direction has a win condition and return the color
  function diagnalWin() {
      for (x = 0; x < 4; x++) {
          for (j = 0; j < 3; j++) {
              if (board[x][j].color != "") {
                  if (board[x][j].color == board[x + 1][j + 1].color) {
                      if (board[x][j].color == board[x + 2][j + 2].color) {
                          if (board[x][j].color == board[x + 3][j + 3].color) {
                              for (k = 0; k < 4; k++) {
                                  winningCells.push(board[x + k][j + k]);
                              }
                              return true;
                          }
                      }
                  }
              }
          }
      }
      for (x = 6; x > 2; x--) {
          for (j = 0; j < 3; j++) {
              if (board[x][j].color != "") {
                  if (board[x][j].color == board[x - 1][j + 1].color) {
                      if (board[x][j].color == board[x - 2][j + 2].color) {
                          if (board[x][j].color == board[x - 3][j + 3].color) {
                              for (k = 0; k < 4; k++) {
                                  winningCells.push(board[x - k][j + k]);
                              }
                              return true;
                          }
                      }
                  }
              }
          }
      }
  }

  //increment the win tally
  function winTally() {
      if (player) {
          tally.red++;
          redScore.innerText = tally.red;

      } else {
          tally.blk++;
          blkScore.innerText = tally.blk;
      }
  }

  //returns the color in caps. Red is when player is true
  function getColor() {
      if (player) {
          return "RED"
      } else {
          return "BLACK"
      }
  }

  //Go to next turn and toggle which player is active
  function nextTurn() {
      player = !player;
      if (player) {
          redTurn.classList.add("highlight");
          blkTurn.classList.remove("highlight");
      } else {
          blkTurn.classList.add("highlight");
          redTurn.classList.remove("highlight");
      }
  }

  //returns the a column of objects
  function getColumn(x) {
      return board[x];
  }

  //Make a reset game button that clear board
  var reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
      clearBoard();
  });