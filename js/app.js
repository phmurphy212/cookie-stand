'use strict';
// function salmonCookies() {
// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//proof of life
// console.log('Hello Squirrel');

//overall function for seattle cookie functions
// function seattleCookieFunction() {
//   //access the dom
//   const seattleList = document.getElementById('seattle-list');
//   //
//   //object literal with the Seattle data
//   let seattleStore = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     dailyTotal: 0,
//     cookiesPerHourArray: [],
//     avg: 6.3,
//     //function to return a random number
//     randomCustCount: function () {
//       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
//     //function to estimate hourly sales rounded up
//     cookiesPerHour: function () {
//       return Math.ceil(this.avg * this.randomCustCount());
//     },
//     //function to move hourly sales from previous function into an array
//     cookiesToArray: function () {
//       for (let i = 0; i < hours.length; i++) {
//         this.cookiesPerHourArray.push(this.cookiesPerHour());
//       }
//     },
//     //function to add up the hourly sales from array
//     sumOfSales: function () {
//       for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
//         this.dailyTotal += this.cookiesPerHourArray[i];
//       }
//     },
//     //push sales to DOM
//     renderToSales: function () {
//       for (let i = 0; i < hours.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = `${hours[i]}: ${this.cookiesPerHour()} cookies`;
//         seattleList.appendChild(li);
//       }
//       //push total to DOM
//       let liTotal = document.createElement('li');
//       liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//       seattleList.appendChild(liTotal);
//     },
//     //call sub-functions to return data
//   };
//   seattleStore.cookiesToArray();
//   seattleStore.sumOfSales();
//   seattleStore.renderToSales();
// }
//the rest of the city based stores follow the same function pattern as referenced
//in the seattleCookieFunction so I'm leaving off the comments
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const salesTable = document.querySelector('table');
const salesHeader = document.getElementById('tHeader');
const salesFooter = document.getElementById('tFooter');
let storeDetails = [];

function CookieStore(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.cookiesPerHourArray = [];
  storeDetails.push(this);
}
CookieStore.prototype.customerCount = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
CookieStore.prototype.salesCalculator = function () {
  this.customerCount();
  for (let i = 0; i < hours.length; i ++){
    this.cookiesPerHourArray.push(Math.ceil(this.avg * this.customerCount()));
  }
  for (let i = 0; i < this.cookiesPerHourArray.length; i++){
    this.dailyTotal += this.cookiesPerHourArray[i];
  }
};
CookieStore.prototype.createHeader = function (){
  hours.unshift('');

  for (let i = 0; i < hours.length; i++){
    let hourCells = document.createElement('td');
    hourCells.textContent = hours[i];
    salesHeader.appendChild(hourCells);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Location Total';
  salesHeader.appendChild(td);
};


CookieStore.prototype.renderToSales = function () {
  this.salesCalculator();


  let tr = document.createElement('tr');
  let storeCell = document.createElement('td');
  storeCell.textContent = this.name;
  tr.appendChild(storeCell);


  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHourArray[i];
    tr.appendChild(td);
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  tr.appendChild(tdTotal);

  salesTable.appendChild(tr);

  CookieStore.prototype.createFooter = function (){
    hours.unshift('');

    for (let i = 0; i < hours.length; i++){
      let storesAdded = document.createElement('td');
      storesAdded.textContent = hours[i];
      salesFooter.appendChild(storesAdded);
    }
    let td = document.createElement('td');
    td.textContent = '';
    salesFooter.appendChild(td);
  };
  // let header = document.createElement('thead');
  // for (let i = 0; i < hours.length; i++){
  //   header.textContent = hours[i];
  //   createHeader.appendChild(header);

  // let createHeader = document.createElement('thead');

  //push total to DOM

};



let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

function renderAll(){
  seattle.createHeader();
  // seattle.createFooter();
  seattle.renderToSales();
  tokyo.renderToSales();
  dubai.renderToSales();
  paris.renderToSales();
  lima.renderToSales();

}
renderAll();
console.log(storeDetails);



//   function tokyoCookieFunction() {
//     const tokyoList = document.getElementById('tokyo-list');

//     let tokyoStore = {
//       name: 'tokyo',
//       min: 3,
//       max: 24,
//       dailyTotal: 0,
//       cookiesPerHourArray: [],
//       avg: 1.2,
//       randomCustCount: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       },
//       cookiesPerHour: function () {
//         return Math.ceil(this.avg * this.randomCustCount());
//       },
//       cookiesToArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.cookiesPerHourArray.push(this.cookiesPerHour());
//         }
//       },
//       sumOfSales: function () {
//         for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
//           this.dailyTotal += this.cookiesPerHourArray[i];
//         }
//       },
//       renderToSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           li.textContent = `${hours[i]}: ${this.cookiesPerHour()} cookies`;
//           tokyoList.appendChild(li);
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         tokyoList.appendChild(liTotal);
//       },
//     };
//     tokyoStore.cookiesToArray();
//     tokyoStore.sumOfSales();
//     tokyoStore.renderToSales();
//   }
//   function dubaiCookieFunction() {
//     const dubaiList = document.getElementById('dubai-list');

//     let dubaiStore = {
//       name: 'Dubai',
//       min: 11,
//       max: 38,
//       dailyTotal: 0,
//       cookiesPerHourArray: [],
//       avg: 3.7,
//       randomCustCount: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       },
//       cookiesPerHour: function () {
//         return Math.ceil(this.avg * this.randomCustCount());
//       },
//       cookiesToArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.cookiesPerHourArray.push(this.cookiesPerHour());
//         }
//       },
//       sumOfSales: function () {
//         for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
//           this.dailyTotal += this.cookiesPerHourArray[i];
//         }
//       },
//       renderToSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           li.textContent = `${hours[i]}: ${this.cookiesPerHour()} cookies`;
//           dubaiList.appendChild(li);
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         dubaiList.appendChild(liTotal);
//       },
//     };
//     dubaiStore.cookiesToArray();
//     dubaiStore.sumOfSales();
//     dubaiStore.renderToSales();
//   }
//   function parisCookieFunction() {
//     const parisList = document.getElementById('paris-list');

//     let parisStore = {
//       name: 'Paris',
//       min: 20,
//       max: 38,
//       dailyTotal: 0,
//       cookiesPerHourArray: [],
//       avg: 2.3,
//       randomCustCount: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       },
//       cookiesPerHour: function () {
//         return Math.ceil(this.avg * this.randomCustCount());
//       },
//       cookiesToArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.cookiesPerHourArray.push(this.cookiesPerHour());
//         }
//       },
//       sumOfSales: function () {
//         for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
//           this.dailyTotal += this.cookiesPerHourArray[i];
//         }
//       },
//       renderToSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           li.textContent = `${hours[i]}: ${this.cookiesPerHour()} cookies`;
//           parisList.appendChild(li);
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         parisList.appendChild(liTotal);
//       },
//     };
//     parisStore.cookiesToArray();
//     parisStore.sumOfSales();
//     parisStore.renderToSales();
//   }
//   function limaCookieFunction(){
//     const limaList = document.getElementById('lima-list');

//     let limaStore = {
//       name: 'Lima',
//       min: 2,
//       max: 16,
//       dailyTotal: 0,
//       cookiesPerHourArray: [],
//       avg: 4.6,
//       randomCustCount: function () {
//         return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       },
//       cookiesPerHour: function () {
//         return Math.ceil(this.avg * this.randomCustCount());
//       },
//       cookiesToArray: function () {
//         for (let i = 0; i < hours.length; i++) {
//           this.cookiesPerHourArray.push(this.cookiesPerHour());
//         }
//       },
//       sumOfSales: function () {
//         for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
//           this.dailyTotal += this.cookiesPerHourArray[i];
//         }
//       },
//       renderToSales: function () {
//         for (let i = 0; i < hours.length; i++) {
//           let li = document.createElement('li');
//           li.textContent = `${hours[i]}: ${this.cookiesPerHour()} cookies`;
//           limaList.appendChild(li);
//         }
//         let liTotal = document.createElement('li');
//         liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//         limaList.appendChild(liTotal);
//       },
//     };
//     limaStore.cookiesToArray();
//     limaStore.sumOfSales();
//     limaStore.renderToSales();
//   }
//   //the only purpose of the 'salmon cookies' function is to call each of the
//   //functions within it so later I can just call a single function
//   seattleCookieFunction();
//   tokyoCookieFunction();
//   dubaiCookieFunction();
//   parisCookieFunction();
//   limaCookieFunction();
// }
// salmonCookies();
