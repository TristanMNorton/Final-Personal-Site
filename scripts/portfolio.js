// DOM variables 
var portItem = document.getElementById('portFullDisplayWrapper');
var closeButton = document.getElementById('closeButton');
var companyTitle = document.getElementById('companyTitle');
var companyDescription = document.getElementById('companyDescription');
var portFullItem = document.getElementById('portFullItem');
var imgThumb = document.getElementsByClassName('portItem');
var imgSubString;

console.log(imgThumb);

//Loops through thumbnails and adds event listeners 
for(i = 0; i < 6; i++) {
    imgThumb[i].addEventListener('click', function(){
        displaySample(this);
    });
};

//changes Title and Description in item display based on which is clicked
//Makes display visible
function displaySample(img) {
    var imgSubString = img.children[0].src.substring(0, img.children[0].src.lastIndexOf('.')); 
    var curCompTitle = (img.children[0].title);
    var curCompAlt = (img.children[0].alt);
    portFullItem.src = imgSubString + '.jpg';
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