"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const labels = document.querySelectorAll("label")

    labels.forEach(label => {
        const input = label.querySelector('input[type="checkbox"]'),
        iconChck = label.querySelector('.checked'),
        iconUnchck = label.querySelector('.unchecked'),
        text = label.querySelector('span:last-child')


        input.addEventListener('change', e => {
            if (e.target.checked) {
                iconChck.style.display = 'block'
                iconUnchck.style.display = 'none' 
                text.classList.add('done')
            } else {
                iconChck.style.display = 'none'
                iconUnchck.style.display = 'block' 
                text.classList.remove('done')
            }
        })

    })
})