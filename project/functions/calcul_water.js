function calculWater(weight, nbDefault=8) {
    weight = 1*weight;
    if(weight<=0 || weight == NaN){
        console.log("Erreur ! Un poids doit être positif");
        return nbDefault;
    }
    else if(weight < 36){
        console.log("4 verres par jour");
        return 4;
    }
    else if(weight < 54){
        console.log("6 verres par jour");
        return 6;
    }
     else if(weight<72){
        console.log("8 verres par jour");
        return 8;
    }
    else if(weight<90){
        console.log("11 verres par jour");
        return 11;
    }
    else {
        console.log("14 verres par jour");
        return 14;
    }
}