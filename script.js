       // grab everything we need
internationalNumberFormat = new Intl.NumberFormat('en-US')

          var checkBox = document.getElementById("energy");
        const carsInput = document.querySelector('[name=cars]');
        const percentInput =document.querySelector('[name=percent]');
        const total = document.querySelector('.total');
        const tree = document.querySelector('.tree')
        const percentLabel = document.querySelector('.percent-label');
        const carsLabel = document.querySelector('.cars-label');
const cars = 0
const percent = 0
const treeprice = 0
       // create the functions that we'll need
        function calculateCarbonCost() {
            if(energy.checked == true){
          console.log("checked ran");
              const percent = percentInput.value;
            const cars = carsInput.value;
            const cost = cars * (percent/100)*1.574578256;
            total.innerText = internationalNumberFormat.format(cost.toFixed()) + ' tons of CO2 per year';
          const treecost = cost*1000/21;
           tree.innerText = 'that\'s equal to ' + internationalNumberFormat.format(treecost.toFixed()) + ' trees 🌳 per year';
        
        } else {
          console.log("unchecked ran");
          const percent = percentInput.value;
            const cars = carsInput.value;
            const cost = cars * (percent/100)*0.6927600742;
            total.innerText = internationalNumberFormat.format(cost.toFixed()) + ' tons of CO2 per year';
          const treecost = cost*1000/21;
           tree.innerText = 'that\'s equal to ' + internationalNumberFormat.format(treecost.toFixed()) + ' trees 🌳 per year';
        }}
function calculateTreeCost() {
            const percent = percentInput.value;
            const cars = carsInput.value;
            
        }
        function updatePercentLabel() {
            const percent = percentInput.value;
            percentLabel.innerText = percent +'%';
        }
 function updateCarsLabel() {
            const cars = carsInput.value;
            carsLabel.innerText = internationalNumberFormat.format(cars) + ' cars 🚗';
        }
        // on first fun
        calculateCarbonCost();
        calculateTreeCost();

       // add our event listeners
        carsInput.addEventListener('input', calculateCarbonCost);
        carsInput.addEventListener('input', updateCarsLabel);
        percentInput.addEventListener('input', calculateCarbonCost);
       percentInput.addEventListener('input', updatePercentLabel);
        energy.addEventListener('input', calculateCarbonCost);
energy.addEventListener('input', updatePercentLabel);
