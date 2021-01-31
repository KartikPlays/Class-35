var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var Steve = database.ref("ball/position")
    Steve.on("value", Alex)

    


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y)
{
    //updating or changing the value of x and y
    database.ref("ball/position").set(
        {
            'x':position.x+x,
            'y':position.y+y
        }
    )   
}

function Alex(data)
{
    //Fetching the value from the database
  position = data.val();
  ball.x = position.x
  ball.y = position.y

}
