const sudoku = [
  [" ", "8", " ", " ", "3", "2", " ", "7", " "],
  ["7", " ", " ", " ", " ", " ", "1", "6", " "],
  [" ", " ", " ", " ", " ", "4", "5", " ", " "],
  ["1", " ", " ", " ", " ", " ", " ", " ", "4"],
  [" ", " ", " ", " ", "5", "6", "8", " ", " "],
  ["5", " ", " ", "4", "2", " ", " ", " ", " "],
  [" ", " ", " ", "3", " ", " ", " ", " ", " "],
  ["4", " ", " ", " ", " ", " ", "8", " ", "1"],
  [" ", "2", " ", " ", "7", " ", " ", " ", " "]
];

const possible = [
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
  [
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
    { numbers: [], completed: false },
  ],
];



let startTime;
let full = false;

function start() {
  startTime = Date.now()
  checkPossibles(sudoku)
}

start();

async function checkIfLastPossible(sudoku){
  if (full) return;
  let isLast = false
  for (let i = 0; i < 9; i++) {
    for (let a = 0; a < 9; a++) {
      if (
        possible[i][a].completed == false &&
        possible[i][a].numbers.length == 1
      ){
        isLast = true;
        break;
      }
    }
  }
  if(isLast){
    checkLastPossible(sudoku)
  }
  if (full) {
    console.log('O SUDOKU FOI PREENCHIDO')
    for (let i = 0; i < 9; i++) {
        console.log(...sudoku[i]);
    }
    console.log(`Execution time: ${Date.now() - startTime}`)

  }else if(!full && !isLast){

    for (let i = 0; i < 9; i++) {
       console.log(...sudoku[i]);
    }
    console.log('It ran out of lonely possible numbers')  
    //randomizeEmpty()
  }
}

function randomizeEmpty(){//esta funcao vai randomizar os valores que sao possiveis de ser colocados nas celulas em falta, caso o sudoku de merda o codigo vai sempre trocar a celula anterior 
  let imaginarySudoku = sudoku
    for(let i = 0; i < 9; i++){
      for(let a = 0; a < 9; a++){
        if(possible[i][a].completed == false){
          for(let d = 0; d < possible[i][a].numbers.length; d++){
            imaginarySudoku[i][a] = possible[i][a].numbers[d]
            checkPossibles(imaginarySudoku)
          }
        }
      }
    }
}


async function checkPossibles(sudoku) {
  for (let i = 0; i < 9; i++) {
    for (let a = 0; a < 9; a++) {
      if (sudoku[i][a] != " ") {
        possible[i][a].completed = true;
      } else {
        possible[i][a].numbers = []
        await fillPossibles(i, a, sudoku);
      }
    }
  }
  checkIfLastPossible(sudoku)
}

function fillPossibles(i, a, sudoku) {
  // o i corresponde á linha e o a corresponde á coluna
  let rowEqual = false;
  let collumnEqual = false;
  let squareEqual = false;
  for (let c = 1; c <= 9; c++) {
    // map all the numbers from 1 to 9
    rowEqual = false;
    collumnEqual = false;
    squareEqual = false;
    //check row
    for (let r = 0; r < 9; r++) {
      if (sudoku[i][r] == c) {
        // a validar se os valores da linha sao iguais ao c(valor que está a ser testaddo)
        rowEqual = true;
      }
    }
    //check collumn
    for (let d = 0; d < 9; d++) {
      if (sudoku[d][a] == c) {
        collumnEqual = true;
      }
    }
    //checkSquare
    if ((i + 1) / 3 <= 1) {
      //ve se ta nos 3 quadrados de cima
      if ((a + 1) / 3 <= 1) {
        //primeiro quadrado
        for (let e = 0; e < 3; e++) {
          for (let f = 0; f < 3; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 1 && (a + 1) / 3 <= 2) {
        //segundo
        for (let e = 0; e < 3; e++) {
          for (let f = 3; f < 6; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 2) {
        //terceiro
        for (let e = 0; e < 3; e++) {
          for (let f = 6; f < 9; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
    } else if ((i + 1) / 3 > 1 && (i + 1) / 3 <= 2) {
      //ve se ta nos 3 quadrados de meio
      if ((a + 1) / 3 <= 1) {
        //quarto quadrado
        for (let e = 3; e < 6; e++) {
          for (let f = 0; f < 3; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 1 && (a + 1) / 3 <= 2) {
        //quinto
        for (let e = 3; e < 6; e++) {
          for (let f = 3; f < 6; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 2) {
        //sexto
        for (let e = 3; e < 6; e++) {
          for (let f = 6; f < 9; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
    } else if ((i + 1) / 3 > 2) {
      //ve se ta nos 3 quadrados de baixo
      if ((a + 1) / 3 <= 1) {
        //sétimo quadrado
        for (let e = 6; e < 9; e++) {
          for (let f = 0; f < 3; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 1 && (a + 1) / 3 <= 2) {
        //oitavo
        for (let e = 6; e < 9; e++) {
          for (let f = 3; f < 6; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 2) {
        //nono
        for (let e = 6; e < 9; e++) {
          for (let f = 6; f < 9; f++) {
            if (sudoku[e][f] == c) {
              squareEqual = true;
            }
          }
        }
      }
    }

    if (!rowEqual && !collumnEqual && !squareEqual) {

        possible[i][a].numbers.push(c);
    }
  }
}

function checkLastPossible(sudoku) {
  for (let i = 0; i < 9; i++) {
    if(i == 0){
      console.log('-----------------')
    }
    console.log(...sudoku[i]);
  }
  
  full = true;
  for (let i = 0; i < 9; i++) {
    for (let a = 0; a < 9; a++) {
      if (
        possible[i][a].completed == false &&
        possible[i][a].numbers.length == 1
      ) {
        // ve se só tem uma opcao
        sudoku[i][a] = possible[i][a].numbers[0];
        possible[i][a].completed = true;
        possible[i][a].numbers = []
      }
      if (sudoku[i][a] == " ") {
        full = false;
      }
      checkPossibles(sudoku)
    }
  }

}


