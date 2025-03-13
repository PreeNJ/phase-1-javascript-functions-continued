
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = 'go to the office') {
    console.log(`This Monday, I will ${activity}`);
    return `This Monday, I will ${activity}`;
  }
  

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  console.log(saturdayFun());
  console.log(saturdayFun("bathe my dog"));
  console.log(mondayWork());
  console.log(mondayWork("work from home"));
  
  const startPrompt = wrapAdjective("*");
  console.log(startPrompt("amazing"));
  
  const pipePrompt = wrapAdjective("|");
  console.log(pipePrompt("amazing")); 
  
  const exclamationPrompt = wrapAdjective("!!!");
  console.log(exclamationPrompt("dedicated programmer"));