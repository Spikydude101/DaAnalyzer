// Line Analyzer
'use strict';
// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);


let slope;
// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);
    

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription('up', 'down', 'horizontal', 'vertical');
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x ,pt1y , 'origin' , 'xaxis' , 'yaxis' , 'quadrant1' , 'quadrant2' , 'quadrant3' , 'quadrant4');
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x ,pt2y , 'origin' , 'xaxis' , 'yaxis' , 'quadrant1' , 'quadrant2' , 'quadrant3' , 'quadrant4');
    document.getElementById('equation').innerHTML = getEquation(pt1x ,pt1y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}


function getSlope(pt1x, pt1y, pt2x, pt2y) {
    let rise = pt2y - pt1y;
    let run = pt2x - pt1x;
    slope = rise/run
    return slope;
}


function getDescription(up, down, horizontal, vertical ) {

    
    if (slope == "infinity") {
        return vertical;

    }else if  (slope > 0 ) {
        return up;


    }else if (slope < 0 ) {
        return down;


    }else if (slope == 0) {
        return horizontal;

    }

}



function getPointLocation (pt1x , pt1y , origin , xaxis , yaxis , quadrant1 , quadrant2 , quadrant3 , quadrant4) {
    if ( pt1x == 0 && pt1y == 0) {
        return origin;

    } else if (pt1x == 0 ) {
        return xaxis;

    } else if (pt1y == 0) {
        return yaxis;

    } else if (pt1x > 0 && pt1y > 0) {
        return quadrant1;

    } else if (pt1x < 0 && pt1y > 0) {
        return quadrant2;

    } else if (pt1x < 0 && pt1y < 0 ) {
        return quadrant3;

    } else if (pt1x > 0 && pt1y < 0) {
        return quadrant4;
    }






}


function getEquation(pt1x , pt1y) {
   let val = pt1y - (slope * pt1x);
   
   let equat = 'y' +  ' = ' +  slope + 'x' + ' + ' +  val;

   return equat;
}






