const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
console.log("All td elements:", document.querySelectorAll("td").length);
    console.log("All elements with class containing 'price':",
        document.querySelectorAll("[class*='price']").length);

    const candidates = document.querySelectorAll("[class*='price'], .prices, td:nth-child(2)");
    console.log("Possible price cells:", candidates.length);
    candidates.forEach((el, i) => {
        console.log(`Candidate ${i}:`, el.outerHTML.substring(0, 120));
    });
    // ─────────────────────────────────────────────────────────────────────

   
    const priceCells = document.querySelectorAll(".price");  

    let total = 0;
    priceCells.forEach(cell => {
        const val = parseFloat(cell.textContent.trim()) || 0;
        total += val;
    });

    
    document.querySelector("#total-price-row")?.remove();

    const tr = document.createElement("tr");
    tr.id = "total-price-row";
    const td = document.createElement("td");
    td.colSpan = 2;
    td.style.cssText = "font-weight:bold; font-size:1.1em; background:#e6f3ff; padding:12px; text-align:right;";
    td.textContent = `Total: ₹${total.toFixed(2)}`;

    tr.appendChild(td);
    document.querySelector("table")?.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

