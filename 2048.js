function startGame() {
    var arr = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];

    generateRandom();
    generateRandom();

    function generateRandom() {
        var random = Math.floor(Math.random() * 16);
        if (arr[Math.floor(random / 4)][random % 4] === 0) {
            arr[Math.floor(random / 4)][random % 4] = 2;
            return;
        }
        generateRandom();
    }

    function moveLeft() {
        for (row = 0; row < arr.length; row++) {
            for (col = 0; col < arr[0].length; col++) {
                // var summed = false;
                if (arr[row][col]) {
                    var c = col;
                    while (c > 0 && (arr[row][c - 1] === 0 || arr[row][c - 1] === arr[row][c])) {
                        if (arr[row][c - 1] === 0) {
                            arr[row][c - 1] = arr[row][c];
                            arr[row][c] = 0;
                            c--;
                        }
                        else {
                            arr[row][c - 1] += arr[row][c];
                            arr[row][c] = 0;
                            c--;
                            break;
                        }

                    }
                }
            }
        }
        generateRandom();
        initializeMatrix();
    }

    function moveRight() {
        for (row = 0; row < arr.length; row++) {
            for (col = arr[0].length - 1; col >= 0; col--) {
                // var summed = false;
                if (arr[row][col]) {
                    var c = col;
                    while (c < (arr[0].length - 1) && (arr[row][c + 1] === 0 || arr[row][c + 1] === arr[row][c])) {
                        if (arr[row][c + 1] === 0) {
                            arr[row][c + 1] = arr[row][c];
                            arr[row][c] = 0;
                            c++;
                        }
                        else {
                            arr[row][c + 1] += arr[row][c];
                            arr[row][c] = 0;
                            c++;
                            break;
                        }

                    }
                }
            }
        }
        generateRandom();
        initializeMatrix();
    }

    function moveUp() {
        for (col = 0; col < arr[0].length; col++) {
            for (row = 0; row < arr.length; row++) {
                // var summed = false;
                if (arr[row][col]) {
                    var r = row;
                    while (r > 0 && (arr[r - 1][col] === 0 || arr[r - 1][col] === arr[r][col])) {
                        if (arr[r - 1][col] === 0) {
                            arr[r - 1][col] = arr[r][col];
                            arr[r][col] = 0;
                            r--;
                        }
                        else {
                            arr[r - 1][col] += arr[r][col];
                            arr[r][col] = 0;
                            r--;
                            break;
                        }

                    }
                }
            }
        }
        generateRandom();
        initializeMatrix();
    }

    function moveDown() {
        for (col = 0; col < arr[0].length; col++) {
            for (row = arr.length - 1; row >= 0; row--) {
                // var summed = false;
                if (arr[row][col]) {
                    var r = row;
                    while (r < arr.length - 1 && (arr[r + 1][col] === 0 || arr[r + 1][col] === arr[r][col])) {
                        if (arr[r + 1][col] === 0) {
                            arr[r + 1][col] = arr[r][col];
                            arr[r][col] = 0;
                            r++;
                        }
                        else {
                            arr[r + 1][col] += arr[r][col];
                            arr[r][col] = 0;
                            r++;
                            break;
                        }

                    }
                }
            }
        }
        generateRandom();
        initializeMatrix();
    }

    // moveDown();
    // for(r=0;r<arr.length;r++){
    //     for(c=0;c<arr[0].length;c++){
    //         process.stdout.write("" + arr[r][c]);
    //     }
    //     console.log();
    // }
    // console.log();
    // moveDown();
    // for(r=0;r<arr.length;r++){
    //     for(c=0;c<arr[0].length;c++){
    //         process.stdout.write("" + arr[r][c]);
    //     }
    //     console.log();
    // }
    // console.log();
    // moveDown();
    // for(r=0;r<arr.length;r++){
    //     for(c=0;c<arr[0].length;c++){
    //         process.stdout.write("" + arr[r][c]);
    //     }
    //     console.log();
    // }

    const COLORS = {
        2: 'rgb(238, 228, 218)',
        4: 'rgb(237, 224, 200)',
        8: 'rgb(242, 177, 121)',
        16: 'rgb(245, 149, 99)',
        32: 'rgb(246, 124, 95)',
        64: 'rgb(246, 94, 59)',
        128: 'rgb(237, 207, 114)',
        256: 'rgb(237, 204, 97)',
        512: 'rgb(236, 200, 80)',
        1024: 'rgb(237, 197, 63)',
        2048: 'rgb(235, 192, 44)'
    };

    function initializeMatrix() {
        for (let r = 0; r < arr.length; r++) {
            for (let c = 0; c < arr[0].length; c++) {
                var cell = document.getElementById(`cell${r}${c}`);
                if (arr[r][c]) {
                    cell.innerText = arr[r][c];
                    cell.style.backgroundColor = COLORS[arr[r][c]];
                } else {
                    cell.innerText = '';
                    cell.style.backgroundColor = 'rgb(205, 193, 180)';
                }
            }
        }
    }

    initializeMatrix();

    const KEY_UP = 38;
    const KEY_DOWN = 40;
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;

    document.body.addEventListener('keydown', event => {
        if (event.keyCode === KEY_UP) {
            moveUp();
        }
        if (event.keyCode === KEY_DOWN) {
            moveDown();

        }
        if (event.keyCode === KEY_LEFT) {
            moveLeft();

        }
        if (event.keyCode === KEY_RIGHT) {
            moveRight();
        }
    });
}

startGame();
var btn = document.querySelector('#btn');
btn.addEventListener('click', startGame, false);