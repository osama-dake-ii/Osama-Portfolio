// backGround z-index switch 
$(window).on('load', function () {
  setTimeout(function () {
    $('#particles').css('z-index', '-1'); // or any new value
  }, 1500); // delay in milliseconds
});

let score = JSON.parse(localStorage.getItem('score')) ||
{wins: 0, loses: 0, ties: 0};

document.querySelector(".js-scoreLine").textContent = `Wins: ${score.wins}${'\u00A0'.repeat(3)}Loses: ${score.loses}${'\u00A0'.repeat(3)}Ties: ${score.ties}`


function playGame(playerMove) {
  const computerMove = pickComputerMove()
  let Result = tellResult()

  function pickComputerMove() {
    let computerMove = Math.random()
    
    if (computerMove <= 0.3) {
    computerMove = 'Rock'}

    else if (computerMove >0.35 && computerMove <= 0.78){
    computerMove = 'Paper'}
    
    else{
    computerMove = 'Scissors'} 
    return computerMove
  }

  function tellResult(){
    let Result =''
    
    if (playerMove === computerMove){
      Result = 'Tie'}
      
    else if ((playerMove === 'Rock' && computerMove === 'Scissors')
    || (playerMove === 'Paper' && computerMove === 'Rock') 
    || (playerMove === 'Scissors' && computerMove === 'Paper')){
      Result = 'You Win'}
  
    else{ Result = 'You Lose'}
    return Result
  }

  let score = JSON.parse(localStorage.getItem('score')) ||
  {wins: 0, loses: 0, ties: 0};

  if (Result === 'You Win'){
    score.wins += 1
  }
  else if (Result === 'You Lose'){
    score.loses += 1
  }
  else{score.ties += 1}
  
  localStorage.setItem('score', JSON.stringify(score))

  function modifyScore(){
    document.querySelector(".js-scoreLine").textContent = `Wins: ${score.wins}${'\u00A0'.repeat(3)}Loses: ${score.loses}${'\u00A0'.repeat(3)}Ties: ${score.ties}`}
  
  modifyScore()
  document.querySelector(".js-Chosen-move").innerHTML = `You  <img class="chosen-moves" src="media/${playerMove}-emoji.png">        Computer  <img class="chosen-moves" src="media/${computerMove}-emoji.png">`
  document.querySelector(".js-result").textContent = `${Result}`

}

function doReset(){
  localStorage.removeItem('score')
    document.querySelector('.js-scoreLine').innerHTML = 'Wins: 0&nbsp;&nbsp;&nbsp;Loses: 0&nbsp;&nbsp;&nbsp;Ties: 0'
    document.querySelector('.js-Chosen-move').innerHTML = '                         '
    document.querySelector('.js-result').textContent = '結果'
}