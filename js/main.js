let addBtn = document.getElementById("add");
let modal = document.getElementById("modal");
let shopModal = false;
let ticketSpace = document.getElementById("ticketSpace");
let textarea = document.getElementById("input");

addBtn.addEventListener("click", (e) => {
  shopModal = !shopModal;
  if (shopModal) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
});

modal.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Shift") {
    createTicket();
    modal.style.display = "none";
    shopModal = false;
    textarea.value = "";
  }
});

const createTicket = () => {
  let ticketContainer = document.createElement("div");
  ticketContainer.setAttribute("class", "ticket");
  ticketContainer.innerHTML = `
    <div class="ticketBand"></div>
    <div class="ticketId">Loremipsumdolorexercitationemconsectetur</div>
    <div class="taskDetails">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
        exercitationem vel non iste repellat consectetur consequatur cum
        dicta sunt impedit.
    </div>`;
  ticketSpace.appendChild(ticketContainer);
};
