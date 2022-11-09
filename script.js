// dom selection
// 1. document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Galih Arizza";

// 2. document.getElementsByTagName() -> mengembalikan HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue"; //dikasih index karena yang bisa dimanipulasi hanya element
}
// kalau mau 1 tinggal indexnya diisi dengan index yang mau dimanipulasi

const h1 = document.getElementsByTagName("h1")[0]; //jika ingin mengambil 1 secara langsung & meskipun return cuma 1, tetap dalam bentuk array karena dikemablikan sebagai HTMLCollection
h1.style.fontSize = "50px";

// 3. document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diupdate lewat javascript";

// 4. document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("li:nth-child(2)"); //jika ingin spesifikasi bisa menggunakan (section#b ul li:nth-child(2))
li2.style.backgroundColor = "orange";

// 5. document.querySelectorAll() -> NodeList
const par = document.querySelectorAll("p");
par[2].style.backgroundColor = "green";
