function fizzBuzz(inputData) {
    
    if (!Array.isArray(inputData)) {
        return "Input tidak valid";
    }

    let cetak = "";

    const spasi = inputData[0] <= 1 ? ", " : " ";

    for (let index = 0; index < inputData.length; index++) {
        let angka = inputData[index];
        let teksHasil;

        switch (true) {
            case (angka % 14 === 0):
                teksHasil = "FizzBuzz";
                break;
            case (angka % 7 === 0):
                teksHasil = "Buzz";
                break;
            case (angka % 2 === 0):
                teksHasil = "Fizz";
                break;
            default:
                teksHasil = angka;
        }

        if (index === 0) {
            cetak += teksHasil;
        } else {
            cetak += spasi + teksHasil;
        }
    }

    return cetak;
}

module.exports = fizzBuzz;