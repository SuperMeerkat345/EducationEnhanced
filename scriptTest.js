var newHTML = 
`
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Education Enhanced</title>

  <style>
* {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

html {
  height: 400px;
  width: 600px;
}

body {
  background: black;
  color: white;
}

.screen {
  margin-bottom: 1000px;
}

.nav {
  border-bottom: solid white 2px;
  padding: 5px;
}

.nav li {
  list-style-type: none;
  display: inline-block;
  margin-left: 4px;
}

.nav a {
  text-decoration: none;
  color: blue;
}

.content {
  margin-left: 7px;
}

.calcNav a{
  text-decoration: none;
  color: blue;
}

.content a {
  text-decoration: none;
  color: blue;
}
  </style>

</head>

<body>
  <div class="screen" id="index">
    
    <div class="nav">
      <ul>
        <li><p>EE</p></li>
        <li><a href="#index">Home</a></li>
        <li><a href="#calculator">Calculator</a></li>
        <li><a href="#formulas">Formulas</a></li>
      </ul>
    </div>
    
    <div class="content">
      <h1>Home</h1>
      <p>This is a tool for helping yourself and your education. If you want or need a feature to be added ... </p>
    </div>

    
  </div>
  <!-- CALCULATOR -->
  <div class="screen" id="calculator">

    <div class="nav">
      <ul>
        <li><p>EE</p></li>
        <li><a href="#index">Home</a></li>
        <li><a href="#calculator">Calculator</a></li>
        <li><a href="#formulas">Formulas</a></li>
      </ul>
    </div>

    <div class="content">
      <div class="calcNav">
        <h1>Calculator</h1>
        <ul>
          <li><a href="calculatorScientific.html">Scientific Calculator</a></li>
          <li><a href="calculatorGraphing.html">Graphing Calculator</a></li>
          <li><p><br>These calculators have been imported from <a href="https://www.desmos.com/scientific" target="_blank">desmos.com/scientific</a> and <br><a href="https://www.desmos.com/calculator" target="_blank">desmos.com/calculator</a>.</p></li>
        </ul>
      </div>
    </div>


  </div>
<!-- FORMULAS -->
  <div class="screen" id="formulas">

    <div class="nav">
      <ul>
        <li><p>EE</p></li>
        <li><a href="#index">Home</a></li>
        <li><a href="#calculator">Calculator</a></li>
        <li><a href="#formulas">Formulas</a></li>
      </ul>
    </div>

    <div class="content">
        <h1>Formulas - <a href="https://www.matematica.pt/en/useful/math-formulas.php" target="_blank">Visit</a></h1>
        <iframe src="https://www.matematica.pt/en/useful/math-formulas.php" width="100%" height="400px" frameborder="0" allowfullscreen name="Graphing Calculator"></iframe>
    </div>


  </div>
</body>

</html>
`
;

var map = {};



window.addEventListener('keydown', (keyPressed) => {
    switch(keyPressed.key){
        case "~":
            if(map.Control === true && map.Shift === true){
                var w = window.open('', "ModWindow", "width=600, height=475, scrollbars=no");
                w.document.write(newHTML);
            }
            break;
        case "Control":
            map.Control = true;
            break;
        case "Shift":
            map.Shift = true;
            break;
    }
});

window.addEventListener('keyup', (keyPressed) => {
   switch(keyPressed.key){
        case "Control":
            map.Control = false;
            break;
        case "Shift":
            map.Shift = false;
            break;
    }
});    