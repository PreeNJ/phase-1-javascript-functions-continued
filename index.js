
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
 
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(emphasizer = "*") {
  
  return function(adjective = "special") {
      return `You are ${emphasizer}${adjective}${emphasizer}!`;
  };
}

const encouragingPromptFunction = wrapAdjective("!!!");

console.log(wrapAdjective("%")("a dedicated programmer"));
  const exclamationPrompt = wrapAdjective("!!!");
  console.log(exclamationPrompt("dedicated programmer"));