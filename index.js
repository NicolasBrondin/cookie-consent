var CookieConsent = function (){
    var cookie_bar_element = document.createElement("div");
    var cookie_bar_button = document.createElement("button");
    cookie_bar_element.style.position = "fixed";
    cookie_bar_element.style.fontFamily = "sans-serif";
    cookie_bar_element.style.fontSize = "14px";
    cookie_bar_element.style.background = "white";
    cookie_bar_element.style.width = "100%";
    cookie_bar_element.style.padding = "10px";
    cookie_bar_element.style.boxSizing = "border-box";
    cookie_bar_element.style.borderRadius = "10px";
    cookie_bar_element.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.1)";
    cookie_bar_element.innerText = "Ce site utilise des cookies de mesure d'audience anonyme afin d'améliorer l'expérience utilisateur. Pour plus d'informations sur l'utilisation de ces données, cliquez ici";
    document.body.appendChild(cookie_bar_element);

    window.localStorage.setItem("cookie_bar_appeared", true);

    this.show_more = function(){

    }
}

new CookieConsent();