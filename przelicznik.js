
    var R0 = document.getElementById("inputR0");
    var alpha = document.getElementById("inputalpha");
    var delta = document.getElementById("inputdelta");
    var WynikRTElement = document.getElementById("WynikRT");
    var WynikTextElement = document.getElementById("wynikRT_Text");

//var RT= document.getElementById("inputRT");
function updateRT(){
    console.log("xd");
    if(alpha.value !==""){
        var WynikRT = (Number(R0.value))*(1+(Number(alpha.value)))*(Number(delta.value));
        WynikRTElement.value=WynikRT;
        WynikTextElement.value=WynikRT;
    }

}

(()=>{
    console.log("xd");
    button = document.getElementById('button');
button.addEventListener('click', updateRT);
})();
