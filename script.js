const prices = {
    xburguer: 8.50,
    zipburguer: 10.50,
    xfrango: 14.50,
    gringo: 13.00,
    entrega: 3.00
}

const valorTotal = document.getElementById("valortotal");

function calculate() {
    let total = 0;

    if (document.getElementById("xburguer").checked) {
        total += prices.xburguer;
    }

    if (document.getElementById("zipburguer").checked) {
        total += prices.zipburguer;
    }

    if (document.getElementById("xfrango").checked) {
        total += prices.xfrango;
    }

    if (document.getElementById("gringo").checked) {
        total += prices.gringo;
    }

    if (document.getElementById("entrega").checked) {
        total += prices.entrega;
    }
    
    valorTotal.textContent = total.toFixed(2).replace(".", ",");
}


document.querySelectorAll('#inputs input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', calculate);
})