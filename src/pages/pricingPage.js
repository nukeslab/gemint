import React from 'react'
import NavBar from "../components/navigation"

const pricingPage = () => {
    return (
            <div>
            <NavBar/>
            <div class="pricing section">
        <div class="container text-center">
            <div class="row">
                <h1>Pricing <span>Plans</span></h1>
                <p>Choose the plan that's right for you and your business</p>
                
                <div class="text-center">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pay Monthly</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pay Yearly</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-1"></div>
                                    <div class="col-md-5">
                                        <div class="py-5 px-4 me-5 black-bg text-start">
                                            <img src="images/Free.png" alt=""></img>
                                            <h4 class="mb-3">FREE</h4>
                                            <h5 class="mb-4"><span>$0</span> / month</h5>
                                            <p class="mb-5">Experience digital business cards for free, forever.</p>
                                            <div class="text-center mb-4 d-grid">
                                                <a href="#">SIGN UP</a>
                                            </div>
                                            <ul>
                                                <li>Available on iOS, Android, and web</li>
                                                <li>Create four digital business cards for yourself</li>
                                                <li>Share your card via QR code, email, text, or an NFC tag</li>
                                                <li>Address book with unlimited contacts</li>
                                                <li>Virtual backgrounds</li>
                                                <li>Email signatures</li>
                                                <li>Import Google Contacts</li>
                                                <li>3 paper business card transcriptions/month</li>
                                            </ul>
                                            <div class="text-center mt-5 d-grid">
                                                <a href="#">SIGN UP</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="py-5 px-4 ms-5 black-bg text-start" style={{backgroundImage: "linear-gradient(#3fd999, #3fd99908)"}}>
                                            <img src="images/Business.png" alt=""></img>
                                            <h4 class="mb-3" style={{color: "#fff"}}>Business</h4>
                                            <h5 class="mb-4">Interested?</h5>
                                            <p class="mb-5">Create, manage, and distribute digital business cards for your team.</p>
                                            <div class="text-center mb-4 d-grid">
                                                <a href="#" class="green-card">CONTACT US</a>
                                            </div>
                                            <ul>
                                                <li>Available on iOS, Android, and web</li>
                                                <li>Create four digital business cards for yourself</li>
                                                <li>Share your card via QR code, email, text, or an NFC tag</li>
                                                <li>Address book with unlimited contacts</li>
                                                <li>Virtual backgrounds</li>
                                                <li>Email signatures</li>
                                                <li>Import Google Contacts</li>
                                                <li>3 paper business card transcriptions/month</li>
                                            </ul>
                                            <div class="text-center mt-4 d-grid">
                                                <a href="#" class="green-card">CONTACT US</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1"></div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-1"></div>
                                    <div class="col-md-5">
                                        <div class="py-5 px-4 me-5 black-bg text-start" style={{backgroundImage: "linear-gradient(#3fd999, #3fd99908)"}}>
                                            <img src="images/Business.png" alt=""></img>
                                            <h4 class="mb-3" style={{color: "#fff"}}>Business</h4>
                                            <h5 class="mb-4">Interested?</h5>
                                            <p class="mb-5">Create, manage, and distribute digital business cards for your team.</p>
                                            <div class="text-center mb-4 d-grid">
                                                <a href="#" class="green-card">CONTACT US</a>
                                            </div>
                                            <ul>
                                                <li>Available on iOS, Android, and web</li>
                                                <li>Create four digital business cards for yourself</li>
                                                <li>Share your card via QR code, email, text, or an NFC tag</li>
                                                <li>Address book with unlimited contacts</li>
                                                <li>Virtual backgrounds</li>
                                                <li>Email signatures</li>
                                                <li>Import Google Contacts</li>
                                                <li>3 paper business card transcriptions/month</li>
                                            </ul>
                                            <div class="text-center mt-4 d-grid">
                                                <a href="#" class="green-card">CONTACT US</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="py-5 px-4 ms-5 black-bg text-start">
                                            <img src="images/Free.png" alt=""></img>
                                            <h4 class="mb-3">FREE</h4>
                                            <h5 class="mb-4"><span>$0</span> / month</h5>
                                            <p class="mb-5">Experience digital business cards for free, forever.</p>
                                            <div class="text-center mb-4 d-grid">
                                                <a href="#">SIGN UP</a>
                                            </div>
                                            <ul>
                                                <li>Available on iOS, Android, and web</li>
                                                <li>Create four digital business cards for yourself</li>
                                                <li>Share your card via QR code, email, text, or an NFC tag</li>
                                                <li>Address book with unlimited contacts</li>
                                                <li>Virtual backgrounds</li>
                                                <li>Email signatures</li>
                                                <li>Import Google Contacts</li>
                                                <li>3 paper business card transcriptions/month</li>
                                            </ul>
                                            <div class="text-center mt-5 d-grid">
                                                <a href="#">SIGN UP</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <small>All prices are in U.S Dollars (USD). Please note that some premium customizations may only be configured on the HiHello web app. When done, they'll be reflected in your mobile app. HiHello subscription fees are non-refundable. You can access your subscription for the duration of the term of the subscription. We may limit the number of texts and emails that can be sent via HiHello to prevent spam. Terms of Service and Acceptable Use Policy apply.</small>

            </div>
        </div>
    </div>
        </div>
    )
}

export default pricingPage
