console.log("Osama");
let firstTitle = "Elzero",
  firstDescription = "Elzero web school",
  firstDate = "25/10",
  markUp = `
  <div class="firstDiv">
  <h3>${firstTitle}</h3>
  <p>${firstDescription}</p>
  <span>${firstDate}</span>
  </div>
  `;
let repeat = markUp.repeat(4);
document.write(repeat);
