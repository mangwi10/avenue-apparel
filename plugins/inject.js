const helper = {
  name: "Helper",
  // convertIDR(bilangan) {
  //   let number_string = bilangan.toString(),
  //     sisa = number_string.length % 3,
  //     rupiah = number_string.substr(0, sisa),
  //     ribuan = number_string.substr(sisa).match(/\d{3}/g);

  //   if (ribuan) {
  //     let separator = sisa ? "." : "";
  //     rupiah += separator + ribuan.join(".");
  //   }
  //   return rupiah;
  // },

  discon(price, disc) {
    let discon_price = (disc / 100) * price;
    let after_discon = price - discon_price;
    return after_discon;
  },
};

export default ({ app }, inject) => {
  inject("helper", helper);
};
