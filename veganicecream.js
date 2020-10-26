function getLocation() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let answer = prompt("Do you live in Tokyo?");
  answer = answer.toLowerCase();
  if (answer === "yes") {
    alert(
      "Thank you " +
        name +
        ", You will receive all vegan ice cream locations in Tokyo with a small gift shortly. Stay tuned and Keep eating Ice Cream 🙃 "
    );
  } else {
    alert(
      "Thank you " +
        name +
        ", You will receive all recipes shortly. Stay tuned and Keep eating Ice Cream 🤩 "
    );
  }
}
let getLocationButton = document.querySelector("button");
getLocationButton.addEventListener("click", getLocation);
