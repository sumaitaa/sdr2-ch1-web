var logBox = document.getElementById('logBox');

logBox.addEventListener('click', nextImage);
logBox.addEventListener('click', nextLogBox);
logBox.addEventListener('click', nextSpriteImage);

var backgroundImg = document.querySelector('.backgroundImg');
var selectedImage =  0; // this is gonna show me the image selected in the list

/*  BACKGROUND IMAGES ARRAY 

this is gonna be a huge list so i'll  add which background images i have finished

    - All the meetup scenes

   */

var backgroundImages = ['1.jpg', '1.jpg', '2.jpg', '2.jpg', '2.jpg', '2.jpg', '3.jpg', '3.jpg', '4.jpg', '4.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg', 'island.jpg']; // UPDATE IMAGES HERE

var logBox = document.getElementById('logBox');
var selectedLog = 0; // this is gonna show me the dialogue in the list

/* DIALOGUE ARRAY

once again, another mess (an even bigger one than the last), so i'll make a list of all the convos. Check the script!!

    - Up until "What the hell is this place"

    */

var dialogues = ["[Hajime] <br><br> hi im hajime, and im going to hope peak academy for the first time in my life!",
                "<a class='mc_color'>[Hajime]</a> <br><br> i am so excited that i can finally be of worth in this judgmental world, <br> because i am just a boring less-than-average person who would never be the main character of a videogame :(",
                "<a class='mc_color'>[Hajime]</a> <br><br> wow look at this class! its so cool and all those cool people. <br> i wish i could be just like them, theyre so much better than me",
                "<a class='mc_color'>[Hajime]</a> <br><br> except for that guy in the middle, he looks kind of scary",
                "<a class='sc_color'>[Usami]</a> <br><br> hi kids! im usami, and today we are going on a field trip for the rest of our lives!",
                "<a class='mc_color'>[Hajime]</a> <br><br> what", 
                "",
                "<a class='mc_color'>[Hajime]</a> <br><br> uh",
                "",
                "<a class='mc_color'>[Hajime]</a><br><br> what the hell is this place",
                "",
                "<a class='sc_color'>[???]</a><br><br> what is happening, i dont feel so good",
                "<a class='sc_color'>[???]</a><br><br> lol this is just a prank.. i think",
                "<a class='sc_color'>[???]</a><br><br> mom come get me please",
                "<a class='sc_color'>[???]</a><br><br> hey pink teddy bear, if you dont let me out of here in 5 minutes,<br> im going to roundhouse kick everyone here",
                "<a class='sc_color'>[Usami]</a><br><br> everyone calm down! and look at the beautiful scenery!",
                "<a class='mc_color'>[Hajime]</a><br><br> how are we supposed to look at the beautiful scenery calmly if we just got kidnapped",
                "<a class='sc_color'>[Usami]</a><br><br> shut up.",
                "<a class='sc_color'>[Usami]</a><br><br> and look at the water! as its washing away all your bad feelings!",
                "<a class='sc_color'>[???]</a><br><br> ok, we get it",
                "<a class='sc_color'>[???]</a><br><br> someone please come get us! I need to finish my band aid collection before i die!",
                "<a class='sc_color'>[Usami]</a><br><br> stop screaming or else youll never be able to talk again",
                "<a class='sc_color'>[???]</a><br><br> wait no, dont kill me please",
                "<a class='sc_color'>[Usami]</a><br><br> there is no killing here! this is a wholesome place of happiness and fun! <br> Just dont make your throat sore from all that screaming",
                "<a class='sc_color'>[Usami]</a><br><br> just reminding you that if you kill anyone, thats against the rules,<br> and you shall go to jail if you commit any crime",
                "<a class='sc_color'>[Hajime]</a><br><br> are you telling me that were literally just here to enjoy ourselves?<br> cause thats really hard to believe",
                "<a class='sc_color'>[Usami]</a><br><br> yes!! go have fun and meet new people"];
//UPDATE DIALOGUES HERE
                
var spriteImg = document.querySelector('.spriteImg');
var selectedSprite = 0; // This is going to show me the sprite selected in the list.

/* SPRITE IMAGES ARRAY 

   This is going to be a confusing array, and I pray for your well-being once you move this to GitHub for this part. I'll point out which scened sprites I have finished:
   
   If you're updating this on GitHub, good luck!!
   
*/

var sprites = ["", "", "", "", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_wave.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_wave.png", "", "", "", "", "","../SDR2CHAP1P/SDR2SPRITES/teruteru/teruteru_sweatdropping.png", "../SDR2CHAP1P/SDR2SPRITES/kazuichi/kazuichi_handpointface.png", "../SDR2CHAP1P/SDR2SPRITES/ibuki/ibuki_shocked.png", "../SDR2CHAP1P/SDR2SPRITES/mahiru/mahiru_angry.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_holdstick.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_holdstick.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_eyesquint.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_holdstick.png", "../SDR2CHAP1P/SDR2SPRITES/peko/peko_armscrossedspeak.png", "../SDR2CHAP1P/SDR2SPRITES/mikan/mikan_pleading.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_eyesquint.png", "../SDR2CHAP1P/SDR2SPRITES/mikan/mikan_distressed.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_holdstick.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_idle.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_idle.png", "../SDR2CHAP1P/SDR2SPRITES/usami/usami_wave.png"];


function nextImage(){
    
    
    if (selectedImage >= backgroundImages.length){
        
        alert("you've reached the end, there's no more images");
        
    }
    
    selectedImage++;
        
    return backgroundImg.setAttribute('src', '../SDR2CHAP1P/SDR2BG/' + backgroundImages[selectedImage]);

    
}



function nextLogBox(){

    
    if(selectedLog >= dialogues.length){
        
        alert("you've reached the end, there's no more dialogues");
        
    }
    
    selectedLog++;
    
    return logBox.innerHTML = dialogues[selectedLog];
}

function nextSpriteImage(){
    
    selectedSprite++;
    
    return spriteImg.setAttribute('src', sprites[selectedSprite]);
}
