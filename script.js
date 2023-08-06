var $ =document;
var input = $.querySelector(`.range`);
var main = $.querySelector(`.containerr`);

input.addEventListener(`input`, ()=>{
  main.style.cssText = `filter: brightness(${input.value}%)`
})