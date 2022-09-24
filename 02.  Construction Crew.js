function constructionCrew(obj) {
    if(obj.dizziness) {
        obj.dizziness = false;
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
    }
    return obj;
}