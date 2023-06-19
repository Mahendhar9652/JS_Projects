var data = [];
        var display = document.getElementById('display');

        const fetchAll = async () => {
          let res = await fetch('https://fakestoreapi.com/products');
          let json = await res.json();
          data = json;
        }

        fetchAll().then(() => {
          displayAll();
        });

        function displayAll() {
          display.innerHTML = '';
          data.map((item) => {
            display.innerHTML += `<div class="card">
              <img src='${item.image}' alt='${item.title}' class='card-img'>
              <p>${item.title}</p>
              <p>$${item.price}</p>
              <p>Rating: ${item.rating.rate}</p>
              <button class='button'>Buy</button>
            </div>`;
          });
        }

        function displayMens() {
          display.innerHTML = '';
          let mens = "men's clothing";
          data.filter((i) => i.category == mens).map((item) => {
            display.innerHTML += `<div class="card">
              <img src='${item.image}' alt='${item.title}' class='card-img'>
              <p>${item.title}</p>
              <p>$${item.price}</p>
              <p>Rating: ${item.rating.rate}</p>
              <button class='button'>Buy</button>
            </div>`;
          });
        }

        function displayWomens() {
          display.innerHTML = '';
          let womens = "women's clothing";
          data.filter((i) => i.category == womens).map((item) => {
            display.innerHTML += `<div class="card">
              <img src='${item.image}' alt='${item.title}' class='card-img'>
              <p>${item.title}</p>
              <p>$${item.price}</p>
              <p>Rating: ${item.rating.rate}</p>
              <button class='button'>Buy</button>
            </div>`;
          });
        }

        function displayElectronics() {
          display.innerHTML = '';
          let electronic = "electronics";
          data.filter((i) => i.category == electronic).map((item) => {
            display.innerHTML += `<div class="card">
              <img src='${item.image}' alt='${item.title}' class='card-img'>
              <p>${item.title}</p>
              <p>$${item.price}</p>
              <p>Rating: ${item.rating.rate}</p>
              <button class='button'>Buy</button>
            </div>`;
          });
        }

        function displayJewellery() {
          display.innerHTML = '';
          let jewellerys = "jewelery";
          data.filter((i) => i.category == jewellerys).map((item) => {
            display.innerHTML += `<div class="card">
              <img src='${item.image}' alt='${item.title}' class='card-img'>
              <p>${item.title}</p>
              <p>$${item.price}</p>
              <p>Rating: ${item.rating.rate}</p>
              <button class='button'>Buy</button>
            </div>`;
          });
        }