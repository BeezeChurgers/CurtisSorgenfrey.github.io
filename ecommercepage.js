// Pulls Nav Bar with to each page
const createNav = () => {
    let nav = document.querySelector('.navbar');
  
    nav.innerHTML = `
          <div class="nav">
                          <img src="https://images.freeimages.com/image/previews/12a/nighttime-dream-logo-5693722.png?fmt=webp&h=350" class="brandLogo" alt="">
                          <div class="navItems">
                                  <div class="search">
                                          <input type="text" class="searchBox" placeholder="search brand, product">
                                          <button class="searchBtn">search</button>
                                  </div>
                                  <a href="#"><img src="https://cdn-icons-png.freepik.com/256/1144/1144760.png?semt=ais_hybrid" alt=""></a>
                                  <a href="#"><img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt=""></a>
                          </div>
                  </div>
                  
                  <!-- Links Below Nav Bar -->
                  <ul class="linksContainer">
                      <li class="linkItem"><a href="#" class="link">sheets</a></li>
                      <li class="linkItem"><a href="#" class="link">pillows</a></li>
                      <li class="linkItem"><a href="#" class="link">towels</a></li>
                      <li class="linkItem"><a href="#" class="link">pajamas</a></li>
                  </ul>
      `;
  }
  
  createNav();
  
  const createFooter = () => {
    let footer = document.querySelector('footer');
  
    footer.innerHTML = `
      <div class="footerContent">
                          <img src="https://images.freeimages.com/image/previews/12a/nighttime-dream-logo-5693722.png?fmt=webp&h=350" class="logo" alt="">
                          <div class="footerUlContainer">
                                  <ul class="category">
                                          <li class="categoryTitle">women</li>
                                          <li><a href="#" class="footerLink">t-shirts</a></li>
                                          <li><a href="#" class="footerLink">sweatshirts</a></li>
                                          <li><a href="#" class="footerLink">shirts</a></li>
                                          <li><a href="#" class="footerLink">jeans</a></li>
                                          <li><a href="#" class="footerLink">trousers</a></li>
                                          <li><a href="#" class="footerLink">shoes</a></li>
                                          <li><a href="#" class="footerLink">casuals</a></li>
                                          <li><a href="#" class="footerLink">formals</a></li>
                                          <li><a href="#" class="footerLink">sports</a></li>
                                          <li><a href="#" class="footerLink">watch</a></li>
                                  </ul>
                                  <ul class="category">
                                          <li class="categoryTitle">men</li>
                                          <li><a href="#" class="footerLink">t-shirts</a></li>
                                          <li><a href="#" class="footerLink">sweatshirts</a></li>
                                          <li><a href="#" class="footerLink">shirts</a></li>
                                          <li><a href="#" class="footerLink">jeans</a></li>
                                          <li><a href="#" class="footerLink">trousers</a></li>
                                          <li><a href="#" class="footerLink">shoes</a></li>
                                          <li><a href="#" class="footerLink">casuals</a></li>
                                          <li><a href="#" class="footerLink">formals</a></li>
                                          <li><a href="#" class="footerLink">sports</a></li>
                                          <li><a href="#" class="footerLink">watch</a></li>
                                  </ul>
                          </div>
                  </div>
                  
                  <p class="footerTitle">about company</p>
                  <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
                  <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
                  <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
                  <div class="footerSocialContainer">
                          <div>
                                  <a href="#" class="socialLink">terms & services</a>
                                  <a href="#" class="socialLink">privacy page</a>
                          </div>
                          <div>
                                  <a href="#" class="socialLink">instagram</a>
                                  <a href="#" class="socialLink">facebook</a>
                                  <a href="#" class="socialLink">twitter</a>
                          </div>
                  </div>
                  <p class="footerCredit">Clothing, Best apparels online store</p>
      `;
  }
  
  createFooter();
  
  /*
  // Previous and Next Buttons for cards
  const productContainers = document.getElementsByClassName("productContainer");
  const nxtBtn = document.getElementsByClassName("nxtBtn");
  const preBtn = document.getElementsByClassName('preBtn');
  
  // converting to array
  const arrProductContainers = Array.from(productContainers);
  const arrNxtBtn = Array.from(nxtBtn);
  const arrPreBtn = Array.from(preBtn);
  
  arrProductContainers.forEach((item, i) => {
      let containerDimenstions = item.getBoundingClientRect();
      let containerWidth = containerDimenstions.width;
  
      arrNxtBtn[i].addEventListener("click", () => {
          item.scrollLeft += containerWidth;
      })
  
      arrPreBtn[i].addEventListener("click", () => {
          item.scrollLeft -= containerWidth;
      })
  })
  */
  