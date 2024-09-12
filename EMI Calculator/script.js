const principle = document.querySelector("#loan-amount-input");
const interest = document.querySelector("#interest-rate-input");
const tenure = document.querySelector("#months-to-pay-input");
const calculate = document.querySelector("#calculate");
const emi = document.querySelector("#emi");

console.log(principle,interest,tenure,calculate,emi);

calculate.addEventListener("click",calculateEMI);


function calculateEMI(){
    if(principle.value==="" || interest.value==="" || tenure===""){
        alert("Please enter all the value");
    }else{
        const p = principle.value;
        const r = interest.value/1200;
        const n = tenure.value;

        const emivalue = (p*r*(1+r)**n)/((1+r)**n-1);
        // console.log(emivalue);
        emi.textContent = emivalue.toFixed(2);
    };
};