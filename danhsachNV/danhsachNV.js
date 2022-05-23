//lớp đối tượng  danh sách nhân viên
function DanhSachNhanVien (){
    this.arr=[];
    this.themNV = function(nv){
     this.arr.push(nv);
    };
//tìm vị trí
this.timViTriNV = function(maNV){
    var index=-1;
      this.arr.forEach(function(item,i){
          if(item.user===maNV){
              index=i;
          }
      });  
      return index;
};
//xoá nhân viên
    this.xoaNV = function(maNV){
        var index = this.timViTriNV(maNV);
      if (index!==-1){
      this.arr.splice(index,1);
    }
    
    };
    //sửa thông tin nhân viên
    this.suaTTNV= function(maNV){
    var index = this.timViTriNV(maNV);
    if (index!==-1){
        return this.arr[index];
    }else{
        return null;
    }

    };
    //cập nhật thông tin nhân viên
    this.capNhat = function(nv){
     var index = this.timViTriNV(nv.user);
     if (index!==-1){
         this.arr[index] = nv;
     }
    };
    //tìm kiếm nhân viên
    
    this.seachNV = function(keyWord){
     var seach =[];
    this.arr.forEach(function(item){
    if(item.loai === keyWord){
     seach.push(item);
    }
});
     return seach;
    };

}