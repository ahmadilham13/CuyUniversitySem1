class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama;
    }

    set newColor(color) {
        this.warna = color;
    }

    set newSkill(skill) {
        this.keahlian = skill;
    }

    get detail() {
        return `Hi Saya ${this.nama}, Saya berwarna ${this.warna} dan keahlian saya ${this.keahlian}`;
    }

}

const kucing = new Hewan('jojo')
kucing.newColor = "red";
kucing.newSkill = "Mengonggong";
console.log(kucing.detail);