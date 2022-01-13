let a = [2, 3, 5, 6, 11, 4, 20, 18, 4, 7, 13];
document.writeln('Mảng đã cho là: ' + a);

function tinhtongsonguyento() {
    let tong = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 1 == 0 && a[i] % a[i] == 0 && a[i] % 2 == 1 && a[i] % 3 == 1
            || a[i] % 3 == 2 && a[i] % 5 == 1 || a[i] % 5 == 2 || a[i] & 5 == 3
            || a[i] % 5 == 4) {
            tong += a[i];
        }
    }
    document.getElementById('result').innerText = 'Tổng các số nguyên trong mảng = ' + tong;
}