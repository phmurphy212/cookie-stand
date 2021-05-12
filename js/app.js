'use strict';
function salmonCookies() {
  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  //proof of life
  // console.log('Hello Squirrel');

  //overall function for seattle cookie functions
  function seattleCookieFunction() {
    //access the dom
    const seattleList = document.getElementById('seattle-list');
    //
    //object literal with the Seattle data
    let seattleStore = {
      name: 'Seattle',
      min: 23,
      max: 65,
      dailyTotal: 0,
      avgCookiesPerHourArray: [],
      avg: 6.3,
      //function to return a random number
      randomCustCount: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      },
      //function to estimate hourly sales rounded up
      cookieSales: function () {
        return Math.ceil(this.avg * this.randomCustCount());
      },
      //function to move hourly sales from previous function into an array
      cookiesToArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookiesPerHourArray.push(this.cookieSales());
        }
      },
      //function to add up the hourly sales from array
      sumOfSales: function () {
        for (let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
          this.dailyTotal += this.avgCookiesPerHourArray[i];
        }
      },
      //push sales to DOM
      renderToSales: function () {
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.cookieSales()} cookies`;
          seattleList.appendChild(li);
        }
        //push total to DOM
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        seattleList.appendChild(liTotal);
      },
      //call sub-functions to return data
    };
    seattleStore.cookiesToArray();
    seattleStore.sumOfSales();
    seattleStore.renderToSales();
  }
  //the rest of the city based stores follow the same function pattern as referenced
  //in the seattleCookieFunction so I'm leaving off the comments
  function tokyoCookieFunction() {
    const tokyoList = document.getElementById('tokyo-list');

    let tokyoStore = {
      name: 'tokyo',
      min: 3,
      max: 24,
      dailyTotal: 0,
      avgCookiesPerHourArray: [],
      avg: 1.2,
      randomCustCount: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      },
      cookieSales: function () {
        return Math.ceil(this.avg * this.randomCustCount());
      },
      cookiesToArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookiesPerHourArray.push(this.cookieSales());
        }
      },
      sumOfSales: function () {
        for (let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
          this.dailyTotal += this.avgCookiesPerHourArray[i];
        }
      },
      renderToSales: function () {
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.cookieSales()} cookies`;
          tokyoList.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        tokyoList.appendChild(liTotal);
      },
    };
    tokyoStore.cookiesToArray();
    tokyoStore.sumOfSales();
    tokyoStore.renderToSales();
  }
  function dubaiCookieFunction() {
    const dubaiList = document.getElementById('dubai-list');

    let dubaiStore = {
      name: 'Dubai',
      min: 11,
      max: 38,
      dailyTotal: 0,
      avgCookiesPerHourArray: [],
      avg: 3.7,
      randomCustCount: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      },
      cookieSales: function () {
        return Math.ceil(this.avg * this.randomCustCount());
      },
      cookiesToArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookiesPerHourArray.push(this.cookieSales());
        }
      },
      sumOfSales: function () {
        for (let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
          this.dailyTotal += this.avgCookiesPerHourArray[i];
        }
      },
      renderToSales: function () {
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.cookieSales()} cookies`;
          dubaiList.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        dubaiList.appendChild(liTotal);
      },
    };
    dubaiStore.cookiesToArray();
    dubaiStore.sumOfSales();
    dubaiStore.renderToSales();
  }
  function parisCookieFunction() {
    const parisList = document.getElementById('paris-list');

    let parisStore = {
      name: 'Paris',
      min: 20,
      max: 38,
      dailyTotal: 0,
      avgCookiesPerHourArray: [],
      avg: 2.3,
      randomCustCount: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      },
      cookieSales: function () {
        return Math.ceil(this.avg * this.randomCustCount());
      },
      cookiesToArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookiesPerHourArray.push(this.cookieSales());
        }
      },
      sumOfSales: function () {
        for (let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
          this.dailyTotal += this.avgCookiesPerHourArray[i];
        }
      },
      renderToSales: function () {
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.cookieSales()} cookies`;
          parisList.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        parisList.appendChild(liTotal);
      },
    };
    parisStore.cookiesToArray();
    parisStore.sumOfSales();
    parisStore.renderToSales();
  }
  function limaCookieFunction(){
    const limaList = document.getElementById('lima-list');

    let limaStore = {
      name: 'Lima',
      min: 2,
      max: 16,
      dailyTotal: 0,
      avgCookiesPerHourArray: [],
      avg: 4.6,
      randomCustCount: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      },
      cookieSales: function () {
        return Math.ceil(this.avg * this.randomCustCount());
      },
      cookiesToArray: function () {
        for (let i = 0; i < hours.length; i++) {
          this.avgCookiesPerHourArray.push(this.cookieSales());
        }
      },
      sumOfSales: function () {
        for (let i = 0; i < this.avgCookiesPerHourArray.length; i++) {
          this.dailyTotal += this.avgCookiesPerHourArray[i];
        }
      },
      renderToSales: function () {
        for (let i = 0; i < hours.length; i++) {
          let li = document.createElement('li');
          li.textContent = `${hours[i]}: ${this.cookieSales()} cookies`;
          limaList.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        limaList.appendChild(liTotal);
      },
    };
    limaStore.cookiesToArray();
    limaStore.sumOfSales();
    limaStore.renderToSales();
  }
  //the only purpose of the 'salmon cookies' function is to call each of the
  //functions within it so later I can just call a single function
  seattleCookieFunction();
  tokyoCookieFunction();
  dubaiCookieFunction();
  parisCookieFunction();
  limaCookieFunction();
}
salmonCookies();
