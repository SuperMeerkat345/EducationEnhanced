var newHTML = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
</head>
<body>
    <h1>Education-Enhanced</h1>
    <p>Use the shortcut: <b>Ctrl + shift + ~</b> in order to activate extension</p>
    <br>
    <button id="myButton">I'm a button</button>
    <script src="inlineTest.js"></script>
</body>
</html>
`
;

var map = {};



window.addEventListener('keydown', (keyPressed) => {
    switch(keyPressed.key){
        case "~":
            if(map.Control === true && map.Shift === true){
                var w = window.open('https://youtube.com', "ModWindow", "width=600, height=475, scrollbars=no");
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