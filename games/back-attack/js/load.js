function load() {
    if (firstRun) {
        //makeMap(random(0, 4), random(0, 5));
        makeMap(2, 0);
        players = makePlayers();
        firstRun = 0;
    }
}
