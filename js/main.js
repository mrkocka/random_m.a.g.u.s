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
        if ( location == 0 && D100 >=1 && D100 <=15){
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

        if ( location == 0 && D100 >= 22 && D100 <= 24  ){
            document.getElementById("js-bestName").innerHTML = "Gahul";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 15</li><li>TÉ: 40</li><li>VÉ: 80</li><li>CÉ: -</li><li>Sebzés:1k6+2</li><li>Támadás/kör: 1</li><li>ÉP: 25</li><li>FP:-</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 83.olda";
        }

        if ( location == 0 && D100 >= 25 && D100 <= 28){
            document.getElementById("js-bestName").innerHTML = "Vérfarkas";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 25</li><li>TÉ: 60</li><li>VÉ: 75</li><li>CÉ: -</li><li>Sebzés:1k10</li><li>Támadás/kör: 1</li><li>ÉP: -</li><li>FP:44</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 97.olda";
        }

        if ( location == 0 && D100 >= 29 && D100 <= 31){
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

        if ( location == 0 && D100 >= 40 && D100 <= 45){
            document.getElementById("js-bestName").innerHTML = "Kineta";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 35</li><li>TÉ: 25(75)</li><li>VÉ: 115</li><li>CÉ: 5</li><li>Sebzés: változó</li><li>Támadás/kör: 1</li><li>ÉP: 4</li><li>FP:18</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 126.olda";
        }

        if ( location == 0 && D100 >= 46 && D100 <= 50){
            document.getElementById("js-bestName").innerHTML = "Kobold";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 35</li><li>TÉ: 65(75)</li><li>VÉ: 110</li><li>CÉ: 28</li><li>Sebzés: fegyver szerint</li><li>Támadás/kör: 2</li><li>ÉP: 9</li><li>FP:48</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 127.olda";
        }

        if ( location == 0 && D100 == 51 || D100 == 52){
            document.getElementById("js-bestName").innerHTML = "Lángfutó";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: -</li><li>TÉ: -</li><li>VÉ: -</li><li>CÉ: -</li><li>Sebzés: -</li><li>Támadás/kör: -</li><li>ÉP: 1</li><li>FP:3</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 139.olda";
        }
        if ( location == 0 && D100 == 53){
            document.getElementById("js-bestName").innerHTML = "Morrona";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 35</li><li>TÉ: 45 ill. 75</li><li>VÉ: 65 ill. 95</li><li>CÉ: -</li><li>Sebzés: k6+1</li><li>Támadás/kör: 1</li><li>ÉP: 4</li><li>FP:35</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 139.olda";
        }

        if ( location == 0 && D100 == 54){
            document.getElementById("js-bestName").innerHTML = "Nardael";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 25-60</li><li>TÉ: 50-100</li><li>VÉ: 90-200</li><li>CÉ: 10-75</li><li>Sebzés: fegyver szerint</li><li>Támadás/kör: 2</li><li>ÉP: 10-50</li><li>FP:40-175</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 159.olda";
        }

        if ( location == 0 && D100 == 55){
            document.getElementById("js-bestName").innerHTML = "Derogar";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: -</li><li>TÉ: -</li><li>VÉ: -</li><li>CÉ: -</li><li>Sebzés: -</li><li>Támadás/kör: -</li><li>ÉP: 45</li><li>FP:-</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 160.olda";
        }

        if ( location == 0 && D100 >= 56 && D100 <=60 ){
            document.getElementById("js-bestName").innerHTML = "Edendin Sineas";
            document.getElementById("js-monsterStat").innerHTML = "Ez egy különleges növény";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 161.olda";
        }

        if ( location == 0 && D100 == 61){
            document.getElementById("js-bestName").innerHTML = "Sacron";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 20</li><li>TÉ: 110</li><li>VÉ: 170</li><li>CÉ: -</li><li>Sebzés: 4k10+6</li><li>Támadás/kör: 2</li><li>ÉP: 45</li><li>FP: 120</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 174.olda";
        }

        if ( location == 0 && D100 >= 62 && D100 <=64 ){
            document.getElementById("js-bestName").innerHTML = "Traclon";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 30</li><li>TÉ: 100</li><li>VÉ: 155</li><li>CÉ: 30</li><li>Sebzés: 4k10+5</li><li>Támadás/kör: 2</li><li>ÉP: 22</li><li>FP: 98</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 175.olda";
        }

        if ( location == 0 && D100 == 65){
            document.getElementById("js-bestName").innerHTML = "Pteropta";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 80</li><li>VÉ: 90</li><li>CÉ: -</li><li>Sebzés:1k10/2k10/3k6</li><li>Támadás/kör: 1 (2)</li><li>ÉP: 60</li><li>FP: 88</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 183.olda";
        }

        if ( location == 0 && D100 == 66){
            document.getElementById("js-bestName").innerHTML = "Sárkánygyík";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 4</li><li>TÉ: 112</li><li>VÉ: könyv szerint</li><li>CÉ: -</li><li>Sebzés:5k6/5k10/8k10</li><li>Támadás/kör: 1 (2)</li><li>ÉP: 60</li><li>FP:140</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 195.olda";
        }

        if ( location == 0 && D100 >= 67 && D100 <=70 ){
            document.getElementById("js-bestName").innerHTML = "Symen-denevér";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 25</li><li>VÉ: 60</li><li>CÉ: 50</li><li>Sebzés:1-3</li><li>Támadás/kör: 1</li><li>ÉP: 2</li><li>FP: 6</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 199.olda";
        }

        if ( location == 0 && D100 >= 71 && D100 <=88 ){
            document.getElementById("js-bestName").innerHTML = "Rablók";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: -</li><li>TÉ: -</li><li>VÉ: -</li><li>CÉ: -</li><li>Sebzés:-</li><li>Támadás/kör: -</li><li>ÉP: -</li><li>FP: -</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "?";
        }

       if ( location == 0 && D100 >= 89 && D100 <=100 ){
            document.getElementById("js-bestName").innerHTML = "Semmi";
            document.getElementById("js-monsterStat").innerHTML = "Nem találkoztok semmivel";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium - ";
        } 


        //II.Dzsungel
        if ( location == 1 && D100 <=45){
            document.getElementById("js-bestName").innerHTML = "Állatok";
            deletObject2.classList.toggle("none");
            document.getElementById("js-monsterStat").innerHTML = "Dobj a Bestiárium 29.oldalán szereplő táblázatból";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 29.olda";
        }

        if ( location == 1 && D100 >= 46 && D100 <= 52 ){
                document.getElementById("js-bestName").innerHTML = "Buzzgoblin";
                document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 5</li><li>TÉ: 45</li><li>VÉ: 80</li><li>CÉ: 0</li><li>Sebzés:fegyver szer.</li><li>Támadás/kör: 1</li><li>ÉP: 3</li><li>FP: 11</li></ul>";
                document.getElementById("js-pageNumber").innerHTML = "Bestiárium 44.olda";
        }

        if ( location == 1 && D100 == 53){
            document.getElementById("js-bestName").innerHTML = "Bosszúálló";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 10</li><li>TÉ: 30</li><li>VÉ: 70</li><li>CÉ: -</li><li>Sebzés:1k6/fegyver</li><li>Támadás/kör: 1</li><li>ÉP: 10</li><li>FP: -</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 78.olda";
        }

        if ( location == 1 && D100 >= 46 && D100 <= 52 ){
            document.getElementById("js-bestName").innerHTML = "Kékgyík";
            document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 20</li><li>TÉ: 140</li><li>VÉ: 190</li><li>CÉ: -</li><li>Sebzés:3k10+10</li><li>Támadás/kör: 1</li><li>ÉP: 55</li><li>FP: 130</li></ul>";
            document.getElementById("js-pageNumber").innerHTML = "Bestiárium 125.olda";
        }

    if ( location == 1 && D100 >= 58 && D100 <=64 ){
        document.getElementById("js-bestName").innerHTML = "Rablók";
        document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: -</li><li>TÉ: -</li><li>VÉ: -</li><li>CÉ: -</li><li>Sebzés:-</li><li>Támadás/kör: -</li><li>ÉP: -</li><li>FP: -</li></ul>";
        document.getElementById("js-pageNumber").innerHTML = "?";
        }

     if ( location == 1 && D100 >= 65 && D100 <=100 ){
        document.getElementById("js-bestName").innerHTML = "Semmi";
        document.getElementById("js-monsterStat").innerHTML = "Nem találkoztok semmivel";
        document.getElementById("js-pageNumber").innerHTML = "Bestiárium - ";
        } 
    
    
    //III.Mocsár
    if ( location == 2 && D100 >= 1 && D100 <=7 ){
        document.getElementById("js-bestName").innerHTML = "Krokodil";
        deletObject2.classList.toggle("none");
        document.getElementById("js-monsterStat").innerHTML = "<ul><li>KÉ: 30(Sz) 65(V) </li><li>TÉ: 65</li><li>VÉ: 80(Sz) 120(V)</li><li>CÉ: -</li><li>Sebzés:5k6</li><li>Támadás/kör: 1</li><li>ÉP: 55</li><li>FP: 110</li></ul>";
        document.getElementById("js-pageNumber").innerHTML = "Bestiárium 16.olda";
    }
}

