import $ from 'jquery'; 

function ScrollTo(selector) {
    window.scrollTo({top: $(selector).offset().top - 100, left: 0, behavior: 'smooth'})
}

export default ScrollTo;