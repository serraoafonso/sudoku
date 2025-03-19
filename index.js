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
let buraco = false;
let used = [];
let randomizar = false;

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
      if (possible[i][a].completed == false && possible[i][a].numbers.length == 1){
        
        if(sudoku[i][a] == " "){
          isLast = true;
        }  
        break;

      }else if(possible[i][a].numbers.length < 1 /*&& possible[i][a].completed == false*/  && sudoku[i][a] == " "){
        
        buraco = true;  

      }
    }
  }
  if(isLast){
    checkLastPossible(sudoku)
  }else if (full) {
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
    randomizeEmpty(sudoku)
  }
}


function randomizeEmpty(sudoku){//esta funcao vai randomizar os valores que sao possiveis de ser colocados nas celulas em falta, caso o sudoku de merda o codigo vai sempre trocar a celula anterior 
  
  imaginarySudoku = sudoku;
  randomizar = true;


    if(buraco == true){//caso caia num buraco, objetivo é voltar atrás e mudar

      for(let g = 0; g < 9; g++){
        for(let h = 0; h < 9; h++){
          if(possible[g][h].completed == false){
            imaginarySudoku[g][h] = " "
          }
        }
      }

      console.log('buraco', used.length)

      if(used[used.length - 1].allOptions.length > used[used.length-1].optionsUsed.length){

        for(let c = 0; c < used[used.length-1].allOptions.length; c++){
          if(used[used.length-1].allOptions[c] != used[used.length-1].optionsUsed[c]){//ta a perguntar se ja usou aquele numero dos possiveis, neste caso se ainda nao usou vai usar o proximo
            let i = used[used.length-1].position[0];
            let a = used[used.length-1].position[1];
            used.push({
              numbers: used[used.length-1].allOptions[c],
              position : [i, a],
              previous: used.length > 0 ? used[used.length-1] : null,
              allOptions: possible[i][a].numbers,
              optionsUsed: (used[used.length-1].position == [i,a] && used[used.length-1].optionsUsed.length > 0) ? optionsUsed.push(possible[i][a].numbers[0]) : [possible[i][a].numbers[0]]
            })
            imaginarySudoku[i][a] = used[used.length-1].allOptions[c];
            //possible[i][a].completed = true;
            break;

          }
        }
        checkPossibles(imaginarySudoku);
      }else{
        let currentPosition = used[used.length - 1].position
        for(let d = used.length; d >= 0; d--){
          if(used[d-1].position != currentPosition){
            used.slice(0, -d)//apaga os ultimos
            break;
          }
        }
      }
    }else{

      for(let i = 0; i < 9; i++){
        for(let a = 0; a < 9; a++){
          if(possible[i][a].completed == false){
            console.log('nao buraco', used.length)
            if(used.length > 0){//caso nao seja a primeira vez a randomizar e nao estar num buraco, randomizar noutra possicao
              if(possible[i][a].numbers.length == 0){
                buraco = true;
                break;
              }
              used.push({
                numbers: possible[i][a].numbers > 0 && possible[i][a].numbers[0],
                position : [i, a],
                previous: used.length > 0 ? used[used.length-1] : null,
                allOptions: possible[i][a].numbers,
                optionsUsed: (used[used.length-1].position == [i,a] && used[used.length-1].optionsUsed.length > 0) ? used[used.length-1].optionsUsed.numbers.push(possible[i][a].numbers[0]) : [possible[i][a].numbers[0]]
              })
              console.log('a')
              imaginarySudoku[i][a] = possible[i][a].numbers[0];
              //possible[i][a].completed = true;
              break;
  
            }else{// caso seja a primeira vez a randomizar
              console.log('first time')
              used.push({
                numbers: possible[i][a].numbers[0],
                position : [i, a],
                previous:  null,
                allOptions: possible[i][a].numbers,
                optionsUsed:  [possible[i][a].numbers[0]]
              })
              imaginarySudoku[i][a] = possible[i][a].numbers[0];
              //possible[i][a].completed = true;
              break;
  
            }
          }
        }
      }
      checkPossibles(imaginarySudoku);
    }
    
}


async function checkPossibles(sudoku) {
  for (let i = 0; i < 9; i++) {
    for (let a = 0; a < 9; a++) {
      if (sudoku[i][a] != " " && !randomizar) {
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
        possible[i][a].completed = !randomizar;
        if(!randomizar) {
          possible[i][a].numbers = []
        }
      }
      if (sudoku[i][a] == " ") {
        full = false;
      }
      
    }
  }
  checkPossibles(sudoku)
}


