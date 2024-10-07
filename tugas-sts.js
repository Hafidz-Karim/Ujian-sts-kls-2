// Validasi nama
let name = "";
function validateName(name) {
  if (name.length === 3) {
    console.log("Valid");
  } else if ((name.length <= 2) & (name !== 0)) {
    console.log("Nama minimal terdiri dari 3 huruf");
  } else {
    console.log("Nama tidak valid dan nama harus diisi");
  }
}
validateName("Ali");

// tugas 2
let addres = "";
function validateAddres(addres) {
  if (addres.length >= 10) {
    console.log("Valid");
  } 
  else if ((addres.length <= 9) & (addres.length !== 0)) {
    console.log("Alamat terlalu pendek dan tidak valid");
  } else {
    console.log()("Alamat Invalid");
  }
}
validateAddres("Kota Salatiga");
