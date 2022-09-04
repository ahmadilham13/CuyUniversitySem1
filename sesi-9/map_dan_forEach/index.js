const mahasiswa =  [
    {
    nama: "Ahmad Ilham",
    alamat: "Sarolangun",
    Usia: "23",
    Pekerjaan: "Programmer",
    Semester: "8"
    },
    {
        nama: "Oriza Zatifa",
        alamat: "Rao",
        Usia: "22",
        Pekerjaan: "Programmer",
        Semester: "8"
        }
]
function getDetailData() {
    //map
    mahasiswa.map(function (result, i){
        //jika ingin tampil berupa tabel
        console.table(result);
        //jika ingin tampil berupa kalimat
        console.log(result);
    })
    // forEach 
    mahasiswa.forEach(result => {
        console.table(result);
    })
    // map dan forEach menghasilkan output yang sama namun proses untuk menghasilkannya berbeda
}