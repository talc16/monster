//template for creating objects

class Monster {
    // new ClassName = > constructor
    constructor(name, lastName, imageUrl, pos) {
        this.id = `monster_${Math.round(Math.random() * 999)}`;
        this.name = name;
        this.lastName = lastName;
        this.imageUrl = imageUrl;
        this.x = pos.x;
        this.y = pos.y;
        
    }

    //behaviour
    sayHi() {
        // return this.name + " " + this.lastName;
        return `${this.name} _ ${this.lastName}`;
    }

    setPicture(pic) {
        this.imageUrl = pic
    }

    // setXpos(xpos) {
    //     // this.x = parseInt(this.x) + xpos + "px"
    //     this.x = `${parseInt(this.x) + xpos}px`
    // }

    getCard(w, h) {
        const monsterUI = document.createElement("div")
        monsterUI.classList.add(this.id, "monster")
        
        const img = document.createElement("img");
        img.addEventListener("click",this.selectedOne.bind(this))


        img.src = this.imageUrl
        img.height = w;
        img.width = h;
        const buttonDiv = document.createElement("div")
        buttonDiv.style.background="red"
        const buttonUp = document.createElement("button")
        buttonUp.className="btn btn-primary btnUp"
        buttonUp.innerText="UP!"
        buttonUp.addEventListener("click",this.buttonClickUp.bind(this))

        const btnDown = document.createElement("button")
        btnDown.className="btn btn-primary btnDown"
        btnDown.innerText="Down!"
        btnDown.addEventListener("click",this.buttonClickDown.bind(this))
        
        const btnleft = document.createElement("button")
        btnleft.className="btn btn-primary btnleft"
        btnleft.innerText="Left!"
        btnleft.addEventListener("click",this.buttonClickLeft.bind(this))
      
        const btnRight = document.createElement("button")
        btnRight.className="btn btn-primary btnleft"
        btnRight.innerText="Right!"
        btnRight.addEventListener("click",this.buttonClickRight.bind(this))

        buttonDiv.append(buttonUp,btnDown,btnleft,btnRight)
        monsterUI.append(buttonDiv,img)
        monsterUI.style.position = "absolute"
        monsterUI.style.left = this.x
        monsterUI.style.top = this.y
        return monsterUI;
    }

    selectedOne(){
        keyDown(this)
        
    }


    buttonClickUp(){
        moveThis(this,randomNumber(0),-randomNumber(10))
    }
    buttonClickDown(){
        moveThis(this,randomNumber(0),randomNumber(10))
    }
    buttonClickLeft(){
        moveThis(this,-randomNumber(10),randomNumber(0))
    }
    buttonClickRight(){
        moveThis(this,randomNumber(10),randomNumber(0))
    }

  randomLocation(x,y) {
        this.x = `${x}px`
        this.y = `${y}px`
    }
  newLocation(x,y) {
        this.x = `${parseInt(this.x)+parseInt(x)}px`
        this.y = `${parseInt(this.y) + parseInt(y)}px`
    }

}