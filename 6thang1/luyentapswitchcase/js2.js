function danhgia(){
    let num = Number(document.getElementById('number').value);
    let result ="";
    if (num > 0){
        document.getElementById('result').innerText = '1';
    }else
        if (num < 0){
            document.getElementById('result').innerText = '-1';
        }
        else
            document.getElementById('result').innerText = '0';
}