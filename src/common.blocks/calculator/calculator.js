const radioDate = document.querySelectorAll('.calculator__date');
const dateOut = document.querySelector('#date-out');

document.querySelector('.income__btn').onclick = () => {
  for (let i = 0; i < radioDate.length; i++) {
    if (radioDate[i].checked) {
      console.log(radioDate[i].value);
      dateOut.innerHTML = radioDate[i].value;
    }
  }
};
