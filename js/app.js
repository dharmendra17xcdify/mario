window.onload = function() {
    var space = 1;
    var col = "";
    col = '<img id="mario" src="img/mario.gif" alt="The mario">';
    for (var r=0; r<10; r++) {
        col += '<tr>';
        for (var c=0; c<10; c++) { col += "<td data-pos='"+space+"'></td>"; space++; }
        col += '</tr>';
    }
    $("#chessboard").html(col);
}

// function myFunction() {
//     var x = 2;
//     var pixel = 421;
    
//     document.getElementById("mario").style.right = pixel+"px";  
// }

function myMove() {
    var path = document.getElementById("path").value;
    var elem = document.getElementById("mario");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == path) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.bottom = pos + 'px'; 
        //elem.style.left = pos + 'px'; 
      }
    }
  }