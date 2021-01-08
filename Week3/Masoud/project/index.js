//declare variables
const bill = document.getElementById('bill');
const service = document.getElementById('service');
const people = document.getElementById('people');
const calculate = document.getElementById('calculate');
const amount = document.getElementById('amount');
const each = document.getElementById('each');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

// When press on calculate button
calculate.addEventListener('click', calculateTip);

//calculate tip
function calculateTip(e) {
  e.preventDefault();

  // Display modal element when at least one field empty
  if (bill.value == '' || service.value == 'default' || people.value == '') {
    modal.style.display = 'block';
    close.addEventListener('click', function () {
      modal.style.display = 'none';
      clearTimeout(timing);
    });
    const timing = setTimeout(function () {
      modal.style.display = 'none';
    }, 5000);
    //transition modal
    modal.classList.remove('trans');
    setTimeout(function () {
      modal.classList.add('trans');
    }, 5);
  } else {  //Calculate tip when all fields are filled
    amount.textContent = parseFloat(service.value * bill.value / 100 / people.value).toFixed(2);
    each.textContent = 'each';
    each.style.display = 'block';
    if (people.value == 1) {
      each.style.display = 'none';
    }
  }
}
