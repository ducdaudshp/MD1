//bt tham khảo
function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố

    let flag = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

let n= prompt(" nhap mot so n: ");

let i = 0, check=0, result =" ";
while ( i < n){
    check = isprime(i);
    if( check == 1 ) result += i + " ";
    ++i;
}
alert(result);
alert(tong);
