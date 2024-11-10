// variables for entire page's usage
const forms = document.querySelectorAll("form"); // gets all forms from html page
const submitButtons = document.querySelectorAll('input[type="submit"]'); // will keep track of all submit buttons found in the forms
const validEndings = [
  "org",
  "com",
  "gov",
  "net",
  "mil",
  "co",
  "io",
  "uk",
  "au",
];

// first form variables and event listener
const firstForm = forms[0];
const fname = firstForm.elements["fname"];
const lname = firstForm.elements["lname"];
const email = firstForm.elements["email"];

firstForm.addEventListener("submit", (event) => {
  const radio = document.querySelector('input[name="fav_car"]:checked'); // checks for checked radio on each submission
  const fn = validateFirstName();
  const ln = validateLastName();
  const em = validateEmail();
  if (fn === false || ln === false || em === false) {
    event.preventDefault();
  } else if (radio === null) {
    event.preventDefault();
    alert(`Please pick a radio value!`);
  } else {
    // show user's input from radio
    alert(
      `Thank you ${fname.value} ${lname.value} for your submission! You chose the ${radio.value}. Nice choice!`
    );
  }
});

function validateFirstName() {
  let first = fname.value;
  if (first.length < 3) {
    alert("Please enter a valid first name of at least 3 characters!");
    fname.focus();
    return false;
  }
  return true;
}

function validateLastName() {
  let last = lname.value;
  if (last.length < 3) {
    alert("Please enter a valid last name of at least 3 characters!");
    lname.focus();
    return false;
  }
  return true;
}

function validateEmail() {
  let verify_email = email.value;
  const atpos = verify_email.indexOf("@"); // records index of @
  let dotpos = 0; // will record the index of the '.' after the @
  for (let i = atpos; i < verify_email.length; i++) {
    // finds only the '.' after the @ symbol
    if (verify_email[i] === ".") {
      dotpos = i;
      break;
    }
  }
  let numberOfAt = 0; // will record number of @ symbols (if more than 1 found, will trigger alert)
  for (let i = 0; i < verify_email.length; i++) {
    if (verify_email[i] === "@") numberOfAt++;
  }
  let ending = ""; // will record the URL ending after the '.' that comes after the '@' (if not found in validEndings array, will trigger alert)
  for (let i = dotpos + 1; i < verify_email.length; i++) {
    ending += verify_email[i];
  }
  let validEnding = false; // defaults to false
  for (let email_ending in validEndings) {
    // if the email's ending is not found in array of valid URL ending's, send alert + return false
    if (ending === validEndings[email_ending]) {
      // if one match is found, then set value to true then break out of for loop
      validEnding = true;
      break;
    }
  }

  if (verify_email.length < 1) {
    // if email is empty
    alert("Please enter an email address!");
    email.focus();
    return false;
  }

  if (atpos < 1 || numberOfAt > 1) {
    // checking that @ is not first character and only one @ exists
    alert(
      "Invalid Email! Must include only 1 @ symbol, which also must not be at the beginning."
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    // checking that after @, there is some domain name
    console.log(dotpos);
    console.log(atpos);
    alert(
      "Invalid structure: @. \n You must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  if (validEnding === false) {
    // checking for truth value
    alert(
      "Invalid top-level domain for email: \n The ending of your email is invalid!"
    );
    email.focus();
    return false;
  }

  return true;
}

// console.log(fname);
// console.log(forms[0]);
// console.log(submitButtons);
