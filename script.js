const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const ans = document.createElement("div");
ans.id = "ans";
document.body.appendChild(ans);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    const val = parseFloat(price.textContent || price.innerText);
    if (!isNaN(val)) total += val;
  });

  ans.textContent = total;
  const existingTotal = document.getElementById("total-row");
  if (existingTotal) existingTotal.remove();
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.id = "total-row";

  const newCell = document.createElement("td");
  newCell.setAttribute("colspan", "2");
  newCell.textContent = total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);