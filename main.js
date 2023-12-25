let faqHeaders = document.querySelectorAll(".faq__body__item__title");


function toggleFaq() {
    this.parentElement.classList.toggle("selected");
}   



for (const faqHeader of faqHeaders) {
    faqHeader.addEventListener("click", toggleFaq)
    
}
