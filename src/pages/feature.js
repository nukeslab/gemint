import React from "react";
import Nav from "../components/navigation"
// import HomeImg from "../img/home-img.png";


function Home() {
    return (
      <div>
          {/* NavBar Component Call*/}
          {/* NavBar End*/}
            <Nav />
          {/* row1 */}
          < homeSideBar />
          <section>
    <div data-aos="fade-up" data-aos-duration="1000"  class="container">
        <div data-aos="fade-up" data-aos-duration="1000"  class="row">
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-12">
                <h1 class="text-center">FEATURED PRODUCTS</h1>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000"  class="row">
            <a href="product-detail.html">
                <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-3">
                    <a href="product-detail.html">
                    <div data-aos="fade-up" data-aos-duration="1000"  id="product">
                    <img class="rounded mx-auto d-block" src="images/product1.png" alt=""></img>
                    <p class="text-center"><m>Gemint Hoodie</m></p>
                    <p class="text-center">Classic Pullover Hoodie</p>
                    <p class="text-center"><m>$50.00</m></p>
                    </div>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-3">
                    <a href="product-detail.html">
                    <div data-aos="fade-up" data-aos-duration="1000"  id="product">
                    <img class="rounded mx-auto d-block" src="images/product2.png" alt=""></img>
                    <p class="text-center"><m>Hobby Homies Tee</m></p>
                    <p class="text-center">Classic Tee</p>
                    <p class="text-center"><m>$14.05</m></p>
                    </div>
                    </a>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-3">
                    <a href="product-detail.html">
                    <div data-aos="fade-up" data-aos-duration="1000"  id="product">
                    <img class="rounded mx-auto d-block" src="images/product3.png" alt=""></img>
                    <p class="text-center"><m>Hobby Driven Tee</m></p>
                    <p class="text-center">Classic Tee</p>
                    <p class="text-center"><m>$25.00</m></p>
                    </div>
                    </a>
                </div>
            
                <div data-aos="fade-up" data-aos-duration="1000"  class="col-md-3">
                    <a href="product-detail.html">
                    <div data-aos="fade-up" data-aos-duration="1000"  id="product">
                    <img class="rounded mx-auto d-block" src="images/product4.png" alt=""></img>
                    <p class="text-center"><m>Powering The Hobby Tee</m></p>
                    <p class="text-center">Classic Tee</p>
                    <p class="text-center"><m>$25.000</m></p>
                    </div>
                    </a>
                </div>
        </div>
    </div>
</section>
{/* row 4 End*/}

{/* footer */}

          <div class="row section">
              <div class="col text-center">
                  <img class="rounded mx-auto d-block img-fluid" src="images/logo.png" height="50" alt=""></img>
                  <h1 class="text-center">TRY GEMINT PREMIUM 7 DAYS FREE <br /> THEN <s>$15.00</s> <span>$10.00 </span>PER MONTH. </h1>
                  <p class="text-center">Premium access to Gemint sales tools and services.</p>
                  <a href="/signup" class="abtn ">SIGN UP</a>
              </div>
          </div>
          {/* <Footer/> */}
        

{/* footer End*/}

{/* End Here */}
      </div>
  );
}
export default Home;
