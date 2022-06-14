const radioDate = document.querySelectorAll('.calculator__date');
const dateOut = document.querySelector('#date-out');

for (let i = 0; i < radioDate.length; i++) {
  if (radioDate[i].checked) {
    console.log(radioDate[i].value);
    dateOut.innerHTML = radioDate[i].value;
  }
}
