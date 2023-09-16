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
