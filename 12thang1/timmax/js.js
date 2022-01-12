let a = [1, 4, -6, 10, 51, -50, 70, 5, -65, 69];
let max = a[0];
let index = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
        index = i;
    }
}
alert('Giá trị max của mảng là: ' + max + ' Vị trí của phần tử max là: ' + index);