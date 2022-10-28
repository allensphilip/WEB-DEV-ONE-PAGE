const $ = document;
let container = $.querySelector("#con");
let buttons = $.querySelectorAll("button");

window.onload = () => {
  data.forEach((newItem) => {
    createItem(newItem);
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    let items = data.filter((item) => item.type == e.target.innerText);
    container.innerHTML = "";
    items.forEach((newItem) => {
      createItem(newItem);
    });
    if (e.target.innerText == "All") {
      data.forEach((newItem) => {
        createItem(newItem);
      });
    }
  });
});

const createItem = ({ image, title, price, text }) => {
  let temp = `<div class="item">
  <div>
  <img
    src=${image}
    alt="logo"
  />
</div>
<div class="right">
  <div class="tops">
    <h4>${title}</h4>
    <span class="price">$${price}</span>
  </div>
  <p>
    ${text}
  </p>
</div>
</div>`;

  container.innerHTML += temp;
};
