'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark-theme";
    }
    else {
        this.textcontent = "Light-theme";
    }

       
    console.log('current class: ' + className);

});