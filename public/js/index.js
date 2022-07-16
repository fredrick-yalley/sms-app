import '@babel/polyfill';
const sendBtn = document.getElementById("send");
const editBtn = document.getElementById("edit");
const toField = document.getElementById("phone");
const messageField = document.getElementById("message");
const sentInfo = document.querySelector(".at");
const form = document.querySelector(".card");


sendBtn.addEventListener("click", () => {
    const charlength = toField.value.length;
    const messageChar = messageField.value
    console.log(charlength);
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
