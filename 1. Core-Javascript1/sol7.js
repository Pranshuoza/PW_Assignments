function getWeatherCondition(temperature) {
    const condition = temperature > 30 ? "Hot" : "Moderate";
    console.log(`Weather Condition: ${condition}`);
  }
   
  getWeatherCondition(35); 
  getWeatherCondition(25); 
  