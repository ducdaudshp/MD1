let a = [1, 2, 3, 6, -4, 7, 10, 20, -15, 8];

function ptuchan() {
    let dem = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            dem++;
        }
    }
    console.log(dem);
}