const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const priceCells = document.querySelectorAll(".price");

    let total = 0;
    priceCells.forEach(cell => {
        const priceText = cell.textContent.trim();
        const priceValue = parseFloat(priceText);

        if (!isNaN(priceValue)) {
            total += priceValue;
        }
    });
    const existingTotal = document.querySelector("#total-row");
    if (existingTotal) {
        existingTotal.remove();
    }
    const table = document.querySelector("table");
    if (!table) return; 

    const totalRow = document.createElement("tr");
    totalRow.id = "total-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;                    
    totalCell.style.fontWeight = "bold";
    totalCell.style.backgroundColor = "#f0f8ff";
    totalCell.style.padding = "12px";
    totalCell.style.textAlign = "right";
    totalCell.style.fontSize = "1.15em";
    totalCell.textContent = `Total: ₹ ${total.toFixed(2)}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);

  
};

getSumBtn.addEventListener("click", getSum);

