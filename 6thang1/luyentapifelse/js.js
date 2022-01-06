function dangnhap(){
    let tk = document.getElementById('acc').value;
    let mk = document.getElementById('pass').value;
    if (tk == "Admin"){
       if (mk == "TheMaster"){
           alert('Welcome');
       }else
           if (mk == "null"){
               alert('Canceled');
           }else {
               alert('Wrong password');
           }
    }else
        if (tk == "null"){
            alert('canceled');
        }
        else {
            alert('I dont know you');
        }
}