// currency converter --------------------

function dataChange (){
    var value=document.getElementById("myInput").value;
    var result=document.getElementById("result");

    if(isNaN(value)){
        result.innerHTML="Please Enter Number Not Character"
    }else if(value<=0){
        result.innerHTML="Please Enter Number Bigger Than 0 !"
    }else{
        result.innerHTML=Math.round(value*50)+" Egyptain Pound";
    }
    return false;
}
// currency converter --------------------

