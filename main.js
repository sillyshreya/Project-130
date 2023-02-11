Peter_pan_song="";
Harry_potter_theme_song="";
leftWristX=0;
leftWristY=0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist="";
scoreRightWrist="";
status_Peter_pan="";
status_Harry="";
 function preload() {
    Peter_pan_song=loadSound("music.mp3");
    Harry_potter_theme_song=loadSound("music2.mp3");

 }
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
     console.log('PoseNet Is Initialized');
}
function draw() {
    image(video,0,0,600,500);
    fill("FF0000");
    stroke("#ffd700");
    status_Peter_pan = Peter_pan_song.isPlaying();
    status_Harry = Harry_potter_theme_song.isPlaying();
    console.log('status_Peter_pan');
    if(scoreLeftWrist > 0.2) {
    circle(leftWristX,leftWristY,20);
        Peter_pan_song.stop();
    if(status_Peter_pan == false) {
        Peter_pan_song.play();
        document.getElementById("name").innerHTML = "Playing Peter Pan Song";
    }
    if(scoreRightWrist > 0.2) {
        circle(rightWristX,rightWristY,20);
        status_Harry.stop();
    if( status_Harry == false) {
        Harry_potter_theme_song.play();
        document.getElementById("name").innerHTML = "Playing Harry Potter Theme Song";
    } 
} 
}
   
  
}
function gotPoses(results) {
    if(results.length>0) {
    
        console.log(results);
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist");
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY ="+ leftWristY);
        scoreRightWrist= results[0].pose.keypoints[10].score;  
        console.log("scoreRightWrist");  
        rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY);
    }
   
}
   
    
    
