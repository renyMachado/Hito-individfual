canvas.height = window.screen.height;
canvas.width = window.screen.width;

var columns = []
for (i = 0; i < 256; columns[i++] = 1);

function step() {
    
    canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
    
   
    canvas.getContext('2d').fillStyle = '#FF0000';
  
    columns.map(function (value, index) {
        
        var character = String.fromCharCode(0041 +
                                            Math.random() * 21);
      
        canvas.getContext('2d').fillText(character, //texto
                                         index * 10, //x
                                         value //y
                                        );
        
        
        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10
    })
}

setInterval(step, 33)