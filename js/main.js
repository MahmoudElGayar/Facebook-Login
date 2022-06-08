var emailInput = document.getElementsByName("email")[0];
var passwordInput = document.getElementsByName("password")[0];
var btn = document.getElementById("button");
var form = document.forms[0];
passwordInput.classList.add("mb-2");
form.addEventListener("submit", (e) => {
	let emailValid = false;
	let passwordValid = false;

	if (emailInput.value !== "") {
		emailValid = true;
	}
	if (passwordInput.value !== "" && passwordInput.value.length <= 10) {
		passwordValid = true;
	}

	if (emailValid === false || passwordValid === false) {
		e.preventDefault();
		if (emailValid === false && passwordValid === false) {
			showAlert("both");
		} else if (emailValid === false && passwordValid === true) {
			showAlert("email");
		} else if (emailValid === true && passwordValid === false) {
			showAlert("password");
		}
	}
});
let isErrorActive = false;
function showAlert(errorInput) {
	if (!isErrorActive) {
		let errorDiv = document.createElement("div");
		let cancelBtn = document.createElement("button");
		let xIcon = document.createElement("i");
		isErrorActive = true;
		errorDiv.classList.add(
			"alert",
			"alert-danger",
			"d-flex",
			"p-3",
			"justify-content-between",
			"align-items-center",
			"w-100"
		);
		errorDiv.style.position = "absolute";
		errorDiv.style.top = "0";

		cancelBtn.classList.add("btn", "btn-dark");
		xIcon.classList.add("fas", "fa-xmark");
		if (errorInput === "password") {
			errorDiv.appendChild(
				document.createTextNode(
					"Password Must Not Be Empty & Less Than 10 Characters"
				)
			);
		} else if (errorInput === "email") {
			errorDiv.appendChild(document.createTextNode("Email Must Not Be Empty"));
		} else if (errorInput === "both") {
			errorDiv.appendChild(
				document.createTextNode(
					"Email Must Not Be Empty and Password Must Not Be Empty & Less Than 10 Characters"
				)
			);
		}

		cancelBtn.addEventListener("click", () => {
			cancelBtn.parentElement.remove();
			isErrorActive = false;
		});

		errorDiv.appendChild(cancelBtn);
		cancelBtn.appendChild(xIcon);
		document.body.prepend(errorDiv);
	}
}
