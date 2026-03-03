const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll(".prices");
    let total = 0;
    
    priceElements.forEach((priceElem) => {
        const priceText = priceElem.textContent.trim();
        const price = parseFloat(priceText);
        
        if (!isNaN(price)) {
            total += price;
        }
    });

    const table = document.querySelector("table"); 
    
    if (!table) return; 

    // Create new row and cell
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    
    // Make it span all columns and look like a total
    totalCell.setAttribute("colspan", "2"); // adjust if your table has more columns
    totalCell.style.fontWeight = "bold";
    totalCell.style.backgroundColor = "#f0f0f0";
    totalCell.style.padding = "12px";
    
    // Format the total nicely (you can adjust currency symbol)
    totalCell.textContent = `Total Price: ₹${total.toFixed(2)}`;

    // Add cell to row, row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

