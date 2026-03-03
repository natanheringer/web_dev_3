
var numero = 16;

document.writeln('<br>')

for(var i = 0; i < numero; i++){

    
    if(i % 2 == 0){
        
        document.writeln('<br>O valor eh: <span style="color: red;">  ' + i + '</span> <br>');
        
    } else {
        
        document.writeln('<br>o valor eh ' + i + '<br>');
        
    }
    
}