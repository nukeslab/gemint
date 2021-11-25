import React from 'react'
import NavBar from '../components/navigation'
import Footer from '../components/footer';

const FAQ = () => {
    return (
        <div>
            <NavBar />

            {/* row 1 */}
        <div className="section">
        <div class="container">
            <div class="row">
                <h1 class="text-center">FAQ</h1>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        HOW DOES GEMINT.COM WORK?
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p>The Gemint.com Randomizer uses Cryptography-Secure Random Number Generation to produce all dice rolls and list randomization results.</p>
                          <p>BANG! Gemint.com randomizes FAST! Is it secure?</p>
                          <p>Absolutely. Because Cryptography-Secure Random Number Generators produce unpredictable randomness, they are trusted by large corporations like Apple to protect highly-sensitive information from attacks. We thought The Hobby deserved a great-looking Randomizer with the same world-class level of random speed and security, and Gemint.com was born!</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          WHY USE THE GEMINT.COM RANDOMIZER?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p>Your breaks deserve to run SMOOTHLY! Designed specifically for The Hobby, the Gemint.com dashboard makes your breaking process hyper-efficient … so you can spend more time ripping, and less time clicking! • Faster randomization than Random.org • Dice on the same page as the Randomizer • Timestamped dice rolls + randomizations • Big, clickable ‘Randomize’ + ‘Reset’ buttons</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          WHAT DO I GET WITH GEMINT PREMIUM?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p>Your Gemint Premium subscription puts you in full control of your Randomizing experience, with a host of features that increase the entertainment value of your break! • Change the color of the dice! Create engagement in your live streams by letting your audience pick the dice color. Ride hot dice, give last spot mojo … The choice is yours! Don’t like the dice color? Change it in your settings – use ANY hex code for a fully custom dice experience. • Brand the Randomizer with your logo – or any other image. Try posting pictures of your PC, or the cards you hope to pull in your next break. • Virtual curtain – ALSO branded with your logo or image – that conceals randomized list results, and slides up to reveal. Create suspense for your live audience without the need for clumsy blocker cards! • Customer + technical support from Gemint.com. DM us on Instagram @gemint._ or email us <a href="mailto:info@gemintcards.com">info@gemintcards.com.</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            WILL A FREE VERSION STILL EXIST ON GEMINT.COM?
                        </button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p>Yes! Our free version will always exist and we will make occasional updates to the free version, but users using the free version will not have access to the randomizer features on Gemint.com available to premium subscribers for $10/month.</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item mb-3">
                      <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            ADDDITIONAL QUESTIONS OR SUGGESTIONS?
                        </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <p>DM us on Instagram @gemint._ or email us <a href="mailto:info@gemintcards.com">info@gemintcards.com</a></p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
        </div>
    )
}

export default FAQ
