// DOM variables 
var portItem = document.getElementById('portFullDisplayWrapper');
var closeButton = document.getElementById('closeButton');
var companyTitle = document.getElementById('companyTitle');
var companyDescription = document.getElementById('companyDescription');
var imgThumb = document.getElementsByClassName('portItem');

console.log(imgThumb);

//Loops through thumbnails and adds event listeners 
for(i = 0; i < 8; i++) {
    imgThumb[i].addEventListener('click', function(){
        console.log(this.children[0].currentSrc);
        displaySample(this);
    });
};

//changes Title and Description in item display based on which is clicked
//Makes display visible
function displaySample(img) {
    var bigImg = (img.children[0].currentSrc + 'big');
    var curCompTitle = (img.children[0].title);
    var curCompAlt = (img.children[0].alt);
    companyTitle.innerHTML = curCompTitle;
    companyDescription.innerHTML = curCompAlt;
    portItem.style.visibility = 'visible';
    portItem.style.opacity = '1';
};

//Closes display
closeButton.addEventListener('click', function() {
    portItem.style.visibility = 'hidden';
    portItem.style.opacity = '0';
});