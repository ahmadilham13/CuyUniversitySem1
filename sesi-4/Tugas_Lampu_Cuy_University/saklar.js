// js untuk makan.html start
function saklarMakan() {
    let saklarMakan = document.getElementById("saklarMakan");

    let makan = document.getElementById("makan");

    if (saklarMakan.checked) {
        makan.src = "assets/images/makan/makan_on.jpg";
    } else {
        makan.src = "assets/images/makan/makan_off.jpg";
    }
}
// js untuk makan.html selesai

// js untuk keluarga.html start
function saklarKeluarga() {
    let saklarKeluarga1 = document.getElementById("saklarKeluarga1");
    let saklarKeluarga2 = document.getElementById("saklarKeluarga2");
    let saklarKeluarga3 = document.getElementById("saklarKeluarga3");
    let saklarKeluarga4 = document.getElementById("saklarKeluarga4");

    let keluarga = document.getElementById("keluarga");

    if (saklarKeluarga1.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_1.jpg";
    } else if (saklarKeluarga1.checked == false) {
        keluarga.src = "assets/images/keluarga/keluarga_off.jpg";
        saklarKeluarga4.checked = false;
    }

    if (saklarKeluarga2.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_2.jpg";
    } else if (saklarKeluarga2.checked == false) {
        saklarKeluarga4.checked = false;
    }
    if (saklarKeluarga3.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_3.jpg";
    } else if (saklarKeluarga3.checked == false) {
        saklarKeluarga4.checked = false;
    }
    if (saklarKeluarga1.checked && saklarKeluarga2.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_12.jpg";
    }
    if (saklarKeluarga1.checked && saklarKeluarga3.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_13.jpg";
    }
    if (saklarKeluarga2.checked && saklarKeluarga3.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_23.jpg";
    }
    if (saklarKeluarga1.checked && saklarKeluarga2.checked && saklarKeluarga3.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_on.jpg";
        saklarKeluarga4.checked = true;
    }
    if (saklarKeluarga4.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_on.jpg";
    }

}
function saklarKeluargaSemua() {
    if (saklarKeluarga4.checked == true) {
        keluarga.src = "assets/images/keluarga/keluarga_on.jpg";
        saklarKeluarga1.checked = true;
        saklarKeluarga2.checked = true;
        saklarKeluarga3.checked = true;
    } else if (saklarKeluarga4.checked == false) {
        keluarga.src = "assets/images/keluarga/keluarga_off.jpg";
        saklarKeluarga1.checked = false;
        saklarKeluarga2.checked = false;
        saklarKeluarga3.checked = false;
    }
}
// js untuk keluarga.html end

// js untuk tamu.html start
function saklarTamu() {
    let saklarTamu1 = document.getElementById("saklarTamu1");
    let saklarTamu2 = document.getElementById("saklarTamu2");
    let saklarTamu3 = document.getElementById("saklarTamu3");
    let saklarTamu4 = document.getElementById("saklarTamu4");
    let saklarTamu5 = document.getElementById("saklarTamu5");

    let tamu = document.getElementById("tamu");

    if (saklarTamu1.checked == true) {
        tamu.src = "assets/images/tamu/tamu_1.jpg";
    } else if (saklarTamu1.checked == false) {
        tamu.src = "assets/images/tamu/tamu_off.jpg";
        saklarTamu5.checked = false;
    }

    if (saklarTamu2.checked == true) {
        tamu.src = "assets/images/tamu/tamu_2.jpg";
    } else if (saklarTamu2.checked == false) {
        saklarTamu5.checked = false;
    }
    if (saklarTamu3.checked == true) {
        tamu.src = "assets/images/tamu/tamu_3.jpg";
    } else if (saklarTamu3.checked == false) {
        saklarTamu5.checked = false;
    }
    if (saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_4.jpg";
    } else if (saklarTamu4.checked == false) {
        saklarTamu5.checked = false;
    }
    if (saklarTamu1.checked && saklarTamu2.checked == true) {
        tamu.src = "assets/images/tamu/tamu_12.jpg";
    }
    if (saklarTamu1.checked && saklarTamu3.checked == true) {
        tamu.src = "assets/images/tamu/tamu_13.jpg";
    }
    if (saklarTamu1.checked && saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_14.jpg";
    }
    if (saklarTamu2.checked && saklarTamu3.checked == true) {
        tamu.src = "assets/images/tamu/tamu_23.jpg";
    }
    if (saklarTamu2.checked && saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_24.jpg";
    }
    if (saklarTamu3.checked && saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_34.jpg";
    }
    if (saklarTamu1.checked && saklarTamu2.checked && saklarTamu3.checked == true) {
        tamu.src = "assets/images/tamu/tamu_123.jpg";
    }
    if (saklarTamu1.checked && saklarTamu2.checked && saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_124.jpg";
    }
    if (saklarTamu1.checked && saklarTamu3.checked && saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_134.jpg";
    }
    if (saklarTamu2.checked && saklarTamu3.checked && saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_234.jpg";
    }
    if (saklarTamu1.checked && saklarTamu2.checked && saklarTamu3.checked && saklarTamu4.checked == true) {
        tamu.src = "assets/images/tamu/tamu_on.jpg";
        saklarTamu5.checked = true;
    }
}
function saklarTamuSemua() {
    if (saklarTamu5.checked == true) {
        tamu.src = "assets/images/tamu/tamu_on.jpg";
        saklarTamu1.checked = true;
        saklarTamu2.checked = true;
        saklarTamu3.checked = true;
        saklarTamu4.checked = true;
    } else if (saklarTamu5.checked == false) {
        tamu.src = "assets/images/tamu/tamu_off.jpg";
        saklarTamu1.checked = false;
        saklarTamu2.checked = false;
        saklarTamu3.checked = false;
        saklarTamu4.checked = false;
    }
}
// js untuk tamu.html end

// js untuk tidur.html start
function saklarTidur() {
    let saklarTidur1 = document.getElementById("saklarTidur1");
    let saklarTidur2 = document.getElementById("saklarTidur2");
    let saklarTidur3 = document.getElementById("saklarTidur3");

    let tidur = document.getElementById("tidur");

    if(saklarTidur1.checked == true){
        tidur.src = "assets/images/tidur/tidur_1.jpg";
    }else if(saklarTidur1.checked == false){
        tidur.src = "assets/images/tidur/tidur_off.jpg";
        saklarTidur3.checked = false;
    }
    if(saklarTidur2.checked == true){
        tidur.src = "assets/images/tidur/tidur_2.jpg";
    }else if(saklarTidur2.checked == false){
        saklarTidur3.checked = false;
    }
    if(saklarTidur1.checked && saklarTidur2.checked == true){
        tidur.src = "assets/images/tidur/tidur_on.jpg";
        saklarTidur3.checked = true;
    }
}
function saklarTidurSemua() {
    if (saklarTidur3.checked == true) {
        tidur.src = "assets/images/tidur/tidur_on.jpg";
        saklarTidur1.checked = true;
        saklarTidur2.checked = true;
    }else if (saklarTidur3.checked == false) {
        tidur.src = "assets/images/tidur/tidur_off.jpg";
        saklarTidur1.checked = false;
        saklarTidur2.checked = false;
    }
}