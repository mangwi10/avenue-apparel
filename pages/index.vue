<template>
  <div>
    <main class="container bg-white mx-auto px-6 py-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">

      <div v-for="item in clothes">
        <a href="#" class="block group mb-5 sm:w-64 md:w-80 lg:w-64">
          <img :src="item.img" :alt="item.name" class="object-cover w-full rounded aspect-square" />

          <div class="mt-3">
            <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {{ item.name }}
            </h3>

            <div class="flex justify-start gap-5">
              <p class="mt-1 text-sm text-gray-700">Rp. {{ formatIDR(item.price) }}</p>
              <p class="mt-1 text-sm text-red-600 line-through">{{ item.priceThrough }}</p>
            </div>
          </div>
        </a>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    convertIDR(price) {
      return price
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },
    formatIDR(price) {
      return this.$helper.convertIDR(price)
    },
  },
  data() {
    return {
      clothes: [
        {
          name: "Navy Jacket",
          priceThrough: "Rp. 900.000,-",
          price: 500000,
          img: "https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108579.jpg?w=740&t=st=1675616674~exp=1675617274~hmac=dc5012b5c510f094c322b1cfe9c032b5fb68bcd50cb383f383995eb244fa296d",
          id: 1,
        },
        {
          name: "Denim Jacket",
          priceThrough: "Rp. 1.200.000,-",
          price: 1000000,
          img: "https://img.freepik.com/free-photo/attractive-smiling-happy-woman-making-selfie-photo-isolated-white-studio-wall-dressed-jeans-denim-shirt-wearing-yellow-sunglasses-hipster-style-outfit_231208-1679.jpg?w=740&t=st=1675616919~exp=1675617519~hmac=e71d1695723603b9b554b0fd2ff27733d291b3c20af3ca7e1be847825a63605b",
          id: 2,
        },
        {
          name: "Black Shirt",
          priceThrough: "Rp. 200.000,-",
          price: 150000,
          img: "https://img.freepik.com/free-photo/portait-young-handsome-man_1303-9709.jpg?w=740&t=st=1675617022~exp=1675617622~hmac=b7c4f706c71bd460a742966c1546c942577e10066fa1a2202e2572c627b21874",
          id: 3,
        },
        {
          name: "Blazer",
          priceThrough: "Rp. 5.000.000,-",
          price: 2000000,
          img: "https://img.freepik.com/free-photo/medium-shot-woman-wearing-blazer_23-2148365040.jpg?w=740&t=st=1675617107~exp=1675617707~hmac=f612d05cd01f1b25512657470022f5eb875f7fb9658173d3bb7288abceee36ef",
          id: 4,
        },
      ]
    }
  },
  computed: {

  },
}
</script>

<style>
* {
  /* padding: 0;
  margin: 0; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:root {
  --primaryColor: #ffffff;
  --secondaryColor: black;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
}

span {
  color: #ff0000;
}

nav {
  padding: 10px;
}

nav h1 {
  color: #a3a3a3;
  display: inline;
}

.nav-right {
  float: right;
}

.nav-right a {
  text-decoration: none;
  color: black;
  margin-left: 10px;
}

.btn-login {
  margin-left: 10px;
  border-radius: 20px;
  padding: 10px 15px;
  border: none;
  background-color: #d65a31;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
}

.nav-right a:hover {
  color: #d65a31;
}

.dropdown {
  display: inline;
  position: relative;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 1;
  top: 100%;
  right: 0;
  left: 0;
  min-width: 110px;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  margin: 0;
}

.dropdown-content a:hover {
  color: #d65a31;
  background-color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.btn-login:hover {
  background-color: black;
}

.container-card {
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  align-items: center;
  justify-content: center;
  background-size: 80px;
  padding: 20px 0;
}

.card {
  width: 30%;
  margin: 0 10px;
  text-align: center;
  padding: 20px 0;
}

.img-card {
  position: relative;
}

.img-card>img {
  width: 100%;
  height: 400px;
  border: 0.5px solid lightgray;
  border-radius: 30px;
  object-fit: cover;
}

.img-card>button {
  font-size: 100%;
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 10px 12px;
  border-radius: 12px;
  position: absolute;
  margin: 0 auto;
  bottom: 0%;
  left: 0;
  right: 0;
  width: 25%;
  cursor: pointer;
}

.img-card button:hover {
  background-color: white;
  color: #d65a31;
}

.card h3:nth-child(3) {
  text-decoration: line-through;
}

footer {
  padding: 20px 50px;
  color: white;
  /*background: #3a3d46 url(../images/pattern-shoes.png) repeat-y left;*/
  background-size: 80px;
}

ul>li {
  margin-top: 15px;
}

ul>li>a {
  text-decoration: none;
  color: white;
}

footer>p {
  text-align: center;
  color: darkgray;
  margin-top: 20px;
}

footer>h3 {
  margin: 30px 0;
}

.flex-footer {
  display: flex;
}

.section-footer {
  flex: 1;
  list-style-type: none;
}

.section-footer li a img {
  width: 32px;
}

.section-footer li,
.section-footer li a {
  color: #060606;
}

.section-footer li:first-child {
  color: #d65a31;
  margin: 20px 0;
}


.sosmed li:nth-child(1n + 2) {
  display: inline;
  margin-left: 10px;
}

main {
  background-color: #eee;
  padding: 10px 10px 80px 10px;
  margin-top: 20px;
}

.container-detail {
  /* padding: 10px 20px 30px 40px; */
  display: flex;
  justify-content: space-around;
}

.detail-img {
  width: 100px;
}

.container-detail img {
  height: 300px;
  padding-right: 15px;
}

.price {
  font-size: larger;
  font-weight: bold;
}

.title-detail {
  font-size: larger;
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

.buy-btn {
  text-decoration: none;
  background-color: black;
  padding: 20px 30px;
  color: white;
}

.buy-btn:hover {
  background-color: white;
  color: black;
}
</style>
