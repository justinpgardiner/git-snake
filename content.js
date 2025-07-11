const ALPHA = {
  "A": [
    [0,0,0,4,4,4,4,0,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,4,4,4,4,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0]
  ],
  "B": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "C": [
    [0,0,0,4,4,4,4,4,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,0,4,4,4,4,4,0]
  ],
  "D": [
    [0,0,4,4,4,0,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,4,4,0,0,0,0]
  ],
  "E": [
    [0,0,4,4,4,4,4,4,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,4,4,4,4,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,4,4,4,4,4,0]
  ],
  "F": [
    [0,0,4,4,4,4,4,4,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,4,4,4,4,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0]
  ],
  "G": [
    [0,0,0,4,4,4,4,4,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,4,4,4,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,0,4,4,4,4,4,0]
  ],
  "H": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,4,4,4,4,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0]
  ],
  "I": [
    [0,0,4,4,4,4,4,4,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,4,4,4,4,4,4,0]
  ],
  "J": [
    [0,0,0,0,0,4,4,0,0],
    [0,0,0,0,0,0,4,0,0],
    [0,0,0,0,0,0,4,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,0,4,4,4,0,0,0]
  ],
  "K": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,0,0,0,0,4,0]
  ],
  "L": [
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,4,4,4,4,4,0]
  ],
  "M": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,4,0,0,4,4,0],
    [0,0,4,0,4,0,0,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0]
  ],
  "N": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,4,0,0,0,4,0],
    [0,0,4,0,4,0,0,4,0],
    [0,0,4,0,0,4,0,4,0],
    [0,0,4,0,0,0,4,4,0]
  ],
  "O": [
    [0,0,0,4,4,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,0,4,4,4,0,0,0]
  ],
  "P": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,0,0,0,0,0,0]
  ],
  "Q": [
    [0,0,0,4,4,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,0,0,4,4,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,0,4,4,4,4,0,0]
  ],
  "R": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,4,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,0,0,0,4,0,0]
  ],
  "S": [
    [0,0,0,4,4,4,4,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,0,4,4,4,0,0,0],
    [0,0,0,0,0,0,4,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "T": [
    [0,0,4,4,4,4,4,4,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0]
  ],
  "U": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,0,4,4,4,4,0,0]
  ],
  "V": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,0,4,0,0,4,0,0],
    [0,0,0,4,0,0,4,0,0],
    [0,0,0,0,4,4,0,0,0]
  ],
  "W": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,0,0,0,4,0],
    [0,0,4,0,4,0,0,4,0],
    [0,0,4,4,0,4,4,4,0],
    [0,0,4,0,0,0,0,4,0]
  ],
  "X": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,0,4,0,0,4,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,4,0,0,4,0,0],
    [0,0,4,0,0,0,0,4,0]
  ],
  "Y": [
    [0,0,4,0,0,0,0,4,0],
    [0,0,0,4,0,0,4,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0]
  ],
  "Z": [
    [0,0,4,4,4,4,4,4,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,4,4,4,4,4,4,0]
  ],
  " ": [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
  ],
  "0": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "1": [
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,4,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "2": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "3": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,0,4,4,0,0,0,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "4": [
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,0,0,0,4,0,0,0]
  ],
  "5": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "6": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,0,0,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "7": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,4,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,0]
  ],
  "8": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "9": [
    [0,0,4,4,4,4,0,0,0],
    [0,0,4,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0],
    [0,0,0,0,0,4,0,0,0],
    [0,0,4,4,4,4,0,0,0]
  ],
  "!": [
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,4,0,0,0,0]
  ],
  ":": [
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,4,0,0,0,0],
    [0,0,0,0,4,0,0,0,0]
  ],

}

function waitForElement(selector, callback) {
  const el = document.querySelector(selector);
  if (el) {
    callback(el);
  } else {
    setTimeout(() => waitForElement(selector, callback), 200);
  }
}

let currentPressed = ""

waitForElement(".js-calendar-graph", (calendar_div) => {
    screen = new Screen(calendar_div.querySelector('tbody'));
    if (!document.getElementById("custom-extension-button")) {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-block");
        button.id = "custom-extension-button";
        button.textContent = "\u{1F40D}\tPlay Snake\t\u{1F40D}";
        calendar_div.appendChild(button);
        calendar_div.setAttribute('tabindex', '0');
        calendar_div.addEventListener('keydown', (event) => {
            switch (event.key) {
                case "ArrowUp":
                    event.preventDefault();
                    currentPressed = 'up';
                    break;
                case "ArrowDown":
                    event.preventDefault();
                    currentPressed = 'down';
                    break;
                case "ArrowLeft":
                    currentPressed = 'left';
                    break;
                case "ArrowRight":
                    currentPressed = 'right';
                    break;
                }
        });
        calendar_div.style.outline = 'none';
        button.addEventListener("click", () => screen.playSnake());
    }
    
});

class Screen{
    constructor(tbody) {
        this.tbody = tbody;
        this.screen = [];
        let trs = tbody.querySelectorAll('tr');
        for (let tr of trs) {
            let row = []
            let tds = tr.querySelectorAll('td');
            for (let td of tds) {
                row.push(new Pixel(td));
            }
            this.screen.push(row)
        }
    }

    concatText(text) {
        let result = []
        for (let i = 0; i < 9; i++) {
            let row = []
            for (let char of text) {
                row = row.concat(ALPHA[char.toUpperCase()][i]);
            }
            result.push(row);
        }
        return result;
    }


    playSnake() {
        const coordsList = []
        for (let row = 0; row < this.screen.length; row++) {
            for (let col = 0; col < this.screen[0].length; col++) {
                if (!((row == 5 || row == 6) && col == this.screen[0].length - 1)) {
                    coordsList.push([row, col]);
                }
            }
        }
        let snake = [[3, this.screen[0].length / 2]]
        let count = 1;
        const generateAppleCoords = () => {
            const snakeStrings = snake.map(coords => JSON.stringify(coords));
            const available = coordsList.filter(coords => !snakeStrings.includes(JSON.stringify(coords)));
            return available[Math.floor(Math.random() * available.length)];
        }
        this.screen[snake[0][0]][snake[0][1]].setLevel(3);
        let apple = generateAppleCoords();
        currentPressed = "";
        let lastPressed = "";
        const timer = setInterval(() => {
            this.clear();
            if ((currentPressed == "up" && lastPressed == "down") || (currentPressed == "down" && lastPressed == "up")
                || (currentPressed == "left" && lastPressed == "right") || (currentPressed == "right" && lastPressed == "left")) {
                currentPressed = lastPressed;
            } else {
                lastPressed = currentPressed;
            }
            if (currentPressed != "") {
                for (let i = snake.length - 1; i > 0; i--) {
                    snake[i] = [snake[i-1][0], snake[i-1][1]]
                }
            }
            if (currentPressed == "up") {
                snake[0][0]--;
            } else if (currentPressed == "down") {
                snake[0][0]++;
            } else if (currentPressed == "left") {
                snake[0][1]--;
            } else if (currentPressed == "right") {
                snake[0][1]++;
            }
            if (snake[0][0] == apple[0] && snake[0][1] == apple[1]) {
                count++;
                if (snake.length == 1) {
                    snake.push([]);
                } else {
                    snake.push([snake[snake.length-1][0] + snake[snake.length-1][0] - snake[snake.length-2][0], 
                                snake[snake.length-1][1] + snake[snake.length-1][1] - snake[snake.length-2][1]]);
                }
                apple = generateAppleCoords();
            }
            if (snake[0][1] >= this.screen[0].length 
                || snake[0][1] < 0 || snake[0][0] < 0 
                || snake[0][0] >= this.screen.length
                || (snake.length != 1 && snake.map(coords => JSON.stringify(coords)).slice(1, snake.length).includes(JSON.stringify(snake[0])))) {

                clearInterval(timer);
                this.runTextSlide('You died! Score: ' + count);
            } else {
                this.screen[apple[0]][apple[1]].setLevel(3);
                for (let link of snake) {
                    if (link.length == 2) {
                        this.screen[link[0]][link[1]].setLevel(4);
                    }
                }
            }
        }, 100);
    }

    
    runTextSlide(text) {
        let concatText = this.concatText(text);
        let shift = 0;
        const timer = setInterval(() => {
            this.clear();
            if (shift - concatText[0].length  > this.screen[0].length) {
                clearInterval(timer);
            }
            shift++;
            for (let row = 1; row < 6; row++) {
                let textRow = row-1;
                let textCol = 0;
                for (let col = this.screen[0].length - shift - 1; col < this.screen[0].length-1; col++) {
                    if (col >= 0) {
                        this.screen[row][col].setLevel(concatText[textRow][textCol]);
                    }
                    textCol++;
                }
            }
        }, 50);
    }

    clear() {
        this.screen.forEach(row => {
            row.forEach(pixel => {
                pixel.clear()
            });
        });
    }
}

class Pixel {
    constructor(td) {
        this.td = td;
    }

    setLevel(level) {
        this.td.setAttribute('data-level', level);
    }

    clear() {
        this.setLevel(0);
    }

}