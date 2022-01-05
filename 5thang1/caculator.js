function tinhTong() {
    //khai báo 2 biến number 1, number 2
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    //tính tong,hieu 2 bien
    let tong = number1 + number2;
    //in ra ket qua
    document.getElementById("result").innerText = tong;
}
function tinhHieu() {
    //khai báo 2 biến number 1, number 2
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    //tính tong,hieu 2 bien
    let hieu = number1 - number2;
    //in ra ket qua
    document.getElementById("result").innerText = hieu;
}
function tinhTich() {
    //khai báo 2 biến number 1, number 2
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    //tính tong,hieu 2 bien
    let tich = number1 * number2;
    //in ra ket qua
    document.getElementById("result").innerText = tich;
}
function tinhThuong() {
    //khai báo 2 biến number 1, number 2
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    //tính tong,hieu 2 bien
    let thuong = number1 / number2;
    //in ra ket qua
    document.getElementById("result").innerText = thuong;
}





