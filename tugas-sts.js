 // Validasi nama
 let name = "";
 function validateName(name) {

     if (name.length === 3) {
         document.write("Valid")
     }
     else if (name.length <= 2 & name !== 0) {
         document.write("Nama minimal terdiri dari 3 huruf")
     }
     else {
         document.write("Nama tidak valid dan nama harus diisi");
     }
 }
 validateName('Ali');
 document.write("<br>");


 // tugas 2
 let addres = "";
 function validateAddres(addres) {
     if (addres.length >= 10) {
         document.write("Valid");
     }
     else if (addres.length <= 9 & addres.length !== 0) {
         document.write("Alamat terlalu pendek dan tidak valid");
     }
     else {
         document.write("Alamat Invalid")
     }
 }
 validateAddres('Kota Salatiga');