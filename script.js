function vaidateform(){
    const user = document.getElementById("txtuser").value;
    const pwd = document.getElementById("textpwd").value;
    const msgbox=document.getElementById("msg");
    let message='';
    if(user===''){
        message="pls enter the username";
        msgbox.style.color="red";
    }
    else if(pwd===''){
        message="pls enter the password";
        msgbox.style.color = "red";
    }
    else{
        message="login successful";
        msgbox.style.color= "green";
    }
    msgbox.innerText=message;
}