document.addEventListener('DOMContentLoaded', function() {
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
});