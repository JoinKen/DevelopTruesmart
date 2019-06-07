datasuachua = 
"Sửa iQOS lỗi đèn đỏ lấy ngay tại Hà Nội$700000$suachua1.jpg$SuaChua.html"+
"~Thay màn hình iPhone X Plus chính hãng lấy ngay$500000$suachua2.jpg$SuaChua.html"+
"~Thay camera iPhone X Plus chính hãng lấy ngay$600000$suachua3.jpg$SuaChua.html"+
"~Thay vỏ iPhone X Plus chính hãng lấy ngay%$1000000$suachua4.jpg$SuaChua.html"+
"~Thay mặt kính iPhone SE 2 giá rẻ lấy ngay$350000$suachua5.jpg$SuaChua.html"+
"~Thay màn hình iPhone SE chính hãng uy tín$600000$suachua6.jpg$SuaChua.html"+
"~Thay pin iPhone SE 2 chính hãng lấy ngay$750000$suachua7.jpg$SuaChua.html"+
"~Thay mặt kính iPhone X Plus giá rẻ lấy ngay$810000$suachua8.jpg$SuaChua.html"+
"~Thay pin IQOS, sửa lỗi iqos sạc không vào điện tại Hà Nội$960000$suachua9.jpg$SuaChua.html"+
"~Sửa lỗi IQOS mất nguồn sạc không vào giá rẻ$900000 ₫$suachua10.jpg$SuaChua.html";

datasuachua2 = 
"Sửa iQOS lỗi đèn đỏ lấy ngay tại Hà Nội$700000$suachua1.jpg$childPage/SuaChua.html"+
"~Thay màn hình iPhone X Plus chính hãng lấy ngay$500000$suachua2.jpg$childPage/SuaChua.html"+
"~Thay camera iPhone X Plus chính hãng lấy ngay$600000$suachua3.jpg$childPage/SuaChua.html"+
"~Thay vỏ iPhone X Plus chính hãng lấy ngay%$1000000$suachua4.jpg$childPage/SuaChua.html"+
"~Thay mặt kính iPhone SE 2 giá rẻ lấy ngay$350000$suachua5.jpg$childPage/SuaChua.html";

LoadDataSuaChua();

function SinhKhungSuaChua(suachua)
{
    var khung = document.createElement("a");
    khung.className = "khungsuachua";
    khung.href = suachua.Link;

    var anh = document.createElement("img");
    anh.src = "image/suachua/" + suachua.Anh;
    anh.className = "anhsuachua";

    var ten = document.createElement("div");
    ten.className = "tensuachua";
    ten.innerHTML = suachua.TenDT;

    var nutmua = document.createElement("div");
    nutmua.className = "nutmuasuachua";
    nutmua.innerHTML = "SỬA"; 

    var gia = document.createElement("div");
    gia.className = "giasuachua";
    gia.innerHTML = suachua.Gia.toLocaleString() + " đ";

    khung.appendChild(anh);
    khung.appendChild(ten);
    khung.appendChild(gia);
    khung.appendChild(nutmua);

    khung.addEventListener("mouseover", function(){
        anh.style.width = "170px";
        anh.style.marginTop = "0px";
        nutmua.style.backgroundColor = "green";
        nutmua.style.borderRadius = "50%";
        khung.style.borderColor = "orange";
        khung.style.opacity = "0.7";
    })

    khung.addEventListener("mouseleave", function(){
        anh.style.width = "150px";
        anh.style.marginTop = "20px";
        nutmua.style.backgroundColor = "orange";
        nutmua.style.borderRadius = "15%";
        khung.style.borderColor = "rgb(194, 189, 189)";
        khung.style.opacity = "1";
    })

    document.getElementById("containersuachua").appendChild(khung);
}


function LoadDataSuaChua()
{
    var DSSuaChua = datasuachua.split("~");

    for (var i = 0; i < DSSuaChua.length; i++)
    {
        suachua = new SuaChua(DSSuaChua[i]);
        SinhKhungSuaChua(suachua);
    }
}

function SuaChua(chuoithongtin) {
    this.ChuoiThongTin = chuoithongtin;
    this.Mang = chuoithongtin.split("$");
    this.TenDT = this.Mang[0];
    this.Gia = Number(this.Mang[1]);
    this.Anh = this.Mang[2];
    this.Link = this.Mang[3];
}

function ClearSuaChua() {
    var myNode = document.getElementById("containersuachua");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function LoadDataSuaChua5CaiDau()
{
    ClearSuaChua();
    var DSSuaChua = datasuachua2.split("~");

    for (var i = 0; i < 5; i++)
    {
        suachua = new SuaChua(DSSuaChua[i]);
        SinhKhungSuaChua(suachua);
    }
}