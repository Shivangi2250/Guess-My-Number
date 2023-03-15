'use strict';
  let score = 20;
  let highScore = 0;
  
  let number = Math.trunc(Math.random()*20)+1;

  const youLost = function(){
      document.querySelector('.message').textContent="You Lost the Game";
      document.querySelector('.score').textContent = 0;
  }
  
  document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    
    if(!guess){
      document.querySelector('.message').textContent= 'No number!';
    }
    else if(guess==number){
    document.querySelector('.message').textContent="Correct Number";
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30 rem';

    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }
  }
  else if(guess!=number){
    if(score>1){
      document.querySelector('.message').textContent = guess>number ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else{
      youLost();
    }
  }

});

document.querySelector('.again').addEventListener('click', function(){
  score=20;
  number = Math.trunc(Math.random()*20)+1;
  highScore = 0;
  document.querySelector('.message').textContent="Start guessing...";
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent="?";
  document.querySelector('.guess').value='';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';

});