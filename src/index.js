import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import { stateControl, roll } from './js/game';


const playAgain = () => {
  $('#playAgain').show().click(function() {
    location.reload();
  });
};

$(document).ready(function() {

  $('#roll').click(function() {
    const currentState = stateControl(); 
    if (currentState.turn < 8 && currentState.willToLive > 0) {
      const newState = roll();
      if(newState.willToLive <= 0) {
        $('#gameStatus').text(`You lose.`);
        playAgain();
      } else {
        if(newState.turn === 8) {
          $('#gameStatus').text(`Congratulation! You Survived.`);
          playAgain();
        }
      }
      $('#willToLive').text(`Will to Live: ${newState.willToLive}`)
      $('#turn').text(`Hours Worked: ${newState.turn}`)
    } 
    // $('#show-state').text(`Will to Live: ${currentState.willToLive}, Turns: ${currentState.turn}`);
  });
  
});



// Front End Logic:
//    - Check currentState(turn) if <= 8 && willToLive > 0 then roll() function
//    - After roll: if willToLive < 0 then end game (loser - get fired)
//    - After roll: if willToLive > 0 && turn > 8 then end game (winner - go home exhausted, see you tomorrow!) 





// import { Object } from './businesslog.js';

// MVP:

//Character:
//User(Worker):
//   - Will to Live: 5

//Enemy(Boss):
//   - Work Assignment Logic 
//    - Quarterly Report (lvl3)
//    - Manual Data Entry (lvl2)
//    - Aimless Client Call (lvl1)

//Battle:
//   - Die Roll 
//    - 1 - Long Lunch (Will to live + 1)
//    - 3 - PayDay (Will to Live +2)
//    - 5 - Cup'o'Joe (Will to Live +1)
//    - 2 - Aimless Client Call Assigned (Will to Live - 1)
//    - 4 - Manual Data Entry Assigned (Will to Live - 2)
//    - 6 - Quarterly Report Assigned (Will to Live - 3)

//Game Rules:
//    - Lose if Will to Live reaches 0
//    - Win if Will to Live does not reach 0 after 8 rolls


//Stretch Goals:
//Level Up:

//Inventory? Tools?