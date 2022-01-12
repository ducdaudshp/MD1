let x = 0;
let array = Array();

function themphantu() {
    array[x] = document.getElementById('nhapmang').value;
    alert('Phần tử ' + array[x] + ' Đã thêm vào danh sách ' + x);
    x++;
    document.getElementById('nhapmang').value = "";
}

function inketqua() {
    let e = '</hr>';
    for (let i = 0; i < array.length; i++) {
        e += 'Phần tử ' + i + ' = ' + array[i] + '</br>';
    }
    document.getElementById('result').innerHTML = e;
}