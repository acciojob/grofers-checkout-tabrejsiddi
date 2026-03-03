const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const priceCells = document.querySelectorAll("td.prices");

    let total = 0;

    priceCells.forEach(cell => {
        // Get text, remove any extra spaces, convert to number
        const text = cell.textContent.trim();
        const price = parseFloat(text);

        // Only add valid numbers
        if (!isNaN(price)) {
            total += price;
        }
    });

    // Optional: remove any previous total row (so we don't keep adding more)
    const oldTotalRow = document.querySelector("#total-price-row");
    if (oldTotalRow) {
        oldTotalRow.remove();
    }

    // Create new total row
    const table = document.querySelector("table");
    if (!table) return;

    const totalRow = document.createElement("tr");
    totalRow.id = "total-price-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;           // spans both columns
    totalCell.style.fontWeight = "bold";
    totalCell.style.fontSize = "1.1em";
    totalCell.style.backgroundColor = "#e6f3ff";
    totalCell.style.padding = "12px";
    totalCell.style.textAlign = "right";

    totalCell.textContent = `Total: ₹${total.toFixed(2)}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

