exports.suma = function(n1,n2){
    return n1+n2;
}

exports.resta = function(n1,n2){
    if(n1<n2){
        return n2-n1;
    }  
    else{
        return n1-n2;
    }
}

exports.multi = function(n1,n2){
    return n1*n2;
}

exports.div = function(n1,n2){
    if(n1<n2){
        return n2/n1;
    }  
    else{
        return n1/n2;
    }
}