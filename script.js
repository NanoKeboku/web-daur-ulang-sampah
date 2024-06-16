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
      deskripsi: 'Kertas putih atau HVS yang sering digunakan untuk mencetak dokumen dan tugas sekolah.'
    },
    koran: {
      nama: 'Koran',
      deskripsi: 'Kertas bekas koran yang digunakan untuk membaca berita harian.'
    },
    bukuBekas: {
      nama: 'Buku Bekas',
      deskripsi: 'Buku yang sudah tidak digunakan lagi, bisa berupa buku pelajaran atau novel.'
    },
    kertasWarna: {
      nama: 'Kertas Warna / Duplek',
      deskripsi: 'Kertas berwarna yang sering digunakan untuk kerajinan atau keperluan dekoratif.'
    },
    kertasBuram: {
      nama: 'Kertas Buram',
      deskripsi: 'Kertas dengan permukaan tidak mengkilap, biasanya digunakan untuk konsep atau catatan.'
    },
    karton: {
      nama: 'Karton',
      deskripsi: 'Kertas tebal yang biasanya digunakan untuk kemasan atau pembuatan kotak.'
    }
  },
  plastik: {
    gelasPlastik: {
      nama: 'Gelas Plastik',
      deskripsi: 'Gelas sekali pakai yang terbuat dari plastik, sering digunakan untuk minuman.'
    },
    botolPlastik: {
      nama: 'Botol Plastik',
      deskripsi: 'Botol yang terbuat dari plastik, biasanya digunakan untuk air mineral atau minuman lainnya.'
    },
    damar: {
      nama: 'Damar',
      deskripsi: 'Jenis plastik yang digunakan dalam berbagai produk, termasuk mainan dan peralatan rumah tangga.'
    }
  },
  alumunium:{
    kaleng: {
      nama: 'Kaleng',
      deskripsi: 'Wadah alumunium yang digunakan untuk kemasan makanan dan minuman.'
    },
    foil: {
      nama: 'Foil',
      deskripsi: 'Lembaran tipis alumunium yang sering digunakan untuk membungkus makanan.'
    },
    tutupBotol: {
      nama: 'Tutup Botol Alumunium',
      deskripsi: 'Tutup botol yang terbuat dari alumunium, sering kali dari botol minuman.'
    },
    kemasanAlumunium: {
      nama: 'Kemasan Alumunium',
      deskripsi: 'Kemasan lain yang terbuat dari alumunium, seperti bekas permen karet atau obat.'
    }
  },
  besiLogam: {
    besi: {
      nama: 'Besi',
      deskripsi: 'Material logam yang kuat dan tahan lama, sering digunakan dalam konstruksi dan peralatan.'
    },
    baja: {
      nama: 'Baja',
      deskripsi: 'Paduan besi yang lebih kuat dan lebih ringan, digunakan dalam berbagai aplikasi industri.'
    },
    logamLain: {
      nama: 'Logam Lainnya',
      deskripsi: 'Material logam lain yang dapat didaur ulang, seperti tembaga, aluminium, dan seng.'
    }
  },
  elektronik: {
    ponsel: {
      nama: 'Ponsel',
      deskripsi: 'Perangkat komunikasi nirkabel yang digunakan untuk telepon, pesan teks, dan internet.'
    },
    komputer: {
      nama: 'Komputer',
      deskripsi: 'Perangkat elektronik untuk memproses data dan melakukan berbagai tugas komputasi.'
    },
    tv: {
      nama: 'Televisi',
      deskripsi: 'Alat untuk menerima sinyal dan menampilkan gambar bergerak dan suara.'
    },
    perangkatElektronikLain: {
      nama: 'Perangkat Elektronik Lainnya',
      deskripsi: 'Termasuk perangkat seperti printer, scanner, dan perangkat keras lainnya.'
    }
  },
  botolKaca: {
    botolMinuman: {
      nama: 'Botol Minuman Kaca',
      deskripsi: 'Botol yang terbuat dari kaca, biasanya digunakan untuk minuman seperti anggur dan bir.'
    },
    botolObat: {
      nama: 'Botol Obat Kaca',
      deskripsi: 'Botol yang terbuat dari kaca, digunakan untuk kemasan obat-obatan.'
    },
    botolLainnya: {
      nama: 'Botol Kaca Lainnya',
      deskripsi: 'Botol kaca lainnya yang digunakan untuk berbagai keperluan seperti kosmetik dan perawatan pribadi.'
    }
  },
  daun: {
    daunKering: {
      nama: 'Daun Kering',
      deskripsi: 'Daun yang sudah gugur dan mengering dari pohon atau tanaman.'
    },
    daunSegar: {
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
              src=""
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

// Fungsi event handler untuk tombol
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
