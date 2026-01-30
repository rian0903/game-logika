export const SAMPLE_QUESTIONS = [
    // PENALARAN / LOGIC (50 questions)
    {
        question: "Jika semua mawar adalah bunga, dan sebagian bunga berwarna merah, manakah simpulan yang PASTI BENAR?",
        options: ["Semua mawar berwarna merah", "Sebagian mawar berwarna merah", "Semua yang berwarna merah adalah mawar", "Tidak dapat disimpulkan"],
        correctAnswer: "Tidak dapat disimpulkan",
        category: "Penalaran",
        explanation: "Premis tidak menyatakan hubungan langsung antara mawar dan warna merah."
    },
    {
        question: "Jika A > B dan B > C, maka...",
        options: ["A < C", "A > C", "A = C", "Tidak ada hubungan"],
        correctAnswer: "A > C",
        category: "Penalaran",
        explanation: "Sifat transitif: Jika A lebih besar dari B, dan B lebih besar dari C, maka A pasti lebih besar dari C."
    },
    {
        question: "Semua kucing adalah mamalia. Beberapa mamalia hidup di air. Kesimpulan yang BENAR adalah?",
        options: ["Semua kucing hidup di air", "Beberapa kucing hidup di air", "Tidak ada kucing yang hidup di air", "Tidak dapat disimpulkan"],
        correctAnswer: "Tidak dapat disimpulkan",
        category: "Penalaran",
        explanation: "Tidak ada informasi yang menghubungkan kucing dengan mamalia air secara langsung."
    },
    {
        question: "Jika hari ini Senin, maka besok adalah Selasa. Besok bukan Selasa. Kesimpulannya?",
        options: ["Hari ini Senin", "Hari ini bukan Senin", "Hari ini Rabu", "Tidak dapat disimpulkan"],
        correctAnswer: "Hari ini bukan Senin",
        category: "Penalaran",
        explanation: "Modus tollens: Jika P maka Q. Bukan Q, maka bukan P."
    },
    {
        question: "Semua siswa rajin mendapat nilai bagus. Doni tidak mendapat nilai bagus. Kesimpulannya?",
        options: ["Doni rajin", "Doni tidak rajin", "Doni siswa", "Tidak dapat disimpulkan"],
        correctAnswer: "Doni tidak rajin",
        category: "Penalaran",
        explanation: "Jika Doni tidak mendapat nilai bagus, berarti Doni bukan siswa rajin."
    },
    {
        question: "P atau Q benar. P salah. Maka?",
        options: ["Q salah", "Q benar", "P dan Q benar", "Tidak dapat disimpulkan"],
        correctAnswer: "Q benar",
        category: "Penalaran",
        explanation: "Dalam disjungsi, jika salah satu salah dan pernyataannya benar, maka yang lain pasti benar."
    },
    {
        question: "Jika hujan, jalanan basah. Jalanan basah. Kesimpulannya?",
        options: ["Pasti hujan", "Mungkin hujan", "Tidak hujan", "Jalanan kering"],
        correctAnswer: "Mungkin hujan",
        category: "Penalaran",
        explanation: "Jalanan bisa basah karena hal lain (disiram, dll). Ini bukan modus ponens yang valid."
    },
    {
        question: "Semua dokter adalah sarjana. Beberapa sarjana adalah dosen. Kesimpulan yang PASTI salah?",
        options: ["Semua dokter adalah dosen", "Beberapa dokter adalah dosen", "Semua dosen adalah dokter", "Tidak ada yang pasti salah"],
        correctAnswer: "Semua dokter adalah dosen",
        category: "Penalaran",
        explanation: "Tidak ada premis yang menghubungkan dokter dengan dosen secara pasti."
    },
    {
        question: "Tidak semua burung bisa terbang. Pinguin adalah burung. Kesimpulannya?",
        options: ["Pinguin bisa terbang", "Pinguin tidak bisa terbang", "Beberapa burung tidak bisa terbang", "Semua burung bisa terbang"],
        correctAnswer: "Beberapa burung tidak bisa terbang",
        category: "Penalaran",
        explanation: "Premis pertama sudah menyatakan 'tidak semua burung bisa terbang'."
    },
    {
        question: "Jika saya belajar, saya lulus. Saya lulus. Maka?",
        options: ["Saya pasti belajar", "Saya mungkin belajar", "Saya tidak belajar", "Saya gagal"],
        correctAnswer: "Saya mungkin belajar",
        category: "Penalaran",
        explanation: "Bisa lulus karena hal lain, bukan hanya belajar. Ini kesalahan affirming the consequent."
    },
    {
        question: "A sama tinggi dengan B. B lebih tinggi dari C. Maka?",
        options: ["A lebih tinggi dari C", "A sama tinggi dengan C", "C lebih tinggi dari A", "A lebih pendek dari C"],
        correctAnswer: "A lebih tinggi dari C",
        category: "Penalaran",
        explanation: "Jika A = B dan B > C, maka A > C."
    },
    {
        question: "Semua mobil bermesin. Beberapa kendaraan adalah mobil. Kesimpulannya?",
        options: ["Semua kendaraan bermesin", "Beberapa kendaraan bermesin", "Tidak ada kendaraan bermesin", "Semua bermesin adalah mobil"],
        correctAnswer: "Beberapa kendaraan bermesin",
        category: "Penalaran",
        explanation: "Karena beberapa kendaraan adalah mobil, dan semua mobil bermesin, maka beberapa kendaraan pasti bermesin."
    },
    {
        question: "Jika lampu menyala, ruangan terang. Ruangan tidak terang. Kesimpulannya?",
        options: ["Lampu menyala", "Lampu tidak menyala", "Lampu rusak", "Tidak dapat disimpulkan"],
        correctAnswer: "Lampu tidak menyala",
        category: "Penalaran",
        explanation: "Modus tollens: Jika tidak Q (ruangan tidak terang), maka tidak P (lampu tidak menyala)."
    },
    {
        question: "P lebih cepat dari Q. Q lebih cepat dari R. R sama cepat dengan S. Urutan dari tercepat?",
        options: ["P-Q-R-S", "P-Q-S-R", "Q-P-R-S", "P-R-Q-S"],
        correctAnswer: "P-Q-R-S",
        category: "Penalaran",
        explanation: "P > Q > R = S, jadi urutan: P, Q, kemudian R dan S sama cepat."
    },
    {
        question: "Semua peserta ujian membawa pensil. Andi membawa pensil. Kesimpulannya?",
        options: ["Andi peserta ujian", "Andi mungkin peserta ujian", "Andi bukan peserta ujian", "Semua yang membawa pensil adalah peserta"],
        correctAnswer: "Andi mungkin peserta ujian",
        category: "Penalaran",
        explanation: "Bisa saja Andi membawa pensil untuk keperluan lain. Tidak bisa dipastikan."
    },
    {
        question: "Tidak ada manusia yang abadi. Sokrates adalah manusia. Maka?",
        options: ["Sokrates abadi", "Sokrates tidak abadi", "Sokrates bukan manusia", "Tidak dapat disimpulkan"],
        correctAnswer: "Sokrates tidak abadi",
        category: "Penalaran",
        explanation: "Jika tidak ada manusia yang abadi, dan Sokrates manusia, maka Sokrates tidak abadi."
    },
    {
        question: "Jika A maka B. Jika B maka C. Jika A maka?",
        options: ["C pasti benar", "C mungkin benar", "B salah", "Tidak ada hubungan"],
        correctAnswer: "C pasti benar",
        category: "Penalaran",
        explanation: "Transitif: A→B, B→C, maka A→C."
    },
    {
        question: "Beberapa atlet adalah vegetarian. Semua vegetarian makan sayur. Kesimpulannya?",
        options: ["Semua atlet makan sayur", "Beberapa atlet makan sayur", "Tidak ada atlet makan sayur", "Semua yang makan sayur adalah atlet"],
        correctAnswer: "Beberapa atlet makan sayur",
        category: "Penalaran",
        explanation: "Beberapa atlet adalah vegetarian, dan semua vegetarian makan sayur, jadi beberapa atlet makan sayur."
    },
    {
        question: "X lebih mahal dari Y. Z lebih murah dari Y. Hubungan X dan Z?",
        options: ["X lebih murah dari Z", "X sama dengan Z", "X lebih mahal dari Z", "Tidak dapat ditentukan"],
        correctAnswer: "X lebih mahal dari Z",
        category: "Penalaran",
        explanation: "X > Y > Z, jadi X > Z."
    },
    {
        question: "Semua harimau adalah karnivora. Tidak semua karnivora berbahaya. Kesimpulan yang MUNGKIN benar?",
        options: ["Semua harimau berbahaya", "Tidak ada harimau yang berbahaya", "Beberapa harimau tidak berbahaya", "Semua karnivora adalah harimau"],
        correctAnswer: "Beberapa harimau tidak berbahaya",
        category: "Penalaran",
        explanation: "Karena tidak semua karnivora berbahaya, mungkin saja ada harimau yang tidak berbahaya."
    },
    {
        question: "Jika hari libur, toko tutup. Toko buka. Kesimpulannya?",
        options: ["Hari libur", "Bukan hari libur", "Toko tutup", "Tidak dapat disimpulkan"],
        correctAnswer: "Bukan hari libur",
        category: "Penalaran",
        explanation: "Modus tollens: Jika toko buka (bukan tutup), maka bukan hari libur."
    },
    {
        question: "Semua programmer bisa coding. Budi bisa coding. Apakah Budi programmer?",
        options: ["Ya, pasti", "Tidak, pasti bukan", "Mungkin iya, mungkin tidak", "Tidak relevan"],
        correctAnswer: "Mungkin iya, mungkin tidak",
        category: "Penalaran",
        explanation: "Banyak orang bisa coding tanpa menjadi programmer profesional."
    },
    {
        question: "P dan Q tidak bisa sama-sama benar. P benar. Maka Q?",
        options: ["Benar", "Salah", "Tidak dapat ditentukan", "Tergantung P"],
        correctAnswer: "Salah",
        category: "Penalaran",
        explanation: "Dalam kontradiksi, jika P benar, maka Q pasti salah."
    },
    {
        question: "Jika rajin, sukses. Jika tidak rajin, gagal. Andi sukses. Kesimpulannya?",
        options: ["Andi rajin", "Andi mungkin rajin", "Andi tidak rajin", "Andi gagal"],
        correctAnswer: "Andi mungkin rajin",
        category: "Penalaran",
        explanation: "Bisa saja ada faktor lain yang membuat sukses selain kerajinan."
    },
    {
        question: "Tidak ada bunga yang berbau busuk. Mawar adalah bunga. Maka?",
        options: ["Mawar berbau harum", "Mawar tidak berbau busuk", "Mawar tidak berbau", "Tidak dapat disimpulkan"],
        correctAnswer: "Mawar tidak berbau busuk",
        category: "Penalaran",
        explanation: "Jika tidak ada bunga berbau busuk, maka mawar sebagai bunga pasti tidak berbau busuk."
    },
    {
        question: "A ditanam setelah B. C ditanam sebelum B. Urutan penanaman?",
        options: ["A-B-C", "C-B-A", "B-C-A", "A-C-B"],
        correctAnswer: "C-B-A",
        category: "Penalaran",
        explanation: "C sebelum B, B sebelum A. Urutan: C → B → A."
    },
    {
        question: "Semua mahasiswa punya KTM. Rina punya KTM. Kesimpulannya?",
        options: ["Rina mahasiswa", "Rina mungkin mahasiswa", "Rina bukan mahasiswa", "Semua yang punya KTM mahasiswa"],
        correctAnswer: "Rina mungkin mahasiswa",
        category: "Penalaran",
        explanation: "Bisa saja KTM dimiliki orang lain selain mahasiswa (pinjam, palsu, dll)."
    },
    {
        question: "Jika tidak hujan, jalan kering. Jalan tidak kering. Maka?",
        options: ["Hujan", "Tidak hujan", "Mungkin hujan", "Jalan basah"],
        correctAnswer: "Hujan",
        category: "Penalaran",
        explanation: "Modus tollens: Jika jalan tidak kering, maka pasti hujan (asumsi dari premis)."
    },
    {
        question: "Semua burung punya sayap. Ayam punya sayap. Ayam adalah burung?",
        options: ["Ya", "Tidak", "Mungkin", "Tidak relevan"],
        correctAnswer: "Mungkin",
        category: "Penalaran",
        explanation: "Memiliki sayap bukan ciri eksklusif burung saja."
    },
    {
        question: "P lebih tinggi dari Q, tetapi lebih pendek dari R. R sama tinggi dengan S. Urutan dari tertinggi?",
        options: ["P-Q-R-S", "R-S-P-Q", "S-R-Q-P", "Q-P-S-R"],
        correctAnswer: "R-S-P-Q",
        category: "Penalaran",
        explanation: "R = S > P > Q. Urutan: R dan S tertinggi, kemudian P, lalu Q."
    },
    {
        question: "Jika lapar, makan. Tidak makan. Maka?",
        options: ["Lapar", "Tidak lapar", "Kenyang", "Tidak dapat disimpulkan"],
        correctAnswer: "Tidak lapar",
        category: "Penalaran",
        explanation: "Modus tollens: Jika tidak makan, maka tidak lapar."
    },
    {
        question: "Semua politisi adalah pembicara ulung. Beberapa pembicara ulung adalah pengacara. Kesimpulannya?",
        options: ["Semua politisi pengacara", "Beberapa politisi pengacara", "Tidak ada politisi yang pengacara", "Tidak dapat disimpulkan"],
        correctAnswer: "Tidak dapat disimpulkan",
        category: "Penalaran",
        explanation: "Tidak ada hubungan langsung antara politisi dan pengacara dari premis."
    },
    {
        question: "A lebih tua dari B. C lebih muda dari B. Siapa yang paling muda?",
        options: ["A", "B", "C", "Tidak dapat ditentukan"],
        correctAnswer: "C",
        category: "Penalaran",
        explanation: "A > B > C. C paling muda."
    },
    {
        question: "Jika pintar, lulus ujian. Lulus ujian. Apakah pintar?",
        options: ["Ya", "Tidak", "Mungkin", "Pasti tidak"],
        correctAnswer: "Mungkin",
        category: "Penalaran",
        explanation: "Bisa lulus karena faktor lain (beruntung, nyontek, dll)."
    },
    {
        question: "Tidak semua siswa suka matematika. Ani suka matematika. Ani adalah siswa?",
        options: ["Ya", "Tidak", "Mungkin", "Pasti bukan"],
        correctAnswer: "Mungkin",
        category: "Penalaran",
        explanation: "Tidak ada informasi yang menyatakan hanya siswa yang suka matematika."
    },
    {
        question: "Jika demam, istirahat. Tidak demam. Maka?",
        options: ["Istirahat", "Tidak istirahat", "Mungkin istirahat", "Sakit"],
        correctAnswer: "Mungkin istirahat",
        category: "Penalaran",
        explanation: "Premis tidak melarang istirahat meskipun tidak demam."
    },
    {
        question: "Semua anjing adalah hewan. Tidak semua hewan jinak. Kesimpulan yang MUNGKIN benar?",
        options: ["Semua anjing jinak", "Beberapa anjing tidak jinak", "Tidak ada anjing jinak", "Semua hewan adalah anjing"],
        correctAnswer: "Beberapa anjing tidak jinak",
        category: "Penalaran",
        explanation: "Karena tidak semua hewan jinak, mungkin ada anjing yang tidak jinak."
    },
    {
        question: "X berlari lebih cepat dari Y. Z berlari sama cepat dengan Y. Hubungan X dan Z?",
        options: ["X lebih cepat dari Z", "X sama cepat dengan Z", "Z lebih cepat dari X", "Tidak dapat ditentukan"],
        correctAnswer: "X lebih cepat dari Z",
        category: "Penalaran",
        explanation: "X > Y = Z, jadi X > Z."
    },
    {
        question: "Jika hari Minggu, ibadah. Tidak ibadah. Maka?",
        options: ["Hari Minggu", "Bukan hari Minggu", "Hari Senin", "Tidak beragama"],
        correctAnswer: "Bukan hari Minggu",
        category: "Penalaran",
        explanation: "Modus tollens: Jika tidak ibadah, maka bukan hari Minggu (asumsi premis)."
    },
    {
        question: "Semua ikan hidup di air. Lumba-lumba hidup di air. Lumba-lumba adalah ikan?",
        options: ["Ya", "Tidak", "Mungkin", "Pasti"],
        correctAnswer: "Tidak",
        category: "Penalaran",
        explanation: "Lumba-lumba adalah mamalia, bukan ikan. Premis tidak menyatakan eksklusivitas."
    },
    {
        question: "P atau Q benar, tapi tidak keduanya. P benar. Maka Q?",
        options: ["Benar", "Salah", "Mungkin benar", "Tergantung P"],
        correctAnswer: "Salah",
        category: "Penalaran",
        explanation: "Exclusive OR: Jika P benar, maka Q pasti salah."
    },
    {
        question: "Jika siang, terang. Jika malam, gelap. Sekarang terang. Maka?",
        options: ["Siang", "Malam", "Mungkin siang", "Gelap"],
        correctAnswer: "Mungkin siang",
        category: "Penalaran",
        explanation: "Bisa terang karena lampu meskipun malam. Tidak mutlak siang."
    },
    {
        question: "Tidak ada guru yang malas. Pak Budi guru. Maka?",
        options: ["Pak Budi malas", "Pak Budi tidak malas", "Pak Budi rajin", "Tidak dapat disimpulkan"],
        correctAnswer: "Pak Budi tidak malas",
        category: "Penalaran",
        explanation: "Jika tidak ada guru malas, dan Pak Budi guru, maka Pak Budi tidak malas."
    },
    {
        question: "A lebih berat dari B. C lebih ringan dari B. Hubungan A dan C?",
        options: ["A lebih berat dari C", "A lebih ringan dari C", "A sama dengan C", "Tidak dapat ditentukan"],
        correctAnswer: "A lebih berat dari C",
        category: "Penalaran",
        explanation: "A > B > C, jadi A > C."
    },
    {
        question: "Jika bekerja keras, kaya. Jika malas, miskin. Tono kaya. Kesimpulannya?",
        options: ["Tono bekerja keras", "Tono mungkin bekerja keras", "Tono malas", "Tono miskin"],
        correctAnswer: "Tono mungkin bekerja keras",
        category: "Penalaran",
        explanation: "Bisa kaya karena warisan atau faktor lain, bukan hanya kerja keras."
    },
    {
        question: "Semua pesawat terbang. Helikopter terbang. Helikopter adalah pesawat?",
        options: ["Ya", "Tidak", "Mungkin", "Pasti"],
        correctAnswer: "Mungkin",
        category: "Penalaran",
        explanation: "Banyak hal bisa terbang selain pesawat. Premis tidak eksklusif."
    },
    {
        question: "P lebih pintar dari Q. R sama pintar dengan P. S lebih bodoh dari Q. Urutan dari terpintar?",
        options: ["P-R-Q-S", "P=R-Q-S", "R-P-Q-S", "Q-P-R-S"],
        correctAnswer: "P=R-Q-S",
        category: "Penalaran",
        explanation: "P = R > Q > S. P dan R sama-sama terpintar."
    },
    {
        question: "Jika lelah, tidur. Tidak lelah. Maka?",
        options: ["Tidur", "Tidak tidur", "Mungkin tidur", "Bangun"],
        correctAnswer: "Mungkin tidur",
        category: "Penalaran",
        explanation: "Bisa tidur meski tidak lelah (mau istirahat, dll)."
    },
    {
        question: "Semua dokter pintar. Andi pintar. Andi adalah dokter?",
        options: ["Ya", "Tidak", "Mungkin", "Pasti bukan"],
        correctAnswer: "Mungkin",
        category: "Penalaran",
        explanation: "Banyak orang pintar yang bukan dokter."
    },
    {
        question: "X datang sebelum Y. Z datang setelah Y. Urutan kedatangan?",
        options: ["X-Y-Z", "Y-X-Z", "Z-Y-X", "X-Z-Y"],
        correctAnswer: "X-Y-Z",
        category: "Penalaran",
        explanation: "X sebelum Y, Y sebelum Z. Urutan: X → Y → Z."
    },

    // KUANTITATIF / MATH (30 questions)
    {
        question: "Pola bilangan: 2, 4, 8, 14, 22, ... Angka selanjutnya adalah?",
        options: ["30", "32", "34", "28"],
        correctAnswer: "32",
        category: "Kuantitatif",
        explanation: "Selisih: +2, +4, +6, +8, +10. Jadi 22 + 10 = 32."
    },
    {
        question: "Berapa hasil dari 15% dari 200?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "30",
        category: "Kuantitatif",
        explanation: "15% × 200 = 0.15 × 200 = 30."
    },
    {
        question: "Jika x + 5 = 12, maka x = ?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        category: "Kuantitatif",
        explanation: "x = 12 - 5 = 7."
    },
    {
        question: "Rata-rata dari 4, 8, 12, 16 adalah?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "10",
        category: "Kuantitatif",
        explanation: "(4 + 8 + 12 + 16) / 4 = 40 / 4 = 10."
    },
    {
        question: "Pola: 1, 4, 9, 16, 25, ... Angka selanjutnya?",
        options: ["30", "36", "40", "49"],
        correctAnswer: "36",
        category: "Kuantitatif",
        explanation: "Kuadrat: 1², 2², 3², 4², 5², 6² = 36."
    },
    {
        question: "Jika 2x - 3 = 7, maka x = ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5",
        category: "Kuantitatif",
        explanation: "2x = 10, x = 5."
    },
    {
        question: "Berapa 25% dari 80?",
        options: ["15", "20", "25", "30"],
        correctAnswer: "20",
        category: "Kuantitatif",
        explanation: "25% × 80 = 0.25 × 80 = 20."
    },
    {
        question: "Pola: 3, 6, 12, 24, ... Angka selanjutnya?",
        options: ["36", "40", "48", "50"],
        correctAnswer: "48",
        category: "Kuantitatif",
        explanation: "Dikali 2 setiap langkah. 24 × 2 = 48."
    },
    {
        question: "Jika a = 3 dan b = 4, maka a² + b² = ?",
        options: ["7", "12", "25", "49"],
        correctAnswer: "25",
        category: "Kuantitatif",
        explanation: "3² + 4² = 9 + 16 = 25."
    },
    {
        question: "Berapa hasil dari 12 × 8 / 4?",
        options: ["20", "24", "28", "32"],
        correctAnswer: "24",
        category: "Kuantitatif",
        explanation: "12 × 8 = 96, 96 / 4 = 24."
    },
    {
        question: "Pola: 100, 90, 81, 73, ... Angka selanjutnya?",
        options: ["65", "66", "67", "68"],
        correctAnswer: "66",
        category: "Kuantitatif",
        explanation: "Selisih: -10, -9, -8, -7. Jadi 73 - 7 = 66."
    },
    {
        question: "Jika x/4 = 5, maka x = ?",
        options: ["10", "15", "20", "25"],
        correctAnswer: "20",
        category: "Kuantitatif",
        explanation: "x = 5 × 4 = 20."
    },
    {
        question: "Berapa 50% dari 120?",
        options: ["50", "60", "70", "80"],
        correctAnswer: "60",
        category: "Kuantitatif",
        explanation: "50% × 120 = 0.5 × 120 = 60."
    },
    {
        question: "Pola: 2, 6, 18, 54, ... Angka selanjutnya?",
        options: ["108", "126", "162", "180"],
        correctAnswer: "162",
        category: "Kuantitatif",
        explanation: "Dikali 3. 54 × 3 = 162."
    },
    {
        question: "Jika 3x + 4 = 19, maka x = ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        category: "Kuantitatif",
        explanation: "3x = 15, x = 5."
    },
    {
        question: "Berapa hasil dari (5 + 3) × 4?",
        options: ["20", "24", "32", "35"],
        correctAnswer: "32",
        category: "Kuantitatif",
        explanation: "(5 + 3) = 8, 8 × 4 = 32."
    },
    {
        question: "Pola: 5, 10, 20, 40, ... Angka selanjutnya?",
        options: ["60", "70", "80", "90"],
        correctAnswer: "80",
        category: "Kuantitatif",
        explanation: "Dikali 2. 40 × 2 = 80."
    },
    {
        question: "Jika y - 8 = 15, maka y = ?",
        options: ["21", "22", "23", "24"],
        correctAnswer: "23",
        category: "Kuantitatif",
        explanation: "y = 15 + 8 = 23."
    },
    {
        question: "Berapa 20% dari 150?",
        options: ["25", "30", "35", "40"],
        correctAnswer: "30",
        category: "Kuantitatif",
        explanation: "20% × 150 = 0.2 × 150 = 30."
    },
    {
        question: "Pola: 1, 3, 7, 15, 31, ... Angka selanjutnya?",
        options: ["55", "60", "63", "67"],
        correctAnswer: "63",
        category: "Kuantitatif",
        explanation: "Dikali 2 lalu +1. (31 × 2) + 1 = 63."
    },
    {
        question: "Jika 5x = 35, maka x = ?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        category: "Kuantitatif",
        explanation: "x = 35 / 5 = 7."
    },
    {
        question: "Berapa hasil dari 18 - 5 × 2?",
        options: ["8", "16", "26", "28"],
        correctAnswer: "8",
        category: "Kuantitatif",
        explanation: "Prioritas kali: 5 × 2 = 10, 18 - 10 = 8."
    },
    {
        question: "Pola: 64, 32, 16, 8, ... Angka selanjutnya?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "4",
        category: "Kuantitatif",
        explanation: "Dibagi 2. 8 / 2 = 4."
    },
    {
        question: "Jika x² = 49, maka x = ?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        category: "Kuantitatif",
        explanation: "√49 = 7."
    },
    {
        question: "Berapa 75% dari 200?",
        options: ["125", "150", "175", "180"],
        correctAnswer: "150",
        category: "Kuantitatif",
        explanation: "75% × 200 = 0.75 × 200 = 150."
    },
    {
        question: "Pola: 10, 15, 21, 28, ... Angka selanjutnya?",
        options: ["34", "35", "36", "37"],
        correctAnswer: "36",
        category: "Kuantitatif",
        explanation: "Selisih: +5, +6, +7, +8. Jadi 28 + 8 = 36."
    },
    {
        question: "Jika 2x + 5 = 17, maka x = ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "6",
        category: "Kuantitatif",
        explanation: "2x = 12, x = 6."
    },
    {
        question: "Berapa hasil dari 100 - 25 × 2?",
        options: ["50", "100", "150", "200"],
        correctAnswer: "50",
        category: "Kuantitatif",
        explanation: "25 × 2 = 50, 100 - 50 = 50."
    },
    {
        question: "Pola: 1, 2, 4, 7, 11, ... Angka selanjutnya?",
        options: ["14", "15", "16", "17"],
        correctAnswer: "16",
        category: "Kuantitatif",
        explanation: "Selisih: +1, +2, +3, +4, +5. Jadi 11 + 5 = 16."
    },
    {
        question: "Jika 3x - 2 = 13, maka x = ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        category: "Kuantitatif",
        explanation: "3x = 15, x = 5."
    },

    // PENGETAHUAN UMUM (20 questions)
    {
        question: "Sinonim dari kata 'EKLIPS' adalah...",
        options: ["Gerhana", "Penjepit", "Lonjong", "Garis Khatulistiwa"],
        correctAnswer: "Gerhana",
        category: "Pengetahuan Umum",
        explanation: "Eklips dalam astronomi berarti gerhana."
    },
    {
        question: "Ibukota negara Turki adalah...",
        options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
        correctAnswer: "Ankara",
        category: "Pengetahuan Umum",
        explanation: "Ibukota pemerintahan Turki adalah Ankara, bukan Istanbul."
    },
    {
        question: "Planet terdekat dengan Matahari adalah?",
        options: ["Venus", "Mars", "Merkurius", "Bumi"],
        correctAnswer: "Merkurius",
        category: "Pengetahuan Umum",
        explanation: "Merkurius adalah planet terdekat dengan Matahari."
    },
    {
        question: "Siapa penemu telepon?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
        correctAnswer: "Alexander Graham Bell",
        category: "Pengetahuan Umum",
        explanation: "Alexander Graham Bell diakui sebagai penemu telepon."
    },
    {
        question: "Gunung tertinggi di dunia adalah?",
        options: ["K2", "Everest", "Kilimanjaro", "Fuji"],
        correctAnswer: "Everest",
        category: "Pengetahuan Umum",
        explanation: "Gunung Everest memiliki ketinggian 8.848 meter."
    },
    {
        question: "Proklamasi Kemerdekaan Indonesia terjadi pada tanggal?",
        options: ["17 Agustus 1945", "18 Agustus 1945", "16 Agustus 1945", "19 Agustus 1945"],
        correctAnswer: "17 Agustus 1945",
        category: "Pengetahuan Umum",
        explanation: "Indonesia merdeka tanggal 17 Agustus 1945."
    },
    {
        question: "Ibukota negara Jepang adalah?",
        options: ["Osaka", "Kyoto", "Tokyo", "Nagoya"],
        correctAnswer: "Tokyo",
        category: "Pengetahuan Umum",
        explanation: "Tokyo adalah ibukota Jepang."
    },
    {
        question: "Satuan SI untuk massa adalah?",
        options: ["Gram", "Kilogram", "Newton", "Joule"],
        correctAnswer: "Kilogram",
        category: "Pengetahuan Umum",
        explanation: "Kilogram (kg) adalah satuan SI untuk massa."
    },
    {
        question: "Presiden pertama Indonesia adalah?",
        options: ["Soeharto", "Soekarno", "Habibie", "SBY"],
        correctAnswer: "Soekarno",
        category: "Pengetahuan Umum",
        explanation: "Ir. Soekarno adalah presiden pertama RI."
    },
    {
        question: "Benua terbesar di dunia adalah?",
        options: ["Afrika", "Amerika", "Asia", "Eropa"],
        correctAnswer: "Asia",
        category: "Pengetahuan Umum",
        explanation: "Asia adalah benua terbesar dengan luas ~44,6 juta km²."
    },
    {
        question: "Gas yang paling banyak di atmosfer Bumi adalah?",
        options: ["Oksigen", "Nitrogen", "Karbon Dioksida", "Helium"],
        correctAnswer: "Nitrogen",
        category: "Pengetahuan Umum",
        explanation: "Nitrogen sekitar 78% dari atmosfer Bumi."
    },
    {
        question: "Siapa pelukis Monalisa?",
        options: ["Picasso", "Van Gogh", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
        category: "Pengetahuan Umum",
        explanation: "Monalisa dilukis oleh Leonardo da Vinci."
    },
    {
        question: "Negara dengan jumlah penduduk terbanyak adalah?",
        options: ["India", "China", "Amerika Serikat", "Indonesia"],
        correctAnswer: "India",
        category: "Pengetahuan Umum",
        explanation: "India telah melampaui China sebagai negara terpadat (2023)."
    },
    {
        question: "Laut terluas di dunia adalah?",
        options: ["Laut Atlantik", "Laut Pasifik", "Laut Hindia", "Laut Mediterania"],
        correctAnswer: "Laut Pasifik",
        category: "Pengetahuan Umum",
        explanation: "Samudra Pasifik adalah yang terluas."
    },
    {
        question: "Satuan untuk gaya adalah?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correctAnswer: "Newton",
        category: "Pengetahuan Umum",
        explanation: "Newton (N) adalah satuan gaya dalam SI."
    },
    {
        question: "Hari Pendidikan Nasional diperingati setiap tanggal?",
        options: ["1 Mei", "2 Mei", "17 Agustus", "10 November"],
        correctAnswer: "2 Mei",
        category: "Pengetahuan Umum",
        explanation: "Hardiknas: 2 Mei, hari kelahiran Ki Hajar Dewantara."
    },
    {
        question: "Negara yang dikenal sebagai 'Negeri Sakura' adalah?",
        options: ["China", "Korea", "Jepang", "Taiwan"],
        correctAnswer: "Jepang",
        category: "Pengetahuan Umum",
        explanation: "Jepang terkenal dengan bunga sakuranya."
    },
    {
        question: "Sungai terpanjang di dunia adalah?",
        options: ["Amazon", "Nil", "Yangtze", "Mississippi"],
        correctAnswer: "Nil",
        category: "Pengetahuan Umum",
        explanation: "Sungai Nil (~6.650 km) adalah yang terpanjang."
    },
    {
        question: "Pancasila disahkan sebagai dasar negara pada tanggal?",
        options: ["17 Agustus 1945", "18 Agustus 1945", "1 Juni 1945", "22 Juni 1945"],
        correctAnswer: "18 Agustus 1945",
        category: "Pengetahuan Umum",
        explanation: "Pancasila disahkan PPKI tanggal 18 Agustus 1945."
    },
    {
        question: "Siapa penemu lampu pijar?",
        options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Michael Faraday"],
        correctAnswer: "Thomas Edison",
        category: "Pengetahuan Umum",
        explanation: "Thomas Edison terkenal sebagai penemu lampu pijar praktis."
    }
];
