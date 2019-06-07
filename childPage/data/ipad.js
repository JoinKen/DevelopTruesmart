dataipad = 
"IPAD MINI 2 - 32GB - BLACK - LIKE NEW 99%$7000000$ipad1.jpg$Ipad.html"+
"~IPAD MINI 2 - 16GB - WHITE - LIKE NEW 99%$6168000$ipad2.jpg$Ipad.html"+
"~IPAD MINI 3 4G 16GB CHƯA ACTIVE$10890000$ipad3.jpg$Ipad.html"+
"~IPAD MINI 1 - 16GB - WHITE - LIKE NEW 99%$4968000$ipad4.jpg$Ipad.html"+
"~IPAD AIR 2 - 4G - 16GB - GOLD -LIKE NEW 99%$9600000$ipad5.jpg$Ipad.html"+
"~IPAD AIR 16GB - 4G - WHITE$7200000$ipad6.jpg$Ipad.html"+
"~IPAD AIR 32GB - 4G - BLACK$7600000$ipad7.jpg$Ipad.html"+
"~IPAD 4 32GB - 4G - BLACK - LIKE NEW 99%$6168000$ipad8.jpg$Ipad.html"+
"~IPAD 2 64GB - 3G WIFI 99% (ĐEN - TRẮNG)$4190000$ipad9.jpg$Ipad.html"+
"~IPAD AIR 2 - 4G - 16GB (ĐÃ ACTIVE)$12200000$ipad10.jpg$Ipad.html";


LoadDataIPad();
function SinhKhungIPad2()
{
    var khung = document.createElement("div");
    khung.className = "khungipad";

    var anh = document.createElement("img");
    anh.src = "image/ipad/ipad1.jpg";
    anh.className = "anhipad";

    var ten = document.createElement("div");
    ten.className = "tenipad";
    ten.innerHTML = "iPhone 6 Plus Quốc tế 16GB/64GB/128GB Mới 98%";

    var nutmua = document.createElement("div");
    nutmua.className = "nutmuaipad";
    nutmua.innerHTML = "MUA"; 

    var gia = document.createElement("div");
    gia.className = "giaipad";
    gia.innerHTML = "3,690,000"; 

    var khuyenmai = document.createElement("ul");
    var km1 = document.createElement("li");
    km1.innerHTML = "Tặng bút cảm ứng đa năng";
    var km2 = document.createElement("li");
    km2.innerHTML = "Tặng miếng dán cường lực trị giá 200k";
    khuyenmai.appendChild(km1);
    khuyenmai.appendChild(km2);

    khung.appendChild(anh);
    khung.appendChild(ten);
    khung.appendChild(nutmua);
    khung.appendChild(gia);
    khung.appendChild(khuyenmai);

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
        khung.style.borderColor = "black";
        khung.style.opacity = "1";
    })

    document.getElementById("containeripad").appendChild(khung);
}

function SinhKhungIPad(ipad)
{
    var khung = document.createElement("a");
    khung.className = "khungipad";
    khung.href = ipad.Link;

    var anh = document.createElement("img");
    anh.src = "image/ipad/" + ipad.Anh;
    anh.className = "anhipad";

    var ten = document.createElement("div");
    ten.className = "tenipad";
    ten.innerHTML = ipad.TenDT;

    var nutmua = document.createElement("div");
    nutmua.className = "nutmuaipad";
    nutmua.innerHTML = "MUA"; 

    var gia = document.createElement("div");
    gia.className = "giaipad";
    gia.innerHTML = ipad.Gia.toLocaleString() + " đ";

    var khuyenmai = document.createElement("ul");
    var km1 = document.createElement("li");
    km1.innerHTML = "Tặng bút cảm ứng đa năng";
    var km2 = document.createElement("li");
    km2.innerHTML = "Tặng miếng dán cường lực trị giá 200k";
    khuyenmai.appendChild(km1);
    khuyenmai.appendChild(km2);

    khung.appendChild(anh);
    khung.appendChild(ten);
    khung.appendChild(nutmua);
    khung.appendChild(gia);
    khung.appendChild(khuyenmai);

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

    document.getElementById("containeripad").appendChild(khung);
}


function LoadDataIPad()
{
    var DSIPad = dataipad.split("~");

    for (var i = 0; i < DSIPad.length; i++)
    {
        ipad = new IPad(DSIPad[i]);
        SinhKhungIPad(ipad);
    }
}

function IPad(chuoithongtin) {
    this.ChuoiThongTin = chuoithongtin;
    this.Mang = chuoithongtin.split("$");
    this.TenDT = this.Mang[0];
    this.Gia = Number(this.Mang[1]);
    this.Anh = this.Mang[2];
    this.Link = this.Mang[3];
}