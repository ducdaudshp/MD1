let a = [2, 41, -4, 5, 4, 6, 1, 2, 3, 11, 2, 5, 8, -7, 7, 6, 20, 11, 13, 4];
document.writeln('Mảng đã cho là: ' + a);

function demptu() {
    let b = Number(document.getElementById('ptu').value);
    let dem = 0;
    for (let i = 0; i < a.length; i++) {
        if (b == a[i]) {
            dem++
        }
    }
    let result;
    document.getElementById('result').innerText = 'Số phần tử trùng với kết quả là: ' + dem;
}