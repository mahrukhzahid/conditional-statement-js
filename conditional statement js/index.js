
var familyName = prompt("Enter Your Full Name:")
// if you want to show alert box but condition is false so how you can do that simple you have need to do is you simple declear a another var but remember one thing not change first variable acording to your need..  
var familyMember = "You are not our family member"

if(familyName === "Mahrukh Zahid"){
    document.write("You Are In Our Family List " , familyName);
    familyMember = familyName
}
else if(familyName === "Fatima"){
    document.write("You Are In Our Family List " , familyName);
        familyMember = familyName
}
else if(familyName === "nadia"){
    document.write("You Are In Our Family List " , familyName);
        familyMember = familyName
}
else if(familyName === "Saima"){
    document.write("You Are In Our Family List " , familyName);
        familyMember = familyName
}

else if(familyName === "Bilquis"){
    document.write("You Are In Our Family List " , familyName);
        familyMember = familyName
}
// else{
//     document.write("You Are Not In Our FAmily List " , familyName , " Go Ahead ");
// }
alert(familyMember); // no need to write else portion
