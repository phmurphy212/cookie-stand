'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const salesTable = document.getElementById('salesTable');
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
CookieStore.prototype.renderToSales = function () {
  this.salesCalculator();

  let tr = document.createElement('tr');
  let storeCell = document.createElement('td');
  storeCell.textContent = this.name;
  tr.appendChild(storeCell);


  for (let i = 1; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHourArray[i];
    tr.appendChild(td);
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  tr.appendChild(tdTotal);

  salesTable.appendChild(tr);
};



let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

function createHeader(){
  hours.unshift('');
  console.log(hours);

  for (let i = 0; i < hours.length; i++){
    let hourCells = document.createElement('td');
    hourCells.textContent = hours[i];
    salesHeader.appendChild(hourCells);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Location Total';
  salesHeader.appendChild(td);
}

function createFooter(){

  let td = document.createElement('td');
  td.textContent = 'Totals';
  salesFooter.appendChild(td);

  for (let i = 1; i < hours.length; i++){
    let storesAdded = document.createElement('td');
    storesAdded.textContent = 'footer';
    salesFooter.appendChild(storesAdded);
  }
  // let td = document.createElement('td');
  // td.textContent = 'footer';
  // salesFooter.appendChild(td);
}

function renderAll(){
  createHeader();
  createFooter();
  // seattle.createHeader();
  seattle.renderToSales();
  // seattle.createFooter();
  tokyo.renderToSales();
  dubai.renderToSales();
  paris.renderToSales();
  lima.renderToSales();

}
renderAll();
