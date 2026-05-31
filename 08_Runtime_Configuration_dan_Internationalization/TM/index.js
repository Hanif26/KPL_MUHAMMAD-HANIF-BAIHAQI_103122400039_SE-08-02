const axios = require("axios");

const API_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/idr.json";

async function cekKurs(rupiah) {
  try {
    const response = await axios.get(API_URL);

    const data = response.data.idr;

    const cnyRate = data.cny;
    const eurRate = data.eur;

    const cny = rupiah * cnyRate;
    const eur = rupiah * eurRate;

    console.log(
      `Kurs Rp ${rupiah.toLocaleString("id-ID")} adalah CNY ${cny.toFixed(
        2
      )} dan ${eur.toFixed(2)} €`
    );
  } catch (error) {
    console.log(error.message);
  }
}

cekKurs(50000);
cekKurs(25000);
cekKurs(100000);