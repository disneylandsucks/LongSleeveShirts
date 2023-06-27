
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
    audio = createAudio("Big Time Rush - Boyfriend.mp3");
    // audio = createAudio("50 Cent - In Da Club (Lyrics) [TubeRipper.com].mp3");

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
    imgs[16] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687229231/LongSleeveShirt_Trial16_n3jrdk.png')  
      imgs[17] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687230577/LongSleeveShirt_Trial17_wajzhw.png')
         imgs[18] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687231558/LongSleeveShirt_Trial18_vmdk2m.png')
      imgs[19] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687232643/LongSleeveShirt_Trial19_nxxxzu.png')
  imgs[20] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687233033/LongSleeveShirt_Trial20_focrhc.png')   
             imgs[21] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687293829/LongSleeveShirt_Trial21_rkloyy.png')

                 imgs[22] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687294655/LongSleeveShirt_Trial22_gca21a.png')
    
    imgs[23] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687294655/LongSleeveShirt_Trial23_wivqbq.png')
    
        imgs[24] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687302877/LongSleeveShirt_Trial25_dtazxj.png')

        imgs[25] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687302877/LongSleeveShirt_Trial24_kdkszg.png')
    
            imgs[26] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687302877/LongSleeveShirt_Trial26_utqzsk.png')

            imgs[27] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687302877/LongSleeveShirt_Trial27_ybt1j9.png')
    
    imgs[28] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687304128/LongSleeveShirt_Trial28_zr7t4a.png')

      imgs[29] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687304661/LongSleeveShirt_Trial29_ekvvnp.png')
    
    imgs[30] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687305355/LongSleeveShirt_Trial30_vsh4ki.png')
    
    imgs[31] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687305873/LongSleeveShirt_Trial31_ctltuy.png')

        imgs[32] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687306591/LongSleeveShirt_Trial32_tweul5.png')

            imgs[33] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687307077/LongSleeveShirt_Trial33_psiumz.png')

            imgs[34] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687308173/LongSleeveShirt_Trial34_kekt5d.png')

                imgs[35] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687309417/LongSleeveShirt_Trial35_vtlbka.png')


                imgs[36] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687310127/LongSleeveShirt_Trial36_xtp80s.png')


                imgs[37] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687310653/LongSleeveShirt_Trial37_diub2f.png')


                imgs[38] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687311136/LongSleeveShirt_Trial38_jakvlj.png')

                imgs[39] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687315285/LongSleeveShirt_Trial39_j3weij.png')

                    imgs[40] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687316033/LongSleeveShirt_Trial40_fmttl6.png')
    
                imgs[41] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687318817/LongSleeveShirt_Trial43_r60xe0.png')
    
                imgs[42] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687318817/LongSleeveShirt_Trial41_hlb8dm.png')
    
                imgs[43] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687318817/LongSleeveShirt_Trial42_eg0yls.png')
    
                imgs[44] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687319723/LongSleeveShirt_Trial44_wc07eg.png')
    
                imgs[45] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687320306/LongSleeveShirt_Trial45_w6nn2t.png')
    
                imgs[46] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687323655/LongSleeveShirt_Trial46_apxity.png')
    
                imgs[47] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687323959/LongSleeveShirt_Trial47_gdikhz.png')

                    imgs[48] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687375985/LongSleeveShirt_Trial47KANYE_gn3nan.png')

                    imgs[49] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687376943/LongSleeveShirt_Trial48Justin_zq34wr.png')
    
                    imgs[50] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687377983/LongSleeveShirt_Trial49BigBallerBrand_pjsabb.png')
    
                    imgs[51] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687378539/LongSleeveShirt_Trial50_rx3koq.png')

                    imgs[52] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687379448/LongSleeveShirt_Trial52_d6tkw1.png')
                    
                    imgs[53] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687380350/LongSleeveShirt_Trial53_htdyit.png')
                    
                    imgs[54] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687381055/LongSleeveShirt_Trial54_b3ogps.png')
                    
                    imgs[55] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687381754/LongSleeveShirt_Trial55_irfdsh.png')
                   
                    imgs[56] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687382705/LongSleeveShirt_Trial56_a6dacb.png')
    
                    imgs[57] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687383376/LongSleeveShirt_Trial57_saz4t9.png')
    
                    imgs[58] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687384193/LongSleeveShirt_Trial58_zzhvgz.png')
    
                    imgs[59] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687385070/LongSleeveShirt_Trial59_o18okx.png')
    
                    imgs[60] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687385551/LongSleeveShirt_Trial60_z2ke7c.png')
    
                    imgs[61] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687826219/LongSleeveShirt_Trial61_q8egfr.png')
    
                    imgs[62] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687826220/LongSleeveShirt_Trial62_kkobnq.png')

                        imgs[63] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687826220/LongSleeveShirt_Trial65_frynqr.png')


                        imgs[64] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687826220/LongSleeveShirt_Trial63_spstno.png')


                        imgs[65] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687826220/LongSleeveShirt_Trial64_rmr3sj.png')

                        imgs[66] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687892781/LongSleeveShirt_Trial68_ussipz.png')
    
                        imgs[67] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687892781/LongSleeveShirt_Trial66_a1ry20.png')
    
                        imgs[68] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687892781/LongSleeveShirt_Trial69_clpwzb.png')
    
                        imgs[69] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687892781/LongSleeveShirt_Trial67_r5qh6t.png')
    
                        imgs[70] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687897955/LongSleeveShirt_Trial70_wnc1no.png')
    
                        imgs[71] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687897955/LongSleeveShirt_Trial71_znhdge.png')

                            imgs[72] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687899513/LongSleeveShirt_Trial74_zwgxei.png')
    
                            imgs[73] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687899513/LongSleeveShirt_Trial73_hhmmkw.png')
    
                            imgs[74] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687899514/LongSleeveShirt_Trial72_gkc5yu.png')

                            imgs[75] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687900979/LongSleeveShirt_Trial77_u8lbsv.png')
                            imgs[76] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687900979/LongSleeveShirt_Trial76_y7aeri.png')
                            imgs[77] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687900979/LongSleeveShirt_Trial75_ba5m5c.png')
                            imgs[78] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1687901753/LongSleeveShirt_Trial78_lghpeh.png')

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

