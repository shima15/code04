function calculate(radius){
    return radius * 2 * Math.PI
}

 
 
 function calculateArea(radius){
    return radius * radius * Math.PI
 }
 
 
 function maxArea(a, b, c){
     var areaA, areaB, areaC;
     areaA = a * a * Math.PI;
     areaB = b * b * Math.PI;
     areaC = c * c * Math.PI;
     
     return Math.max(areaA, Math.max(areaB, areaC))
 }
