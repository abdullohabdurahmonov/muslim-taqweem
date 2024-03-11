// Array containing button IDs
var buttonIds = [
    'alifButton', 'baaButton', 'taaButton', 'thaaButton', 'jiymButton', 
    'haaButton', 'xooButton', 'dalButton', 'dhalButton', 'rooButton', 
    'zaaButton', 'siynButton', 'shiiynButton', 'soodButton', 'dooddButton', 
    'toaButton', 'dhaaButton', 'ainButton', 'gainButton', 'faaButton', 
    'qoofButton', 'kaafButton', 'laamButton', 'miimButton', 'nuuvnButton', 
    'vaavButton', 'haButton', 'yaaButton'
];

// Iterate over each button ID
buttonIds.forEach(function(buttonId) {
    var button = document.getElementById(buttonId);
    var audio = document.getElementById(buttonId.replace('Button', ''));
    
    button.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});
