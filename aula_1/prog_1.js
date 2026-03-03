


//var matrix_2 = [[10, 10, 10], [10, 10, 10], [10,10,10], [10,10,10]];

//var matrix_2 = [[10, 10, 10], [10, 10, 10], [10,10,10], [10,10,10]];


function write_on_body(){
    
    var value = 2;
    var result = 0;
    document .writeln('<br>Current value: ' + value);

    if(value === 2){

        result = result + value + 1;
        
    }
    document .writeln('<br>' + value + ' + 1 = ' + result)
    return result;
}

function main(){

    write_on_body();

}


main();
