var map = {};

window.addEventListener('keydown', (keyPressed) => {
    switch(keyPressed.key){
        case "~":
            if(map.Control === true && map.Shift === true){
                //https://3785216c-b450-430b-811b-5c449a428375-00-3f04o3vth56c2.picard.replit.dev/
               var w = window.open('file:///C:\Users\Admin\AlexFinger\EducationEnhanced\window.html', "ModWindow", "width=600, height=475, scrollbars=no");
               
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