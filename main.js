peter_pan = "";
harry_potter = "";

function preload() {
    peter_pan = loadSound("music2.mp3");
    harry_potter = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 800, 600);
}