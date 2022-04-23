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

        if ( location == 0 && D100 == 18 || D100 == 19 ){
            document.getElementById("js-bestName").innerHTML = "Ceph";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 66</li><li>VÉ: 90</li><li>CÉ: -</li><li>Sebzés:1k10/1k10</li><li>Támadás/kör: 2</li><li>ÉP: 20</li><li>FP: 100</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 46.olda";
        }

        if ( location == 0 && D100 == 20){
            document.getElementById("js-bestName").innerHTML = "Elfo kopó";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 30</li><li>VÉ: 55</li><li>CÉ: -</li><li>Sebzés:1k6</li><li>Támadás/kör: 1</li><li>ÉP: 16</li><li>FP: 34</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 73.olda";
        }

        if ( location == 0 && D100 == 21){
            document.getElementById("js-bestName").innerHTML = "Bosszúálló";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 30</li><li>VÉ: 70</li><li>CÉ: -</li><li>Sebzés:1k6/fegyver</li><li>Támadás/kör: 1</li><li>ÉP: 10</li><li>FP: -</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 78.olda";
        }

        if ( location == 0 && D100 == 22 || D100 == 23 || D100 == 24  ){
            document.getElementById("js-bestName").innerHTML = "Gahul";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 15</li><li>TÉ: 40</li><li>VÉ: 80</li><li>CÉ: -</li><li>Sebzés:1k6+2</li><li>Támadás/kör: 1</li><li>ÉP: 25</li><li>FP:-</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 83.olda";
        }

        if ( location == 0 && D100 == 25 && D100 <= 28){
            document.getElementById("js-bestName").innerHTML = "Vérfarkas";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 25</li><li>TÉ: 60</li><li>VÉ: 75</li><li>CÉ: -</li><li>Sebzés:1k10</li><li>Támadás/kör: 1</li><li>ÉP: -</li><li>FP:44</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 97.olda";
        }
        if ( location == 0 && D100 == 25 && D100 <= 28){
            document.getElementById("js-bestName").innerHTML = "Zombi";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 0</li><li>TÉ: 10</li><li>VÉ: 40</li><li>CÉ: -</li><li>Sebzés:1k6</li><li>Támadás/kör: 1</li><li>ÉP: 15</li><li>FP:-</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 97.olda";
        }

        if ( location == 0 && D100 == 32){
            document.getElementById("js-bestName").innerHTML = "Feenhar";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 30</li><li>TÉ: 55</li><li>VÉ: 95</li><li>CÉ: -</li><li>Sebzés:1k10+2</li><li>Támadás/kör: 1</li><li>ÉP: 20</li><li>FP:60</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 99.olda";
        }

        if ( location == 0 && D100 == 33){
            document.getElementById("js-bestName").innerHTML = "Gider";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 25</li><li>VÉ: 55</li><li>CÉ: -</li><li>Sebzés:1k6</li><li>Támadás/kör: 1</li><li>ÉP: 4</li><li>FP:12</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 103.olda";
        }

        if ( location == 0 && D100 >= 34 && D100 <= 39){
            document.getElementById("js-bestName").innerHTML = "Goblim";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 25</li><li>VÉ: 60</li><li>CÉ: -</li><li>Sebzés:fegyver szerint</li><li>Támadás/kör: 1</li><li>ÉP: 7</li><li>FP:12</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 107.olda";
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

