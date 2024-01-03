onload = () =>{
        document.body.classList.remove("container");
};
// Mendapatkan elemen audio
let lagu = document.getElementById("lagu");

// Memainkan lagu ketika tombol ditekan
document.getElementByhref("Flower.html").addEventListener("click", function() {
  lagu.play().catch(function() {
    // Jika tidak dapat memainkan otomatis, perintahkan pengguna untuk memulai
    lagu.play();
  });
});
