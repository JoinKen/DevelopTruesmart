dataunlock = 
"Unlock Blackberry z10$170000$unlock1.jpg$Unlock.html" + 
"~Mở, xoá khoá tài khoản Blackberry ID$160000$unlock2.jpg$Unlock.html" + 
"~Unlock sony xperia acro HD IS12S Au kddi$170000$unlock3.jpg$Unlock.html" + 
"~Unlock Sony Xperia V S0l21 Au$180000$unlock4.jpg$Unlock.html" + 
"~Unlock Sony SO-02E Xperia Z Docomo$170000$unlock5.jpg$Unlock.html" + 
"~Unlock Sony Z4 AU, Docomo, AT&T, Tmobile$160000$unlock6.jpg$Unlock.html" + 
"~Unlock Sony Xperia Ul S0l22 Au$3900000$unlock7.jpg$Unlock.html" + 
"~Mở khoá, xoá tài khoản My Xperia Protected$50000$unlock8.jpg$Unlock.html" + 
"~Unlock sony Xperia Acro HD so-03D$170000$unlock9.jpg$Unlock.html" + 
"~Sony Unlock Code$140000$unlock10.jpg$Unlock.html" + 
"~Unlock Boot Looder Sony Xperia Z1/Z2/Z3/Z4/Z5$150000$unlock11.jpg$Unlock.html" + 
"~Unlock Sony Xperia V S0l21 Au$180000$unlock13.jpg$Unlock.html" + 
"~Unlock Sony SO-02E Xperia Z Docomo$170000$unlock15.jpg$Unlock.html" + 
"~Unlock Sony Z4 AU, Docomo, AT&T, Tmobile$160000$unlock14.jpg$Unlock.html" + 
"~Sony Unlock Code Quốc Tế thành công 100%$170000$unlock12.jpg$Unlock.html";


LoadDataUnlock();

function SinhKhungUnlock(unlock)
{
    var khung = document.createElement("a");
    khung.className = "khungunlock";
    khung.href = unlock.Link;

    var anh = document.createElement("img");
    anh.src = "image/unlock/" + unlock.Anh;
    anh.className = "anhunlock";

    var ten = document.createElement("div");
    ten.className = "tenunlock";
    ten.innerHTML = unlock.TenDT;

    var nutmua = document.createElement("div");
    nutmua.className = "nutmuaunlock";
    nutmua.innerHTML = "MUA"; 

    var gia = document.createElement("div");
    gia.className = "giaunlock";
    gia.innerHTML = unlock.Gia.toLocaleString() + " đ";

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

    document.getElementById("containerunlock").appendChild(khung);
}


function LoadDataUnlock()
{
    var DSunlock = dataunlock.split("~");

    for (var i = 0; i < DSunlock.length; i++)
    {
        unlock = new Unlock(DSunlock[i]);
        SinhKhungUnlock(unlock);
    }
}

function Unlock(chuoithongtin) {
    this.ChuoiThongTin = chuoithongtin;
    this.Mang = chuoithongtin.split("$");
    this.TenDT = this.Mang[0];
    this.Gia = Number(this.Mang[1]);
    this.Anh = this.Mang[2];
    this.Link = this.Mang[3];
}