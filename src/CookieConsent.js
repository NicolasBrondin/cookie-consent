import template from './template.html'
import css from './template.css'
import cookie_svg from './assets/cookie-bite-solid.svg'

var CookieConsent = function (analytics_callback){
    
    this.expanded = true;
    this.consent = null;
    this.analytics_callback = analytics_callback;

    this.show_more = function(){
        cookie_popup.style.display = "block";   
    }

    this.close = function(){
        document.getElementById('cookie-expand').style.display = "block";
        document.getElementById('cookie-band-large').style.display = "none";
        document.querySelector("#cookie-popup").style.display = "none";
    }

    this.expand = function(){
        document.getElementById('cookie-band-large').style.display = "block";
        document.getElementById('cookie-expand').style.display = "none";
    }

    var style = document.createElement('style');
    style.innerText= css;
    document.head.prepend(style);
    
    var cookie_bar_element = document.createElement("div");
    cookie_bar_element.innerHTML = template.replace('{{cookie}}', cookie_svg);
    
    document.body.appendChild(cookie_bar_element);

    var cookie_bar_button = document.querySelector("#cookie-show-more");
    var cookie_bar_button_close = document.querySelector("#cookie-close");
    var cookie_popup = document.querySelector("#cookie-popup");
    cookie_popup.style.display = "none";
    cookie_bar_button.onclick = this.show_more;
    cookie_bar_button_close.onclick = this.close;

    if(window.localStorage.getItem("cookie_bar_appeared") === 'true'){
        this.close();
    } else {
        this.expand();
    }
    
    this.consent = window.localStorage.getItem("cookie_bar_consent") != 'false';
    document.getElementById('consent-input').checked = this.consent;
    if(this.consent && this.analytics_callback){
        this.analytics_callback();
    }

    document.getElementById('cookie-expand').onclick = this.expand;
    
    window.localStorage.setItem("cookie_bar_appeared", true);
    document.getElementById('consent-input').addEventListener('change',function(e){
        this.consent = e.target.checked;
        window.localStorage.setItem("cookie_bar_consent", this.consent);
        setTimeout(function(){
            cookie_popup.style.display = "none";
            if(this.consent === false){
                location.reload(); 
            } else {
                if(this.analytics_callback) {
                    this.analytics_callback();
                }
            }
        }.bind(this), 500);
   }.bind(this),false);
    
}

export default CookieConsent;