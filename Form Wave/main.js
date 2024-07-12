const allLables = document.querySelectorAll(".form-control label");
allLables.forEach((label) => {
  label.innerHTML = label.innerHTML.split("").map((letter, index) => 
    `<span style="transition-delay:${index * 20}ms">${letter}</span>`

  ).join("");
});
