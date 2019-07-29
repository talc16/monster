let selected = ""
if (selected) colorSelected(selected)
const mainBoard = document.querySelector("#main");
const monster1 = new Monster("shrek", "green",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/10/creepy-pokemon-david-szilagyi-102-59d33db716ee4-png__880.jpg", { x: randomNumber(1000) + "px", y: randomNumber(1000) + "px" })
const monster2 = new Monster("clown", "funny",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/10/creepy-pokemon-david-szilagyi-35-59d33e192ff0b__880.jpg", { x: randomNumber(1000) + "px", y: randomNumber(1000) + "px" })
const monster3 = new Monster("woman", "in red",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/10/creepy-pokemon-david-szilagyi-45-59d33d053ae6e__880.jpg", { x: randomNumber(1000) + "px", y: randomNumber(1000) + "px" })

const monster4 = new Monster("poki", "in red",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/10/creepy-pokemon-david-szilagyi-98-59d33dabcebb8__880.jpg", { x: randomNumber(1000) + "px", y: randomNumber(1000) + "px" })


const monsters = [];


document.getElementById("clickRandom").addEventListener("click", function() {
    randomPlace()
});

function randomNumber(multi) {
    let num = `${Math.round(Math.random() * multi)}`;
    return num
}

monsters.push(monster1, monster2, monster3, monster4)


monsters.forEach(function(monster) {
    console.log(monster)
});

function draw(arr) {
    mainBoard.innerHTML = "";
    arr.forEach(function(monster) {
        mainBoard.append(monster.getCard(200, 200))

    });
}


draw(monsters)


function randomPlace() {
    monsters.forEach(function(monster) {
        monster.randomLocation(randomNumber(1800), randomNumber(1000))
        draw(monsters)
    });
};

function moveThis(monster, x, y) {
    monster.newLocation(x, y)
    draw(monsters)
    colorSelected(selected)
};

function colorSelected(monsterSelect) {
    selected = monsterSelect
    let allcolorBorder = document.querySelectorAll(".monster")
    let colorBorder = document.getElementsByClassName(selected.id)
    for (let index = 0; index < allcolorBorder.length; index++) {
        allcolorBorder[index].style.border = ""

    }

    colorBorder[0].style.border = "3px solid yellow"

}

function keyDown(monsterSelect) {
    colorSelected(monsterSelect)

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                monsterSelect.buttonClickLeft()
                break;
            case 38:
                monsterSelect.buttonClickUp()
                break;
            case 39:
                monsterSelect.buttonClickRight()
                break;
            case 40:
                monsterSelect.buttonClickDown()
                break;
        }
    };
}

Object.prototype.len = function() {
    let count = 0
    for (let obj in Object.keys(this)) {
        count++
    }
    count--
    return count
    
};