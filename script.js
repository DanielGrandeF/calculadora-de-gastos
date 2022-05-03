let vacationCalc = document.getElementById("vacationCalc");

vacationCalc.addEventListener("submit",calcExpenses);


function getValues (){
    let destino = document.getElementById("destino").value;
    let presupuesto = document.getElementById("presupuesto").value;
    let alojamiento = document.getElementById("alojamiento").value;
    let transporte = document.getElementById("transporte").value;
    let comida = document.getElementById("comida").value;
    
    return {destino, presupuesto, alojamiento,transporte,comida}
}

function calcExpenses (e) {
    e.preventDefault();

    const { destino, presupuesto, alojamiento, transporte,comida} =getValues();

    let expenses = parseInt (alojamiento) + parseInt(transporte) + parseInt(comida);

    let balance = presupuesto - expenses;
    
    UI (destino,presupuesto,balance);
}

function UI (destino, presupuesto, balance){
    let resultado = document.getElementById("resultado");
    let dataPrint = document.createElement("div");

    dataPrint.innerHTML= `<div class="container-data row">
    <div class="col s4">
        <h6>${destino}</h6>
    </div>
    <div class="col s4">
        <h6>${presupuesto}</h6>
    </div>,
    <div class="col s4">
        <h6>${balance}</h6>
    </div>
</div>;`

resultado.appendChild(dataPrint);

reset();

}

function reset (){
    document.getElementById("vacationCalc").reset();
}