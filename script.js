const registrationForm = document.getElementById('registrationForm');
const pendaftarTable = document.getElementById('pendaftarTable');
const avgUangSangu = document.getElementById('avgUangSangu');
const avgUmur = document.getElementById('avgUmur');

const pendaftarList = [];

function openTab(event, tabName) { //fungsi disini itu untuk membuka halaman dari dua pilihan button yaitu registrasi atau list pendaftar
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].style.remove = 'active';
    }
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

function submitForm() { //fungsi untuk menambahkan isian data dari form registrasi ke tabel dihalaman list pendaftar 
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uangSangu').value);

    if (nama.length >= 10 && umur >= 25 && uangSangu >= 100000 && uangSangu <= 1000000) {
        pendaftarList.push({ nama, umur, uangSangu });
        updatePendaftarTable();
        rataRata();
        clearForm();
    } else {
        alert('Data tidak valid. Pastikan Nama minimal 10 karakter, Umur minimal 25 tahun, Uang Sangu minimal 100 ribu dan maksimal 1 juta.');
    }
}

function updatePendaftarTable() {
    const tableBody = pendaftarTable.querySelector('tbody');
    tableBody.innerHTML = '';

    pendaftarList.forEach(pendaftar => {
        const newRow = tableBody.insertRow();
        const cellNama = newRow.insertCell(0);
        const cellUmur = newRow.insertCell(1);
        const cellUangSangu = newRow.insertCell(2);

        cellNama.innerHTML = pendaftar.nama;
        cellUmur.innerHTML = pendaftar.umur;
        cellUangSangu.innerHTML = pendaftar.uangSangu;
    });
}

function rataRata() { //fungsi untuk menghitung rata-rata uang sangu dan umur 
    const totalUangSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSangu, 0);
    const totalUmur = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);

    const averageUangSangu = totalUangSangu / pendaftarList.length;
    const averageUmur = totalUmur / pendaftarList.length;

    avgUangSangu.textContent = averageUangSangu.toFixed(2);
    avgUmur.textContent = averageUmur.toFixed(2);
}

function clearForm() { //fungsi untuk menghapus isian dari form registrasi setelah mengklik button submit
    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('uangSangu').value = '';
}

function deletePendaftar(index) { //fungsi untuk menghapus data dari tabel list pendaftar dengan mengklik button X
    pendaftarList.splice(index, 1);
    updatePendaftarTable();
    rataRata();
}

function updatePendaftarTable() {
    const tableBody = pendaftarTable.querySelector('tbody');
    tableBody.innerHTML = '';

    pendaftarList.forEach((pendaftar, index) => {
        const newRow = tableBody.insertRow();
        const cellNama = newRow.insertCell(0);
        const cellUmur = newRow.insertCell(1);
        const cellUangSangu = newRow.insertCell(2);
        const cellDelete = newRow.insertCell(3);

        cellNama.innerHTML = pendaftar.nama;
        cellUmur.innerHTML = pendaftar.umur;
        cellUangSangu.innerHTML = pendaftar.uangSangu;
        cellDelete.innerHTML = `<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tablinks" onclick="deletePendaftar(${index})">X</button>`;
    });
}
