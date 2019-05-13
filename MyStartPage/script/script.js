/*Class*/
function StartPage() {

} /*End class StartPage*/

/*Metods*/
StartPage.prototype.cardImages = function (imagesArray) {
  this.imagesArray = imagesArray;

  if (imagesArray == 'x') {
    var arrayImages = ["Mexican1_0"];
    var nRandomX = Math.round(Math.random() * (((arrayImages.length-1)) - 0) + 0);
    for (var i = 0; i < 2; i++) {
      document.getElementById("imgGrid" + (i+1)).src = "images/cards/x/" + (arrayImages[nRandomX]) + (i+1) + ".jpg";
    }
  }
  if (imagesArray == 'y') {
    var arrayImages = ["Mexican2_0"];
    var nRandomY = Math.round(Math.random() * (((arrayImages.length-1)) - 0) + 0);
    for (var i = 0; i < 2; i++) {
      document.getElementById("imgGrid" + (i+1)).src = "images/cards/y/" + (arrayImages[nRandomY]) + (i+1) + ".jpg";
    }
  }
  if (imagesArray == 'z') {
    var arrayImages = ["Mexican3_0"];
    var nRandomZ = Math.round(Math.random() * (((arrayImages.length-1)) - 0) + 0);
    for (var i = 0; i < 2; i++) {
      document.getElementById("imgGrid" + (i+1)).src = "images/cards/z/" + (arrayImages[nRandomZ]) + (i+1) + ".jpg";
    }
  }

};

StartPage.prototype.saludo = function(name) {
  var x = document.getElementsByClassName("wellcomeText");
  this.name = name;
  var time = new Date().getHours();
  if (time < 5) {
    x[0].innerHTML = ("Good Evening "+name);
  } else if (time >= 5 && time < 12) {
    x[0].innerHTML = ("Good Morning "+name);
  } else if (time >= 12 && time < 18) {
    x[0].innerHTML = ("Good Afternoon "+name);
  } else if (time >= 18 && time <= 24) {
    x[0].innerHTML = ("Good Evening "+name);
  }
}

StartPage.prototype.formatoFecha = function(){
  var dayNames = new Array("Sunday", "Monday", "Thursday", "Wednesday", "Thuesday", "Friday", "Saturday");
  var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var dayNumber = new Date().getDate();
  var dayIndex = new Date().getDay();
  var monthIndex = new Date().getMonth();
  var year = new Date().getFullYear();
  var time = dayNames[dayIndex] + ' ' + dayNumber + ' ' + monthNames[monthIndex] + ' ' + year;

  return (time);
}

StartPage.prototype.formatoHora = function(){
  var hours = new Date().toLocaleString('en-US',{hour:'numeric',minute:'numeric',second:'numeric',hour12:true});

  return (hours);
}

StartPage.prototype.formatoCelebracion = function(){
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayNumber =  new Date().getDate();
    var monthIndex =  new Date().getMonth();
    var monthName = monthArray[monthIndex];
    var msg=null;
    var i=0;
    var msg = myObj[monthArray[monthIndex]][dayNumber-1].celebration;

    return (document.getElementById("celebrationText").innerHTML = msg);
}

StartPage.prototype.creaTabla = function (grid1, grid2) {
  this.grid1 = grid1;
  this.grid2 = grid2;
  var grids = new Array(grid1, grid2);
  var gridTotal = 2;
  var rowTotal = 4;
  var cellTotal = 4;
  var g = 0;
  var x = 0;
  var y = 0;

  for (g = 0; g < gridTotal; g++) {
    var table = document.createElement("TABLE");
    table.setAttribute("class", "tabla");
    document.getElementsByClassName("direction-reveal__overlay")[g].appendChild(table);
    /*Access the JSON object*/
    var tabla = urls[grids[g]];
    var contador = 0;
    /*Create row*/
    for (x = 0; x < rowTotal; x++) {
      var row = document.createElement("tr");
      row.setAttribute("class", "row");
      /*Create cell*/
      for (y = 0; y < cellTotal; y++) {
        var attrHref = tabla[contador].url;
        var attrImagen = tabla[contador].icon;

        var cell = document.createElement("td");
        cell.setAttribute("id", "x"+x+"y"+y);

        var enlace = document.createElement("a");
        if (!attrHref) {
          enlace.setAttribute("href", "");
        }else {
          enlace.setAttribute("href", attrHref);
          cell.appendChild(enlace);
        }

        var icono = document.createElement("img");
        if (!attrImagen) {
          icono.setAttribute("src", "");
        } else {
          icono.setAttribute("src", "images/icons/"+attrImagen);
          enlace.appendChild(icono);
        }

        row.appendChild(cell);

        contador++;
      }
      document.getElementsByClassName("tabla")[g].appendChild(row);
    }
  }/*End for*/
};

StartPage.prototype.youtubeOver = function () {
  document.getElementById("searchYouTube").style.color = "white";
  document.getElementById("searchElementYouTube").style.backgroundColor = "black";
};
StartPage.prototype.youtubeOut = function () {
  document.getElementById("searchYouTube").style.color = "black";
  document.getElementById("searchElementYouTube").style.backgroundColor = "white";
};

StartPage.prototype.translateOver = function () {
  document.getElementById("SearchTranslate").style.color = "white";
  document.getElementById("searchElementTranslate").style.backgroundColor = "black";
};
StartPage.prototype.translateOut = function () {
  document.getElementById("SearchTranslate").style.color = "black";
  document.getElementById("searchElementTranslate").style.backgroundColor = "white";
};

StartPage.prototype.duckduckgoOver = function () {
  document.getElementById("SearchDuckDuckGo").style.color = "white";
  document.getElementById("searchElementDuckduckgo").style.backgroundColor = "black";
};
StartPage.prototype.duckduckgoOut = function () {
  document.getElementById("SearchDuckDuckGo").style.color = "black";
  document.getElementById("searchElementDuckduckgo").style.backgroundColor = "white";
};

StartPage.prototype.yandexOver = function () {
  document.getElementById("SearchYandex").style.color = "white";
  document.getElementById("searchElementYandex").style.backgroundColor = "black";
};
StartPage.prototype.yandexOut = function () {
  document.getElementById("SearchYandex").style.color = "black";
  document.getElementById("searchElementYandex").style.backgroundColor = "white";
};

StartPage.prototype.buttonStyle = function (btn) {
  this.btn = btn;
  if (btn == 'x') {
    document.getElementById('btnX').style.backgroundColor = '#00AC9F';
    document.getElementById('btnX').style.color = '#FFFFFF';
    document.getElementById('btnY').style.backgroundColor = 'transparent';
    document.getElementById('btnY').style.color = '#DF0024';
    document.getElementById('btnZ').style.backgroundColor = 'transparent';
    document.getElementById('btnZ').style.color = '#2E6DB4';
  }
  if (btn == 'y') {
    document.getElementById('btnX').style.backgroundColor = 'transparent';
    document.getElementById('btnX').style.color = '#00AC9F';
    document.getElementById('btnY').style.backgroundColor = '#DF0024';
    document.getElementById('btnY').style.color = '#FFFFFF';
    document.getElementById('btnZ').style.backgroundColor = 'transparent';
    document.getElementById('btnZ').style.color = '#2E6DB4';
  }
  if (btn == 'z') {
    document.getElementById('btnX').style.backgroundColor = 'transparent';
    document.getElementById('btnX').style.color = '#00AC9F';
    document.getElementById('btnY').style.backgroundColor = 'transparent';
    document.getElementById('btnY').style.color = '#DF0024';
    document.getElementById('btnZ').style.backgroundColor = '#2E6DB4';
    document.getElementById('btnZ').style.color = '#FFFFFF';
  }

};

StartPage.prototype.eliminaTabla = function () {
  for (var i = 0; i < 2; i++) {
    var parent = document.getElementsByClassName("direction-reveal__overlay")[i];
    parent.removeChild(parent.childNodes[3]);
  }
};

StartPage.prototype.searchDropdown = function (txtTap) {
  document.getElementById("searchYouTube").innerHTML = "Search for \""+txtTap+"\"";
  document.getElementById("youtubeSearch").href = "https://www.youtube.com/results?search_query="+txtTap;

  document.getElementById("SearchDuckDuckGo").innerHTML = "Search for \""+txtTap+"\"";
  document.getElementById("duckduckgoSearch").href = "https://duckduckgo.com/?q="+txtTap;

  document.getElementById("SearchTranslate").innerHTML = "Search for \""+txtTap+"\"";
  document.getElementById("translateSearch").href = "https://translate.google.com/?hl=es&tab=TT#view=home&op=translate&sl=en&tl=es&text="+txtTap;

  document.getElementById("SearchYandex").innerHTML = "Search for \""+txtTap+"\"";
  document.getElementById("yandexSearch").href = "https://yandex.com/search/?text="+txtTap;
}

StartPage.prototype.visibilityDropdown = function (action) {
   this.action = action;
  if (action == 'hidden') {
    document.getElementById('dropdown').style.visibility = "hidden";
    document.getElementById('searchInputSubmitSearch').style.opacity = '0';
    document.getElementById('searchInputSubmitReset').style.opacity = '0';
    document.getElementById("searchInputSubmitSearch").style.cursor = "";
    document.getElementById("searchInputSubmitReset").style.cursor = "";
  }
  if (action == 'visible') {
    document.getElementById('dropdown').style.visibility = "visible";
    document.getElementById('searchInputSubmitSearch').style.opacity = '1';
    document.getElementById('searchInputSubmitReset').style.opacity = '1';
    document.getElementById("searchInputSubmitSearch").style.cursor = "pointer";
    document.getElementById("searchInputSubmitReset").style.cursor = "pointer";
  }
}

StartPage.prototype.consolaInformacion = function(){
    var egg = console.log("There are no easter eggs here.");
    var rabbit = console.log("    (\\_/)");
    var rabbit = console.log("   =('_')=");
    var author = console.log("Author: vill1960");
    var email = console.log("GitHub: https://github.com/vill1960/");

    return (egg, rabbit, author, email);
}

/*---------------------------------------------------------------------------*/

/*Main function.*/
function main(){
  /*Instance*/
  var StartPageA = new StartPage();
  var name = "Anon"; //Your name anon.

  /*Calling methods*/
  //Show the greeting in the window.
  var imprimeSaludo = StartPageA.saludo(name);
  setInterval(function(){StartPageA.saludo(name);}, 1000);

  //Show the date and the hour in the window.
  function imprimeDate(){
    var imprimeFecha = StartPageA.formatoFecha();
    var imprimeHora = StartPageA.formatoHora();
    document.getElementById("dateText").innerHTML = imprimeFecha + ', ' + imprimeHora;
  }
  imprimeDate();
  setInterval(function(){imprimeDate();}, 1000);

  //
  var imprimeCelebracion = StartPageA.formatoCelebracion();
  setInterval(function(){StartPageA.formatoCelebracion();}, 1000);

  // Create the elements in the table when your push a button(x, y, z).
  StartPageA.cardImages('x');
  StartPageA.creaTabla('gridX1', 'gridX2');
  document.getElementById("btnX").addEventListener("click", function(){
    StartPageA.cardImages('x');
    StartPageA.eliminaTabla();
    StartPageA.creaTabla('gridX1', 'gridX2');
    StartPageA.buttonStyle('x');
  });
  document.getElementById("btnY").addEventListener("click", function(){
    StartPageA.cardImages('y');
    StartPageA.eliminaTabla();
    StartPageA.creaTabla('gridY1', 'gridY2');
    StartPageA.buttonStyle('y');
  });
  document.getElementById("btnZ").addEventListener("click", function(){
    StartPageA.cardImages('z');
    StartPageA.eliminaTabla();
    StartPageA.creaTabla('gridZ1', 'gridZ2');
    StartPageA.buttonStyle('z');
  });

  //Add the property of hidden or visibility to the dropdown.
  document.getElementById('searchInputSubmitReset').addEventListener("click",function(){
    StartPageA.visibilityDropdown('hidden')
  });
  document.getElementById("searchInput").oninput = function(){
    var txtTap = document.getElementById("searchInput").value;
    if (txtTap == "") {
      StartPageA.visibilityDropdown('hidden');
    } else {
      StartPageA.visibilityDropdown('visible');
      StartPageA.searchDropdown(txtTap);
    }
  };

  //Add the hover effect to the elements in the dropdown.
  document.getElementById("searchElementYouTube").onmouseover = function() {StartPageA.youtubeOver()};
  document.getElementById("searchElementYouTube").onmouseout = function() {StartPageA.youtubeOut()};
  document.getElementById("searchElementTranslate").onmouseover = function() {StartPageA.translateOver()};
  document.getElementById("searchElementTranslate").onmouseout = function() {StartPageA.translateOut()};
  document.getElementById("searchElementDuckduckgo").onmouseover = function() {StartPageA.duckduckgoOver()};
  document.getElementById("searchElementDuckduckgo").onmouseout = function() {StartPageA.duckduckgoOut()};
  document.getElementById("searchElementYandex").onmouseover = function() {StartPageA.yandexOver()};
  document.getElementById("searchElementYandex").onmouseout = function() {StartPageA.yandexOut()};

  //Show the information in the console.
  StartPageA.consolaInformacion();
}//End main




window.onload = main;
