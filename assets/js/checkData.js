//default check status 
var checkData = [
    //aeons 0
    [
        false, //valefor
        false, //ifrit
        false, //ixion
        false, //shiva
        false, //bahamut
        false, //yojimbo
        false, //anima
        false, //magus sisters
    ],
    //primers 1
    [
        false, //1
        false, //2
        false, //3
        false, //4
        false, //5
        false, //6
        false, //7
        true, //8 , start true because it's a gift
        false, //9
        false, //10
        false, //11
        false, //12
        false, //13
        false, //14
        false, //15
        false, //16
        false, //17
        false, //18
        false, //19
        false, //20
        false, //21
        false, //22
        false, //23
        false, //24
        false, //25
        false, //26
    ],
    //blitzball 2
    [

    ],
    //weapons 3
    [
        false, //celestial mirror
        false, //caladbolg
        false, //nirvana
        false, //world champ
        false, //onion knight
        false, //spirit lance 
        false, //masamune 
        false, //godhand
    ],
    //jecht spheres 4
    [
        false, //1
        false, //2
        false, //3
        false, //4
        false, //5
        false, //6
        false, //7
        false, //8
        false, //auron
        false, //braska
    ],
    //lancet 5
    [
        true, //jump
        false, //seed cannon
        false, //self destruct
        false, //fire breath
        false, //stone breath
        false, //aqua breath
        false, //thrust kick
        false, //bad breath
        false, //doom
        false, //white wind
        false, //mighty guard
        false, //nova
    ],
    //monster arena 6
    [
        false, //thunder flan
    ],
]
//get checkData from localStorage
if (localStorage.checkData != null)
{
    checkData = JSON.parse(localStorage.getItem("checkData"));
}