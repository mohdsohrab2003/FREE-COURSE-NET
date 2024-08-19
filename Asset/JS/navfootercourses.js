submenuData=[
    {
        id:968965932,
        homelink:"../index.html",
        webdevlink:"wevDeveleopment.html",
        appDevlink:"appDevelopment.html",

    }
]   

const subMenu_cont = document.querySelector('.sub-menu');
const logos=document.querySelector(".logo");

window.addEventListener("DOMContentLoaded", () => {
    displayNavData(submenuData);
    setupMenuToggle();
});

window.addEventListener("DOMContentLoaded",() =>{
    displaylogoData(submenuData);
});
function displaylogoData(navs){
    let displaydata = navs.map(function(cat_item) {
        return `
            <a href="${cat_item.homelink}">FreeCourse </a>
        `;
    });
    displaydata=displaydata.join(" ");
    logos.innerHTML = displaydata;
}


function displayNavData(navs) {
    let displaydata = navs.map(function(cat_item) {
        return `
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Business</a></li>
        `;
    });
    displaydata=displaydata.join(" ");
    subMenu_cont.innerHTML = displaydata;
}
// refrence links
reflinkData=[
    {
      id:998989898,
      telegramLink:"link",
      whatsapplink:"link",
      udemylink:"link",
      howtodown:"link"
    }
  ]
  const ref=document.querySelector(".refrence-link");
  
  window.addEventListener("DOMContentLoaded", () => {
    displayreflinkData(reflinkData);
    
  });
  
  function displayreflinkData(reflink) {
    let displaydata = reflink.map(function(cat_item) {
        return `
            <li id="Telegram" ><a href="${cat_item.telegramLink}"><i class="fa-brands fa-telegram"></i>JOIN TELEGRAM</a></li>
            <li id="WHATSAPP"><a href="${cat_item.whatsapplink}"><i class="fa-brands fa-whatsapp"></i>JOIN WHATSAPP</a></li>
            <li id="Udemy"><a href="${cat_item.udemylink}"><i class="fa-brands fa-udemy"></i>Free Udemy Coupon</a></li>
            <li id="DOWNLOAD"><a href="${cat_item.howtodown}"><i class="fa fa-download"></i>HOW TO DOWNLOAD</a></li>
        `;
    });
    displaydata=displaydata.join(" ");
    ref.innerHTML = displaydata;
  }

// Fotter Dynamic data
footerData=[
    {
        id:989896598789,


    }
]


const footer_container = document.querySelector('.footer');

window.addEventListener("DOMContentLoaded", () => {
    displayFooterData(footerData);
});

// function displayFooterData(footer){
//     let displaydata=footer.map(function(cat_item){
//         return ``;
//     });
// }

function displayFooterData(footer) {
    let displaydata = footer.map(function(cat_item) {
        return `
            <div class="container footer-container">
        <div class="footer-1">
            <h4><a href="../index.html">Free Courses</a></h4>
            <p>Welcome to our platform, the best place to get premium, high-quality courses that are now available to everyone.</p>
            <a href="about.html" class="btn btn-primary">Know More</a>
        </div>

        <div class="footer-2">
            <h4>Quick Link</h4>
            <ul class="quicklink">
                <li><a href="../index.html"><i class="fa fa-arrow-right"></i>Home</a></li>
                <!-- <li><a href="courses.html"><i class="fa fa-arrow-right"></i>Our Courses</a></li> -->
                <li><a href="bolg.html"><i class="fa fa-arrow-right"></i>Categoris</a></li>
                <li><a href="contact.html"><i class="fa fa-arrow-right"></i>Contact Us</a></li>
                <li><a href="about.html"><i class="fa fa-arrow-right"></i>About us</a></li>
            </ul>
        </div>
        <div class="footer-5">
          <h4>Top Categories</h4>
          <ul class="f-cat">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Programing</a></li>
            <li><a href="#">Andriod Development</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Editing</a></li>
            
          </ul>
        </div>
        <div class="footer-3">
            <h4>Improtant Link</h4>
            <ul class="privacy">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Term And Condition</a></li>
                <li><a href="#">DMCA</a></li>
            </ul>
        </div>

        <div class="footer-4">
            <h4>Contact Us</h4>
            <div class="contact-info">
                <p><i class="fa fa-envelope"></i>skillcamp@info.com</p>
                <p><i class="fa fa-envelope"></i>skillcamp@info.com</p>
            </div>
            <ul class="share">
                <li><a href="https://www.facebook.com/profile.php?id=100028439742457" target="_blank"   class="fa-brands fa-whatsapp"></a></li>
                <li><a href="https://twitter.com/MohdSohrab59263"  target="_blank"  class="fa-brands fa-telegram"></a></li>
                <li><a href="https://www.instagram.com/mohd_sohrab__23/"  target="_blank"  class="fa-brands fa-discord"></a></li>
                <!-- <li><a href="https://www.linkedin.com/in/mohd-sohrab-alam-046422249/"  target="_blank"  class="fa-brands fa-linkedin"></a></li> -->

            </ul>
        </div>
        
    </div>
    <div class="footer-copyright">
        <small>Copyright &copy; 2024 Free Courses</small>
    </div>

        `;
    });
    displaydata = displaydata.join(" ");
    footer_container.innerHTML = displaydata;
}