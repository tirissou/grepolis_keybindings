// ==UserScript==
// @name         Grepolis Keybindings
// @version      1.0
// @include      http://*.grepolis.*/game*
// @include      https://*.grepolis.*/game*
// @description  Make grepolis easier and faster to navigate.
// @author       tirissou
// @license 	 MIT
// ==/UserScript==

(function() {

    document.addEventListener('keydown', logKey);


    function getZoom() {
        let current = $("#ui_box .bull_eye_buttons .checked")[0].className.split(" ")[1];
        let options = $("#ui_box .bull_eye_buttons .circle_button").splice(0,3);
        let index = [["strategic_map", options[1]], ["island_view", options[0]], ["city_overview", options[2]]];
        let cIndex = 2;
        index.forEach( (e, i) => {
            if (e[0] == current) cIndex = i;
        })
        let zoomout = ( index[cIndex-1] ? index[cIndex-1] : null );
        let zoomin = ( index[cIndex+1] ? index[cIndex+1] : null );
        return [zoomout,zoomin];
}

    function logKey(hk) {
        if (hk.target.tagName.toLowerCase() != "textarea") {
            var notTheseOnes = ['textarea', 'input'];
            var target = hk.target.tagName.toLowerCase();

            if (hk.keyCode == 13 && $.inArray(target, notTheseOnes) < 0 ) {
                WMap.mapJump({
                    'id' :  + Game.townId,
                    'ix' : WMap.islandPosition.x,
                    'iy' : WMap.islandPosition.y
                });
            }
            if (hk.keyCode == 32 && $.inArray(target, notTheseOnes) < 0 ) {
                WMap.mapJump({
                    'id' :  + Game.townId,
                    'ix' : WMap.islandPosition.x,
                    'iy' : WMap.islandPosition.y
                });
            }
            // j to zoom out, h to zoom in
            if (hk.keyCode == "J".charCodeAt() && $.inArray(target, notTheseOnes)) {
                $(getZoom()[0]).click();
            }
            if (hk.keyCode == "K".charCodeAt() && $.inArray(target, notTheseOnes)) {
                $(getZoom()[1]).click();
            }

            // Original Bindings
            if (hk.keyCode == 49 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openTradeOverview();
            }
            if (hk.keyCode == 50 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openCommandOverview();
            }
            if (hk.keyCode == 51 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openMassRecruitOverview();
            }
            if (hk.keyCode == 52 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openUnitsOverview();
            }
            if (hk.keyCode == 53 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openOuterUnitsOverview();
            }
            if (hk.keyCode == 54 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openBuildingsOverview();
            }
            if (hk.keyCode == 55 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openCultureOverview();
            }
            if (hk.keyCode == 56 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openGodsOverview();
            }
            if (hk.keyCode == 57 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openHidesOverview();
            }
            if (hk.keyCode == 48 && $.inArray(target, notTheseOnes) < 0) {
                //TownOverviewWindowFactory.openTownGroupOverview();
            }
            if (hk.keyCode == 63 && $.inArray(target, notTheseOnes) < 0 || hk.keyCode == 219 && $.inArray(target, notTheseOnes) < 0) {
                TownOverviewWindowFactory.openTownsOverview();
            }
            if (hk.keyCode == 192 && $.inArray(target, notTheseOnes) < 0 || hk.keyCode == 221 && $.inArray(target, notTheseOnes) < 0) {
                AttackPlannerWindowFactory.openAttackPlannerWindow();
            }
            if (hk.keyCode == 88 && $.inArray(target, notTheseOnes) < 0) {
                FarmTownOverviewWindowFactory.openFarmTownOverview();
            }
            // Andere
            if (hk.keyCode == 83 && $.inArray(target, notTheseOnes) < 0) {
                if (!$("#ui_box .bull_eye_buttons .city_overview").hasClass('checked')) {
                    $("#ui_box .bull_eye_buttons .city_overview").click();
                } else {
                    $("#ui_box .bull_eye_buttons .island_view").click();
                }
            }
            if (hk.keyCode == 82 && $.inArray(target, notTheseOnes) < 0) {
                RankingWindowFactory.openRankingWindow();
            }
            if (hk.keyCode == 66 && $.inArray(target, notTheseOnes) < 0) {
                Layout.wnd.Create(GPWindowMgr.TYPE_REPORT, ' ');
            }
            if (hk.keyCode == 78 && $.inArray(target, notTheseOnes) < 0) {
                Layout.wnd.Create(GPWindowMgr.TYPE_MESSAGE, ' ');
            }
            if (hk.keyCode == 65 && $.inArray(target, notTheseOnes) < 0) {
                Layout.wnd.Create(GPWindowMgr.TYPE_ALLIANCE);
            }
            if (hk.keyCode == 70 && $.inArray(target, notTheseOnes) < 0) {
                Layout.allianceForum.open();
            }
            if (hk.keyCode == 69 && $.inArray(target, notTheseOnes) < 0) {
                Layout.wnd.Create(GPWindowMgr.TYPE_PLAYER_SETTINGS, ' ');
            }
            if (hk.keyCode == 80 && $.inArray(target, notTheseOnes) < 0) {
                Layout.wnd.Create(GPWindowMgr.TYPE_PLAYER_PROFILE_EDIT, ' ');
            }
            if (hk.keyCode == 77 && $.inArray(target, notTheseOnes) < 0) {
                NotesWindowFactory.openNotesWindow();
            }
            if (hk.keyCode == 76 && $.inArray(target, notTheseOnes) < 0) {
                Layout.wnd.Create(GPWindowMgr.TYPE_CHAT, ' ');
            }
            if (hk.keyCode == 72 && $.inArray(target, notTheseOnes) < 0 && $('.ui_heroes_overview_container').is(':visible')) {
                HeroesWindowFactory.openHeroesWindow();
            }
            if (hk.keyCode == 38 && $(hk.target).find("ul#fto_town_list").length > 0) {
                QT.Functions.farmingvillageshelper.switchTown("up");
            }
            if (hk.keyCode == 40 && $(hk.target).find("ul#fto_town_list").length > 0) {
                QT.Functions.farmingvillageshelper.switchTown("down");
            }
        }
    }
})();
