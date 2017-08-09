// DOM variables 
var portItem = document.getElementById('portFullDisplayWrapper');
var closeButton = document.getElementById('closeButton');
var companyTitle = document.getElementById('companyTitle');
var companyDescription = document.getElementById('companyDescription');
var portFullItem = document.getElementById('portFullItem');
var imgThumb = document.getElementsByClassName('portItem');

console.log(imgThumb);

//Loops through thumbnails and adds event listeners 
for(i = 0; i < 8; i++) {
    var currentItem = imgThumb[i];
    $(currentItem).on("click touchstart", function(){
        displaySample(this);
    });
};

//changes Title and Description in item display based on which is clicked
//Makes display visible
function displaySample(img) {
    var imgSubString = img.children[0].currentSrc.substring(0, img.children[0].currentSrc.indexOf('.')); 
    var curCompTitle = (img.children[0].title);
    var curCompAlt = (img.children[0].alt);
    companyTitle.innerHTML = curCompTitle;
    companyDescription.innerHTML = curCompAlt;
    portItem.style.visibility = 'visible';
    portItem.style.opacity = '1';
    portFullItem.src = imgSubString + '.jpg';
};

//Closes display
closeButton.addEventListener('click', function() {
    portItem.style.visibility = 'hidden';
    portItem.style.opacity = '0';
});