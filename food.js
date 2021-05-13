class food {

  constructor() {

    this.image = loadImage("images/Milk.png")


  }

  readStock(data) {

    foodS = data.val();

  }

  writeStock(data) {
    if (data != 0) {
      data = data - 1;
    }
    database.ref('/').update({
      food: data,
      lastFed: lastFed

    });



  }



  getFood() {
    if (foodS === 0) {

      dog.addImage(dogimg)
      foodS = 20
    }
    database.ref('/').update({ food: foodS })


  }

  display() {

    var x = 80
    var y = 100;

    imageMode(CENTER)
    //     image(this.image,  720,220, 70,70)

    if (this.foodS != 0) {

      for (let i = 0; i < foodS; i++) {

        if (i % 10 == 0) {

          x = 80;
          y = y + 50

        }

        image(this.image, x, y, 50, 50)
        x = x + 30

      }
    }
  }

garden(){

background(pimg,550,500)

}

bedroom(){

background(bimg,550,500)

}

bathroom(){

background(bathImg,550,500)

}


}