const sendBtn = document.getElementById("send");
const editBtn = document.getElementById("edit");
const toField = document.getElementById("phone");
const messageField = document.getElementById("message");
const sentInfo = document.querySelector(".at");
const form = document.querySelector("#card");
const menu = document.querySelector(".fa");
const nav = document.querySelector("ul");

menu.addEventListener("click", () => {
    if(menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-times");
        nav.classList.add("active");
        form.style.opacity = 0.1;
    } else {
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars");
        nav.classList.remove("active");
        form.style.opacity = 0.9;
    }
})


sendBtn.addEventListener("click", () => {
    const charlength = toField.value.length;
    const messageChar = messageField.value
    if(charlength === 13 && messageChar) {
       alert("MESSAGE SENT!");
    }else if (charlength === 27 && messageChar) {
       alert("MESSAGE SENT!");
    }else if (charlength === 41 && messageChar) {
        alert("MESSAGE SENT!");
     }else {
        alert("MESSAGE NOT SENT!, CHECK NUMBER OR TEXT WELL!");
    }
})

// axios.get("http://127.0.0.1:5000/api/v1/messages", {
//     success: true
// }).then(function(response) {
//     console.log(response)
// })

// const response = await axios.get(url)



editBtn.addEventListener("click", (e) => {
    e.preventDefault();

     var len = toField.value.length;
     if (toField.setSelectionRange) {
         toField.focus();
         toField.setSelectionRange(len, len);
     } else if (toField.createTextRange) {
         var t = toField.createTextRange();
         t.collapse(true);
         t.moveEnd('character', len);
         t.moveStart('character', len);
         t.select();
     }

})
