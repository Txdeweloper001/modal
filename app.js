// parol=document.getElementById('shou').onclick=function(){
// var parol=document.getElementById('parol');
//     parol.setAttribute("type","text");    
// }

// parol=document.getElementById('shou').onmousedown=function(){
//     this.innerHTML="<i class='far fa-eye-slash'></i>";
//     var parol=document.getElementById('parol');
//         parol.setAttribute("type","text");    
//     }
    
    // parol=document.getElementById('shou').onmouseup=function(){
    //     this.innerHTML="<i class='far fa-eye'></i>";
    //     var parol=document.getElementById('parol');
    //         parol.setAttribute("type","password");    
    //     }   
    

document.getElementById('show').onclick=function(){
    
    document.querySelector("#mymod").style.display="block"
};

document.getElementById('hide').onclick=function(){
     
    document.querySelector("#mymod").style.display="none"
};

window.onclick=function(event,target){
    
    var sm=document.getElementById("mymod");

    if(event.target==sm){
        document.querySelector("#mymod").style.display="none";
    }
};