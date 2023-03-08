function switchNightMode() {
    if(localStorage.getItem("dark") == "true"){
        localStorage.setItem('dark', false);
        switchToLight(); 
        return;
    }
    else {
        localStorage.setItem('dark', true);
        switchToDark();
        return;
    }
}

(function(){//console.log("dark = ", localStorage.getItem("dark"));
if (localStorage.getItem == "null"){
    localStorage.setItem("dark", true);
}
if (localStorage.getItem("dark") == "true"){
    // console.log("a");
    switchToDark();
} else {
    // console.log("b");
    switchToLight();
}
})();
