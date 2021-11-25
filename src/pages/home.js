import React, { useState } from "react";
import Nav from "../components/navigation"
// import HomeImg from "../img/home-img.png";
import GemintCardIMG from "../img/gemint-card.png";
import img1 from "./../assets/images/img1.png"
import instagram from "../assets/images/instagram.png"
import img2 from "../assets/images/img2.png"
import Dice from "../assets/images/dice.png"
import homeSideBar from "../components/homeSideBar";
import DiceAni from "../components/dice"
import Randomizer from "./freeRandomizer";
import TheBreakBoys from "../assets/images/TheBreakBoys.png"
import RatedRips from "../assets/images/RatedRips.jpg"
import KGASports from "../assets/images/KGASports.jpg"
import CBCsportscards from "../assets/images/CBCsportscards.png"
import brainsbreaks from "../assets/images/brainsbreaks.jpg"
import RoyalRichCards from "../assets/images/RoyalRich Cards.png"
import LoudpackBreaks from "../assets/images/Loudpack Breaks.PNG"
import pricingPage from "./pricingPage";
import $ from 'jquery'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.js'
import "slick-carousel/slick/slick-theme.css"
import  signup from '../pages/signup'


function Home() {

        $('slider').slick({
              dots: true,
              autoplay: true,
              infinite: true,
              speed: 300,
              arrow: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: null,
              nextArrow: null,
              responsive: [{
                      breakpoint: 1024,
                      settings: {
                          dots: true,
                          arrow: false,
                          autoplay: true,
                          infinite: true,
                          prevArrow: null,
                          nextArrow: null,
                          speed: 300,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      }
                  },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
                  // You can unslick at a given breakpoint now by adding:
                  // settings: "unslick"
                  // instead of a settings object
              ]
          });
    

    return (
      <div>
          {/* NavBar Component Call*/}
          {/* NavBar End*/}
            <Nav />
          {/* row1 */}
          < homeSideBar />
          <div class="row hero">
          <div class="col-md-12">
          <h4>Modern card breaking tools</h4>
          <h1><span>connecting </span>breakers & buyers</h1>
          </div>
          <div class="col-md-12">
          <p>Join Gemint Premium and get access to our full breaker’s toolset</p>
          <span>- free for 7 days + $10/month </span>
           </div>
      <div class="col my-3">
          <a href="/signup" class="abtn">SIGNUP</a>
      </div>
  </div>
     {/* row1 End */}
     {/* row2*/}
  {/* <div className="section">
  <div class="container-fluid dic">
      <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-6">
              <h4>Break Title</h4>
              <hr />
              <textarea name=""  id="" cols="auto" rows="15" placeholder="Type to add items, each on a new line."
           onChange={(event )=>{
            setUsername(event.target.value);
            // console.log(username)
           } }
           onKeyPress={(e) => {
               if(e.key === 'Enter'){
                   setBreakText(e.target.value);
                   console.log(breakText)
               }
            }
        }
              ></textarea>
              <div class="row">
              <div class="col-md-4"><p> Randomize counters: {count}</p></div>
              <div class="col-md-2"></div>
              <div class="col-md-6 "><p> Timestamp: 10/28/2021 1:14:39 PM</p>  </div>
          </div>
          <div class="row">
              <div class="col-md-12 my-3">
                  <button  class="abtn " onClick={()=> setCount(parseInt(count+1))}>RANDOMIZE</button> <a href={"/"} >RESET</a>
              </div>
          </div>
              
          
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-3 text-center  justify-content-center">
              <h2>ROLL THE DICE</h2>
              <hr class="line" />
              <DiceAni />
          </div>
          <div class="col-md-1 text-center">
              
          </div>
      </div>
  </div>
</div> */}
   <div class="container-fluid dic">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-6">
                    <h4>Break Title</h4>
                    <hr />
                    <Randomizer />
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-3 text-center  justify-content-center" id="homdac">
                    <h2>ROLL THE DICE</h2>
                    <hr class="line"/>
                    <DiceAni />
                </div>
                <div class="col-md-1 text-center">
                </div>
            </div>
        </div>





{/* row2 End*/}

{/* row3*/}
<div className="section">
        <div class="container">
            <div class="row" data-aos="fade-up" data-aos-duration="2000">

                <div class="col-md-12">
                    <h1 class="text-center">TESTIMONIALS</h1>
                    <div class="row slider mt-5">


                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4 testi-i"><img class="image-fluid" src={TheBreakBoys}
                                        alt=""></img></div>
                                <div class="col-md-8 testi-p">
                                    <p class="text-left">Gemint is the best all in one breaking tool. The Gemint team
                                        has the best support and
                                        really care about the hobby as a whole. Whenever we have any issues or any ways
                                        that we think can benefit
                                        us breakers, they take initiative and really listen to us and what we have to
                                        say. Not only do they listen,
                                        but they provide immediate support whenever needed. 10/10 would highly
                                        recommend. </p><br />
                                    <span class="testi-n">- TheBreakBoys</span>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4 testi-i"><img class="image-fluid" src={RatedRips}
                                        alt=""></img></div>
                                <div class="col-md-8 testi-p">
                                    <p class="text-left">"Gemint has made randomization for breaking smooth and
                                        convenient. THe small added
                                        details they have incorporated to randomizing such as tiers, customization of
                                        colors and brand logos
                                        have been a huge hit with our community members!" </p><br />
                                    <span class="testi-n">- RatedRips</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4 testi-i"><img class="image-fluid" src={KGASports}
                                        alt=""></img></div>
                                <div class="col-md-8 testi-p">
                                    <p class="text-left">“Gemint has proved time and time again that they stand with the
                                        community,
                                        always willing to help both novice and experienced collectors. Their website has
                                        helped provide
                                        my customers “A seamless randomization process that is both entertaining and
                                        professional!” </p><br />
                                    <span class="testi-n">- KGASports</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4 testi-i"><img class="image-fluid" src={CBCsportscards}
                                        alt=""></img></div>
                                <div class="col-md-8 testi-p">
                                    <p class="text-left">“Gemint is second to none in the way they help breakers
                                        efficiently manage
                                        breaks on their platform. The snappy user interface makes Gemint unparalleled to
                                        any other program on the market.” </p><br/>
                                    <span class="testi-n">- CBCSportscards</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4 testi-i"><img class="image-fluid" src={brainsbreaks}
                                        alt=""></img></div>
                                <div class="col-md-8 testi-p">
                                    <p class="text-left">“Fastest Randomizer in the game!”</p><br/>
                                    <span class="testi-n">- Brainsbreaks</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4 testi-i"><img class="image-fluid" src={RoyalRichCards}
                                        alt=""></img></div>
                                <div class="col-md-8 testi-p">
                                    <p class="text-left">“Fast, Quick and Efficient - Gemint makes our life easier.”
                                    </p><br/>
                                    <span class="testi-n">- RoyalRich</span>
                                </div>
                            </div>
                        </div>



                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4 testi-i"><img class="image-fluid" src={LoudpackBreaks}
                                        alt=""></img></div>
                                <div class="col-md-8 testi-p">
                                    <p class="text-left">“Gemint’s randomizer is simply second to none. It’s faster than
                                        Usain Bolt and the whole aesthetic is 10/10. Loudpack tested and approved!” </p>
                                    <br/>
                                    <span class="testi-n">- Loudpackbreaks</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
{/* row3 End*/}

{/* row 4 */}
<div className="section">
      <div class="container tiers">
          <div class="row">
              <div class="col-md-5 d-flex align-items-center">
                  <div>
                      <h4>RANDOMIZE YOUR</h4>
                      <h1>BREAKS BY <span> TIERS </span></h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                      <br />
                  </div>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-6"><img class="img-fluid" src={img2} alt=""></img></div>
          </div>
      </div>
  </div>
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

