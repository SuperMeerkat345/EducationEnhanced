var map = {};

window.addEventListener('keydown', (keyPressed) => {
    switch(keyPressed.key){
        case "~":
            if(map.Control === true && map.Shift === true){
                var w = window.open('http://education-enhanced.rf.gd/index.html', "ModWindow", "width=600, height=485, scrollbars=no");
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