document.getElementById("js-button").addEventListener("click" , myFunction);

var deletObject1 = document.getElementById("image");
var deletObject2 = document.getElementById("ulList");


function deleteFunction(){
    deletObject1.classList.toggle("none");
    deletObject2.classList.toggle("none");
    
}

function myFunction() {
    
    let D100 = Math.floor(Math.random() * 100); 
    let location = document.getElementById("location").selectedIndex;
        console.log(location)
        console.log(D100)

        //I.Mérsékelt övi erdő
        if ( location == 0 && D100 <=15){
            document.getElementById("js-bestName").innerHTML = "Állatok";
            deletObject2.classList.toggle("none");
            document.getElementById("js-monsterStat").innerHTML = "Dobj a Bestiárium 29.oldalán szereplő táblázatból";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 29.olda";
        }
        if ( location == 0 && D100 == 17 || D100 == 16 ){
                document.getElementById("js-bestName").innerHTML = "Büdösgyík";
                document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 30</li><li>TÉ: 10</li><li>VÉ: 115</li><li>CÉ: 40</li><li>Sebzés:1k6/1k6/1k10</li><li>Támadás/kör: 3/1</li><li>ÉP: 28</li><li>FP: 62</li></ul>";
                document.getElementById("js-pageNumber").innerHTML = "Bestiárium 44.olda";
        }



        //II.Dzsungel
        if ( location == 1 && D100 <=45){
            document.getElementById("js-bestName").innerHTML = "Állatok";
            deletObject2.classList.toggle("none");
            document.getElementById("js-monsterStat").innerHTML = "Dobj a Bestiárium 29.oldalán szereplő táblázatból";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 29.olda";
        }
        if ( location == 1 && D100 == 46 && D100 <= 52 ){
                document.getElementById("js-bestName").innerHTML = "Buzzgoblin";
                document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 5</li><li>TÉ: 45</li><li>VÉ: 80</li><li>CÉ: 0</li><li>Sebzés:fegyver szer.</li><li>Támadás/kör:1</li><li>ÉP: 3</li><li>FP: 11</li></ul>";
                document.getElementById("js-pageNumber").innerHTML = "Bestiárium 44.olda";
        }
        if ( location == 1 && D100 == 53){
            document.getElementById("js-bestName").innerHTML = "Bosszúálló";
          
}}

