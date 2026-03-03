const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

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

