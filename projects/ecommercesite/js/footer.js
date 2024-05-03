document.addEventListener('DOMContentLoaded', function() {
        
    const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
            <div class="footerContent">
                    <img src="https://images.freeimages.com/image/previews/12a/nighttime-dream-logo-5693722.png?fmt=webp&h=350" class="logo" alt="">
                    <div class="footerUlContainer">
                    <ul class="category">
                    <li class="categoryTitle">Go to bed</li>
                    <li><a href="#" class="footerLink">Dream</a></li>
                    <li><a href="#" class="footerLink">Rest</a></li>
                    <li><a href="#" class="footerLink">Nap</a></li>
                    <li><a href="#" class="footerLink">Snooze</a></li>
                    <li><a href="#" class="footerLink">Slumber</a></li>
                    <li><a href="#" class="footerLink">Bedtime</a></li>
                    <li><a href="#" class="footerLink">Doze</a></li>
                    <li><a href="#" class="footerLink">Snore</a></li>
                    <li><a href="#" class="footerLink">Insomnia</a></li>
                    </ul>
                    <ul class="category">
                    <li class="categoryTitle">Hit the hay</li>
                    <li><a href="#" class="footerLink">REM</a></li>
                    <li><a href="#" class="footerLink">Sleepiness</a></li>
                    <li><a href="#" class="footerLink">Pillow</a></li>
                    <li><a href="#" class="footerLink">Yawn</a></li>
                    <li><a href="#" class="footerLink">Sleepwalking</a></li>
                    <li><a href="#" class="footerLink">Restlessness</a></li>
                    <li><a href="#" class="footerLink">Drowsiness</a></li>
                    <li><a href="#" class="footerLink">Siesta</a></li>
                    <li><a href="#" class="footerLink">Sleep cycle</a></li>
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
});