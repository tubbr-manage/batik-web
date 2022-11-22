const MENU_MAP = 
{
    "tab-menu-1" : "https://uploads-ssl.webflow.com/61a5df232287244d02ffa4db/62d697a87b306512d2b68113_1]-transcode.mp4",
    "tab-menu-2" : "https://uploads-ssl.webflow.com/61a5df232287244d02ffa4db/62d6979157180e0c7d835333_2-transcode.mp4",
    "tab-menu-3" : "https://uploads-ssl.webflow.com/61a5df232287244d02ffa4db/62d6975ed0c8a3f660dcd1ed_3-transcode.mp4",
    "tab-menu-4" : "https://uploads-ssl.webflow.com/61a5df232287244d02ffa4db/62d6a533aaa3ee5ea35757d5_4_3-transcode.mp4"
}

// Add Event Listner to Menu
let tabs = document.querySelectorAll('.tab-menu');

// let eventt;

tabs.forEach((tab)=> {
    tab.addEventListener("click", function(event) {
        eventt=event;
        tabs.forEach((tab)=>{
            if(tab.classList.contains("tab-menu-active")){
                tab.classList.remove('tab-menu-active');
            }
        });
        id=event.target.id;
        document.getElementById(id).classList.add('tab-menu-active');
        document.getElementById("steps-video").setAttribute('src',MENU_MAP[id])
    });
});