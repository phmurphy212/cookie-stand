'use strict';
function salmonCookies() {
  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  //proof of life
  console.log('Hello Squirrel');

  //trying to manipulate the dom
  function seattleCookieFunction() {
    const seattleList = document.getElementById('seattle-list');
    //object literal with the Seattle data

    let seattleStore = {
      name: 'Seattle',
      min: 23,
      max: 65,
      dailyTotal: 0,
      avgCookiesPerHourArray: [],
      avg: 6.3,
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
          seattleList.appendChild(li);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
        seattleList.appendChild(liTotal);
      },
    };
    seattleStore.cookiesToArray();
    seattleStore.sumOfSales();
    seattleStore.renderToSales();
  }
  function tokyoCookieFunction() {
    const tokyoList = document.getElementById('tokyo-list');
    //object literal with the Tokyo data

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
    //object literal with the Dubai data

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
    //object literal with the Paris data
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
    //object literal with the Lima data
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
  seattleCookieFunction();
  tokyoCookieFunction();
  dubaiCookieFunction();
  parisCookieFunction();
  limaCookieFunction();
}
salmonCookies();
