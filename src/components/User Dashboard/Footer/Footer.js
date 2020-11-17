import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer footerStyle">
            <div className="content has-text-centered">
                <div className="columns">
                    <div class="column"><h1>Satsop Bulb Farm</h1></div>
                </div>
                <div className="columns">
                    <div class="column is-3">
                        <div class="column">
                            Connect Us on Facebook
                        </div>
                        <div className="columns">
                            <div class="column"><a href="https://www.facebook.com/Satsop-Bulb-Farm-287080364304/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a></div>
                        </div>
                    </div>
                    <div class="column">Home</div>
                    <div class="column">Products</div>
                    <div class="column">Frequently Asked Questions</div>
                </div>
                <div className="columns">
                    <div class="column">
                        <p>
                            &copy; 2020 Satsop Bulb Farm
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer