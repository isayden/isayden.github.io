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


