img = "";
status = "";

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
img = loadImage('dog_cat.jpg');
}

function draw() {
image(img, 0, 0, 640, 420);

fill("#b650e6");
text("Sam", 45, 75);
noFill()
stroke("#b650e6");
rect(30, 60, 450, 350 );

fill("#eded5a");
text("Chloe", 320, 120);
noFill();
stroke("#eded5a");
rect(300, 90, 270, 320);
}

function modelLoaded(){
console.log("Model Loaded!")
status=true;
objectDetector.detect(img, gotResult);
}

function gotResult(results, error){
if (error) {
console.log(error);
}
console.log(results);
}
