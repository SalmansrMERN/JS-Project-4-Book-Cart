const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const addBook = document.querySelector("#add_book");
const completeOrder = document.querySelector("#order");
const bookList = document.querySelector("#book_list");

// ================ main dom selection end =================

const login = document.getElementById("login");

login.addEventListener("click", function () {
    if (mail.value == "" && pword.value == "") {
        alert("Fill Up With Your E-mail & Password")
    } else {
        const login_area = document.getElementById("login_area");
        const order_area = document.getElementById("order_area");

        login_area.style.display = "none";
        order_area.style.display = "block";

    }

});

// ================ log in area end ===================

addBook.addEventListener("click", function (e) {
    e.preventDefault();

    if (title.value == "" && author.value == "" && year.value == "") {
        alert("Fill The Form First")
    } else {
        const newRaw = document.createElement("tr");

        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        newRaw.appendChild(newTitle);

        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRaw.appendChild(newAuthor);

        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        newRaw.appendChild(newYear);

        bookList.appendChild(newRaw);

    }
});

// ================ add book area end ===================

completeOrder.addEventListener("click", function () {

    const orderArea = document.querySelector("#order_area");
    const mesage = document.querySelector("#message");

    orderArea.style.display = "none";
    mesage.style.display = "block";

});

// ================ complete order area end ===================