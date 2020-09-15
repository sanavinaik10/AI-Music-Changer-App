lily = "";
dance_monkey = "";
function preload(){
    lily = loadSound("Lily.mp3");
    dance_monkey = loadSound("Dance_Monkey.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video ,0 , 0, 600, 500);
}
function pause_song(){
    lily.pause();
    dance_monkey.pause();
    console.log("songs paused");
}
function stop_song(){
    lily.stop();
    dance_monkey.pause();
    console.log("songs stoped");
}