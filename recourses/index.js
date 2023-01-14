
 const form = document.querySelector("form");

 form.addEventListener("submit", (event) => {

   event.preventDefault();

   const number = document.querySelector("#numberInput").value;

   const digits = [];

   for (let digit of number) {
     digits.push(parseInt(digit));
   }

   let summ = 1
   summ += digits.reduce((a, b) => a + b, 0);

   let counter = 1;
  
   while (summ % 9 != 0) {
     summ += 1;
     counter += 1;
   }

   const resultBanner = document.querySelector("#resultBanner");
   const resultValue = document.querySelector("#resultValue");

   resultValue.textContent = counter;

   resultBanner.style.display = "block";
 });