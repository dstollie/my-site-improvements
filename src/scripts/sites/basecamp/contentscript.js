import updateTodo from "./modifications/updateTodo";
import disableLinkPropagation from "./modifications/disableLinkPropagation";
import showDailyUpdateInHomeScreen from "./modifications/showDailyUpdateInHomeScreen";

var hours = new Date().getHours();
const isInMorning = hours <= 8;

if(isInMorning) {
  showDailyUpdateInHomeScreen();
}
disableLinkPropagation();
updateTodo();

// document.querySelector('.nav__link--pings').click();
