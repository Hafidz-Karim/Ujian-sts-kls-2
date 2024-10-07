let name = "Ali";
function validateName(name) {
   
    if (name.length === 3) {
        document.write("Valid")
    }
    else if (name.length === 2) {
        document.write("Nama minimal terdiri dari 3 huruf")
    }
    else {
        document.write("Nama tidak valid dan nama harus diisi");
    }
}
validateName('Hafidz');