//Tạo đối tượng nhân viên
function NhanVien (_user,_hoTen,_mail,_matKhau,_ngaySinh,_luong,_chucVu,_time){
    this.user = _user;
       this.hoTen = _hoTen;
        this.mail = _mail;
        this.matKhau = _matKhau;
        this.ngaySinh = _ngaySinh;
        this.luong = _luong;
        this.chucVu = _chucVu;
       this.time = _time;
        this.tongLuong = 0;
        this.loai = "";
      //phương thức tính tổng lương nhân viên
     this.tongLuongNV = function(){
         if(this.chucVu==="Sếp"){
             this.tongLuong=this.luong*3;
         }else if(this.chucVu==="Trưởng phòng"){
             this.tongLuong = this.luong*2;
         }else{
             this.tongLuong = this.luong; 
         }
     }; 
      // phương thức xếp loại nhân viên
     this.xepLoaiNV = function(){
         
         if(this.time>=192){
             this.loai=" Nhân viên xuất sắt";
         }else if(this.time>=176&&this.time<192){
             this.loai=" Nhân viên giỏi";
         }else if(this.time>=160&&this.time<176){
             this.loai=" Nhân viên khá";
         }else{
             this.loai=" Nhân viên trung bình";
         }
    //  return this.loai;
     };

}
