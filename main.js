///https://i.postimg.cc/MKDH61sf/clownimage.png
nose_X = 0;
nose_Y = 0;


function preload() {
    clown_img = loadImage("https://i.postimg.cc/MKDH61sf/clownimage.png");
}

function draw() {
    image(video, 0, 0, 400, 400);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    ///circle(nose_X, nose_Y, 30);

    image(clown_img, nose_X, nose_Y, 70, 70);
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function take_snapshot() {
    save("image.png");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("X cordinate of nose :" + result[0].pose.nose.x);
        console.log("Y coordinate of nose : " + result[0].pose.nose.y);
        nose_X = result[0].pose.nose.x - 30;
        nose_Y = result[0].pose.nose.y - 30;
    }
}