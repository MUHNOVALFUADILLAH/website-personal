document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    // Ambil data dari form
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var telepon = document.getElementById('telepon').value;
    var pesan = document.getElementById('pesan').value;

    // Buat pesan yang akan dikirim
    var message = `Nama: ${nama}\nEmail: ${email}\nTelepon: ${telepon}\nPesan: ${pesan}`;

    // Kirim pesan ke WhatsApp
    var whatsappUrl = `https://api.whatsapp.com/send?phone=6281931447338&text=${encodeURIComponent(message)}`;

    // Buka URL WhatsApp
    window.open(whatsappUrl, '_blank');
});
