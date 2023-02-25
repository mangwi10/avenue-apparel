<template>
  <div>
    <!-- {{ $route.params }} -->
    {{ formatIDR }}
    <h1>{{ $route.params.detail.name }}</h1>
    <img :src="$route.params.detail.img" alt="jaket">
    <!-- <p>Rp. {{ `${this.$test.convertIDR($route.params.detail.price)}` }},-</p> -->
  </div>
</template>
<script>
export default {
  // mounted() { this.$test.ping() },
  computed: {
    formatIDR() {
      return this.$helper.convertIDR(this.$route.params.detail.price)
    },
  }
  // methods: {
  //   convertIDR(price) {
  //     return price
  //       .toString()
  //       .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  //   },
  // },
}
</script>
<style>
main {
  background-color: #eee;
  padding: 10px 10px 80px 10px;
  margin-top: 20px;
}

.container-detail {
  padding: 10px 20px 30px 40px;
  overflow: auto;
  display: flex;
}

.detail-img {
  width: 560px;
  flex: 1;
  padding: 15px;
}

.detail-img img {
  width: 550px;
}

.price {
  font-size: larger;
  font-weight: bold;
}

.title-detail {
  font-size: larger;
  flex: 1;
}

.desc-detail {
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  text-align: justify;
}

.spek-size>ul {
  margin-left: 10px;
}

.spek-size>h3 {
  font-weight: 200;
  color: #d65a31;
}

.container-button {
  margin-top: 40px;
}

.list-produk {
  display: flex;
  align-items: center;
  justify-content: center;
}

.produk {
  margin: 10px;
  position: relative;
}

.produk>img {
  width: 250px;
  height: 150px;
  object-fit: contain;
}

.produk-text>a {
  background-color: black;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  position: absolute;
  left: 0;
  right: 0;
  width: 60px;
  margin: 15px auto;
  bottom: 25%;
}

.produk-text a:hover {
  background-color: transparent;
  color: #d65a31;
}

.produk-text {
  text-align: center;
}

.size-box,
.stock {
  display: flex;
  margin-top: 10px;
}

.radio {
  margin-left: 10px;
  font-size: 18px;
}

.stock p {
  margin-left: 10px;
  font-size: 18px;
  margin-top: 0px;
}

.detail {
  margin-left: 40px;
  margin-top: -10px;
}

.size-box h3,
.stock h3,
.quantity h3 {
  margin: 0;
}

.buyButton {
  text-decoration: none;
  background-color: black;
  padding: 20px 30px;
  color: white;
}

.buyButton:hover {
  background-color: white;
  color: black;
}

.disabledButton {
  color: grey;
  text-decoration: none;
  pointer-events: none;
  cursor: default;
  background-color: #d8d8d8;
  padding: 20px 30px;
  text-align: center;
}

.quantity {
  display: flex;
  margin-bottom: 10px;
}

#qty {
  width: 30px;
  height: 30px;
  text-align: center;
  margin-top: -4px;
}

#qty_plus {
  background-color: #000000;
  color: white;
  border-radius: 5px;
}

#qty_minus {
  background-color: #ffffff;
  border-radius: 5px;
}

.quantity button {
  margin: 4px 5px;
  height: 20px;
  width: 25px;
}
</style>
