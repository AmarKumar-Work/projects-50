const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

// console.log(inputbtn,calculatebtn,ageresult);

calculatebtn.addEventListener("click",()=>{

    if(inputbtn.value===""){
        alert("Please enter your birth year!")
    }else{
        console.log("input.btn",inputbtn.value);

        const dob = new Date(inputbtn.value);
        console.log("dob",dob);

        const dob_year = dob.getFullYear();
        console.log("dob_year",dob_year);

        // Current year

        const now = new Date();
        console.log("now",now);
        const now_year = now.getFullYear();
        console.log("now_year",now_year);

        const age = now_year - dob_year;
        console.log("age",age);

        ageresult.innerHTML = `Your age is ${age}`;
    }
})