'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//foothold in the DOM
const salesTable = document.getElementById('salesTable');
const salesHeader = document.getElementById('tHeader');
const salesFooter = document.getElementById('tFooter');
let storeDetails = [];
let totalOfTotals = 0;
let hourAndStoreArray = [];
//constructor method and expected variables
function CookieStore(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;

  //variables to be used within other methods/functions
  this.dailyTotal = 0;
  this.hourlyTotal = 0;
  this.cookiesPerHourArray = [];
  this.allStoresHourly = 0;
  storeDetails.push(this);
  hourAndStoreArray.push(this.name);
}

//solve for customers using random number
CookieStore.prototype.customerCount = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

//calculate total cookies sold and push that number to an array 
//and calulate the daily total and total of totals
CookieStore.prototype.salesCalculator = function () {
  this.customerCount();
  for (let i = 0; i < hours.length; i ++){
    this.cookiesPerHourArray.push(Math.ceil(this.avg * this.customerCount()));
  }
  for (let j = 0; j < this.cookiesPerHourArray.length; j++){
    this.dailyTotal += this.cookiesPerHourArray[j];
  }
  // for (let k = 1; k < (storeDetails.length); k++){
  //   totalOfTotals += storeDetails[k].dailyTotal;
  // }
};

// CookieStore.prototype.testingMultiDim = function (){
//   // console.log(hourAndStoreArray.length);
//   for (let i = 0; i < hourAndStoreArray.length; i++){
//     for (let j = 0; j < this.cookiesPerHourArray.length; j++){
//       this.allStoresHourly += this.cookiesPerHourArray[i];
//     }
//   }
//   console.log(this.allStoresHourly);
// };

// console.log(storeDetails.cookiesPerHourArray);
//render the main table data to the sales website
CookieStore.prototype.renderToSales = function () {
  this.salesCalculator();
  // this.calcHourlyAllStores();

//create the first column witht the store names
  let tr = document.createElement('tr');
  let storeCell = document.createElement('td');
  storeCell.textContent = this.name;
  tr.appendChild(storeCell);

//create the rest of the table from data passed to the array
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHourArray[i];
    tr.appendChild(td);
  }

//create the total column using daily total
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  tr.appendChild(tdTotal);

//append all of this data to the table
  salesTable.appendChild(tr);

  // this.testingMultiDim();
};

// CookieStore.prototype.calcHourlyAllStores = function(){
//   for (let i = 1; i < hours.length; i++){
//     console.log(this.hourAndStoreArray[i][i]);
//   }
// };

//instantiate new stores for each of the salmon cookie stores
new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

//stand alone function to create the header and shift the array over one index
//to include the city name field
function createHeader(){
  hours.unshift('Store');

  for (let i = 0; i < hours.length; i++){
    let hourCells = document.createElement('td');
    hourCells.textContent = hours[i];
    salesHeader.appendChild(hourCells);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Location Total';
  salesHeader.appendChild(td);
}

//stand alone function to create the footer to include the city name field
function createFooter(){

  let td = document.createElement('td');
  td.textContent = 'Totals';
  salesFooter.appendChild(td);

  for (let i = 1; i < hours.length; i++){
    let storesAdded = document.createElement('td');
    storesAdded.textContent = 'footer';
    salesFooter.appendChild(storesAdded);
  }
  let tot = document.createElement('td');
  tot.textContent = totalOfTotals;
  salesFooter.appendChild(tot);
  // let tot = document.createElement('td');
  // tot.textContent = 'totalOfTotals';
  // salesFooter.appendChild(td);
}

//scalable solution to loop through however many stores end up getting created

function renderInALoop(){
  for (let i = 0; i < storeDetails.length; i++){
    storeDetails[i].renderToSales();
  }
  createHeader();
  createFooter();
}
renderInALoop();


