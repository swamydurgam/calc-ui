

function calc(event) {
    display=document.getElementById("display");
    display.value+=event.target.value

}

function my_evaluate(){
    display.value=eval(display.value)
}


   function del() {
    display.value=display.value.slice(0,-1);
   }

   function allclear() {
    display.value=display=""
    
   }