let a = [1, 3, -4, 5, 12, 0, 2, -9, 11, -7];

function timgiatri() {
    let b = Number(document.getElementById('nhapptu').value);
    for (let i = 0; i < a.length; i++) {
        if (b == a[i]) {
            document.getElementById('result').innerText = 'Phần tử ' + a[i] + ' thuộc mảng a';
            break;
        } else {
            document.getElementById('result').innerText = 'Phần tử không thuộc mảng a';
        }
    }
}