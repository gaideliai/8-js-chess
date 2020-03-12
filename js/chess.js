'use strict';

const numbers1 = document.querySelector('.numbers');
const numbers2 = document.querySelector('.numbers:nth-child(3)');
const letters1 = document.querySelector('.letters');
const letters2 = document.querySelector('.letters:nth-child(4)');
const board = document.querySelector('.board');
const rowsCount = 8;
const columnsCount = 8;
const abc = 'abcdefghijklmnopqrstuvwxyz';
const firstColor = '#fff';
const secondColor = '#000';
let color = '';


let BORDER = '';

for (let i=rowsCount; i>=1; i--){
    BORDER+=`<div class="number"
                style="height: calc(100% / ${rowsCount})">
                <div>${i}</div>
            </div>`;
}

numbers1.innerHTML = BORDER;
numbers2.innerHTML = BORDER;

let LETTERS = '';

for (let i=0; i<columnsCount; i++){
    if (i<=abc.length){
        LETTERS+=`<div class="letter"
                        style="width: calc(100% / ${columnsCount})">
                        <div>${abc[i]}</div>
                    </div>`;
    }
}

letters1.innerHTML = LETTERS;
letters2.innerHTML = LETTERS;

let HTML = '';

for ( let y=1; y<=rowsCount; y++ ) {
    HTML += `<div class="row"
                  style="height: calc(100% / ${rowsCount});">`;
        for ( let x=1; x<=columnsCount; x++ ) {
            if ( (x+y)%2 === 0 )  {
                color = firstColor;
            } else {
                color = secondColor;
            }

            HTML += `<div class="cell"
                          style="background-color: ${color};
                                 width: calc(100% / ${columnsCount});">
                    </div>`;
        }
    HTML += `</div>`;
}

board.innerHTML = HTML;
