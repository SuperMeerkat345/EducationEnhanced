var htmlContent = 
    `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:* http://127.0.0.1:* https://www.linkedin.com;">
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
        <li><button type="button" id="homeBtn">Home</button></li>
        <li><button type="button" id="calculatorBtn">Calculator</button></li>
        <li><button type="button" id="formulasBtn">Formulas</button></li>
      </ul>
    </div>
    <div class="content" id="contentDiv">
    <h1>Home</h1>
    <p>This is a tool for helping yourself and your education. If you want or need a feature to be added ... </p>
    </div>
  </div>
  <script src="inline.js" nonce="abc123"></script>
  <script nonce="abc123">
     // Nonce generator function
    function generateNonce() {
      var nonce = '';
      var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (var i = 0; i < 16; i++) {
        nonce += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return nonce;
    }

    var nonceValue = generateNonce(); // Generate nonce value

    // Set nonce value in CSP header dynamically
    var cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (cspMeta) {
      cspMeta.setAttribute('content', cspMeta.getAttribute('content') + ' nonce-' + nonceValue);
    }

    // Event handling using JavaScript
    document.getElementById('homeBtn').addEventListener('click', function() {
      link('index');
    });

    document.getElementById('calculatorBtn').addEventListener('click', function() {
      link('calculator');
    });

    document.getElementById('formulasBtn').addEventListener('click', function() {
      link('formulas');
    });
  </script>
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