if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded' , ready)
else
    ready()


function ready(){
    var button = document.getElementsByClassName('btn')
    for (var i = 0 ; i < button.length ; i++)
    {   
        var btn = button[i] 
        btn.addEventListener('click' , dealWithButton)
    }


}


function dealWithButton(event)
{
    var btnClicked = event.target
    var text = btnClicked.innerText
    if (text  == 'Watch the latest episode!')
        window.open("https://www.southparkstudios.com/episodes/z4ipl3/south-park-christmas-snow-season-23-ep-10", '_blank');
    else if (text == 'WATCH THE EPISODE')
        playSpecificEpisode(btnClicked)
    else
        window.open("https://www.youtube.com/watch?v=S8p22rtNMoM&ab_channel=SouthParkThemeSongs" , '_blank')
}


function playSpecificEpisode(btn){

    var parent  = btn.parentElement
    var title = parent.getElementsByClassName('ep-title')[0].innerText
    if (title == 'CARTMAN GETS AN ANAL PROBE')
        window.open("https://www.southparkstudios.com/episodes/940f8z/south-park-cartman-gets-an-anal-probe-season-1-ep-1" ,'_blank' )
    else if (title == 'VOLCANO')
        window.open("https://www.southparkstudios.com/episodes/iuifco/south-park-volcano-season-1-ep-2" ,'_blank' )
    else if (title == 'WEIGH GAIN 4000')
        window.open("https://www.southparkstudios.com/episodes/er4a32/south-park-weight-gain-4000-season-1-ep-3" ,'_blank' )
    else if (title == "BIG GAY AL'S BIG GAY BOAT RIDE")
        window.open("https://www.southparkstudios.com/episodes/4rcpa5/south-park-big-gay-al-s-gay-boat-ride-season-1-ep-4" ,'_blank' )
    else if (title == 'AN ELEPHANT MAKES LOVE TO A PIG')
        window.open("https://www.southparkstudios.com/episodes/2ly7rt/south-park-an-elephant-makes-love-to-a-pig-season-1-ep-5" ,'_blank' )
    else if (title == 'DEATH')
        window.open("https://www.southparkstudios.com/episodes/u9aiib/south-park-death-season-1-ep-6" ,'_blank' )
    else if (title == 'PINKEYE')
        window.open("https://www.southparkstudios.com/episodes/242csn/south-park-pinkeye-season-1-ep-7" ,'_blank' )
    else if (title == "STARVIN' MARVIN")
        window.open("https://www.southparkstudios.com/episodes/scexjh/south-park-starvin-marvin-season-1-ep-8" ,'_blank' )
    else if (title == 'MR. HANKEY, THE CHRISTMAS POO')
        window.open("https://www.southparkstudios.com/episodes/rmf3o8/south-park-mr-hankey-the-christmas-poo-season-1-ep-9" ,'_blank' )
    else if (title == 'DAMIEN')
        window.open("https://www.southparkstudios.com/episodes/mfcnvu/south-park-damien-season-1-ep-10" ,'_blank' )
    else if (title == "TOM'S RHINOPLASTY")
        window.open("https://www.southparkstudios.com/episodes/44i3y3/south-park-tom-s-rhinoplasty-season-1-ep-11" ,'_blank' )
    else if (title == 'MECHA-STREISAND')
        window.open("https://www.southparkstudios.com/episodes/negd7t/south-park-mecha-streisand-season-1-ep-12" ,'_blank' )
    else if (title == "CARTMAN'S MOM IS A DIRTY SLUT")
        window.open("https://www.southparkstudios.com/episodes/dumjvr/south-park-cartman-s-mom-is-a-dirty-slut-season-1-ep-13" ,'_blank' )   


}