let i = 0; //untuk standar function
let i2 = 0; //untuk arrow function

// standar function
    function getDetailHuman() {
        i = i + 1;
        // atau bisa juga dengan = i += 1;
        if( i > 5) {
            console.log('Lebih dari 5x di Klik');
        }else {
            console.log('Jatah Klik Masih ada');
        }
    }

// arrow function
    const getDetailHuman2 = () => {
        i2 += 1;
        i2 > 5 ? console.log('Udah Klik Lebih Dari 5x Human2') : console.log('Masih ada Jatah Klik Human2');
    }

    const datas = {
        nama: "Ahmad Ilham",
        alamat: "Sarolangun",
        usia: "23",
        pekerjaan: "Programmer"
    }
    // jika ingin memanggil semua object dari datas
    console.log(datas);
    // jika ingin memanggil satu object dari datas
    console.log(datas.nama);
    