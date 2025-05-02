window.onload = trafficLightLoop;

let trafficLightState = "red";

function _delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const _renderLight = (currentState)=> {
  const redLight = document.querySelector("#red-light");
  const yellowLight = document.querySelector("#yellow-light");
  const greenLight = document.querySelector("#green-light");
  if(currentState == "red"){
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "grey";
  }
  if(currentState=="yellow"){
    redLight.style.backgroundColor = "grey";
    yellowLight.style.backgroundColor = "yellow";
    greenLight.style.backgroundColor = "grey";
  }
  if(currentState=="green"){
    redLight.style.backgroundColor = "grey";
    yellowLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "green";
  }
}

const _setStateLight = (state) =>{
  trafficLightState = state;
}

async function trafficLightLoop() {
  while (true) {
    _setStateLight("red");
    _renderLight(trafficLightState);
    await _delay(2000);
    _setStateLight("yellow");
    _renderLight(trafficLightState);
    await _delay(2000);
    _setStateLight("green");
    _renderLight(trafficLightState);
    await _delay(2000);
  }
}