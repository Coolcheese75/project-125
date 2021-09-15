nosex=0;
nosey=0;
rwx=0;
lwx=0;
difference=0;



function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
  if(results.length>0)

  {
      console.log(results);
      nosex = results[0].pose.nose.x;
      nosey = results[0].pose.nose.y;
      console.log("nosex = " + nosex +" nosey = " + nosey);

      rwx = results[0].pose.rightWrist.x;
      lwx = results[0].pose.leftWrist.x;
      difference = floor(lwx - rwx);

      console.log("lwx = " + lwx +" rwx = " + rwx + " difference = " + difference);
  }
}
function modelLoaded()
{
    console.log("Model has been born")
}
function draw()
{
    background('#6C91C2');

    textSize(difference);
    fill('#FFE787');
    text('NEEL', nosex, nosey)
}