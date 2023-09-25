const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "한정우" && password === "1234") {
        alert("성공적으로 로그인되었습니다");
        location.reload();
        location.href ="http://127.0.0.1:5500/%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%EB%90%9C%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});