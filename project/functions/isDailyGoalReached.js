function isDailyGoalReached(current_nb_glass,nb_glass) {
    if (current_nb_glass < nb_glass){
        var nb_glass_diff = nb_glass - current_nb_glass;
        console.log("Il reste encore " + nb_glass_diff + " verres à boire !");
        return false;
    }
    else {
        console.log("Félicitations, vous avez atteint votre objectif journalier.Vous avez bu " + nb_glass + " verres.");
        return true;
    }
}