let chars = [
  " ",
  "!",
  "&#x22;",
  "#",
  "$",
  "%",
  "&#x26;",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "&#x3c;",
  "=",
  "&#x3e;",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  '"',
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  "&#xa0;",
  "&#xa1;",
  "&#xa2;",
  "&#xa3;",
  "&#xa4;",
  "&#xa5;",
  "&#xa6;",
  "&#xa7;",
  "&#xa8;",
  "&#xa9;",
  "&#xaa;",
  "&#xab;",
  "&#xac;",
  "&#xae;",
  "&#xb0;",
  "&#xb1;",
  "&#xb2;",
  "&#xb3;",
  "&#xb4;",
  "&#xb5;",
  "&#xb6;",
  "&#xb7;",
  "&#xb8;",
  "&#xb9;",
  "&#xba;",
  "&#xbb;",
  "&#xbc;",
  "&#xbd;",
  "&#xbe;",
  "&#xbf;",
  "&#xc0;",
  "&#xc1;",
  "&#xc2;",
  "&#xc3;",
  "&#xc4;",
  "&#xc5;",
  "&#xc6;",
  "&#xc7;",
  "&#xc8;",
  "&#xc9;",
  "&#xca;",
  "&#xcb;",
  "&#xcc;",
  "&#xcd;",
  "&#xce;",
  "&#xcf;",
  "&#xd0;",
  "&#xd1;",
  "&#xd2;",
  "&#xd3;",
  "&#xd4;",
  "&#xd5;",
  "&#xd6;",
  "&#xd7;",
  "&#xd8;",
  "&#xd9;",
  "&#xda;",
  "&#xdb;",
  "&#xdc;",
  "&#xdd;",
  "&#xde;",
  "&#xdf;",
  "&#xe0;",
  "&#xe1;",
  "&#xe2;",
  "&#xe3;",
  "&#xe4;",
  "&#xe5;",
  "&#xe6;",
  "&#xe7;",
  "&#xe8;",
  "&#xe9;",
  "&#xea;",
  "&#xeb;",
  "&#xec;",
  "&#xed;",
  "&#xee;",
  "&#xef;",
  "&#xf0;",
  "&#xf1;",
  "&#xf2;",
  "&#xf3;",
  "&#xf4;",
  "&#xf5;",
  "&#xf6;",
  "&#xf7;",
  "&#xf8;",
  "&#xf9;",
  "&#xfa;",
  "&#xfb;",
  "&#xfc;",
  "&#xfd;",
  "&#xfe;",
  "&#xff;",
  "&#x104;",
  "&#x105;",
  "&#x106;",
  "&#x107;",
  "&#x108;",
  "&#x109;",
  "&#x10c;",
  "&#x10d;",
  "&#x10e;",
  "&#x10f;",
  "&#x118;",
  "&#x119;",
  "&#x11a;",
  "&#x11b;",
  "&#x11c;",
  "&#x11d;",
  "&#x124;",
  "&#x125;",
  "&#x131;",
  "&#x134;",
  "&#x135;",
  "&#x141;",
  "&#x142;",
  "&#x143;",
  "&#x144;",
  "&#x147;",
  "&#x148;",
  "&#x152;",
  "&#x153;",
  "&#x158;",
  "&#x159;",
  "&#x15a;",
  "&#x15b;",
  "&#x15c;",
  "&#x15d;",
  "&#x160;",
  "&#x161;",
  "&#x164;",
  "&#x165;",
  "&#x16c;",
  "&#x16d;",
  "&#x16e;",
  "&#x16f;",
  "&#x178;",
  "&#x179;",
  "&#x17a;",
  "&#x17b;",
  "&#x17c;",
  "&#x17d;",
  "&#x17e;",
  "&#x2c6;",
  "&#x2c7;",
  "&#x2d8;",
  "&#x2d9;",
  "&#x2da;",
  "&#x2db;",
  "&#x2dc;",
  "&#x2013;",
  "&#x2014;",
  "&#x2018;",
  "&#x2019;",
  "&#x201a;",
  "&#x201c;",
  "&#x201d;",
  "&#x201e;",
  "&#x2020;",
  "&#x2021;",
  "&#x2022;",
  "&#x2026;",
  "&#x2030;",
  "&#x2039;",
  "&#x203a;",
  "&#x20ac;",
  "&#x20b1;",
  "&#x20b7;",
  "&#x2117;",
  "&#x2122;",
  "&#x2190;",
  "&#x2191;",
  "&#x2192;",
  "&#x2193;",
  "&#x25a0;",
  "&#xe201;",
  "&#xe202;",
  "&#xe203;",
  "&#xe204;",
  "&#xe205;",
  "&#xe206;",
  "&#xe207;",
  "&#xe208;",
  "&#xe209;",
  "&#xe20a;",
  "&#xe20b;",
  "&#xe20c;",
  "&#xe20d;",
  "&#xe20e;",
  "&#xe20f;",
  "&#xe210;",
  "&#xe211;",
  "&#xe212;",
  "&#xe213;",
  "&#xe214;",
  "&#xe215;",
  "&#xe216;",
  "&#xe217;",
  "&#xe218;",
  "&#xe219;",
  "&#xe21a;",
  "&#xe21b;",
  "&#xe21c;",
  "&#xe21d;",
  "&#xe21e;",
  "&#xe21f;",
  "&#xe220;",
  "&#xe221;",
  "&#xe222;",
  "&#xe223;",
  "&#xe224;",
  "&#xe225;",
  "&#xe226;",
  "&#xe227;",
  "&#xe228;",
  "&#xe229;",
  "&#xe22a;",
  "&#xe22b;",
  "&#xe22c;",
  "&#xe22d;",
  "&#xe22e;",
  "&#xe22f;",
  "&#xe230;",
  "&#xe231;",
  "&#xe232;",
  "&#xe233;",
  "&#xe234;",
  "&#xe235;",
  "&#xe236;",
  "&#xe237;",
  "&#xe238;",
  "&#xe239;",
  "&#xe23a;",
  "&#xe23b;",
  "&#xe23c;",
  "&#xe23d;",
  "&#xe23e;",
  "&#xe23f;",
  "&#xe240;",
  "&#xe241;",
  "&#xe242;",
  "&#xe243;",
  "&#xe244;",
  "&#xe245;",
  "&#xe246;",
  "&#xe247;",
  "&#xe248;",
  "&#xe249;",
  "&#xe24a;",
  "&#xe24b;",
  "&#xe24c;",
  "&#xe24d;",
  "&#xe24e;",
  "&#xe24f;",
  "&#xe250;",
  "&#xe251;",
  "&#xe252;",
  "&#xe253;",
  "&#xe254;",
  "&#xe255;",
  "&#xe256;",
  "&#xe257;",
  "&#xe258;",
  "&#xe259;",
  "&#xe25a;",
  "&#xe25b;",
  "&#xe25c;",
  "&#xe25d;",
  "&#xe25e;",
  "&#xe25f;",
  "&#xe260;",
  "&#xe261;",
  "&#xe262;",
  "&#xe263;",
  "&#xe264;",
  "&#xe265;",
  "&#xe266;",
  "&#xe267;",
  "&#xe268;",
  "&#xe269;",
  "&#xe26a;",
  "&#xe26b;",
  "&#xe26c;",
  "&#xe26d;",
  "&#xe26e;",
  "&#xe26f;",
  "&#xe270;",
  "&#xe271;",
  "&#xe272;",
  "&#xe273;",
  "&#xe274;",
  "&#xe275;",
  "&#xe276;",
  "&#xe277;",
  "&#xe278;",
  "&#xe279;",
  "&#xe27a;",
  "&#xe27b;",
  "&#xe27c;",
  "&#xe27d;",
  "&#xe27e;",
  "&#xe27f;",
  "&#xe280;",
  "&#xe281;",
  "&#xe282;",
  "&#xe283;",
  "&#xe284;",
  "&#xe285;",
  "&#xe286;",
  "&#xe287;",
  "&#xe288;",
  "&#xe289;",
  "&#xe28a;",
  "&#xe28b;",
  "&#xe28c;",
  "&#xe28d;",
  "&#xe28e;",
  "&#xe28f;",
  "&#xe290;",
  "&#xe291;",
  "&#xe292;",
  "&#xe293;",
  "&#xe294;",
  "&#xe295;",
  "&#xe296;",
  "&#xe297;",
  "&#xe298;",
  "&#xe299;",
  "&#xe29a;",
  "&#xe29b;",
  "&#xe29c;",
  "&#xe29d;",
  "&#xe29e;",
  "&#xe29f;",
  "&#xe2a0;",
  "&#xe2a1;",
  "&#xe2a2;",
  "&#xe2a3;",
  "&#xe2a4;",
  "&#xe2a5;",
  "&#xe2a6;",
  "&#xe2a7;",
  "&#xe2a8;",
  "&#xe2a9;",
  "&#xe2aa;",
  "&#xe2ab;",
  "&#xe2ac;",
  "&#xe2ad;",
  "&#xe2ae;",
  "&#xe2af;",
  "&#xe2b0;",
  "&#xe2b1;",
  "&#xe2b2;",
  "&#xe2b3;",
  "&#xe2b4;",
  "&#xe2b5;",
  "&#xe2b6;",
  "&#xe2b7;",
  "&#xe2b8;",
  "&#xe2b9;",
  "&#xe2ba;",
  "&#xe2bb;",
  "&#xe2bc;",
  "&#xe2bd;",
  "&#xe2be;",
  "&#xe2bf;",
  "&#xe2c0;",
  "&#xe2c1;",
  "&#xe2c2;",
  "&#xe2c3;",
  "&#xe2c4;",
  "&#xe2c5;",
  "&#xe2c6;",
  "&#xe2c7;",
  "&#xe2c8;",
  "&#xe2c9;",
  "&#xe2ca;",
  "&#xe2cb;",
  "&#xe2cc;",
  "&#xe2cd;",
  "&#xe2ce;",
  "&#xe2cf;",
  "&#xe2d0;",
  "&#xe2d1;",
  "&#xe2d2;",
  "&#xe2d3;",
  "&#xe2d4;",
  "&#xe2d5;",
  "&#xe2d6;",
  "&#xe2d7;",
  "&#xe2d8;",
  "&#xe2d9;",
  "&#xe2da;",
  "&#xe2db;",
  "&#xe2dc;",
  "&#xe2dd;",
  "&#xe2de;",
  "&#xe2df;",
  "&#xe2e0;",
  "&#xe2e1;",
  "&#xe2e2;",
  "&#xe2e3;",
  "&#xe2e4;",
  "&#xe2e5;",
  "&#xe2e6;",
  "&#xe2e7;",
  "&#xe2e8;",
  "&#xe2e9;",
  "&#xe2ea;",
  "&#xe2eb;",
  "&#xe2ec;",
  "&#xe2ed;",
  "&#xe2ee;",
  "&#xe2ef;",
  "&#xe2f0;",
  "&#xe2f1;",
  "&#xe2f2;",
  "&#xe2f3;",
  "&#xe2f4;",
  "&#xe2f5;",
  "&#xe2f6;",
  "&#xe2f7;",
  "&#xe2f8;",
  "&#xe2f9;",
  "&#xe2fa;",
  "&#xe2fb;",
  "&#xe2fc;",
  "&#xe2fd;",
  "&#xe2fe;",
  "&#xe2ff;",
  "&#xe300;",
  "&#xe301;",
  "&#xe302;",
  "&#xe303;",
  "&#xe304;",
  "&#xe305;",
  "&#xe306;",
  "&#xe307;",
  "&#xe308;",
  "&#xe309;",
  "&#xe30a;",
  "&#xe30b;",
  "&#xe30c;",
  "&#xe30d;",
  "&#xe30e;",
  "&#xe30f;",
  "&#xe310;",
  "&#xe311;",
  "&#xe312;",
  "&#xe313;",
  "&#xe314;",
  "&#xe315;",
  "&#xe316;",
  "&#xe317;",
  "&#xe318;",
  "&#xe319;",
  "&#xe31a;",
  "&#xe31b;",
  "&#xe31c;",
  "&#xe31d;",
  "&#xe31e;",
  "&#xe31f;",
  "&#xe320;",
  "&#xe321;",
  "&#xe322;",
  "&#xe323;",
  "&#xe324;",
  "&#xe325;",
  "&#xe326;",
  "&#xe327;",
  "&#xe328;",
  "&#xe329;",
  "&#xe32a;",
  "&#xe32b;",
  "&#xe32c;",
  "&#xe32d;",
  "&#xe32e;",
  "&#xe32f;",
  "&#xe330;",
  "&#xe331;",
  "&#xe332;",
  "&#xe333;",
  "&#xe334;",
  "&#xe335;",
  "&#xe336;",
  "&#xe337;",
  "&#xe338;",
  "&#xe339;",
  "&#xe33a;",
  "&#xe33b;",
  "&#xe33c;",
  "&#xe33d;",
  "&#xe33e;",
  "&#xe33f;",
  "&#xe340;",
  "&#xe341;",
  "&#xe342;",
  "&#xe343;",
  "&#xe344;",
  "&#xe345;",
  "&#xe346;",
  "&#xe347;",
  "&#xe348;",
  "&#xe349;",
  "&#xe34a;",
  "&#xe34b;",
  "&#xe34c;",
  "&#xe34d;",
  "&#xe34e;",
  "&#xe34f;",
  "&#xe350;",
  "&#xe351;",
  "&#xe352;",
  "&#xe353;",
  "&#xe354;",
  "&#xe355;",
  "&#xe356;",
  "&#xe357;",
  "&#xe358;",
  "&#xe359;",
  "&#xe35a;",
  "&#xe35b;",
  "&#xe35c;",
  "&#xe35d;",
  "&#xe35e;",
  "&#xe35f;",
  "&#xe360;",
  "&#xe361;",
  "&#xe362;",
  "&#xe363;",
  "&#xe364;",
  "&#xe365;",
  "&#xe366;",
  "&#xe367;",
  "&#xe368;",
  "&#xe369;",
  "&#xe36a;",
  "&#xe36b;",
  "&#xe36c;",
  "&#xe36d;",
  "&#xe36e;",
  "&#xe36f;",
  "&#xe370;",
  "&#xe371;",
  "&#xe372;",
  "&#xe373;",
  "&#xe374;",
  "&#xe375;",
  "&#xe376;",
  "&#xe377;",
  "&#xe378;",
  "&#xe379;",
  "&#xe37a;",
  "&#xe37b;",
  "&#xe37c;",
  "&#xe37d;",
  "&#xe37e;",
  "&#xe37f;",
];

import DnDFileController from "./util/DnDFileController.js";

//usable lines
//line width: 40
// 5 header lines that are not editable!
const headerLines = 5;
const rows = 19;
const columns = 40;

let fgColors = Array.from(Array(rows), () => new Array(columns));
let bgColors = Array.from(Array(rows), () => new Array(columns));
let fgButtons = [];
let bgButtons = [];
let cells = Array.from(Array(rows), () => new Array(columns));
let lastSelected = null; //needed for shift click
let selected = [];

function checkMove(event) {
  //shift move add to selection
  //shift + ctrl swap rows
  return false;
}

function move(event) {
  let oldSelection = selected;
  let newSelection = [];
  let dr = 0;
  let dc = 0;
  let key = event.key;
  switch (key) {
    case "ArrowUp":
      {
        dr = -1;
      }
      break;
    case "ArrowDown":
      {
        dr = +1;
      }
      break;
    case "ArrowLeft":
      {
        dc = -1;
      }
      break;
    case "ArrowRight":
      {
        dc = 1;
      }
      break;
    default:
      return;
  }

  for (let i = 0; i < selected.length; i++) {
    let cell = selected[i];
    let newRow = cell.row + dr;
    let newColumn = cell.column + dc;
    if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
      let newCell = cells[newRow][newColumn];
      if (cell == lastSelected) {
        lastSelected = newCell;
      }
      if (!event.ctrlKey || event.shiftKey) {
        if (!newSelection.includes(newCell)) {
          newSelection.push(newCell);
        }
        if (event.shiftKey && !newSelection.includes(cell)) {
          newSelection.push(cell);
        }
      } else {
        if (selected.includes(newCell)) {
          newSelection.push(newCell);
        }
      }
    }
  }

  if (event.shiftKey && event.ctrlKey) {
    let savedText = Array.from(Array(rows), () => new Array(columns));
    let savedFg = Array.from(Array(rows), () => new Array(columns));
    let savedBg = Array.from(Array(rows), () => new Array(columns));
    let selection = newSelection;
    newSelection = [];

    for (let i = 0; i < selection.length; i++) {
      let cell = selection[i];
      let newRow = cell.row - dr;
      let newColumn = cell.column - dc;
      if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
        let newCell = cells[newRow][newColumn];
        if (selection.includes(newCell)) {
          savedText[cell.row][cell.column] = newCell.innerHTML;
          savedFg[cell.row][cell.column] = fgColors[newRow][newColumn];
          savedBg[cell.row][cell.column] = bgColors[newRow][newColumn];
          newSelection.push(cell);
        }
      }
      if (savedText[cell.row][cell.column] == undefined || savedText[cell.row][cell.column] == null) {
        newRow = cell.row + dr;
        newColumn = cell.column + dc;
        let newCell = cells[newRow][newColumn];
        while (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns && selection.includes(newCell)) {
          newRow += dr;
          newColumn += dc;
          if (newRow < 0 || newRow >= rows || newColumn < 0 || newColumn >= columns) {
            break;
          }
          newCell = cells[newRow][newColumn];
        }
        newRow -= dr;
        newColumn -= dc;
        newCell = cells[newRow][newColumn];

        if (newCell != null && !selected.includes(newCell)) {
          savedText[cell.row][cell.column] = newCell.innerHTML;
          savedFg[cell.row][cell.column] = fgColors[newRow][newColumn];
          savedBg[cell.row][cell.column] = bgColors[newRow][newColumn];
        } else {
          console.log(cell.row + " " + cell.column);
          console.log(bgColors);
          savedText[cell.row][cell.column] = " ";
          savedFg[cell.row][cell.column] = -1;
          savedBg[cell.row][cell.column] = -1;
        }
      }
    }
    let combined = selected.concat(selection);
    for (let i = 0; i < combined.length; i++) {
      let cell = combined[i];
      let text = savedText[cell.row][cell.column];
      let fgColor = savedFg[cell.row][cell.column];
      let bgColor = savedBg[cell.row][cell.column];
      if (text == undefined || text == null) {
        text = " ";
      }
      if (fgColor == undefined || fgColor == null) {
        fgColor = -1;
      }
      if (bgColor == undefined || bgColor == null) {
        bgColor = -1;
      }
      cell.innerHTML = text;
      setColor(cell.row, cell.column, "fg", fgColor);
      setColor(cell.row, cell.column, "bg", bgColor);
    }
  }

  updateSelection(newSelection);
}

function onButtonClick(button) {
  if (selected.length == 0) {
    return;
  }
  let text = "";
  if (button.style.color == "transparent") {
    text = " ";
  } else {
    text = button.innerHTML;
  }
  for (let i = 0; i < selected.length; i++) {
    selected[i].innerHTML = text;
  }
}

function updateSelection(newSelection) {
  //let toRemove = oldSelection.filter((value) => {
  //  return !newSelection.includes(value);
  //});
  let toRemove = selected.filter((value) => {
    return !newSelection.includes(value);
  });
  for (let i = 0; i < toRemove.length; i++) {
    toRemove[i].classList.remove("selected");
  }
  for (let i = 0; i < newSelection.length; i++) {
    newSelection[i].classList.add("selected");
  }
  for (let i = 0; i < fgButtons.length; i++) {
    fgButtons[i].classList.remove("selected");
  }
  for (let i = 0; i < bgButtons.length; i++) {
    bgButtons[i].classList.remove("selected");
  }
  if (lastSelected != null && selected.length > 0) {
    let row = lastSelected.row;
    let column = lastSelected.column;
    fgButtons[parseInt(fgColors[row][column], 16) + 1].classList.add("selected");
    bgButtons[parseInt(bgColors[row][column], 16) + 1].classList.add("selected");
  }
  selected = newSelection;
}

function multiSelection(cell, event) {
  if (!event.shiftKey && !event.ctrlKey) {
    return false;
  }
  if (cell == lastSelected) {
    return false;
  }
  let newSelected = [];
  if (event.shiftKey) {
    let startRow = Math.min(lastSelected.row, cell.row);
    let endRow = Math.max(lastSelected.row, cell.row);
    let startColumn = Math.min(lastSelected.column, cell.column);
    let endColumn = Math.max(lastSelected.column, cell.column);
    newSelected = cells.flat().filter((value) => {
      return value.row >= startRow && value.row <= endRow && value.column >= startColumn && value.column <= endColumn;
    });
    console.log(newSelected);
  } else {
    newSelected = [cell];
  }

  //remove selection

  if (event.ctrlKey) {
    newSelected = selected.concat(newSelected);
    newSelected = newSelected.filter((item, pos) => newSelected.indexOf(item) === pos);
  }
  updateSelection(newSelected);
  return true;
}

function onCellClick(cell, event) {
  //console.log(cell.row + " " + cell.column)
  if (multiSelection(cell, event)) {
    lastSelected = cell;
    return;
  }
  lastSelected = cell;
  let oldSelected = selected;
  let newSelected = selected;
  if (selected.includes(cell)) {
    //todo find better method to remove from element
    newSelected = selected.filter((value) => {
      return value != cell;
    });
  } else {
    newSelected = [cell];
  }
  updateSelection(newSelected);
  //console.log(row + " " + column);
}

function removeColors(cell, prefix) {
  //magic number: 11 colors 0-10 / 0-a
  for (let i = 0; i <= 10; i++) {
    cell.classList.remove(prefix + i.toString(16));
  }
}

function setColor(selectedRow, selectedColumn, type, index) {
  let colors = type == "fg" ? fgColors : bgColors;
  removeColors(cells[selectedRow][selectedColumn], type[0]);
  let intColor = parseInt(index, 16);
  let color = -1;
  cells[selectedRow][selectedColumn].classList.add(type[0] + index);
  colors[selectedRow][selectedColumn] = index;
  if (intColor >= 0) {
    color = index;
  } else {
    let column = selectedColumn;
    //find first color
    for (column = selectedColumn; column >= 0; column--) {
      if (parseInt(colors[selectedRow][column], 16) >= 0) {
        color = colors[selectedRow][column];
        break;
      }
    }
    removeColors(cells[selectedRow][selectedColumn], type[0]);
    cells[selectedRow][selectedColumn].classList.add(type[0] + color);
  }
  for (let column = selectedColumn + 1; column < columns; column++) {
    if (parseInt(colors[selectedRow][column], 16) >= 0) {
      break;
    }
    removeColors(cells[selectedRow][column], type[0]);
    cells[selectedRow][column].classList.add(type[0] + color);
  }
}

function onColorClick(button, type, index) {
  if (selected.length == 0) {
    return;
  }
  //todo

  let colors = type == "fg" ? fgColors : bgColors;
  let buttons = type == "fg" ? fgButtons : bgButtons;
  buttons[parseInt(colors[lastSelected.row][lastSelected.column], 16) + 1].classList.remove("selected");
  buttons[parseInt(index, 16) + 1].classList.add("selected");
  if (selected.length == 1) {
    let cell = selected[0];
    if (index == colors[cell.row][cell.column]) {
      return; // we already selected this color
    }
    setColor(cell.row, cell.column, type, index);
  } else {
    for (let i = 0; i < selected.length; i++) {
      let cell = selected[i];
      setColor(cell.row, cell.column, type, index);
    }
  }
  //console.log(button + " " + type + " " + index)
}

function setupChars() {
  let buttonText = "";
  let buttonsElement = document.getElementById("charlist");
  for (let idx in chars) {
    let char = chars[idx];
    if (char == " ") {
      buttonText += '<span style="color: transparent">_</span>\n';
    } else {
      buttonText += "<span>" + char + "</span>\n";
    }
  }
  buttonsElement.innerHTML = buttonText;
  let buttons = buttonsElement.getElementsByTagName("span");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      onButtonClick(buttons[i]);
    });
  }
}

function setupCells() {
  let html = "";
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      fgColors[row][column] = -1;
      bgColors[row][column] = -1;
      html += '<span class="f7 b8"> </span>';
    }
    fgColors[row][0] = 7;
    bgColors[row][0] = 8;
    html += "<br>";
  }
  let content = document.getElementById("content");
  content.innerHTML = html;
  let cellList = content.getElementsByTagName("span");
  for (let i = 0; i < cellList.length; i++) {
    let row = Math.floor(i / columns);
    let column = i % columns;
    let cell = cellList[i];
    cell.column = column;
    cell.row = row;
    cells[row][column] = cell;
    cell.addEventListener("click", (event) => {
      onCellClick(cell, event);
    });
    //console.log(cellList[i]);
  }
}

function setupColors(type) {
  let colorContainer = document.getElementById(type + "Colors");
  let html = "";
  html += '<button class="button" style="background-color: transparent; color: red;">X</button>\n';
  html += '<button class="button" style="background-color: transparent;">_</button>\n';
  html += '<button class="button" style="background-color:#FF0000;">_</button>\n';
  html += '<button class="button" style="background-color:#00FF00;">_</button>\n';
  html += '<button class="button" style="background-color:#FFFF00;">_</button>\n';
  html += '<button class="button" style="background-color:#0000FF;">_</button>\n';
  html += '<button class="button" style="background-color:#FF00FF;">_</button>\n';
  html += '<button class="button" style="background-color:#00FFFF;">_</button>\n';
  html += '<button class="button" style="background-color:#FFFFFF;">_</button>\n';
  html += '<button class="button" style="background-color:#000000;">_</button>\n';
  html += '<button class="button" style="background-color:#FF9900;">_</button>\n';
  html += '<button class="button" style="background-color:#9147FF;">_</button>\n';
  colorContainer.innerHTML = html;

  let colors = colorContainer.getElementsByTagName("button");
  let buttons = type == "fg" ? fgButtons : bgButtons;
  for (let i = 0; i < colors.length; i++) {
    buttons.push(colors[i]);
    colors[i].addEventListener("click", () => {
      onColorClick(colors[i], type, (i - 1).toString(16));
    });
  }
}

function reset() {
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      fgColors[row][column] = -1;
      bgColors[row][column] = -1;
      removeColors(cells[row][column], "f");
      removeColors(cells[row][column], "b");
      cells[row][column].innerHTML = " ";
      cells[row][column].classList.add("f7");
      cells[row][column].classList.add("b8");
    }
    fgColors[row][0] = 7;
    bgColors[row][0] = 8;
  }
}

function parseJson(json) {
  //we expect a json file in the form of template.json
  //console.log(json)
  reset();
  if (json.title != undefined && json.title != null) {
    document.getElementById("titleInput").value = json.title;
    //console.log("found title: " + json.title)
    //console.log(document.getElementById("titleInput"))
  }

  if (Array.isArray(json.lines)) {
    console.log(json.lines);
    if (json.lines.length <= 5) {
      return;
    }
    for (let hrow = 5; hrow < Math.min(json.lines.length, rows + 5); hrow++) {
      let chars = 0;
      let line = json.lines[hrow];
      let row = hrow - 5;
      //console.log(row + " " + line)
      for (let column = 0; column < line.length; column++) {
        if (line[column] == "²") {
          //console.log("setting front color of " + row + " " + column + " to " + line[column])
          column++;
          let color = line[column];
          setColor(row, chars, "fg", color);
        } else if (line[column] == "³") {
          //console.log("setting background color of " + row + " " + column + " to " + line[column])
          column++;
          let color = line[column];
          setColor(row, chars, "bg", color);
          cells[row][chars].classList.add("b" + color);
        } else {
          //console.log("setting " + row + " " + column + " to " + line[column])
          cells[row][chars].innerHTML = line[column];
          chars++;
          if (chars >= columns) {
            break;
          }
        }
      }
    }
  }
}

function generateJson() {
  let json = {
    lines: [
      "²7³1               ³0 ²8³3                        ",
      "²7³1   JvPeek TV   ³0 ²8³3 Mittwoch ... 20:00 CET ",
      "²7³1  Twitch Text  ³0 ²8³3 Sonntag .... 11:00 CET ",
      "²7³1               ³0 ²8³3                        ",
      "²0³0                                        ",
    ],
    title: "CHANGE ME",
  };
  for (let row = 0; row < rows; row++) {
    let rowString = "";
    for (let column = 0; column < columns; column++) {
      let fgColor = fgColors[row][column];
      if (fgColor >= 0) {
        rowString += "²" + fgColor;
      }
      let bgColor = bgColors[row][column];
      if (bgColor >= 0) {
        rowString += "³" + bgColor;
      }
      rowString += cells[row][column].innerHTML;
    }
    json.lines.push(rowString);
  }

  let title = document.getElementById("titleInput").value;
  if (title.trim() == "") {
    title = "CHANGE ME";
  }
  json.title = title;
  return json;
}

function save() {
  let json = generateJson();

  var myBlob = new Blob([JSON.stringify(json, null, 2)], { type: "text/json" });
  var url = window.URL.createObjectURL(myBlob);
  var anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "MyPage.json";
  anchor.click();
  window.URL.revokeObjectURL(url);
  document.removeChild(anchor);
}

// disable text selection
document.onselectstart = function () {
  return false;
};

window.addEventListener("load", () => {
  setupChars();
  setupCells();
  setupColors("fg");
  setupColors("bg");

  //getPageImporter();
  // Handle keys
  document.addEventListener("keypress", (event) => {
    keyPress(event.key);
  });
  document.addEventListener("keydown", (event) => {
    keyDown(event);
  });

  document.getElementById("resetButton").addEventListener("click", () => {
    reset();
  });
  document.getElementById("exportButton").addEventListener("click", () => {
    save();
  });

  //drop listener
  new DnDFileController("html", function (data) {
    let files = data.files
    var f = files[0];
    
    //console.log(f)
    let str = data.getData("text/plain")
    if (f != undefined) {
      if (!f.type.match('application/json')) {
        alert('Not a JSON file!');
      }
  
      var reader = new FileReader();
      reader.onloadend = function(e) {
        var result = JSON.parse(this.result);
        parseJson(result)
      };
      reader.readAsText(f);
    }else if(str != undefined && str != "") {
      parseJson(JSON.parse(str))
    }
  });
  // Prepare and refresh headline
});

function keyDown(event) {
  if (selected == null) {
    return;
  }
  move(event);
}

function keyPress(key) {
  if (selected.length > 0 && chars.includes(key)) {
    for (let i = 0; i < selected.length; i++) {
      selected[i].innerHTML = key;
    }
    //move cursor
    if (selected.length == 1) {
      let column = selected[0].column;
      let row = selected[0].row;
      column++;
      if (column >= columns) {
        column = 0;
        row = cell.row + 1;
        if (row >= rows) {
          row = rows - 1; //no wrap around
        }
      }
      let cell = cells[row][column];
      lastSelected = cell;
      updateSelection([cell]);
    }
  }
}
