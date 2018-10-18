"use strict";
const clickArea = document.getElementById("cat-img");
//Class CatClicker responsible for the core gaming
let catClicker = function (){
 	//Create the catclicker object so it would be OO;
 	this.clicked = 0;
 	this.phrase = '';
 	this.img = {
 		URL : 'res/img/1.gif',
 		name: '',
 		goTo: ''
 	};
 };

catClicker.prototype.loadImg = function() {
	let api_key = '3q2HdIJkyrwyzbpPqPsVDzSOE8XL0uC0';
	let jsonObject = fetch('http://api.giphy.com/v1/gifs/random?tag=cute+kitten&api_key='+api_key,{
		Method: 'GET',
		mode:'no-cors',
		headers:{
			'Access-Control-Allow-Origin' : '*'
		}
	}).then((response) => response.json())
    .then((json) => {
       // do stuff with responseJSON here...
       this.img.URL = json.data.images.original.url;
       this.img.name = json.data.title;
       this.img.goTo = json.data.bitly_gif_url;
    });


}; 

catClicker.prototype.addCounter = function(){
	

	let counter = document.getElementsByClassName("number").item(0);
	

    counter.innerHTML = ("000" + (this.clicked)).slice(-3);
    

    if(this.clicked == 0){
		this.clicked = 1;
	}else if(this.clicked > 0){
		this.clicked++;
	}
};

catClicker.prototype.changeImg = function(){

	this.loadImg();

	let img = document.getElementById('cat-img');
	img.style.backgroundImage = ("url("+this.img.URL+")");

	let phrase = document.getElementsByClassName("phrase").item(0);
	phrase.innerHTML = this.img.name;
	phrase.href = this.img.goTo;

}

catClicker.prototype.setUp = function(){
	this.addCounter();
	this.changeImg();
}

document.addEventListener('DOMContentLoaded', (event) => {
  initApp(); 
});


function initApp(){
	var app = new catClicker();
	app.setUp();
	clickArea.addEventListener("click", function(){
		app.setUp();
	});
};

function randomText(){

}

