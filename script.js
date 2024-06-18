  // Btn Card Sampah
  $(document).ready(function(){
    $(".kertas").click(function(){
      $(".modal-dialog").hide()
    });
  });


const sampah = {
  kertas: {
    kertasPutih: {
      nama: 'Kertas Putih / HVS',
      img : 'image/kertas.png',
      deskripsi: 'Kertas putih atau HVS yang sering digunakan untuk mencetak dokumen dan tugas sekolah.'
    },
    koran: {
      nama: 'Koran',
      img : 'image/koran.jpg',
      deskripsi: 'Kertas bekas koran yang digunakan untuk membaca berita harian.'
    },
    bukuBekas: {
      nama: 'Buku Bekas',
      img : 'image/buku.jpg',
      deskripsi: 'Buku yang sudah tidak digunakan lagi, bisa berupa buku pelajaran atau novel.'
    },
    karton: {
      nama: 'Karton',
      img : 'image/karton.jpg',
      deskripsi: 'Kertas tebal yang biasanya digunakan untuk kemasan atau pembuatan kotak.'
    }
  },
  plastik: {
    gelasPlastik: {
      nama: 'Gelas Plastik',
       img : 'image/gelas.jpg',
      deskripsi: 'Gelas sekali pakai yang terbuat dari plastik, sering digunakan untuk minuman.'
    },
    botolPlastik: {
      nama: 'Botol Plastik',
       img : 'image/botol.jpg',
      deskripsi: 'Botol yang terbuat dari plastik, biasanya digunakan untuk air mineral atau minuman lainnya.'
    },
    perabotPlastik: {
      nama: 'Perabot Plastik',
       img : 'image/perabot.jpg',
      deskripsi: 'Peralatan rumah tangga yang terbuat dari plastik, termasuk kursi, meja, dan wadah penyimpanan.'
    }
  },
  alumunium:{
    perabotanAlumunium: {
      nama: 'Perabotan Alumunium',
      img : 'image/caldron.jpg',
      deskripsi: 'Peralatan rumah tangga yang terbuat dari alumunium, termasuk panci, wajan, dan alat masak lainnya.'
    },
  seng: {
    nama: 'Seng',
    img : 'image/seng.webp',
    deskripsi: 'Lembaran logam yang biasanya digunakan untuk atap dan dinding pada bangunan.'
  },
  kaleng: {
    nama: 'Kaleng',
    img : 'image/kaleng.jpg',
    deskripsi: 'Wadah yang terbuat dari alumunium, biasanya digunakan untuk minuman atau makanan kaleng.'
  }
  },
  besiLogam: {
    besi: {
    img : 'image/besi.jpg',
    nama: 'Besi',
      deskripsi: 'Material logam yang kuat dan tahan lama, sering digunakan dalam konstruksi dan peralatan.'
    },
    baja: {
      nama: 'Baja',
    img : 'image/steel.jpg',
      deskripsi: 'Paduan besi yang lebih kuat dan lebih ringan, digunakan dalam berbagai aplikasi industri.'
    },
    logamLain: {
    img : 'image/kuningan.jpg',
    nama: 'Logam Lainnya',
      deskripsi: 'Material logam lain yang dapat didaur ulang, seperti tembaga, aluminium, dan seng.'
    }
  },
  elektronik: {
    ponsel: {
    img : 'image/hp.jpg',
    nama: 'Ponsel',
      deskripsi: 'Perangkat komunikasi nirkabel yang digunakan untuk telepon, pesan teks, dan internet.'
    },
    mesinCuci: {
    img : 'image/mc.jpg',
    nama: 'Mesin Cuci',
      deskripsi: 'Perangkat elektronik yang digunakan untuk mencuci pakaian secara otomatis.'
    },
    ac: {
      nama: 'AC',
    img : 'image/ac.jpg',
      deskripsi: 'Perangkat elektronik yang digunakan untuk mengatur suhu dan kelembaban udara di dalam ruangan.'
    },
    tv: {
    img : 'image/tv.jpg',
    nama: 'Televisi',
      deskripsi: 'Alat untuk menerima sinyal dan menampilkan gambar bergerak dan suara.'
    },
    perangkatElektronikLain: {
    img : 'image/printer.jpg',
    nama: 'Perangkat Elektronik Lainnya',
      deskripsi: 'Termasuk perangkat seperti printer, scanner, dan perangkat keras lainnya.'
    }
  },
  botolKaca: {
    botolMinuman: {
      nama: 'Botol Minuman Kaca',
       img : 'image/botolKaca.jpg',
      deskripsi: 'Botol yang terbuat dari kaca, biasanya digunakan untuk minuman seperti kecap dan bir.'
    }
  },
  daun: {
    daunKering: {
       img : 'image/daunK.jpg',
       nama: 'Daun Kering',
      deskripsi: 'Daun yang sudah gugur dan mengering dari pohon atau tanaman.'
    },
    daunSegar: {
       img : 'image/daunB.jpg',
       nama: 'Daun Segar',
      deskripsi: 'Daun yang masih segar dan baru dipetik dari pohon atau tanaman.'
    }
  }
};

// Fungsi untuk menghasilkan kartu
function cardGenerator(param) {
  const parentCard = document.querySelector('.modal-item');
  parentCard.innerHTML = ''; // Bersihkan konten sebelumnya

  Object.keys(param).forEach(key => {
    const item = param[key];
    const card = `
        <div class="card">
          <div class="card-image">
            <img
              style="width: 100%; height: 100%; object-fit: cover"
              src="${item.img}"
              alt=""
            />
          </div>
          <div class="card-description">
            <p class="text-title">${item.nama}</p>
            <p class="text-body">
              ${item.deskripsi}
            </p>
          </div>
      </div>`;
    parentCard.insertAdjacentHTML('beforeend', card);
  });
}
const buttons = document.querySelectorAll('.toggle-button');

// Fungsi event handler untuk tombol
buttons[0].classList.toggle('actived');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'actived' class from all buttons
    buttons.forEach(btn => btn.classList.remove('actived'));
    button.classList.toggle('actived');
    
    // Add 'actived' class to the clicked button
  });
});
function handleButtonClick(category) {

  switch (category) {
    case 'kertas':
      cardGenerator(sampah.kertas);
      break;
    case 'plastik':
      cardGenerator(sampah.plastik);
      break;
    case 'alumunium':
      cardGenerator(sampah.alumunium);
      break;
    case 'besiLogam':
      cardGenerator(sampah.besiLogam);
      break;
    case 'elektronik':
      cardGenerator(sampah.elektronik);
      break;
    case 'botolKaca':
      cardGenerator(sampah.botolKaca);
      break;
    case 'daun':
      cardGenerator(sampah.daun);
      break;
    default:
      console.error('Category not recognized.');
  }
}   
cardGenerator(sampah.kertas);


function wa() {
  window.location.href="https://wa.me/+6282329690097";
}