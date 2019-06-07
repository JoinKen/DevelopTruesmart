datadienthoai =
    "iPhone 6 Plus Quốc tế 16GB/64GB/128GB Mới 98%$3690000$iphone1.jpg$iPhone6.html" +
    "~IPHONE 6S PLUS GOLD FULLBOX 16GB/64GB/128GB$7990000$iphone2.jpg$DienThoai.html" +
    "~iPhone 7 Plus Quốc Tế - 32GB - Trắng - Fullbox$13590000$iphone3.jpg$DienThoai.html" +
    "~iPhone 7 Plus Quốc tế 32GB/128GB/256GB Mới 98%$12590000$iphone4.jpg$DienThoai.html" +
    "~iPhone 7 Quốc tế 32GB/128GB/256GB Mới 98%$9290000$iphone5.jpg$DienThoai.html" +
    "~iPhone 6s Plus Quốc tế 16GB/64GB/128GB Mới 98%$6890000$iphone6.jpg$DienThoai.html" +
    "~iPhone 6 Plus Quốc tế 16GB/64GB/128GB Mới 98%$5490000$iphone7.jpg$DienThoai.html" +
    "~iPhone 6 Quốc tế 16GB/64GB/128GB Mới 98%$4090000$iphone8.jpg$DienThoai.html" +
    "~iPhone 6 LOCK 16GB/64GB/128GB Mới 98%$3090000$iphone9.jpg$DienThoai.html" +
    "~iPhone 5s Quốc tế 16GB/32GB/64GB Mới 98%$2390000$iphone10.jpg$DienThoai.html" +
    "~iPhone 5 16GB/32GB/64GB Trắng ( Fullbox ) Mới 98%$1890000$iphone11.jpg$DienThoai.html" +
    "~iPhone X 256GB Đen$34790000$iphone12.jpg$DienThoai.html" +
    "~SamSung Galaxy A6+ (2018)$8990000$samsung1.jpg$DienThoai.html" +
    "~SamSung Galaxy S8$15990000$samsung2.jpg$DienThoai.html" +
    "~SamSung Galaxy Note 8$22490000$samsung3.jpg$DienThoai.html" +
    "~SamSung Galaxy J7 Pro$6990000$samsung4.jpg$DienThoai.html" +
    "~SamSung Galaxy S8 Plus$17990000$samsung5.jpg$DienThoai.html" +
    "~SamSung Galaxy S9+ 64GB (2018)$23490000$samsung6.jpg$DienThoai.html" +
    "~SamSung Galaxy S9+ 128GB (2018)$24990000$samsung7.jpg$DienThoai.html" +
    "~Sony Xperia X$6990000$sony1.jpg$DienThoai.html" +
    "~Sony Xperia XZ2 $19990000$sony2.jpg$DienThoai.html" +
    "~Sony Xperia L1$3590000$sony3.jpg$DienThoai.html" +
    "~Sony Xperia XZ Dual$9990000$sony4.jpg$DienThoai.html" +
    "~Sony Xperia L2$4990000$sony5.jpg$DienThoai.html" +
    "~Sony Xperia XA1 Plus$5990000$sony6.jpg$DienThoai.html";

    datadienthoai2 =
    "iPhone 6 Plus Quốc tế 16GB/64GB/128GB Mới 98%$3690000$iphone1.jpg$childPage/iPhone6.html" +
    "~IPHONE 6S PLUS GOLD FULLBOX 16GB/64GB/128GB$7990000$iphone2.jpg$childPage/DienThoai.html" +
    "~iPhone 7 Plus Quốc Tế - 32GB - Trắng - Fullbox$13590000$iphone3.jpg$childPage/DienThoai.html" +
    "~iPhone 7 Plus Quốc tế 32GB/128GB/256GB Mới 98%$12590000$iphone4.jpg$childPage/DienThoai.html" +
    "~iPhone 7 Quốc tế 32GB/128GB/256GB Mới 98%$9290000$iphone5.jpg$childPage/DienThoai.html";

HangDTEnum = {
    tatca: 0,
    iphone: 1,
    samsung: 2,
    sony: 3,
};

KieuSapXepEnum = {
    phobien: 1,
    tangdan: 2,
    giamdan: 3,
};

hangDienThoai = HangDTEnum.tatca;
kieuSapXep = KieuSapXepEnum.phobien;
tuKhoaTimKiem = "";

LoadDataDienThoaiNangCao();
//LoadDataDienThoai();

function SinhKhungDienThoai(dienthoai) {
    var khung = document.createElement("a");
    khung.className = "khungdienthoai";
    khung.href = dienthoai.Link;

    var anh = document.createElement("img");
    anh.src = "image/dienthoai/" + dienthoai.Anh;
    anh.className = "anhdienthoai";

    var ten = document.createElement("div");
    ten.className = "tendienthoai";
    ten.innerHTML = dienthoai.TenDT;

    var nutmua = document.createElement("div");
    nutmua.className = "nutmuadienthoai";
    nutmua.innerHTML = "MUA";

    var gia = document.createElement("div");
    gia.className = "giadienthoai";
    gia.innerHTML = dienthoai.Gia.toLocaleString() + " đ";

    var khuyenmai = document.createElement("ul");
    var km1 = document.createElement("li");
    km1.innerHTML = "Tặng dán Cường lực, Ốp lưng khi mua BHV";
    var km2 = document.createElement("li");
    km2.innerHTML = "Tặng Voucher Giảm giá mua máy & sửa chữa trị giá 50.000đ";
    khuyenmai.appendChild(km1);
    khuyenmai.appendChild(km2);

    khung.appendChild(anh);
    khung.appendChild(ten);
    khung.appendChild(nutmua);
    khung.appendChild(gia);
    khung.appendChild(khuyenmai);

    khung.addEventListener("mouseover", function () {
        anh.style.width = "170px";
        anh.style.marginTop = "0px";
        nutmua.style.backgroundColor = "green";
        nutmua.style.borderRadius = "50%";
        khung.style.borderColor = "orange";
        khung.style.opacity = "0.7";
        khuyenmai.style.color = "#f5b726";
    })

    khung.addEventListener("mouseleave", function () {
        anh.style.width = "150px";
        anh.style.marginTop = "20px";
        nutmua.style.backgroundColor = "orange";
        nutmua.style.borderRadius = "15%";
        khung.style.borderColor = "black";
        khung.style.opacity = "1";
        khuyenmai.style.color = "black";
    })

    document.getElementById("containerdienthoai").appendChild(khung);
}



function LoadDataDienThoai() {
    var DSDienThoai = datadienthoai.split("~");

    for (var i = 0; i < DSDienThoai.length; i++) {
        var dienthoai = new DienThoai(DSDienThoai[i]);
        SinhKhungDienThoai(dienthoai);
    }
}


function DienThoai(chuoithongtin) {
    this.ChuoiThongTin = chuoithongtin;
    this.Mang = chuoithongtin.split("$");
    this.TenDT = this.Mang[0];
    this.Gia = Number(this.Mang[1]);
    this.Anh = this.Mang[2];
    this.Link = this.Mang[3];
}

function LayDSDienThoaiTheoHang(hangcantim) {
    var DSDienThoai = datadienthoai.split("~");
    var MangDienThoai = new Array();

    for (var i = 0; i < DSDienThoai.length; i++) {
        var dienthoai = new DienThoai(DSDienThoai[i]);
        var chuoinguon = dienthoai.ChuoiThongTin.toLowerCase();
        var chuoicantim = hangcantim.toLowerCase();
        if (chuoinguon.indexOf(chuoicantim) >= 0) {
            MangDienThoai.push(dienthoai);
        }
    }

    return MangDienThoai;
}


function LoadDataDienThoaiNangCao() {
    var MangDienThoai = new Array();
    if (tuKhoaTimKiem != "") {
        MangDienThoai = LayDSDienThoaiTheoHang(tuKhoaTimKiem);
    }
    else {
        if (hangDienThoai == HangDTEnum.iphone) {
            MangDienThoai = LayDSDienThoaiTheoHang("iphone");
        }
        else if (hangDienThoai == HangDTEnum.samsung) {
            MangDienThoai = LayDSDienThoaiTheoHang("samsung");
        }
        else if (hangDienThoai == HangDTEnum.sony) {
            MangDienThoai = LayDSDienThoaiTheoHang("sony");
        }
        else {
            MangDienThoai = LayDSDienThoaiTheoHang(" ");
        }
    }

    MangDienThoai.sort(SapXepDienThoai);

    for (var i = 0; i < MangDienThoai.length; i++) {
        SinhKhungDienThoai(MangDienThoai[i]);
    }
}

function SapXepDienThoai(a, b) {
    if (kieuSapXep == KieuSapXepEnum.tangdan)
        return a.Gia - b.Gia;
    if (kieuSapXep == KieuSapXepEnum.giamdan)
        return b.Gia - a.Gia;
    return 0;
}

function ClearDienThoai() {
    var myNode = document.getElementById("containerdienthoai");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function SapXepEvent() {
    var luachon = document.getElementById("selectsapxep").value;

    if (luachon == "phobien")
        kieuSapXep = KieuSapXepEnum.phobien;
    else if (luachon == "tangdan")
        kieuSapXep = KieuSapXepEnum.tangdan;
    else if (luachon == "giamdan")
        kieuSapXep = KieuSapXepEnum.giamdan;

    ClearDienThoai();
    LoadDataDienThoaiNangCao();
}

function XemHangTatCa() {
    tuKhoaTimKiem = "";
    hangDienThoai = HangDTEnum.tatca;
    ClearDienThoai();
    LoadDataDienThoaiNangCao();
}
function XemHangIPhone() {
    tuKhoaTimKiem = "";
    hangDienThoai = HangDTEnum.iphone;
    ClearDienThoai();
    LoadDataDienThoaiNangCao();
}

function XemHangSamSung() {
    tuKhoaTimKiem = "";
    hangDienThoai = HangDTEnum.samsung;
    ClearDienThoai();
    LoadDataDienThoaiNangCao();
}
function XemHangSony() {
    tuKhoaTimKiem = "";
    hangDienThoai = HangDTEnum.sony;
    ClearDienThoai();
    LoadDataDienThoaiNangCao();
}

function TimKiemDienThoaiEnter1(e) {
    tuKhoaTimKiem = document.getElementById("key1").value;
    if (e.keyCode == 13 && tuKhoaTimKiem.trim() != "") {
        ClearDienThoai();
        LoadDataDienThoaiNangCao();
        document.getElementById("key1").blur;
        return false;
    }
}

function TimKiemDienThoaiClick1() {
    tuKhoaTimKiem = document.getElementById("key1").value;
    ClearDienThoai();
    LoadDataDienThoaiNangCao();
}
function TimKiemDienThoaiEnter2(e) {
    tuKhoaTimKiem = document.getElementById("key2").value;
    if (e.keyCode == 13 && tuKhoaTimKiem.trim() != "") {
        ClearDienThoai();
        LoadDataDienThoaiNangCao();
        document.getElementById("key2").blur;
        return false;
    }
}

function TimKiemDienThoaiClick2() {
    tuKhoaTimKiem = document.getElementById("key2").value;
    ClearDienThoai();
    LoadDataDienThoaiNangCao();
}

function LoadDataDienThoai5CaiDau() {
    ClearDienThoai();
    var DSDienThoai = datadienthoai2.split("~");

    for (var i = 0; i < 5; i++) {
        var dienthoai = new DienThoai(DSDienThoai[i]);
        SinhKhungDienThoai(dienthoai);
    }
}