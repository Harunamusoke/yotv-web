$(document).ready(function () {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let inputValue = "";
  const input = $("input#number-input");

  $("button.number").each(function (index, element) {
    // element == this
    const here = $(this);
    here.click(function (e) {
      inputValue = inputValue + "" + here.text();
      input.val(inputValue);

      e.preventDefault();
    });
  });

  $("body").keypress(function (e) {
    const keyValue = parseInt(e.key);

    if (!numbers.includes(keyValue)) return;

    inputValue = inputValue + "" + keyValue;
    input.val(inputValue);
  });

  input.change(function (e) {
    inputValue = e.target.currentValue;
    input.val(inputValue);
    console.log(e);
  });
});
