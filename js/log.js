let msg1=document.getElementById("errorPass");
let pwd=document.getElementById("pWord");
let flag;
let valid=true;
function allFields(){
    flag=0;
    let fields=document.querySelectorAll("input");
            for (let index = 0; index < fields.length; index++) {
                fields[index].style.border="2px solid white" ;
                        if (fields[index].value.trim()=='') {
                            fields[index].style.border="3px solid green" ;
                            if (index==0) {
                                fields[index].value='';
                                fields[index].setAttribute("placeholder","Enter your username");
                            } else {
                                fields[index].value='';
                                fields[index].setAttribute("placeholder","Enter your password");
                            }
                            
                            flag=1;
                            
                            break;
                        }         
        }
       passvalid(1);
       if (flag===1) {
           valid=false;
           return false;
       }
}

pwd.addEventListener("keyup",passvalid)

function passvalid(p) {
    if (valid==false||p===1) {
        
   
    if (pwd.value.length<8) {
        msg1.removeAttribute("hidden","true");
        flag=1;
        valid=false;
    } else {
        if (/[A-Z]+/.test(pwd.value)&&/[a-z]+/.test(pwd.value)&&/[0-9]+/.test(pwd.value)&&!(/[\ ]+/.test(pwd.value))) {
            msg1.setAttribute("hidden","true");
        }
        else{
            msg1.removeAttribute("hidden","true");
            flag=1;
            valid=false;
        }
    
    }   
    }
}