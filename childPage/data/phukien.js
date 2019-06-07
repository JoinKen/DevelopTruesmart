dataphukien = 
"Bán ví lạnh Ledger nano s giá rẻ$3900000$phukien1.jpg$PhuKien.html" + 
"~Củ sạc Samsung Galaxy Note 1/2/3/4/5$150000$phukien2.jpg$PhuKien.html" + 
"~Dây sạc Samsung Galaxy s2/s3/s4/s5/s6$100000$phukien3.jpg$PhuKien.html" + 
"~Bộ sạc pin Samsung galaxy Note 1/2/3/4/5/6 chính hãng$250000$phukien4.jpg$PhuKien.html" + 
"~Dây sạc Samsung Galaxy Note 1/2/3/4/5/6$150000$phukien5.jpg$PhuKien.html" + 
"~Củ sạc 2 chân loai 1$99000$phukien6.jpg$PhuKien.html" + 
"~Củ sạc 3 chân loại 1$100000$phukien7.jpg$PhuKien.html" + 
"~Dây sạc iPhone 4/4s Loại Tốt$100000$phukien8.jpg$PhuKien.html" + 
"~Củ ipad chính hãng$300000$phukien9.jpg$PhuKien.html" + 
"~Dây sạc iPhone 5/5s/6/6s/6s Loại 1$150000$phukien10.jpg$PhuKien.html" + 
"~Tai nghe Sades SA-707- chính hãng$300000$phukien11.jpg$PhuKien.html" + 
"~Tai Bluetooth Samsung Galaxy N7000$250000$phukien12.jpg$PhuKien.html"+
"~Tai nghe bluetooth SamSung I9900$250000$phukien13.jpg$PhuKien.html" + 
"~Tai nghe Tako 2688$150000$phukien14.jpg$PhuKien.html" + 
"~Tai nghe OvannX1$190000$phukien15.jpg$PhuKien.html";

dataphukien2 = 
"Bán ví lạnh Ledger nano s giá rẻ$3900000$phukien1.jpg$childPage/PhuKien.html" + 
"~Củ sạc Samsung Galaxy Note 1/2/3/4/5$150000$phukien2.jpg$childPage/PhuKien.html" + 
"~Dây sạc Samsung Galaxy s2/s3/s4/s5/s6$100000$phukien3.jpg$childPage/PhuKien.html" + 
"~Bộ sạc pin Samsung galaxy Note 1/2/3/4/5/6 chính hãng$250000$phukien4.jpg$childPage/PhuKien.html" + 
"~Dây sạc Samsung Galaxy Note 1/2/3/4/5/6$150000$phukien5.jpg$childPage/PhuKien.html";

LoadDataPhuKien();

function SinhKhungPhuKien(phukien)
{
    var khung = document.createElement("a");
    khung.className = "khungphukien";
    khung.href = phukien.Link;

    var anh = document.createElement("img");
    anh.src = "image/phukien/" + phukien.Anh;
    anh.className = "anhphukien";

    var ten = document.createElement("div");
    ten.className = "tenphukien";
    ten.innerHTML = phukien.TenDT;

    var nutmua = document.createElement("div");
    nutmua.className = "nutmuaphukien";
    nutmua.innerHTML = "MUA"; 

    var gia = document.createElement("div");
    gia.className = "giaphukien";
    gia.innerHTML = phukien.Gia.toLocaleString() + " đ";

    khung.appendChild(anh);
    khung.appendChild(ten);
    khung.appendChild(nutmua);
    khung.appendChild(gia);


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

    document.getElementById("containerphukien").appendChild(khung);
}


function LoadDataPhuKien()
{
    var DSphukien = dataphukien.split("~");

    for (var i = 0; i < DSphukien.length; i++)
    {
        phukien = new PhuKien(DSphukien[i]);
        SinhKhungPhuKien(phukien);
    }
}

function PhuKien(chuoithongtin) {
    this.ChuoiThongTin = chuoithongtin;
    this.Mang = chuoithongtin.split("$");
    this.TenDT = this.Mang[0];
    this.Gia = Number(this.Mang[1]);
    this.Anh = this.Mang[2];
    this.Link = this.Mang[3];
}

function ClearPhuKien() {
    var myNode = document.getElementById("containerphukien");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function LoadDataPhuKien5CaiDau()
{
    ClearPhuKien();
    var DSphukien = dataphukien2.split("~");

    for (var i = 0; i < 5; i++)
    {
        phukien = new PhuKien(DSphukien[i]);
        SinhKhungPhuKien(phukien);
    }
}