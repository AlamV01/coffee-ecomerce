let data = [];

document.getElementById("btnMocha").addEventListener("click", () => {
  const newData = {
    id: 1,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XibnTSqaA_YTAqVmd0tHhAHaLH%26pid%3DApi&f=1&ipt=f2ba5ff25e446335d81436e34b0e5992d1d07b33aa9021a856c5d17e89f23cdd&ipo=images",
    name: "Peppermint Mocha",
    price: 18.99,
  };
  data = [...data, newData];
  showData(newData);
});

document.getElementById("btnWhite").addEventListener("click", () => {
  const newData = {
    id: 2,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LHttABpOEVKsQY4DaPkTlAHaHa%26pid%3DApi&f=1&ipt=368ff76c2da982df88e7b31ddee824ab273f19871e139e8510379fbb87c94645&ipo=images",
    name: "White Chocolate Mocha",
    price: 15.99,
  };
  data = [...data, newData];
  showData(newData);
});

document.getElementById("btnExpresso").addEventListener("click", () => {
  const newData = {
    id: 3,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ygfMqGzoiDdN-tk-6lXA3QHaEQ%26pid%3DApi&f=1&ipt=5c456c5f492b972520acc3996c836625226b3587f8892f954c9f8ed67d1f1757&ipo=images",
    name: "Expresso",
    price: 16.99,
  };
  data = [...data, newData];
  showData(newData);
});

document.getElementById("btnCappu").addEventListener("click", () => {
  const newData = {
    id: 4,
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1600x1200%2F2009%2FFood_Drinks_Cappuccino_011978_.jpg&f=1&nofb=1&ipt=6a44d8ecba5f774252659d097f766af1357afc068b0ff055bece1ad04b43f82a&ipo=images",
    name: "Cappuccino",
    price: 14.99,
  };
  data = [...data, newData];
  showData(newData);
});

document.getElementById("btnCaramel").addEventListener("click", () => {
  const newData = {
    id: 5,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HMvjkaiZ_LIpb8rcAXHv2wHaHZ%26pid%3DApi&f=1&ipt=7403dfa94d00c482fc922ba7e4bf1bc8f84e97ac3a8f371435b48eaeff38e5bc&ipo=images",
    name: "Caramel Macchiato",
    price: 13.99,
  };
  data = [...data, newData];
  showData(newData);
});

document.getElementById("btnCa").addEventListener("click", () => {
  const newData = {
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M_EE3MuEhFT9ov5Lj5iz9AHaLL%26pid%3DApi&f=1&ipt=f2080f699239476bbd466714c72e7aaf58df4973d8158ae50317a029b9dbdcea&ipo=images",
    name: "Caffè Mocha",
    price: 22.99,
  };
  data = [...data, newData];
  showData(newData);
});



function showData(e) {
  const container = document.getElementById("containerC");
  const cart = document.createElement("div");
  cart.setAttribute("class", "cart-item");

  const span = document.createElement("span");
  span.setAttribute("class", "fas fa-times");
  const img = document.createElement("img");
  img.setAttribute("src", e.img);

  const div = document.createElement("div");
  div.setAttribute("class", "content");
  const h3 = document.createElement("h3");
  h3.textContent = e.name;
  const div2 = document.createElement("div");
  div2.setAttribute("class", "price");
  div2.innerHTML = `$${e.price}`;

  cart.appendChild(span);
  cart.appendChild(img);
  cart.appendChild(div);
  div.appendChild(h3);
  div.appendChild(div2);
  container.appendChild(cart);
}

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
