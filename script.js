function checkLogin() {
    let login = document.getElementById("login").value;
    if (login === "Админ") {
        let password = prompt("Введите пароль:");
        if (password === "Я главный") {
            alert("Здравствуйте!");
        } else if (password === null || password === "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }
    } else if (login === null || login === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}

function checkRegistration() {
    let answer = document.getElementById("registration").value;
    if (answer === "Да") {
        alert("Круто!");
    } else if (answer === "нет") {
        alert("Неправильно, подумай еще");
    }
    else {
        alert("Ты мне чушь тут не пори");
    }
}


    function generateRandomCaptcha() {
    var captcha = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters.charAt(randomIndex);
}
    return captcha;
}

    function generateRandomMathCaptcha() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var captcha = num1 + " + " + num2;
    return {
    captcha: captcha,
    expectedSum: num1 + num2
};
}

    function validateCaptcha() {
    var captchaInput = document.getElementById("captchaInput").value;
    if (isEmpty(captchaInput)) {
    alert("Пожалуйста, введите капчу.");
    return false;
}

    if (captchaInput === currentCaptcha || parseInt(captchaInput) === currentMathCaptcha.expectedSum) {
    return true;
} else {
    alert("Неверная капча или сумма.");
    resetCaptcha();
    return false;
}
}

    function isEmpty(value) {
    return value.trim().length === 0;
}

    function resetCaptcha() {
    var captchaInput = document.getElementById("captchaInput");
    captchaInput.value = "";
    captchaInput.focus();
    generateNewCaptcha();
}

    function generateNewCaptcha() {
    var captchaType = Math.random() < 0.5 ? "text" : "math";
    if (captchaType === "text") {
    currentCaptcha = generateRandomCaptcha();
    document.getElementById("captchaInput").placeholder = currentCaptcha;
} else {
    currentMathCaptcha = generateRandomMathCaptcha();
    document.getElementById("captchaInput").placeholder = currentMathCaptcha.captcha;
}
    document.getElementById("submitButton").disabled = true;
}

    var currentCaptcha;
    var currentMathCaptcha;

    generateNewCaptcha();
    document.getElementById("captchaInput").addEventListener("input", function() {
    document.getElementById("submitButton").disabled = false;
});

function truncateText(elementId, maxLength) {
    var element = document.getElementById(elementId);
    var text = element.textContent;
    if (text.length > maxLength) {
        text = text.slice(0, maxLength) + "...";
    }
    element.textContent = text;
}
