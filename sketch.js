var dog, dogimg, happyDog, database, foodS, foodStock;
var lastFed,milkImg,food1,f1,h1,beach,readState,pimg,bimg,bathImg,ctime,gameState;



function preload() {
  
  dogimg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
  milkImg=loadImage("images/Milk.png")
 beach = loadImage("beach.png")
  pimg = loadImage("playing.png") 
  bimg = loadImage("bedroom.png")
  bathImg = loadImage("bath.png")

}

function setup() {
  createCanvas(1000, 500);
  food1 = new food();
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", food1.readStock);
  dog = createSprite(750, 350, 50, 50)
 dog.addImage(dogimg)
 dog.scale=0.3;
 f1= new form()
  lastFed = hour()

readState=database.ref('gameState');
readState.on("value",function(data){

gameState=data.val();

})


}


function draw() {
  background(beach)
  if (gameState === "Hungry"){
  f1.display();
  }
      
if (gameState === "Hungry"){

food1.display();
drawSprites();

}
  //fill("black")
  //text("Food Remaining: "+foodS,230,100)

  textSize(20)
  textFont("jokerman")
  fill(rgb(random(0,255),random(0,255),random(0,255)))
 if (lastFed>12){

  text("Last Fed : "+ lastFed%12 + "PM",250,25 )
}
  else if (lastFed == 0) {
    
text("Last Fed : 12 AM",350,25);

 } else{

text("Last Fed : " + lastFed +" AM",350,25)

 }

ctime = hour();

if (ctime == (lastFed+1)){

  update("Playing");
  food1.garden()
}
else if (ctime == (lastFed+2)) {
  
update("sleeping")  
food1.bedroom()

} else if (ctime>(lastFed+2) && ctime <= (lastFed + 4 )){

 update("bathing") 
food1.bathroom()

} else{

update("Hungry")
food1.display()
 f1.display()

}


console.log(gameState)




}

function readStock(data){

foodS=data.val();



}


function update(state){

database.ref('/').update({

gameState:state,


})

}








