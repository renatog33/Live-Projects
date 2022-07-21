//Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
    console.log("Scrolling");
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Sending API weather request using Axios
var Zagreb=document.getElementById("btnZagreb");
btnZagreb.onclick=function() {
  this.onclick=null;
  this.onclick=window.scrollBy(0, 100);
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=45.80721&lon=15.96757&appid=5857c32679fea83f9470dfa2652df7a5&units=imperial')
  .then(function (response) {
    
    // handle success
    console.log(response)
    var temperature = response.data.main.temp;
    document.getElementById('weatherZ').append("Zagreb is currently "+temperature+"°F");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


var Split=document.getElementById("btnSplit");
btnSplit.onclick=function() {
  this.onclick=null;
  this.onclick=window.scrollBy(0, 100);
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=43.508133&lon=16.440193&appid=5857c32679fea83f9470dfa2652df7a5&units=imperial')
  .then(function (response) {
    // handle success
    console.log(response)
    var temperature = response.data.main.temp;
    document.getElementById('weatherS').append("Split is currently "+temperature+"°F");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


var Dubrovnik=document.getElementById("btnDubrovnik");
btnDubrovnik.onclick=function() {
  this.onclick=null;
  this.onclick=window.scrollBy(0, 100);
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=42.6507&lon=18.0944&appid=5857c32679fea83f9470dfa2652df7a5&units=imperial')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response)
    var temperature = response.data.main.temp;
    document.getElementById('weatherD').append("Dubrovnik is currently "+temperature+"°F");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}