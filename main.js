function getEle (id){
    return document.getElementById(id);
}
//Tạo đối tượng từ lớp đối tượng danh sách nhân viên
var dsnv = new DanhSachNhanVien();
//Lấy thông tin nhân viên
function layThongTinNV(){
    var _user = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _mail = getEle("email").value;
   var _matKhau = getEle("password").value;
   var _ngaySinh = getEle("datepicker").value;
   var _luong = getEle("luongCB").value;
   var _chucVu = getEle("chucvu").value;
   var _time = getEle("gioLam").value;  

  // Tạo đối tượng từ lớp đối tượng nhân viên
  var nhanVien = new NhanVien(_user,_hoTen,_mail,_matKhau,_ngaySinh,_luong,_chucVu,_time);
  //tính tổng lương nhân viên
  nhanVien.tongLuongNV();
  //xếp loại nhân viên
  nhanVien.xepLoaiNV();
  return nhanVien;
}
//hiện thị danh sách đã lưu lên tbody
getLocalStorage();

getEle("btnThemNV").onclick=function(){
   var nhanVien = layThongTinNV();
//Tạo chuỗi danh sách thêm nv
dsnv.themNV(nhanVien);
  
//Tạo bảng danh sách nv
bangDanhSachNV(dsnv.arr);
//lưu danh sách bằng localstorage
setLocalStorage();

};

//hàm con tạo bảng danh sách nv
function bangDanhSachNV(data){
    content="";
    data.forEach(function(item){
content+=`
<tr>
    <td>${item.user}</td>
    <td>${item.hoTen}</td>
    <td>${item.mail}</td>
    <td>${item.ngaySinh}</td>
    <td>${item.chucVu}</td>
    <td>${item.tongLuong}</td>
    <td>${item.loai}</td>
    <td  style="display:inline-flex;padding-bottom:21px;">
    <button class = "btn btn-info"onclick="xoaNV('${item.user}')">Xoá</button>
    <button class = "btn btn-danger"onclick="suaTTNV('${item.user}')"data-toggle="modal"data-target="#myModal">Sửa</button>
    </td>
</tr>
`;
    });
    getEle("tableDanhSach").innerHTML=content;
    };
    //lưu danh sách nhân viên localstorage
    function setLocalStorage(){
        var dataString = JSON.stringify(dsnv.arr);
        localStorage.setItem("DSNV",dataString);
    }
    //hàm hiện thị danh sách đã lưu lên tbody
    function getLocalStorage(){
        if(localStorage.getItem("DSNV")){
      var dataString = localStorage.getItem("DSNV");
      var dataJson = JSON.parse(dataString);
      dsnv.arr = dataJson;
      bangDanhSachNV(dsnv.arr);
    }
    };
    //nút xoá nhân viên
    function xoaNV(id){
    dsnv.xoaNV(id);
     bangDanhSachNV(dsnv.arr);
     setLocalStorage();
    }
    //nút sửa thông tin nhân viên
    function suaTTNV(id){

       var nv = dsnv.suaTTNV(id);
       if(nv){
        //Dom tới thẻ input và show value
         getEle("tknv").value = nv.user;
          getEle("name").value = nv.hoTen;
         getEle("email").value = nv.mail;
         getEle("password").value = nv.matKhau;
         getEle("datepicker").value = nv.ngaySinh;
         getEle("luongCB").value = nv.luong;
         getEle("chucvu").value = nv.chucVu;
         getEle("gioLam").value = nv.time; 
        //disable input user
        getEle("tknv").disabled = true;
        
       }
        
    }
    //cập nhật nhân viên
    getEle("btnCapNhat").onclick = function(){
     var thongTinNV = layThongTinNV() ;  
     dsnv.capNhat(thongTinNV);
     bangDanhSachNV(dsnv.arr);
     setLocalStorage();
    };
    //Tìm nhân viên theo xếp loại

 getEle("searchName").addEventListener("keyup",function(){
    var keyWord = getEle("searchName").value;
    var timNV = dsnv.seachNV(keyWord);
    bangDanhSachNV(timNV);

 })