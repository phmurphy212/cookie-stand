'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//foothold in the DOM
const salesTable = document.getElementById('salesTable');
const salesHeader = document.getElementById('tHeader');
let newStoreForm = document.getElementById('newStore');
let footer = document.getElementById('tFooter');
let storeDetails = [];
let onlyTotals = [];
let grandTotal = 0;



//constructor method and expected variables
function CookieStore(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;

  //variables to be used within other methods/functions
  this.dailyTotal = 0;
  this.cookiesPerHourArray = [];
  storeDetails.push(this);
  this.renderToSales();
}

//solve for customers using random number
CookieStore.prototype.customerCount = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

//calculate total cookies sold and push that number to an array
//and calulate the daily total and total of totals
CookieStore.prototype.salesCalculator = function () {
  for (let i = 0; i < hours.length; i ++){
    this.cookiesPerHourArray.push(Math.ceil(this.avg * this.customerCount()));
  }
  for (let i = 0; i < this.cookiesPerHourArray.length; i++){
    this.dailyTotal += this.cookiesPerHourArray[i];
  }
  onlyTotals.push(this.dailyTotal);
  let count = 0;
  for (let i = 0; i < storeDetails.length; i++){
    count += onlyTotals[i];
  }
  grandTotal = count;
};

//render the main table data to the sales website
CookieStore.prototype.renderToSales = function () {
  this.salesCalculator();

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
};

//instantiate new stores for each of the salmon cookie stores
new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);


//stand alone function to create the header and shift the array over one index
//to include the city name field
function createHeader(){

  let hourCells = document.createElement('td');
  hourCells.textContent = 'Store';
  salesHeader.appendChild(hourCells);
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
  let tr = document.createElement('tr');
  let tf = document.createElement('td');
  tf.textContent = 'Totals';
  tr.appendChild(tf);

  for (let i = 0; i < hours.length; i++){
    let columnTotal = document.createElement('td');
    let hourlyTotal = 0;
    for (let j = 0; j < storeDetails.length; j++){
      hourlyTotal += storeDetails[j].cookiesPerHourArray[i];
    }
    columnTotal.textContent = hourlyTotal;
    tr.appendChild(columnTotal);
  }
  let tot = document.createElement('td');
  tot.textContent = grandTotal;
  tr.appendChild(tot);

  footer.appendChild(tr);
}

//call create header and footer
createHeader();
createFooter();

//looks for a click on my submit button
//when the event happens, it instantiates a new store
//and renders a new footer with correct totals
function handleSubmit(event){
  event.preventDefault();
  let name = event.target.city.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let avg = +event.target.avg.value;
  new CookieStore(name, min, max, avg);
  footer.innerHTML = '';
  createFooter();
}

//event listener
newStoreForm.addEventListener('submit', handleSubmit);

