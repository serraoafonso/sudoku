const sudokuFacil = [
  ["9", "3", "1", "4", "2", "7", "6", "5", "8"],
  ["2", "4", "5", "6", "8", "3", "9", "1", "7"],
  ["6", "7", "8", "9", "1", "5", "4", "3", "2"],
  ["4", "9", "7", "1", "3", "2", "8", "6", "5"],
  ["1", "2", "6", "5", "9", "8", "3", "7", "4"],
  ["5", "8", "3", "7", "6", "4", "1", "2", "9"],
  ["3", "5", "4", "8", "7", "1", "2", "9", "6"],
  ["7", "6", "2", "3", "4", "9", "5", "8", "1"],
  ["8", "1", "9", "2", "5", "6", "7", "4", "3"]
];

const sudokuMedio = [
  ["6", "4", "9", "7", "5", "2", "8", "3", "1"],
  ["5", "3", "1", "4", "8", "9", "6", "7", "2"],
  ["8", "2", "7", "3", "1", "6", "5", "4", "9"],
  ["7", "5", "3", "6", "9", "1", "2", "8", "4"],
  ["4", "9", "6", "2", "3", "8", "1", "5", "7"],
  ["2", "1", "8", "5", "4", "7", "3", "9", "6"],
  ["9", "6", "2", "8", "7", "3", "4", "1", "5"],
  ["1", "8", "5", "9", "2", "4", "7", "6", "3"],
  ["3", "7", "4", "1", "6", "5", "9", "2", "8"]
];

const sudokuDificil = [
  ["1", "8", "9", "3", "2", "5", "6", "7", "4"],
  ["4", "2", "5", "8", "6", "7", "3", "9", "1"],
  ["3", "6", "7", "4", "9", "1", "5", "8", "2"],
  ["8", "5", "6", "7", "4", "2", "1", "3", "9"],
  ["9", "7", "3", "1", "5", "6", "2", "4", "8"],
  ["2", "4", "1", "9", "8", "3", "7", "5", "6"],
  ["5", "3", "8", "2", "1", "9", "4", "6", "7"],
  ["6", "1", "4", "5", "7", "8", "9", "2", "3"],
  ["7", "9", "2", "6", "3", "4", "8", "1", "5"]
];

const sudokuExtremo = [
  ["8", "1", "2", "7", "5", "3", "6", "4", "9"],
  ["9", "4", "3", "6", "8", "2", "1", "7", "5"],
  ["6", "7", "5", "4", "9", "1", "2", "8", "3"],
  ["1", "5", "4", "2", "3", "7", "8", "9", "6"],
  ["3", "6", "9", "8", "4", "5", "7", "2", "1"],
  ["2", "8", "7", "1", "6", "9", "5", "3", "4"],
  ["5", "2", "1", "9", "7", "4", "3", "6", "8"],
  ["4", "3", "8", "5", "2", "6", "9", "1", "7"],
  ["7", "9", "6", "3", "1", "8", "4", "5", "2"]
];


//array bidimensional que mostra uma array para cada célula dos números possíveis
let possible;


let startTime;
let full;
let buraco; //entende-se buraco a situação em que os números randomizados levam a uma situação em que exista uma célula vazia e sem números possíveis nela
let used; /*
{
numbers: 1,
position: [0, 0],
allOptions: [1, 2, 3], -> todas as opções que podem ser usadas naquela célula no momento
optionsUsed: [1]
}
*/
let randomizar;//fica true quando a primeira célula recebe um valor randomizado

let impossible;

async function start(customSudoku) {

  console.log(customSudoku)

   possible = [
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

  used = [];
  buraco = false;
  full = false;
  randomizar = false;
  impossible = false; 
  startTime = Date.now()

    return await checkIfPossible(customSudoku)

}

async function checkIfEqual(sudoku){
  let equalEasy = true;
  let equalMedium = true;
  let equalHard = true;
  let equalExtreme = true;


      for(let i = 0; i < 9; i++){
        for(let a = 0; a < 9; a++){
          if(sudoku[i][a] != sudokuFacil[i][a]){
            equalEasy = false;
            console.log('a', [i, a], [sudoku[i][a], sudokuExtremo[i][a]])
          }
      }
    }
      for(let i = 0; i < 9; i++){
        for(let a = 0; a < 9; a++){
          if(sudoku[i][a] != sudokuMedio[i][a]){
            equalMedium = false;
            console.log('b', [i, a], [sudoku[i][a], sudokuExtremo[i][a]])
          }
        }
      }

      for(let i = 0; i < 9; i++){
        for(let a = 0; a < 9; a++){
          if(sudoku[i][a] != sudokuDificil[i][a]){
            equalHard = false;
            console.log('c', [i, a], [sudoku[i][a], sudokuExtremo[i][a]])
          }
        }
      }

      for(let i = 0; i < 9; i++){
        for(let a = 0; a < 9; a++){
          if(sudoku[i][a] != sudokuExtremo[i][a]){
            equalExtreme = false;
            console.log('d', [i, a], [sudoku[i][a], sudokuExtremo[i][a]])
          }
        }
      }

  if(equalEasy || equalMedium || equalHard || equalExtreme){
    return true
  }else {
    return false
  }

}

async function checkIfPossible(sudoku){
  let isEqual = false;
  
  for (let i = 0; i < 9; i++){
    for(let a = 0; a < 9; a++){

      for(let b = 0; b < 9; b++){//ver linha
        if(b == a  && sudoku[i][a] != " "){
          continue;
        }else if(sudoku[i][a] == sudoku[i][b] && sudoku[i][a] != " "){
          isEqual = true;
        }
    }

    for(let c = 0; c < 9; c++){
      if(c == i && sudoku[i][a] != " "){
        continue;
      }else if(sudoku[i][a] == sudoku[c][a] && sudoku[i][a] != " "){
        isEqual = true;
      }
    }

if ((i + 1) / 3 <= 1) {
      //ve se ta nos 3 quadrados de cima
      if ((a + 1) / 3 <= 1) {
        //primeiro quadrado
        for (let e = 0; e < 3; e++) {
          for (let f = 0; f < 3; f++) {
            if (e == i && f == a ) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f] && sudoku[i][a] != " "){
              isEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 1 && (a + 1) / 3 <= 2) {
        //segundo
        for (let e = 0; e < 3; e++) {
          for (let f = 3; f < 6; f++) {
            if ((e, f) == (i, a) ) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f] && sudoku[i][a] != " "){
              isEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 2) {
        //terceiro
        for (let e = 0; e < 3; e++) {
          for (let f = 6; f < 9; f++) {
            if ((e, f) == (i, a) ) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f] && sudoku[i][a] != " "){
              isEqual = true;
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
            if ((e, f) == (i, a) ) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f]  && sudoku[i][a] != " "){
              isEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 1 && (a + 1) / 3 <= 2) {
        //quinto
        for (let e = 3; e < 6; e++) {
          for (let f = 3; f < 6; f++) {
           if ((e, f) == (i, a)) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f]  && sudoku[i][a] != " "){
              isEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 2) {
        //sexto
        for (let e = 3; e < 6; e++) {
          for (let f = 6; f < 9; f++) {
           if ((e, f) == (i, a)) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f] && sudoku[i][a] != " "){
              isEqual = true;
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
            if ((e, f) == (i, a)) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f]  && sudoku[i][a] != " "){
              isEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 1 && (a + 1) / 3 <= 2) {
        //oitavo
        for (let e = 6; e < 9; e++) {
          for (let f = 3; f < 6; f++) {
            if ((e, f) == (i, a)) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f]  && sudoku[i][a] != " "){
              isEqual = true;
            }
          }
        }
      }
      if ((a + 1) / 3 > 2) {
        //nono
        for (let e = 6; e < 9; e++) {
          for (let f = 6; f < 9; f++) {
            if ((e, f) == (i, a)) {
              continue;
            }else if(sudoku[i][a] == sudoku[e][f] && sudoku[i][a] != " "){
              isEqual = true;
            }
          }
        }
      }
    }

    }
  }
  if(isEqual){
    let time = startTime - Date.now()
    return{customSudoku: 'impossivel', time} 
  } else {
    return await checkPossibles(sudoku);
  }
    
}

async function checkIfLastPossible(sudoku){

  if(impossible){
    console.log('O SUDOKU NÃO PODE SER RESOLVIDO!');
    console.log('Execution time: ', Date.now() - startTime)
    let time = Date.now() - startTime;
    return({customSudoku: 'impossivel', time})
  }

  //console.log('---------------------')
  full = true;
  for (let i = 0; i < 9; i++) {
    for(let a = 0; a < 9; a++){
      if(sudoku[i][a] == " "){//verifica se o sudoku já foi preenchido
        full = false;
      }
    }
    
    //console.log(...sudoku[i]);
     
 }
 //console.log('---------------------')
  

  let isLast = false;// variavel que indica se existe alguma casa em que esteja vazia e apenas com uma opção possível

  for (let i = 0; i < 9; i++) {
    for (let a = 0; a < 9; a++) {

      if (sudoku[i][a] == " " && possible[i][a].numbers.length == 1 && !possible[i][a].completed){

          isLast = true;

        break;

      }else if(possible[i][a].numbers.length < 1 && sudoku[i][a] == " "){
        
        buraco = true;  

      }
    }
  }

  if(isLast){
    return checkLastPossible(sudoku)//funcao que preenche o sudoku com a unica opção possível
  }else if (full) {
    console.log('O SUDOKU FOI PREENCHIDO')
    for (let i = 0; i < 9; i++) {
        console.log(...sudoku[i]);
    }
    let time = Date.now() - startTime
    localStorage.setItem('tempo', time)
    console.log(`Execution time: ${time}`) 
    let igual = await checkIfEqual(sudoku);
    if(igual){
      return {customSudoku: 'igual', time}
    }else{
      let customSudoku = sudoku;
      //console.log(res, sudoku)
      return {customSudoku, time}
    }
    
  }else{
    
    //console.log('It ran out of lonely possible numbers')  
    return randomizeEmpty(sudoku)

  }
}


function randomizeEmpty(sudoku){//esta funcao vai randomizar os valores que sao possiveis de ser colocados nas celulas em falta, caso o sudoku de merda o codigo vai sempre trocar a celula anterior 
  //console.log(used)
  randomizar = true;


    if(buraco == true){//caso caia num buraco, objetivo é voltar atrás e mudar, buraco é quando existe celulas sem nenhum possivel e vazias

      //console.log('buraco', used.length)

      if(used[used.length - 1].allOptions.length > used[used.length-1].optionsUsed.length){
       
  
        for(let c = 0; c < used[used.length-1].allOptions.length; c++){

          if(used[used.length-1].allOptions[c] != used[used.length-1].optionsUsed[c]){//ta a perguntar se ja usou aquele numero dos possiveis, neste caso se ainda nao usou, vai usar o proximo
            let i = used[used.length-1].position[0];
            let a = used[used.length-1].position[1];
            
            used.push({
              numbers: used[used.length-1].allOptions[c],
              position : [i, a],
              allOptions:  used[used.length - 1].allOptions,
              optionsUsed: [...used[used.length - 1].optionsUsed, used[used.length-1].allOptions[c]] 
            })

            sudoku[i][a] = used[used.length-1].allOptions[c];
            buraco = false;

            for(let h = 0; h < 9; h++){//apagar todos aqueles que foram gerados por logica a frente do que foi mudado
              for(let g = 0; g < 9; g++){
                if(h > i && !possible[h][g].completed){
                  sudoku[h][g] = " "
                }else if(h == i && g > a && !possible[h][g].completed){
                  sudoku[h][g] = " "
                }
              }
            }

            break;

          }
        }
        return checkPossibles(sudoku);
      }else{
        

        for(let d = used.length - 1; d >= 0; d--){
          
          if(used[d].allOptions.length == used[d].optionsUsed.length){

            //console.log('apagar', used[d].allOptions.length)
            used = used.slice(0, -(used[d].allOptions.length));
            if(used.length < 1){
              impossible = true;
            }else{
              let i = used[used.length - 1].position[0]
              let a = used[used.length - 1].position[1]
  
              for(let h = 0; h < 9; h++){
                for(let g = 0; g < 9; g++){
                  if(h > i && !possible[h][g].completed){
                    sudoku[h][g] = " "
                  }else if(h == i && g >= a && !possible[h][g].completed){
                    sudoku[h][g] = " "
                  }
                }
              }   
            }
            break;
          }        
        }
        
        if(!impossible){
          return checkPossibles(sudoku)
        }else{
          return checkIfLastPossible(sudoku)
        }
       

        //loop infinito
      }
    }else{
      let parar = false;
      //console.log('nao buraco', used.length)
      for(let i = 0; i < 9; i++){
        if (parar) break;
        for(let a = 0; a < 9; a++){
          if(possible[i][a].completed == false && sudoku[i][a] == " "){
            
            if(used.length > 0){//caso nao seja a primeira vez a randomizar e nao estar num buraco, randomizar noutra possicao
              if(possible[i][a].numbers.length <= 0){
                buraco = true;
                parar = true;
                break;
              }
              used.push({
                numbers: (possible[i][a].numbers.length > 0) && possible[i][a].numbers[0],
                position : [i, a],
                allOptions: possible[i][a].numbers,
                optionsUsed: [possible[i][a].numbers[0]]
              })
              //console.log(used[used.length-1])
              sudoku[i][a] = possible[i][a].numbers[0];
              parar = true;
              //possible[i][a].completed = true;
              break;
  
  
            }else{// caso seja a primeira vez a randomizar
              
              //console.log('first time')
              used.push({
                numbers: possible[i][a].numbers[0],
                position : [i, a],
                allOptions: possible[i][a].numbers,
                optionsUsed:  [possible[i][a].numbers[0]]
              })
              sudoku[i][a] = possible[i][a].numbers[0];
              //console.log(used[0]);
              parar = true;
              break;
  
            }
          }
        }
      }
      return checkPossibles(sudoku);
    }
    
}


async function checkPossibles(sudoku) {
  //console.log('checkpossibles')
  for (let i = 0; i < 9; i++) {
    for (let a = 0; a < 9; a++) {
      if (sudoku[i][a] != " " && !randomizar) {
        possible[i][a].completed = true;//todos os que sao feitos com o randomizar vao ter o completed = false
      } else {
        possible[i][a].numbers = []
        await fillPossibles(i, a, sudoku);//preenche a array possible com os números possiveis das células que não estão preenchidas
      }
    }
  }
  return checkIfLastPossible(sudoku)
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

    //verifica linha
    for (let r = 0; r < 9; r++) {
      if (sudoku[i][r] == c) {
        // a validar se os valores da linha sao iguais ao c(valor que está a ser testaddo)
        rowEqual = true;
      }
    }
    //verifica coluna
    for (let d = 0; d < 9; d++) {
      if (sudoku[d][a] == c) {
        collumnEqual = true;
      }
    }
    //verifica quadrados
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
  //console.log('checklastpossible')

  let parar = false
  for (let i = 0; i < 9; i++) {
    if (parar) break;
    for (let a = 0; a < 9; a++) {
      if ( possible[i][a].completed == false && possible[i][a].numbers.length == 1 &&sudoku[i][a] == " ") {
        // ve se só tem uma opcao
 
        sudoku[i][a] = possible[i][a].numbers[0];
        possible[i][a].completed = !randomizar;

        if(randomizar){
          parar = true;
          break;
        }else {
          possible[i][a].numbers = []
        }
      }
      
    }
  }
  return checkPossibles(sudoku)
}


export {start}