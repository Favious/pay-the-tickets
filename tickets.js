const cardNumber = "4024007177310934";
console.log(cardNumber);
let cardNumberTransformed = "";
let digits = 4;
for(let i = 0; i < digits; i++) {
	if(i + 1 == digits) {
		cardNumberTransformed += cardNumber.substring(i * digits, i * digits + digits);
	} else {
		cardNumberTransformed += cardNumber.substring(i * digits, i * digits + digits) + " ";
	}
}
const cardName = "andy garcia"
const month = 4;
const year = 2021;
const ccv = "957";

document.getElementsByClassName("btn")[0].click();
document.getElementsByClassName("mat-form-field-flex")[0].click();
document.getElementsByClassName("mat-option-text")[5].click();
document.getElementsByClassName("btn")[0].click();
setTimeout(() => {
	document.getElementsByClassName("btn-secondary")[1].click();
	setTimeout(() => {
		document.getElementsByClassName("btn")[2].click();
		document.getElementsByClassName("swal2-confirm swal2-styled")[0].click();
		setTimeout(() => {
			document.getElementsByClassName("mat-radio-container")[0].click();
			document.getElementsByClassName("btn-primary")[2].click();

			document.getElementById("cc-number").value = cardNumberTransformed + "0";

			document.getElementsByClassName("form-control")[1].value = cardName + "x";
			document.getElementsByClassName("form-control")[2].value = (month < 10) ?  "0" + (month - 1) : (month - 1) + "";
			document.getElementsByClassName("form-control")[3].value = year - 1;
			document.getElementsByClassName("form-control")[4].value = ccv + "x";
			// document.getElementsByClassName("btn-primary")[3].click();
		}, 1000);
	}, 100)
},2000);