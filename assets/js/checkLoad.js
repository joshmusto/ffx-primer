//generic load checkData function
const checkLoad = (element) => {
    element.classList.add('check');
}
//for loop through all data and load as needed
const loadData = () => {
    for (let i = 0; i < 6; i++) {
        //aeons
        if (i===0)
        {
            for (let j=0; j<7; j++) {
                //set aeon
                let aeon;
                if (j===0) aeon=sectionValefor 
                else if (j===1) aeon=sectionIfrit 
                else if (j===2) aeon=sectionIxion 
                else if (j===3) aeon=sectionShiva 
                else if (j===4) aeon=sectionBahamut
                else if (j===5) aeon=sectionYojimbo 
                else if (j===6) aeon=sectionAnima
                else if (j===7) aeon=sectionMagusSisters 
                //check corresponding checkIndex and set as needed
                if (checkData[0][j]===true) {
                    checkLoad(aeon);
                }
            }
        }
        //primers
        else if (i===1) {
            for (let j=0; j<25; j++) {
                //set primer
                let primer;
                if (j===0) primer=sectionPrimer1
                else if (j===1) primer=sectionPrimer2
                else if (j===2) primer=sectionPrimer3
                else if (j===3) primer=sectionPrimer4 
                else if (j===4) primer=sectionPrimer5
                else if (j===5) primer=sectionPrimer6 
                else if (j===6) primer=sectionPrimer7
                else if (j===7) primer=sectionPrimer8
                else if (j===8) primer=sectionPrimer9
                else if (j===9) primer=sectionPrimer10
                else if (j===10) primer=sectionPrimer11 
                else if (j===11) primer=sectionPrimer12
                else if (j===12) primer=sectionPrimer13
                else if (j===13) primer=sectionPrimer14
                else if (j===14) primer=sectionPrimer15
                else if (j===15) primer=sectionPrimer16
                else if (j===16) primer=sectionPrimer17
                else if (j===17) primer=sectionPrimer18
                else if (j===18) primer=sectionPrimer19
                else if (j===19) primer=sectionPrimer20
                else if (j===20) primer=sectionPrimer21
                else if (j===21) primer=sectionPrimer22
                else if (j===22) primer=sectionPrimer23
                else if (j===23) primer=sectionPrimer24
                else if (j===24) primer=sectionPrimer25
                else if (j===25) primer=sectionPrimer26
                //check corresponding checkIndex and set as needed
                if (checkData[1][j]===true) {
                    checkLoad(primer);
                }
            }
        }
        //blitzball
        //weapons
        else if (i===3) {
            for (let j=0; j<7; j++) {
                //set weapon
                let weapon;
                if (j===0) weapon=sectionWeaponMirror
                else if (j===1) weapon=sectionWeaponCaladbolg 
                else if (j===2) weapon=sectionWeaponNirvana
                else if (j===3) weapon=sectionWeaponWorldChamp
                else if (j===4) weapon=sectionWeaponOnionKnight
                else if (j===5) weapon=sectionWeaponSpiritLance
                else if (j===6) weapon=sectionWeaponMasamune
                else if (j===7) weapon=sectionWeaponGodhand
                //check corresponding checkIndex and set as needed
                if (checkData[3][j]===true) {
                    checkLoad(weapon);
                }
            }
        }
        //jecht spheres
        else if (i===4) {
            for (let j=0; j<9; j++) {
                //set sphere
                let sphere;
                if (j===0) sphere=sectionJechtSphere1
                else if (j===1) sphere=sectionJechtSphere2
                else if (j===2) sphere=sectionJechtSphere3
                else if (j===3) sphere=sectionJechtSphere4
                else if (j===4) sphere=sectionJechtSphere5
                else if (j===5) sphere=sectionJechtSphere6
                else if (j===6) sphere=sectionJechtSphere7
                else if (j===7) sphere=sectionJechtSphere8
                else if (j===8) sphere=sectionAuronSphere
                else if (j===9) sphere=sectionBraskaSphere
                //check corresponding checkIndex and set as needed
                if (checkData[4][j]===true) {
                    checkLoad(sphere);
                }
            }
        }
        //lancet
        else if (i===5) {
            for (let j=0; j<11; j++) {
                //set sphere
                let lancet;
                if (j===0) lancet=sectionLancetJump
                else if (j===1) lancet=sectionLancetSeedCannon
                else if (j===2) lancet=sectionLancetSelfDestruct
                else if (j===3) lancet=sectionLancetFireBreath
                else if (j===4) lancet=sectionLancetStoneBreath
                else if (j===5) lancet=sectionLancetAquaBreath
                else if (j===6) lancet=sectionLancetThrustKick
                else if (j===7) lancet=sectionLancetBadBreath
                else if (j===8) lancet=sectionLancetDoom
                else if (j===9) lancet=sectionLancetWhiteWind
                else if (j===10) lancet=sectionLancetMightyGuard
                else if (j===11) lancet=sectionLancetNova
                //check corresponding checkIndex and set as needed
                if (checkData[5][j]===true) {
                    checkLoad(lancet);
                }
            }
        }
        //monster arena
        else if (i===6) {
            for (let j=0; j<0; j++) {
                //set sphere
                let monster;
                if (j===0) monster=sectionLancetJump
                //check corresponding checkIndex and set as needed
                if (checkData[5][j]===true) {
                    checkLoad(lancet);
                }
            }
        }
    }
}

loadData();
console.log(checkData);