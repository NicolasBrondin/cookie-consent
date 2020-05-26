import template from './template.html'
import css from './template.css'

var CookieConsent = function (){
    this.consent = null;
    this.show_more = function(){
        cookie_popup.style.display = "initial";
        
    }

    var style = document.createElement('style');
    style.innerText= css;
    document.head.prepend(style);
    //var style_sheet = style.sheet;
/*
    style_sheet.insertRule('.cookie-consent--card {font-family: Arial, sans-serif; font-size: 14px; background: white; padding: 10px; box-sizing: border-box; border-radius: 10px; box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);color: rgba(0,0,0,0.9);}',0);
    style_sheet.insertRule('.cookie-consent--button {background: #3498db;color: white; border: none;border-radius: 20px;margin: 0px 5px; padding: 2px 10px; font-weight: bold;}',0);
    style_sheet.insertRule('#cookie-band {position: fixed;z-index: 99999;bottom: 10px;right: 10px;left: 10px;}',0);
    style_sheet.insertRule('#cookie-popup {position: absolute;z-index: 99999;bottom: calc(100% + 10px);left: 0px; max-width: 300px;}',0);
*/
    var cookie_bar_element = document.createElement("div");
    cookie_bar_element.id = "cookie-band";
    cookie_bar_element.classList = ["cookie-consent--card"];
    cookie_bar_element.innerHTML = template;
    
    document.body.appendChild(cookie_bar_element);

    var cookie_bar_button = document.querySelector("#cookie-show-more");
    var cookie_popup = document.querySelector("#cookie-popup");
    cookie_popup.style.display = "none";
    cookie_bar_button.onclick = this.show_more;
    window.localStorage.setItem("cookie_bar_appeared", true);

    

    document.getElementById('consent-input').addEventListener('change',function(e){
        this.consent = e.target.checked;
   }.bind(this),false);
    
}

export default CookieConsent;