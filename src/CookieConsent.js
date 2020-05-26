import template from './template.html'
import css from './template.css'
import cookie_svg from './assets/cookie-bite-solid.svg'

var CookieConsent = function (){
    this.expanded = true;
    this.consent = null;

    this.show_more = function(){
        cookie_popup.style.display = "block";   
    }
    this.close = function(){
        document.getElementById('cookie-expand').style.display = "block";
        document.getElementById('cookie-band-large').style.display = "none";
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
    window.localStorage.setItem("cookie_bar_appeared", true);

    document.getElementById('cookie-expand').style.display = "none";
    document.getElementById('cookie-expand').onclick = this.expand;

    document.getElementById('consent-input').addEventListener('change',function(e){
        this.consent = e.target.checked;
        setTimeout(function(){
            cookie_popup.style.display = "none";
        }.bind(this),500);
   }.bind(this),false);
    
}

export default CookieConsent;