function imply(a, b){
    var result;
    result = !a || b;
        
    return result;
}

function nad(a, b){
    var result;
    result = !(a && b);
    
    return result;
}

function exor(a, b){
    var result;
    result = (a && !b) || (!a && b);
    
    return result;
}