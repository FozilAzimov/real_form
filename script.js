let check1 = document.querySelector('.check1');
let check2 = document.querySelector('.check2');
let check3 = document.querySelector('.check3');
let check4 = document.querySelector('.check4');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let btn = document.querySelector('.btn');


let func = ({ target: { value } }) => {
  check4.checked = false;
  check3.checked = false;
  check1.checked = false;

  Array.from(value).forEach(item => {
    if (item.toUpperCase() !== item || item.toLowerCase() !== item) check4.checked = true;
    if (!isNaN(item) && +item !== 0) check3.checked = true;

    if (item.toUpperCase() !== item || item.toLowerCase() !== item) {
      var isLatin = isLatinOnly(item);
      function isLatinOnly (input) {
        var latinRegex = /^[A-Za-z\s]+$/;
        return latinRegex.test(input);
      }

      if (isLatin) check1.checked = true;
    }
  })

  if (value.length >= 8) check2.checked = true;
  else check2.checked = false;
}

btn.addEventListener('click', () => {
  inp1.value === inp2.value ? alert('Ha teng') : alert('Yo`q xato');
})