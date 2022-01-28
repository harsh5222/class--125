x = 0;
y = 0;
noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
draw_rec = "";
draw_circle = "";

var SpeechRecognition =  window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition(); 


function start() {
    document.getElementById ("status").innerHTML = "The System is listening Please speak";
    recoginition.start();
}


recognition.onresult = function(event) {
console.log(event);

var content = event.results[0][0].transcript;


document.getElementById ("status").innerHTML = "The speech has been recoginition as: " + content;


if (content == "circle")
{
x.math.floor(math.random() * 900);
y.math.floor(math.random() * 600);
document.getElementById ("status").innerHTML = "Started Drawing Circle";
draw_circle = "set";
}


if (content == "rectangle")
{
x.math.floor(math.random() * 900);
y.math.floor(math.random() * 600);
document.getElementById ("status").innerHTML = "Started Drawing Rectangle";
draw_circle = "set";
}
}


function setup() {
    video = createCapture(VIDEO);
    video.size (550, 500 );
    

     canvas = createCanvas (550, 500);
     canvas.position(560,150);
     poseNet = Ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!")
}



function draw () {
    background ('#8B0000');
}

function gotPoses(results) {

if (results.lenth > 0)
{
console.log(results); 
  }
}

function gotPoses (results)
{
    if (results.lenght > 0)
    {
        console.log (results);
        noseX = result[0].pose.Nose.x;
        noseY = result[0].pose.Nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.leftWristX.x;
        diffrence = floor (rightWristX - leftWristX);

console.log("leftWristX = " + leftWristX + " rightWristX = " +rightWristX + "diffrence = " + difference);

    }
}

function draw() {
    background('#969A97');

document.getElementById("square side").innerHTML = "width and height of a square will be = " + difference + "px"
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}