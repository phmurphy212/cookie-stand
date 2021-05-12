'use strict';

//proof of life
// console.log('Hello Squirrel');

//trying to manipulate the dom
function cookieTemplate(){
  const seattleList = document.getElementById('seattle-list');
  //not sure if I actually need to include 8pm in this array, putting it there for now though just in case
  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  //object literal with the Seattle data

  let seattleStore = {
    name: 'Seattle',
    min: 23,
    max: 65,
    dailyTotal: 0,
    avgCookiesPerHourArray: [],
    avg: 6.3,
    randomCustCount: function (){
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    cookieSales: function (){
      return Math.ceil(this.avg * this.randomCustCount());
    },
    renderToSales: function (){
      for (let i = 0; i < hours.length; i++){
        let li = document.createElement('li');
        li.textContent = `${hours[i]}: ${this.cookieSales()} cookies`;
        seattleList.appendChild(li);
      }
    },
    cookiesToArray: function (){
      for (let i = 0; i < hours.length; i++){
        let newArray = this.avgCookiesPerHourArray.push(this.cookieSales());
      }
    },
    sumOfSales: function (){
      let sales = 0;
      for (let i = 0; i < this.avgCookiesPerHourArray.length; i++){
        sales += this.avgCookiesPerHourArray[i];
      }
    },
    totalToSales: function (){
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.sumOfSales()} cookies`;
      seattleList.appendChild(liTotal);

    },
  };
  seattleStore.renderToSales();
  seattleStore.cookiesToArray();
  seattleStore.totalToSales();
}
cookieTemplate();
// console.log(seattleStore.cookieSales());
// console.log(seattleStore.avgCookiesPerHourArray);

// seattleStore.cookieSales();
// console.log(seattleStore.avg);
// console.log(seattleStore.randomCustCount());
// console.log(seattleStore.cookieSales());
