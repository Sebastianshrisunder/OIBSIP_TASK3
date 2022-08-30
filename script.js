const temperature_convert = () => {
  const temperature = document.getElementById("temperature").value;
  
  const chosen = document.getElementById("chosen");
  
  const valuetemp = chosen.options[chosen.selectedIndex].value;

  const celtofar = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fartocel = (far) => {
    let celsius = Math.round(((far - 32) * 5) / 9);
    return celsius;
  };

  let result;

  if (valuetemp == "cel") {
    result = celtofar(temperature);
    document.getElementById(
      "resultcont"
    ).innerHTML = `= ${result} &deg;Farenheit`;
  } 
  
  else {
    result = fartocel(temperature);
    document.getElementById(
      "resultcont"
    ).innerHTML = `= ${result} &deg;Celsius`;
  }
};
