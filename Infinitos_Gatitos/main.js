window.onload = function () {
    var button = document.getElementById('summon');
    button.addEventListener('click', function () {
		var kittens = '<img src = "https://placekitten.com/g/200/200/"></img>'; 		 
		document.getElementById('kittens').innerHTML += kittens;
	
    });
};