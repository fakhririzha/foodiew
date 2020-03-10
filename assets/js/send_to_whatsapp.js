function prosesWhatsApp() {

    var name = document.getElementById("inputNama").value;
    var email = document.getElementById("inputEmail").value;
    var phone = document.getElementById("inputPhone").value;
    var produk = document.getElementById("inputProduk").value;
    var pesan = document.getElementById("inputPesan").value;

    var message =
        `
    Halo, admin Arah Teknologi!\n
    Perkenalkan, saya ${name}.\n
    \n
    Email saya : ${email},\n
    No. Telp saya : ${phone},\n
    Produk yang saya tanyakan : ${produk},\n
    \n
    Adapun hal yang ingin saya tanyakan adalah :\n
    ${pesan}\n
    \n
    Terimakasih!
    `;

    // alert(encodeURI(message));

    // alert("https://api.whatsapp.com/send?phone=6285398652346&text=" + encodeURI(message) + "&source=&data=");

    // console.log(message)

    window.location.replace("https://api.whatsapp.com/send?phone=628125054405&text=" + encodeURI(message) + "&source=&data=");
}