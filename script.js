let num = 266219;

let numString = String( num );
let result = 1; 

for (let i = 0; i < numString.length; i++) {
    result *= +( numString[i] );
}

let power3 = result;

for (let i = 1; i < 3; i++) {
    power3 *= result;
}

power3 = String( power3 );
alert(+(power3.substr(0,2)));




