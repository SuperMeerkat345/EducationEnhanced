var htmlContent = 
    `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://platform.linkedin.com ">
  <title>replit</title>
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
  
  <div class="screen">
    <div class="nav">
      <ul>
        <li><p>EE</p></li>
        <li><button type="button" onclick="link('index')">Home</button></li>
        <li><button type="button" onclick="link('calculator')">Calculator</button></li>
        <li><button type="button" onclick="link('formulas')">Formulas</button></li>
      </ul>
    </div>
    <div class="content" id="contentDiv">
    <h1>Home</h1>
    <p>This is a tool for helping yourself and your education. If you want or need a feature to be added ... </p>
    </div>
  </div>
  <script src="inline.js"></script>
</body>
</html>
    `;



var map = {};



window.addEventListener('keydown', (keyPressed) => {
    switch(keyPressed.key){
        case "~":
            if(map.Control === true && map.Shift === true){
               var w = window.open('', "ModWindow", "width=600, height=475, scrollbars=no");
               w.document.write(htmlContent);
               w.document.close();
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