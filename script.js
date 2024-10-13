const prices = {
    xburguer: 8.50,
    zipburguer: 10.50,
    xfrango: 14.50,
    gringo: 13.00,
    entrega3: 3.00,
    entrega5: 5.00,
    entrega10: 10.00
}

const valorTotal = document.getElementById("valortotal");

function calculate() {
    let total = 0;

    total += prices.xburguer * parseInt(document.getElementById("xburguer").value) || 0;
    total += prices.zipburguer * parseInt(document.getElementById("zipburguer").value) || 0;
    total += prices.xfrango * parseInt(document.getElementById("xfrango").value) || 0;
    total += prices.gringo * parseInt(document.getElementById("gringo").value) || 0;

    const entrega = document.querySelector('input[name="entrega"]:checked').value;
    total += parseFloat(entrega);

    valorTotal.textContent = total.toFixed(2).replace(".", ",");

}

document.querySelectorAll('#inputs input[type="number"]').forEach(input => {
    input.addEventListener("input", calculate);
});

document.querySelectorAll('#inputs input[type="radio"]').forEach(input => {
    input.addEventListener("change", calculate);
});