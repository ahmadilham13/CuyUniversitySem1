const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const host = 'localhost';

const os = require('os');
const port = 3002;
// request adalah = data masuk dari luar
// response adalah = data keluara dari sistem
const server = http.createServer(function (request, response) {
    const nama = "Ahmad Ilham";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    fs.appendFile('sisaUang.txt', sisa, () => {
        console.log('data uang berhasil disimpan');
    });
    const sisaRam = os.freemem();
    const jumlahCPU = os.cpus();

    function checkCPU() {
        let myCPU = [];
        jumlahCPU.map((cpu, i) => {
            myCPU.push(cpu.model)
        }) 
        return myCPU[0];
    }
    console.log(checkCPU());

    const hasil = `
    <head>
    <title>${nama}</title>
    </head>
    <body style='background:green;'>
    <h1 style='background: black;color: white;padding: 20px;text-align:center;'>NODE JS UANG JAJAN</h1>
    <p style='color:white;'>
    Halo Nama Saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}.
    </p>
    <h5>sisa RAM PC saya = ${sisaRam}</h5>
    <h5>Jumlah CPU di  PC saya = ${jumlahCPU}</h5>
    <h5>Merk CPU yang saya Pakai = ${checkCPU()}</h5>
    </body>`;
    
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, function () {
    console.log(`server menyala di ${host}:${port}`);
});