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
  $('.diceToggle2').hide();
  $('.diceToggle3').hide();
  $('.diceToggle4').hide();
  $('.diceToggle5').hide();
  $('.diceToggle6').hide();
  $('.diceToggle1').hide();
  $('#roll').click(function() {
    const currentState = stateControl(); 
    if (currentState.turn < 8 && currentState.willToLive > 0) {
      const newState = roll();
      if(newState.willToLive-currentState.willToLive === 2) {
        $('.diceToggle2').hide();
        $('.diceToggle3').hide();
        $('.diceToggle4').hide();
        $('.diceToggle5').hide();
        $('.diceToggle6').hide();
        $('.diceContainerimg').hide();
        $('.diceToggle1').show();
        $('#eventStatus').text(`You rolled a 1: Took a long lunch! Will to live incresed by 2!`);
      } else if(newState.willToLive-currentState.willToLive === -1) {
        $('.diceContainerimg').hide();
        $('.diceToggle1').hide();
        $('.diceToggle3').hide();
        $('.diceToggle4').hide();
        $('.diceToggle5').hide();
        $('.diceToggle6').hide();
        $('.diceToggle2').show();
        $('#eventStatus').text(`You rolled a 2: Skipped an aimless client call. Will to live decreased by 1!`);
      } else if(newState.willToLive-currentState.willToLive === 3) {
        $('.diceContainerimg').hide();
        $('.diceToggle1').hide();
        $('.diceToggle2').hide();
        $('.diceToggle4').hide();
        $('.diceToggle5').hide();
        $('.diceToggle6').hide();
        $('.diceToggle3').show();
        $('#eventStatus').text(`You rolled a 3: Your boss gives you praise! Will to live incresed by 3!`);
      } else if(newState.willToLive-currentState.willToLive === -2) {
        $('.diceContainerimg').hide();
        $('.diceToggle1').hide();
        $('.diceToggle2').hide();
        $('.diceToggle3').hide();
        $('.diceToggle5').hide();
        $('.diceToggle6').hide();
        $('.diceToggle4').show();
        $('#eventStatus').text(`You rolled a 4: Fudged up your manual data entry tasks. Will to live decreased by 2!`);
      } else if(newState.willToLive-currentState.willToLive === 1) {
        $('.diceContainerimg').hide();
        $('.diceToggle1').hide();
        $('.diceToggle2').hide();
        $('.diceToggle3').hide();
        $('.diceToggle4').hide();
        $('.diceToggle6').hide();
        $('.diceToggle5').show();
        $('#eventStatus').text(`You rolled a 5: A fresh pot of coffee in the break room! Will to live incresed by 1!`);
      } else if(newState.willToLive-currentState.willToLive === - 3){
        $('.diceContainerimg').hide();
        $('.diceToggle1').hide();
        $('.diceToggle2').hide();
        $('.diceToggle3').hide();
        $('.diceToggle4').hide();
        $('.diceToggle5').hide();
        $('.diceToggle6').show();
        $('#eventStatus').text(`You rolled a 6: Forgot the Quarterly Business Reports were due. Will to live decreased by 3!`);
      }
      if (newState.willToLive <= 0) {
        $('#roll').hide();
        $('#gameStatus').text(`YOU'RE FIRED!`);
        $('#gameStatus2').text(`You lasted ${newState.turn} hours before being asked to leave.`);
        $('#gameStatus3').text(`Better luck next time.`);
        playAgain();
       } else {
        if(newState.turn === 8) {
          $('#roll').hide();
          $('#gameStatus').text(`HAPPY HOUR!`);
          $('#gameStatus2').text(`You Survived another day.`);
          $('#gameStatus3').text(`See you tomorrow!`);
          playAgain();
        }
      }
      $('#willToLive').text(`${newState.willToLive}`)
      $('#turn').text(`${newState.turn}`)
    } 
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