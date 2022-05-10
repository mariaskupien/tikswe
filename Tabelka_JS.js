
function pracownik(id, imie, nazwisko, placa, mail) {
    this.id = id;
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.placa = placa;
    this.mail = mail;
}
const tab_prac = new Array();
tab_prac[0] = new pracownik(1, "Maria", "Skupień", 2900, "maria.skupien@student.put.poznan.pl");
tab_prac[1] = new pracownik(1, "Julia", "Szmidt", 2500, "julia.szmidtt@student.put.poznan.pl");
tab_prac[2] = new pracownik(1, "Mariola", "Kowalska", 1800, "mariola.kowalska@student.put.poznan.pl");
tab_prac[3] = new pracownik(1, "Anastazja", "Nowak", 1300, "anastazja.nowak@student.put.poznan.pl");
tab_prac[4] = new pracownik(1, "Apolonia", "Wróblewska", 2500, "apolonia.wróblewska@student.put.poznan.pl");

function wyswietlTabela(tab) {
    let txt = ""
    txt += "<tr>";
    txt += "<th> Lp. </th>";
    txt += "<th> Imie </th>";
    txt += "<th> Nazwisko </th>";
    txt += "<th> Płaca </th>";
    txt += "<th> E-Mail </th>";
    txt += "</tr>";

    for (var i = 0; i < tab.length; i++) {
        txt += "<tr>";
        txt += "<td>" + tab[i].id + "</td>";
        txt += "<td>" + tab[i].imie + "</td>";
        txt += "<td>" + tab[i].nazwisko + "</td>";
        txt += "<td>" + tab[i].placa + "</td>";
        txt += "<td>"  + "<a href=mailto:"+ [tab[i].mail] + ">" + tab[i].mail + "</a>" + "</td>";
        txt += "</tr>";

    }
    let elemTab_HTML = document.getElementById("tabela");
    elemTab_HTML.innerHTML = txt;
}