var files = {
    index:
    `
    <h1>Home</h1>
    <p>This is a tool for helping yourself and your education. If you want or need a feature to be added ... </p>
    `
    ,
    formulas:
    `
    <h1>Formulas - <a href="https://www.matematica.pt/en/useful/math-formulas.php" target="_blank">Visit</a></h1>
    <iframe src="https://www.matematica.pt/en/useful/math-formulas.php" width="100%" height="400px" frameborder="0" allowfullscreen name="Graphing Calculator"></iframe>
    `
    ,
    calculator:
    `
    <div class="calcNav">
        <h1>Calculator</h1>
        <ul>
          <li><button type="button" onclick="link('calculatorGraphing')">Graphing Calculator</button></li>
          <li><button type="button" onclick="link('calculatorScientific')">Scientific Calculator</button></li>
          <li><p><br>These calculators have been imported from <a href="https://www.desmos.com/scientific" target="_blank">desmos.com/scientific</a> and <br><a href="https://www.desmos.com/calculator" target="_blank">desmos.com/calculator</a>.</p></li>
        </ul>
    </div>
    `
    ,
    calculatorGraphing:
    `
    h1>Graphing Calculator</h1>
    <iframe src="https://www.desmos.com/calculator" width="100%" height="400px" frameborder="0" allowfullscreen name="Graphing Calculator"></iframe>
    `
    ,
    calculatorScientific:
    `
    <h1>Scientific Calculator</h1>
    <iframe src="https://www.desmos.com/scientific" width="100%" height="400px" frameborder="0" allowfullscreen name="Scientific Calculator"></iframe>
    `
};

    var content = document.getElementById("contentDiv");

function link(file){
  switch(file){
    case "index":
      content.innerHTML = files.index;
      break;
    case "calculator":
      content.innerHTML = files.calculator;
      break;
    case "formulas":
      content.innerHTML = files.formulas;
      break;
    case "calculatorGraphing":
      content.innerHTML = files.calculatorGraphing;
      break;
    case "calculatorScientific":
      content.innerHTML = files.calculatorScientific;
      break;
    default:
      content.innerHTML = "404 file not found\nPlease send a message to the developer with: " + file;
      break;
  }
}