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

// Tugas 3
function validatePhoneNumber(phoneNumber) {

  if (phoneNumber === "") {
      console.log("Nomor telepon tidak boleh kosong");
      return;
  }
  phoneNumber = phoneNumber.toString();

  if (!isNaN(phoneNumber)) {
      if (phoneNumber.length >= 10 && phoneNumber.length <= 13) {
          console.log("Nomor telepon valid");
      } else {
          console.log("Nomor telepon harus terdiri dari 10-13 angka");
      }
  } else {
      console.log("Nomor telepon hanya boleh berisi angka");
  }
}

validatePhoneNumber("9191639637");


  // Tugas 4
  function validateEmail(email) {
    if (email === "") {
        return "Email tidak boleh kosong";
    }

    if (!email.includes("@")) {
        return "Email harus mengandung karakter '@'";
    }
    if (email.length < 5) {
        return "Email terlalu pendek";
    }
    return "Email valid";
}
const email = "Hafidzkarim17@gmail.com";
console.log(validateEmail(email));
