function check(){
    let browser = document.getElementById('trinhduyet').value;
    switch (browser){
        case 'Edge':
            alert('Bạn đã có Edge!');
            break;
        case 'Chrome':
        case'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Được rồi, chúng tôi cũng hỗ trợ các trình duyệt này');
            break;
        default:
            alert('Chúng tôi hy vọng rằng trang này trông ổn!');
    }
}