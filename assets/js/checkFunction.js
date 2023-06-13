//check function
const check = (element) => {
    console.log(element);
    //set checkDataIndex based on element
    let checkDataIndexA;
    let checkDataIndexB;
    //aeons
    if (element===sectionValefor) {
        checkDataIndexA = 0;
        checkDataIndexB = 0;
    }
    else if (element===sectionIfrit) {
        checkDataIndexA = 0;
        checkDataIndexB = 1;
    }
    else if (element===sectionIxion) {
        checkDataIndexA = 0;
        checkDataIndexB = 2;
    }
    else if (element===sectionShiva) {
        checkDataIndexA = 0;
        checkDataIndexB = 3;
    }
    else if (element===sectionBahamut) {
        checkDataIndexA = 0;
        checkDataIndexB = 4;
    }
    else if (element===sectionYojimbo) {
        checkDataIndexA = 0;
        checkDataIndexB = 5;
    }
    else if (element===sectionAnima) {
        checkDataIndexA = 0;
        checkDataIndexB = 6;
    }
    else if (element===sectionMagusSisters) {
        checkDataIndexA = 0;
        checkDataIndexB = 7;
    }
    //primers
    else if (element===sectionPrimer1) {
        checkDataIndexA = 1;
        checkDataIndexB = 0;
    }
    else if (element===sectionPrimer2) {
        checkDataIndexA = 1;
        checkDataIndexB = 1;
    }
    else if (element===sectionPrimer3) {
        checkDataIndexA = 1;
        checkDataIndexB = 2;
    }
    else if (element===sectionPrimer4) {
        checkDataIndexA = 1;
        checkDataIndexB = 3;
    }
    else if (element===sectionPrimer5) {
        checkDataIndexA = 1;
        checkDataIndexB = 4;
    }
    else if (element===sectionPrimer6) {
        checkDataIndexA = 1;
        checkDataIndexB = 5;
    }
    else if (element===sectionPrimer7) {
        checkDataIndexA = 1;
        checkDataIndexB = 6;
    }
    else if (element===sectionPrimer8) {
        checkDataIndexA = 1;
        checkDataIndexB = 7;
    }
    else if (element===sectionPrimer9) {
        checkDataIndexA = 1;
        checkDataIndexB = 8;
    }
    else if (element===sectionPrimer10) {
        checkDataIndexA = 1;
        checkDataIndexB = 9;
    }
    else if (element===sectionPrimer11) {
        checkDataIndexA = 1;
        checkDataIndexB = 10;
    }
    else if (element===sectionPrimer12) {
        checkDataIndexA = 1;
        checkDataIndexB = 11;
    }
    else if (element===sectionPrimer13) {
        checkDataIndexA = 1;
        checkDataIndexB = 12;
    }
    else if (element===sectionPrimer14) {
        checkDataIndexA = 1;
        checkDataIndexB = 13;
    }
    else if (element===sectionPrimer15) {
        checkDataIndexA = 1;
        checkDataIndexB = 14;
    }
    else if (element===sectionPrimer16) {
        checkDataIndexA = 1;
        checkDataIndexB = 15;
    }
    else if (element===sectionPrimer17) {
        checkDataIndexA = 1;
        checkDataIndexB = 16;
    }
    else if (element===sectionPrimer18) {
        checkDataIndexA = 1;
        checkDataIndexB = 17;
    }
    else if (element===sectionPrimer19) {
        checkDataIndexA = 1;
        checkDataIndexB = 18;
    }
    else if (element===sectionPrimer20) {
        checkDataIndexA = 1;
        checkDataIndexB = 19;
    }
    else if (element===sectionPrimer21) {
        checkDataIndexA = 1;
        checkDataIndexB = 20;
    }
    else if (element===sectionPrimer22) {
        checkDataIndexA = 1;
        checkDataIndexB = 21;
    }
    else if (element===sectionPrimer23) {
        checkDataIndexA = 1;
        checkDataIndexB = 22;
    }
    else if (element===sectionPrimer24) {
        checkDataIndexA = 1;
        checkDataIndexB = 23;
    }
    else if (element===sectionPrimer25) {
        checkDataIndexA = 1;
        checkDataIndexB = 24;
    }
    else if (element===sectionPrimer26) {
        checkDataIndexA = 1;
        checkDataIndexB = 25;
    }
    //weapons
    else if (element===sectionWeaponMirror) {
        checkDataIndexA = 3;
        checkDataIndexB = 0;
    }
    else if (element===sectionWeaponCaladbolg) {
        checkDataIndexA = 3;
        checkDataIndexB = 1;
    }
    else if (element===sectionWeaponNirvana) {
        checkDataIndexA = 3;
        checkDataIndexB = 2;
    }
    else if (element===sectionWeaponWorldChamp) {
        checkDataIndexA = 3;
        checkDataIndexB = 3;
    }
    else if (element===sectionWeaponOnionKnight) {
        checkDataIndexA = 3;
        checkDataIndexB = 4;
    }
    else if (element===sectionWeaponSpiritLance) {
        checkDataIndexA = 3;
        checkDataIndexB = 5;
    }
    else if (element===sectionWeaponMasamune) {
        checkDataIndexA = 3;
        checkDataIndexB = 6;
    }
    else if (element===sectionWeaponGodhand) {
        checkDataIndexA = 3;
        checkDataIndexB = 7;
    }
    //jecht spheres
    else if (element===sectionJechtSphere1) {
        checkDataIndexA = 4;
        checkDataIndexB = 0;
    }
    else if (element===sectionJechtSphere2) {
        checkDataIndexA = 4;
        checkDataIndexB = 1;
    }
    else if (element===sectionJechtSphere3) {
        checkDataIndexA = 4;
        checkDataIndexB = 2;
    }
    else if (element===sectionJechtSphere4) {
        checkDataIndexA = 4;
        checkDataIndexB = 3;
    }
    else if (element===sectionJechtSphere5) {
        checkDataIndexA = 4;
        checkDataIndexB = 4;
    }
    else if (element===sectionJechtSphere6) {
        checkDataIndexA = 4;
        checkDataIndexB = 5;
    }
    else if (element===sectionJechtSphere7) {
        checkDataIndexA = 4;
        checkDataIndexB = 6;
    }
    else if (element===sectionJechtSphere8) {
        checkDataIndexA = 4;
        checkDataIndexB = 7;
    }
    else if (element===sectionAuronSphere) {
        checkDataIndexA = 4;
        checkDataIndexB = 8;
    }
    else if (element===sectionBraskaSphere) {
        checkDataIndexA = 4;
        checkDataIndexB = 9;
    }
    //lancet
    else if (element===sectionLancetJump) {
        checkDataIndexA = 5;
        checkDataIndexB = 0;
    }
    else if (element===sectionLancetSeedCannon) {
        checkDataIndexA = 5;
        checkDataIndexB = 1;
    }
    else if (element===sectionLancetSelfDestruct) {
        checkDataIndexA = 5;
        checkDataIndexB = 2;
    }
    else if (element===sectionLancetFireBreath) {
        checkDataIndexA = 5;
        checkDataIndexB = 3;
    }
    else if (element===sectionLancetStoneBreath) {
        checkDataIndexA = 5;
        checkDataIndexB = 4;
    }
    else if (element===sectionLancetAquaBreath) {
        checkDataIndexA = 5;
        checkDataIndexB = 5;
    }
    else if (element===sectionLancetThrustKick) {
        checkDataIndexA = 5;
        checkDataIndexB = 6;
    }
    else if (element===sectionLancetBadBreath) {
        checkDataIndexA = 5;
        checkDataIndexB = 7;
    }
    else if (element===sectionLancetDoom) {
        checkDataIndexA = 5;
        checkDataIndexB = 8;
    }
    else if (element===sectionLancetWhiteWind) {
        checkDataIndexA = 5;
        checkDataIndexB = 9;
    }
    else if (element===sectionLancetMightyGuard) {
        checkDataIndexA = 5;
        checkDataIndexB = 10;
    }
    else if (element===sectionLancetNova) {
        checkDataIndexA = 5;
        checkDataIndexB = 11;
    }
    else if (element===sectionMonsterThunderFlan) {
        checkDataIndexA = 6;
        checkDataIndexB = 0;
    }
    //update classList
    //uncheck
    if (element.dataset.pluralIndex === null) {
        if (element.classList.contains('check')) {
            element.classList.remove('check');
            checkData[checkDataIndexA][checkDataIndexB]=false;
        }
        //check
        else {
            element.classList.add('check');
            checkData[checkDataIndexA][checkDataIndexB]=true;
        }
    }
    else {
        console.log('this element is plural');
        let pluralIndex = parseInt(element.dataset.pluralIndex);
        for (let i=0; i<arrayMonsterPlural[pluralIndex].length; i++) {
            console.log(pluralIndex);
            let instance = arrayMonsterPlural.pluralIndex[i];
            if (instance.classList.contains('check')) {
                instance.classList.remove('check');
                checkData[checkDataIndexA][checkDataIndexB]=false;
            }
            //check
            else {
                instance.classList.add('check');
                checkData[checkDataIndexA][checkDataIndexB]=true;
            }
        }
    }
    
    //update localStorage
    localStorage.setItem('checkData', JSON.stringify(checkData))
}