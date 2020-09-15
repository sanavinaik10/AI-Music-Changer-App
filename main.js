lily = "";
dance_monkey = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftwrist = 0;
scorerightwrist = 0;
status = "";
function preload(){
    lily = loadSound("Lily.mp3");
    dance_monkey = loadSound("Dance_Monkey.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    image(video ,0 , 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    status_lily = lily.isPlaying();
    if(scoreleftwrist >= 0.2){
        circle(leftWristX,leftWristY,20);
        dance_monkey.stop();
        if(status_lily == false){
            lily.play();
            document.getElementById("song_name").innerHTML = "Playing Now: Lily by Alan Walker";
        }
    }
    status_dance_monkey = dance_monkey.isPlaying();
    if(scorerightwrist >= 0.2){
        circle(leftWristX,leftWristY,20);
        lily.stop();
        if(status_dance_monkey == false){
            dance_monkey.play();
            document.getElementById("song_name").innerHTML = "Playing Now: Dance Monkey by Tones and I";
        }
    }
}

function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(result){
    if(result.length > 0){
     console.log(result);
     scoreleftwrist =  result[0].pose.keypoints[9].score;
     scorerightwrist =  result[0].pose.keypoints[10].score;
     leftWristX = result[0].pose.leftWrist.x;
     leftWristY = result[0].pose.leftWrist.y;
     rightWristX = result[0].pose.rightWrist.x;
     rightWristY = result[0].pose.rightWrist.y;
     console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
     console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
     console.log(scoreleftwrist);
     console.log(scorerightwrist);
    }
}