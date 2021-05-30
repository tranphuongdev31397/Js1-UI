//Bài 1: Tính tiền lương nhân viên 1 ngày 100.000 , người dùng nhập số ngày
//B1 : Tiền lương 1 ngày :100.000, số ngày làm
//B2: Tạo biến lương 1 ngày 100.000
// Tạo biến nhập số ngày
// Tạo biến lương tháng = số ngày làm  * lương 1 ngày (100.000)
//In kết quả ra console
//B3 : Lương tháng

var btnTinhB1 = document.getElementById('btnTinhB1')
var luongThang = document.getElementById('luongThang')
var ketQua = document.getElementById('ketQua')
var _luongThang
const luongMotNgay = 100000;
// ketQua.style.display = "none"
btnTinhB1.onclick = function(){
    ketQua.style.display = "block"
    var soNgayLam = document.getElementById('soNgayLam').value;
    _luongThang =  soNgayLam * luongMotNgay;
    luongThang.innerHTML = "Lương tháng này của bạn là: " + _luongThang 
}
//Bài 2 : Cho nhập vào 5 số thực và tính trung bình của 5 số này
//B1 : nhập vào 5 số
//B3 : Trung bình cộng của 5 số
//B2 : Tạo biến Cho người dùng nhập vào 5 số thực
// Tạo biến số trung bình của 5 số này = (R1 + R2 + R3 +R4 + R5 ) /5
// In kết quả ra conosle
var btnTinhB2 = document.getElementById('btnTinhB2')
var _Aver
var Aver = document.getElementById('Aver')
var ketQuaB2 = document.getElementById('ketQuaB2')
btnTinhB2.onclick = function() {
    ketQuaB2.style.display = "block"
var R1 = document.getElementById('R1').value
var R2 = document.getElementById('R2').value
var R3 = document.getElementById('R3').value
var R4 = document.getElementById('R4').value
var R5 = document.getElementById('R5').value
_Aver = ((Number(R1) + Number(R2) + Number(R3) + Number(R4) + Number(R5))/5)
Aver.innerHTML = "Trung bình cộng là: " + _Aver
}

/* Bài 3: Quy đổi USD
B1: Input
giaUSD : 23.500vnd
nhapSoTien: 
B2: Handle
Tạo biến giaUSD và nhapSoTien, soTienSauQuyDoi
Tính số tiền sau quy đổi  soTienSauQuyDoi = nhapSoTien * giaUSD
B3 : Output
Xuất số tiền sau quy đổi
**/
console.log('====Bài 3 ====')
const giaUSD = 23500
var btnTinhB3 = document.getElementById('btnTinhB3')
var ketQuaB3 = document.getElementById('ketQuaB3')
var tienQuyDoi = document.getElementById('tienQuyDoi')
var soTienSauQuyDoi
btnTinhB3.onclick = function(){
    ketQuaB3.style.display = "block"
    var nhapSoTien = document.getElementById('nhapSoTien').value;
    soTienSauQuyDoi = nhapSoTien * giaUSD
    tienQuyDoi.innerHTML = "Số tiền sau quy đổi là : " + soTienSauQuyDoi 
}

/* Bài 4: Tình diện tích , chu vi HCN
B1: Input
Chiều dài HCN
Chiều rộng HCN
B2: Handle
Tạo biến chieuDai, chieuRong, chuVi, dienTich
Tính chu vi và diện tích hình chữ nhật qua công thức
Chu vi = (Dài + Rộng) * 2
Diện tích = Dài * Rộng
B3: Out put
Xuất chu vi và diện tíhc HCN
**/
console.log('=====Bài 4====')
var btnTinhB4 = document.getElementById('btnTinhB4')
var ketQuaB4 = document.getElementById('ketQuaB4')
var chuVi = document.getElementById('chuVi')
var dienTich = document.getElementById('dienTich')
var _chuVi
var _dienTich
btnTinhB4.onclick = function(){
    ketQuaB4.style.display = "block"
    var chieuDai = document.getElementById('chieuDai').value
    var chieuRong = document.getElementById('chieuRong').value
    _chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    _dienTich = chieuRong * chieuDai;
    chuVi.innerHTML = "Chu vi HCN là : " + _chuVi + "cm"
    dienTich.innerHTML = "Diện tích HCN là : " + _dienTich + "cm2"
}
/* Bài 5 : Nhập vào 2 số có 2 chữ số tính tổng 2 số được nhập
B1 : Input
Số có 2 chữ số
B2: Handle
Tạo biến soCoHaiChuSo, soHangDonVi = int soCoHaiChuSo % 10 , soHangChuc= int soCoHaiChuSo/10, Sum
Sum = soHangDonVi + soHangChuc
B3 : Output
Xuất ra tổng Sum của số đó
*/

var soHangDonVi
var soHangChuc 
var _Sum
var Sum = document.getElementById('Sum')
var btnTinhB5 = document.getElementById('btnTinhB5')
var ketQuaB5 = document.getElementById('ketQuaB5')
btnTinhB5.onclick = function(){
    ketQuaB5.style.display = "block"
    var soCoHaiChuSo = document.getElementById('soCoHaiChuSo').value
    soHangDonVi = Math.abs(soCoHaiChuSo%10)
    soHangChuc = Math.floor(soCoHaiChuSo/10)
    _Sum = soHangDonVi + soHangChuc;
    Sum.innerHTML = "Tổng 2 số là : " + _Sum
}



