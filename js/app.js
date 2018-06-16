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
    var x = 0;
    var y = 0;
    var axis = '';
    var length = 0;
    var path = document.getElementById("path").value;
    var length = path.length;
    if(length == 2){
        axis = path.substring(1, 2);
    } else if(length == 3){
        axis = path.substring(2, 3);
    } else if(length != 2 || length != 3){
        window.alert('enter a valid path.');
    }

    if(axis == 'e'){
        //move in x direction
        if(path == '1e'){
            x = 1;
        } else if(path == '2e'){
            x = 61;
        } else if(path == '3e'){
            x = 121;
        } else if(path == '4e'){
            x = 181;
        } else if(path == '5e'){
            x = 241;
        } else if(path == '6e'){
            x = 301;
        } else if(path == '7e'){
            x = 361;
        } else if(path == '8e'){
            x = 421;
        } else if(path == '9e'){
            x = 481
        } else if(path == '10e'){
            x = 542
        }
    } else if(axis == 'n'){
        //move in y direction
        if(path == '1n'){
            y = 1;
        } else if(path == '2n'){
            y = 61;
        } else if(path == '3n'){
            y = 121;
        } else if(path == '4n'){
            y = 181;
        } else if(path == '5n'){
            y = 241;
        } else if(path == '6n'){
            y = 301;
        } else if(path == '7n'){
            y = 361;
        } else if(path == '8n'){
            y = 421;
        } else if(path == '9n'){
            y = 481
        } else if(path == '10n'){
            y = 542
        }
    } else if(axis != 'e' || axis != 'n'){
        window.alert('enter a valid path.');
    }

    var elem = document.getElementById("mario");   
    var pos = 0;
    var stop = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if(x){
            stop = x;
        } else {
            stop = y;
        }
        if (pos == stop) {
            clearInterval(id);
        } else {
            pos++; 
            if(axis == 'e'){
                elem.style.left = pos + 'px'; 
            } else if(axis == 'n'){
                elem.style.bottom = pos + 'px'; 
            }
        }
    }
  }