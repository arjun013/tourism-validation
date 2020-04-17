let mailID=document.getElementById("mail");
let mob=document.getElementById("phone");
let pwd=document.getElementById("pass1");
let pwdFinal=document.getElementById("pass2");
let msg1=document.getElementById("errorMail");
let msg2=document.getElementById("errorMob");
let msg3=document.getElementById("errorPass");
let msg4=document.getElementById("errorConfirm");
let flag=1;
let level=0;
let validity=true;//for guidance 
let allField;//to ensure  all fields are filled

function validate(){
    fieldValid();
    
    if (flag==0) {
        alert("Validation successfull");
        return true;
    }
    else{
        return false;
        
    }
}
function fieldValid() {
    allField=true;
    let fields=document.querySelectorAll("input");
    for (let index = 0; index < fields.length; index++) {
        if (fields[index].value=='') {
            allField=false;
            flag=1;
            alert("Enter all fields");
            break;
        };        
    }
    if (allField) {
    flag=0;//for setting when error  occur
    level=0;// for top to bottom validation in each button click
    
    mail();
    mobile();
    pwd1();
    confirmPass();
    if (flag==1) 
        validity=false;
    }
}

//mail validation
function mail() {
    if (level==0) {
        
    
            let rxpMail=/^([A-Za-z0-9\.-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
            if(rxpMail.test(mailID.value)){   
                    level=1;  
                    msg1.style.color="#007bff";
                    msg1.innerHTML=`<i class="fa fa-check" ></i>`;
            }   else{
                    msg1.style.color="red";
                    msg1.innerHTML="Please enter a valid email";
                    flag=1;
                }
    }
}

//mobile validation
function mobile() {
    if (level==1) {//execution only after email validation
        msg1.innerHTML="";
    
            let rxpMob=/^(\d{3})([\. -]?)(\d{3})([\. -]?)(\d{4})$/;
            let len=mob.value.length;
            if(rxpMob.test(mob.value)){ 
                msg2.style.color="#007bff";
                    msg2.innerHTML=`<i class="fa fa-check" ></i>`; 
            }else{
                msg2.style.color="red";
                msg2.innerHTML=`<p> valid formats</p><p> xxxxxxxxxx| xxx.xxx.xxxx <p> xxx xxx xxxx | xxx-xxx-xxxx</p></p>`;
                flag=1;
            }
            if (mob.value.length>10) {
                if (mob.value.substring(3,4)!=mob.value.substring(7,8)) {
                    msg2.style.color="red";
                    msg2.innerHTML=`<p> valid formats</p><p> xxxxxxxxxx| xxx.xxx.xxxx <p> xxx xxx xxxx | xxx-xxx-xxxx</p></p>`;
                
                    flag=1;
                }
                else if (!isNaN(parseInt(mob.value.substring(7,8)))) {
                    msg2.style.color="brown";
                    msg2.innerHTML=`<p>valid formats</p><p> xxxxxxxxxx| xxx.xxx.xxxx <p> xxx xxx xxxx | xxx-xxx-xxxx</p></p>`;
                    flag=1;
                }
                
                
            }
            if (flag!=1) {
                level=2;   
            }
    }
}

//password validation
let valid=false;
function pwd1(){
    if (level==2) {
        msg2.innerHTML="";
        display();
    }
    if (flag==1&&level<=1) {
        msg3.innerHTML="";
    }
}
function display(){
    if (pwd.value.length<8) {
        msg3.style.color="blue";
        msg3.innerHTML=`Minimum 8 characters with no space<p> atleast 1 capital letter , 1 small letter and 1 digit</p> `;
        flag=1;
        valid=false;
    } else {
        if (/[A-Z]+/.test(pwd.value)&&/[a-z]+/.test(pwd.value)&&/[0-9]+/.test(pwd.value)&&!(/[\ ]+/.test(pwd.value))) {
            if (pwd.value.length<10) {
                msg3.style.color="brown";
                msg3.innerHTML=`<i class="fa fa-check text-primary" ></i> Poor password <p>(long passwords increases safety)</p>`;
            } else if (pwd.value.length<12) {
                msg3.style.color="#f60";
                msg3.innerHTML=`<i class="fa fa-check text-primary" ></i> Medium password`;
            } else {
                msg3.style.color="green";
                msg3.innerHTML=`<i class="fa fa-check text-primary" ></i> Strong password!!!`;
            }
            level=3;
            valid=true;
            
        } else {
            msg3.style.color="red";
            msg3.innerHTML=`Not a valid password <p> atleast 1 capital letter , 1 small letter and 1 digit<p>`;
            flag=1;
            valid=false;
        }
    }
   
}

//confirm password
function confirmPass(){
    if (level==3) {
        msg3.innerHTML="";
        passConfirm(1);
        
    }
    if (flag==1&&level<=2) {
        msg4.innerHTML="";
    }
    
}

function passConfirm(y) {
        if ((pwd.value==pwdFinal.value)&&valid) {
            msg4.style.color="#007bff";
            msg4.innerHTML=`<i class="fa fa-check text-primary"></i>  `;
            
        }
        else{
            msg4.style.color="red";
            msg4.innerHTML="Password mismatch";
            flag=1;
        }
        if((!valid&&y==0))// do not show password matching until a valid password entered in the previous field
                {
                    msg4.style.color="red";
                    msg4.innerHTML="Please Select A Valid Password";
                }
}

//password visibile or not
let x=0;
function visible(){
    if(x==0){
        pwd.setAttribute("type","text");
        pwdFinal.setAttribute("type","text");
        x=1;
        document.getElementById("eye").innerHTML=`<i class="fa fa-eye-slash" ></i>`;
    }
    else{
        pwd.setAttribute("type","password");
        pwdFinal.setAttribute("type","password");
        x=0;
        document.getElementById("eye").innerHTML=`<i class="fa fa-eye" ></i>`;
    }
}
mailID.addEventListener("keyup",ticking1);//to guide after error occured once entering
mob.addEventListener("keyup",ticking2);

function ticking1(){
    if (!validity) {
        level=0;
        mail();
    }
}
function ticking2() {
    if (!validity) {
        level=1;
        mobile();
    }
}

//forgot password
function validateNew() {
    fieldValid();
    if (flag==0) {
        alert("Validation successfull");
        return true;
    }
    else{
        return false;
        
    }
}

