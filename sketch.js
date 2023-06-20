
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let img, img2, mod, shirt
let wg, bg, fg, money,venmo
let imgs = [], imageCounter = 0
let theta = 0
let thetaInc = 0.01
let rotating = false
let clicked = false

function preload(){
    // audio = createAudio("Katy Perry - Firework (Acoustic Session) REMASTERED.mp3");
    audio = createAudio("50 Cent - In Da Club (Lyrics) [TubeRipper.com].mp3");

imgs[0]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687153640/LongSleeveShirt_Trial1_u2hlx2.png')
 imgs[1] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687167050/LongSleeveShirt_Trial2_tkob7b.png') 
    imgs[2]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687167734/LongSleeveShirt_Trial3_b14aay.png')
 imgs[3] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687198676/LongSleeveShirt_Trial4_pyplwa.png') 
  imgs[4]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687199303/LongSleeveShirt_Trial5_dttc7v.png')
  imgs[5]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687204363/LongSleeveShirt_Trial6_bwmaew.png')
  imgs[6] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687204847/LongSleeveShirt_Trial7_kbror8.png')
    imgs[7] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687205350/LongSleeveShirt_Trial8_rbiiti.png')    
  imgs[8] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687205762/LongSleeveShirt_Trial9_tyrls9.png')
    imgs[9] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687217051/LongSleeveShirt_Trial10_muxgu5.png')
      imgs[10] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687217717/LongSleeveShirt_Trial11_izvmuq.png')
        imgs[11] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687218144/LongSleeveShirt_Trial12_eu7hva.png')
        imgs[12] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687218595/LongSleeveShirt_Trial13_b5cuh1.png')
  imgs[13] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687220795/LongSleeveShirt_Trial14_kl0ohl.png')
  imgs[14] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687221242/LongSleeveShirt_Trial15_cu5xiq.png')   
      imgs[15] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687221896/LongSleeveShirt_Trial16_kk7kv4.png')  
  
// //     imgs[16] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1669922268/fINISHED_HOUSE_sHIRT2_ncbeuk.png')
  
//       imgs[17] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686357463/Chaeyoung_Shirt_New_wwwkwj.png')
//          imgs[18] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686357712/MxmToonShirt_zhevxr.png')

  
//   imgs[16] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1685669730/MiddleFinger_Finished_Shirt_mdd5jo_toypuq.png')
    
//              imgs[21] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686163816/ILoveSac_Shirt_derc72.png')

  
  
//   imgs[20] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686164179/therealedshirt_nrnrtg.png')
//       imgs[19] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686165632/YoshitomoNaraShirt_TheRealOne_b4p1qk.png')
    


//                  imgs[22] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686186940/BanShirt_ft4ixj.png')
    
//     imgs[23] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686353528/EmojiShirt_dznqmc.png')
    
//         imgs[24] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686355315/NOTEBOOKSHIRTTEXT-Recovered_bpqzi3.png')

//         imgs[25] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686354835/Face_Shirt_hqlnnb.png')
    
//             imgs[26] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686361147/CalShirt_hjfhrx.png')


  
  
  mod = loadModel('THEREALLONGSLEEVESHIRT.obj')
}


function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  angleMode(DEGREES)
  shirt = new Shirt(imgs[0], mod, -100, -100, 0, theta)
    wg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669760216/wordstuff2_iqvi3a.png');
  
  fg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1687200861/5b0dae8dccc507001065963d48b9fc6e_w200_v8bq5s.gif')
  
  bg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1687201701/b7a_xwyv7e.gif')
 
    money = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669858524/sendmemoney_schfml.png')
  
      venmo = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669857644/MYVENMO_bkfuco.jpg')
}

function draw() {
  background('rgb(211,246,0)'); 
  
    push();
  noStroke();
translate(30, 20, -3000);
  texture(bg);
  plane(20000, 5000);
  pop();  
  
//   push();
//   noStroke()
//   button = createButton('');
//   if(rotating){
//     button.addClass('unrotate-button')
//     button.html('stop rotation')
//   }else{
//     button.addClass('rotate-button');
//     button.html('rotate shirt')    
//   }
 
//   button.position(1300, 650);
//   button.mousePressed(setRotate);
//   pop();
  
    push();
  noStroke();
translate(1300, -150, -1000);
  texture(money);
  plane(500, 500);
  pop(); 
  
      push();
  noStroke();
translate(1300, -650, -1000);
  texture(venmo);
  plane(500, 500);
  pop(); 
  
  push();
  noStroke();
translate(-1130, -200, -1000);
  texture(fg);
  plane(1000, 1000);
  pop(); 
  
    push();
  noStroke();
translate(-1130, -200, -1000);
  texture(wg);
  plane(1000, 1000);
  pop(); 
  audio.autoplay(true);
  audio.loop(true);
  //console.log(theta)
  shirt.update(mouseX, mouseY, theta)
  
 
  shirt.render()
  if(theta > 2 || theta < -2){
    thetaInc*=-1
  }
  theta+=thetaInc

}

function setRotate(){
  rotating = !rotating
  shirt.toggleRotate()
}

function changeBG() {
  let val = random(255);
  background(val);
}
function mousePressed(){

   shirt.drag(mouseX, mouseY)
   clicked = true

}

function mouseReleased(){

   shirt.dragging = false
   clicked = false

}




  // old

// function mousePressed(){ 
  // if mouse is in right box
    // then: do the image increment thing
  //else if mouse is in left box
    // do the image decrement thing
  // else

  // imageCounter = floor(random(imgs.length))

//     shirt.changeShirt(imgs[imageCounter])

//}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    if(imageCounter < imgs.length -1){
      imageCounter++
    }else{
      imageCounter = 0
    }
  }
    if(keyCode === LEFT_ARROW){
      if(imageCounter > 0){
         imageCounter--
      } else {
        imageCounter = imgs.length - 1
      }

  }
 // console.log(imageCounter)
  shirt.changeShirt(imgs[imageCounter])
}

