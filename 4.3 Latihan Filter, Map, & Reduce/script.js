// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 11:18 -> [11, 18]
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
// jumlahkan semua detik
    .reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);        //
jsLanjut = jsLanjut - jam * 3600;       //8292 detik - (2 jam * 3600 detik) = 1092 detik

const menit = Math.floor(jsLanjut/60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const durasi = pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = jmlVideo;