function kiemtrachisoBMI() {
    let kg = Number(document.getElementById('cannang').value);
    let m = Number(document.getElementById('chieucao').value);
    let chiso = kg / (m * m);
    if (chiso < 18.5){
        alert('Gầy');
    } else if (chiso < 25) {
        alert('Bình thường');
    } else if (chiso < 30) {
        alert('Thừa cân');
    } else {
        alert('Béo phì');
    }
}