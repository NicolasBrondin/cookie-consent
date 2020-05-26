var CookieConsent = function (){

    this.show_more = function(){
       
        cookie_bar_element.appendChild(cookie_bar_popup);
    }

    var style = document.createElement('style');
    document.head.appendChild(style);
    var style_sheet = style.sheet;
    style_sheet.insertRule('.cookie-consent--card {font-family: Arial, sans-serif; font-size: 14px; background: white; padding: 10px; box-sizing: border-box; border-radius: 10px; box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);}',0);
    style_sheet.insertRule('.cookie-consent--button {background: #3498db;color: white; border: none;border-radius: 20px;margin: 0px 5px; padding: 2px 10px; font-weight: bold;}',0);
    style_sheet.insertRule('#cookie-band {position: fixed;bottom: 10px;right: 10px;left: 10px;}',0);
    style_sheet.insertRule('#cookie-popup {position: absolute;bottom: calc(100% + 10px);left: 0px; max-width: 300px;}',0);

    var cookie_bar_element = document.createElement("div");
    cookie_bar_element.id = "cookie-band";
    cookie_bar_element.classList = ["cookie-consent--card"];
    cookie_bar_element.innerText = "Ce site utilise des cookies de mesure d'audience anonyme afin d'améliorer l'expérience utilisateur. Pour plus d'informations sur l'utilisation de ces données";

    var cookie_bar_popup = document.createElement("div");
    cookie_bar_popup.classList = ["cookie-consent--card"];
    cookie_bar_popup.id = "cookie-popup";
    cookie_bar_popup.innerText = "Nous mesurons l'audience de notre site grâce au service Google Analytics, de façon anonyme, dans l'unique but de comprendre et d'améliorer la performance de nos contenus.";
    
    var cookie_bar_button = document.createElement("button");
    cookie_bar_button.classList = ["cookie-consent--button"];
    cookie_bar_button.innerText = "cliquez ici";
    
    document.body.appendChild(cookie_bar_element);
    cookie_bar_element.appendChild(cookie_bar_button);
    
    cookie_bar_button.onclick = this.show_more;
    window.localStorage.setItem("cookie_bar_appeared", true);

    
}

new CookieConsent();