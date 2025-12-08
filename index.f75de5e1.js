"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector(".contact-us__form");
    if (form) form.addEventListener("submit", (event)=>{
        event.preventDefault();
        form.reset();
        window.alert("Thank you! Your message has been sent.");
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
