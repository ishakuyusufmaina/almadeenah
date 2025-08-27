function template(name, date, session){
  return  ` <html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  * {
    line-height: 1.6;
    box-sizing: border-box;
  font-family: verdana, Geneva, sans-serif;

  }
  body {
    margin: 0 0 0 0;
    padding: 4px;
    width: 100vw;
    //height: 100vh;
  }
  header, footer, main {  
    position: relative;
    width: 100%;    
  }
  header {
   height: 25%;
  }
  header > * {
    position: absolute;
  }
  
 
 header > .footer {
   bottom: 0;
   border-bottom: 1px solid black;
   text-align: justify;
   font-size: 0.25rem;
   width: 100%;
   display: flex;
   gap: auto;
 }
  
  .label {
 // border: 1px solid black;
  padding: 4px;
  align-items: flex-end;
  gap: 2px;
}
header > .footer>* {
 
  text-align: justify;
  font-size: 0.25rem;
  color: indianred;
  flex:1;
  display: flex;
  
}
.ref, .date {
  border-bottom: 1px dotted indianred;
 // width:95%;
  display: inline-block;
  flex: 1;
  color: black;
  font-weight: bolder;
  
}
    #stamping {
      position: relative;
      //border: 1px solid black;
    }
  #stamp {
   width: 140px;
   height: 95px;
   position: absolute;
   left: calc(50% - 70px - 20px);
   bottom: 0px;
   
}
   #adm-officer {
     display: block;
   width: 140px;
   
   position: absolute;
   bottom: 0;
   right: 20;
   
   font-weight: bold;
}
  
  .arabic {
  display: inline-block;
  background: #0059b3;
// border-radius: 15px;
  width: 80%;
  height: 50px;
  left: calc(50% - 80%/2);
  position: absolute;
  clip-path: circle(52%);
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
    font-weight: bold;

}

  
  @media print {
    
    main {
      font-size: 12px !important;
      line-height: 1.2 !important;
    }
  .arabic, .mid {
    background-color: #0059b3 !important; /* Your background color */
    color: #ffffff !important;              /* Your text color */
    -webkit-print-color-adjust: exact;    /* For WebKit browsers (Chrome, Safari, Edge) */
    print-color-adjust: exact;     /* Standard property */
    font-size: 26px !important;
    font-weight: bolder;
  }
    
    .triangle, .strip {
      background-color: #004080 !important;
      -webkit-print-color-adjust: exact;    /* For WebKit browsers (Chrome, Safari, Edge) */
     print-color-adjust: exact;            /* Standard property */

    }
    header .almadinah {
      font-weight: bold;  
      font-size: 32px !important;
      color: black;
    }
    .label {
      font-size: 14px !important;
    }
    .date {
      font-weight: bold !important;
    }
    .bm{
      background: #0059b3 !important;
      print-color-adjust: exact; 
    }

    .ml, .mr, .mm {
      color: white !important;
      background: #0059b3 !important;
      print-color-adjust: exact;
      font-size: 10px !important;
      line-height: 1.1 !important;
      text-align: center !important;

    }
    .mm {
      font-size: 8px !important;
      line-height: 1 !important;

    }
    .mr {
      font-size: 15px !important;
      line-height: 1 !important;

    }

    hr {
     // display: block !important;
     top: calc(20% - 8px);
     
    position: absolute;
    width: 60%;
    left: calc(50% - 60%/2);
      margin: 10px 0;
  border: 0;
  height: 1px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0), indianred, rgba(255, 255, 255, 0)) !important;
      z-index: 102;
      print-color-adjust: exact;
  }
    
      .mm::before {
       background: white !important;
   print-color-adjust: exact;

  }
    .mr::before {
   print-color-adjust: exact;

    background: white !important;
 
  

  }
    footer {
      display: block !important;
      bottom: 120px !important;
     }
  

}
  
  .mid {
   display: flex;
   
  background: #0059b3;
 border-radius: 15px;
  width: 80%;
 height: 50px;
  left: calc(50% - 80%/2);
  position: absolute;
  
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
    font-weight: bold;
    gap: 4px;
    
  
    
  }
  .mid > * {
 
    font-size: 0.2rem;
    border: 1px solid white;
    line-height: 1;
    
    
  }
  main {
   // border-top: 1px solid teal;
    z-index: 3000000;
  }
  </style>
</head>
<body>
<header>
  <div class="shape left triangle"></div>
  <div class="arabic">مدرسة المدينة العالمية النموذجية</div>
  <div class="shape right triangle"></div>
  <div class="almadinah">AL-MADINAH INTERNATIONAL MODEL SCHOOLS</div>
  <img id="logo" src="logo.png">
  <div class="footer">
    <span class="label">Our ref:<span class="our-ref ref"></span></span>
       <span class="label">Your ref:<span class="our-ref ref"></span></span>
    
    <span class="label">
      Date: 
      <date class="date">
         ${date}
      </date>
    </span>
    
  </div>
</header>
<main>
    <p id="name"><b>${name},</b></p>

  <div class="subject">
    OFFER OF PROVISIONAL ADMISSION INTO <span class="almadinah">AL-MADINAH INTERNATIONAL</span><br> MODEL SCHOOL FOR THE ${session} ACADEMIC SESSION
  </div>

  <p class="first">
    I am very pleased to inform you that you have been provisionally offered an admission into <b>NURSERY THREE (3)</b> for the 2023/2024 academic session.
  </p>

  <ul>
     <li>
        Your admission is based on your performance during the entrance intelligence test/interview.
     </li>
     <li>
        Your final admission is subject to the fulfillment of registration requirement.
     </li>
     <li>
       You are expected to register within one (1) week, failure to which you shall be deemed to have forfeited your vacancy to another deserving student.
     </li>
     <li>
        Please find attached list of the items required for the academic year registration, including registration payment teller at the bank and school's rules and regulation to attest to.
     </li>
     <li>
        You are to produce the under listed on the registration day.
        <ol class="requirements">
           <li>Photocopy of this letter</li>
           <li>A transfer letter from the last school attended (Applicable only to those on transfer)</li>
           <li>Photocopy of birth certificate or declaration of age</li>
        </ol>
     </li>
  </ul>
   
  <p class="conc"><strong>Kindly accept my congratulations and best wishes.</strong></p>
   <p id="stamping">Yours faithfully,
     <span id="dir-sign"></span>
    
     <strong>Director</strong>
     <span id="adm-officer">Admission Officer</span>

   </p>
   <img id="stamp" src="../asset/amins-stamp.png">
  </main>
  <footer>
    <hr>
    <div class="strip left">
      
          
    </div>


    <!--div class="mid">
      <div>
        Located along Kaumi Damboa's Street,
        Pompomari Old Airport,
        Maiduguri, Borno State, Nigeria
      </div>
      <div>
        Telephone: <br>
        07080123535 <br>
        080566288882 <br>
        Email: <br>
        almadeenahschool@gmail.com <br>
        Website: <br>
        www.almadeenahschools.com.ng
      </div>
      <div>شارع كومي دمبو
قنقو ماري المطار القديم
ولاية برنو ميدغري
        نيجيريا
      </div>
    </div-->
    
    <div class="ml">
        Located along Kaumi Damboa's <br>
          Street, Pompomari Old Airport, <br>
        Maiduguri, Borno State, Nigeria
      </div>
   
    <div class="mm">
      <span style="color: indianred">TELEPHONE</span> <br>
        07080123535 <br>
        080566288882 <br>
      <span style="color: indianred">Email: </span><br>
        almadeenahschool@gmail.com <br>
      <span style="color: indianred">Website:</span> <br>
        www.almadeenahschools.com.ng
      </div>
          <div class="mr">شارع كومي دمبو
قنقو ماري المطار القديم
ولاية برنو ميدغري
        نيجيريا
      </div>


    <div class="bm">
        
      
      <div class="hrz">
        ...Education Interprets Civilization
      </div>
    </div>
    <div class="strip right"></div>
  </footer>
<style>
  .first {
    text-indent: 40px;
   
  }
  #dir-sign {
    display: block;
    height: 40px;
  }
  #adm-officer {
    
  }
  body, html {
    height: 100vh;
    position: relative;
  }
  .mm > span {
    font-weight: bold;
    text-transform: uppercase;
  }
  footer {
    //border: 1px solid black;
    height: 130px;
    position: absolute;
    bottom: 4px;
    display: none;
    width: 100%;
    left: 0;
  }
  footer > .strip{
    bottom: 0px;
    position: absolute;
    height: 80%;
  }
  footer > .strip.left{
    border-right: 4px solid white;
   // z-index: 0;
  }
    footer > .strip.right{
    border-left: 4px solid white;
  }

  .bm {
  
  background: #0059b3;
// border-radius: 15px;
  width: 80%;
  height: 75%;
    bottom: 0;
  left: calc(50% - 80%/2);
  position: absolute;
  //clip-path: circle(30%);

  text-align: center;
 
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
 
    
  }
  
  hr {
    display: none;
    z-index: 2000000;
  }
  .bm > .hrz {
    color: indianred;
    font-style: italic;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    background: white;
    width: 65%;
    position: absolute;
    bottom: 4px;
    left: calc(50% - 65%/2);
    border-radius: 6px;
    
    
  }
   .ml{
    line-height: 1;
    font-size: 8px;
    width: calc(100%/3 - 15%);
   // border: 1px solid black;
    position: absolute;
    bottom: 24px;
    left: 20%;
     z-index: 10000;
    // border-right: 1px solid white;
   //  border-radius: 4px;
   //  padding-right: 2px;
     color: white;
    
  
}
  .mm::before {
    display: inline-block;
    content: "";
    height: 25vh;
    background: white;
    width: 1px;
    
    position: absolute;
    bottom: 0px;
    z-index: 100;
    left: -0.5em;
  }
    .mr::before {
    display: inline-block;
    content: "";
    height: 25vh;
    background: white;
    width: 1px;
    
    position: absolute;
    bottom: 0px;
    z-index: 100;
    left: -0.1em;
  }
  
       .mr{
    line-height: 1;
    font-size: 8px;
    width: calc(100%/3 - 15%);
   // border: 1px solid black;
    position: absolute;
    bottom: 24px;
    right: 20%;
     z-index: 100000;
   //  border-left: 1px solid white;
 //    border-radius: 4px;
 //    padding-left: 2px;
     color: white;
    background: #0059b3;
         
    
  
}
  
  .mm {
    line-height: 1;
    font-size: 8px;
    width: calc(100%/3 - 15%);
   
   // border: 1px solid black;
    position: absolute;
    bottom: 24px;
    left: calc(40% + 1px);
     z-index: 10000;
    
     color: white;
  }

.subject {
      font-weight: bold;
      text-align: center;
      text-decoration: underline;
      margin: 30px 0 20px;
  
  font-family: "Times New Roman", Times, Georgia, Cambria, "Tinos", serif;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 18px; /* adjust as needed */
  letter-spacing: 1px; /* tweak for spacing */

    }
    .requirements {
      margin-left: 20px;
    }
    .signature-section {
      margin-top: 50px;
    }
    .signature {
      margin-top: 40px;
    }



.shape  {
  width: 20%;
  height: 60px;
  position: absolute;
  top: 0px;  
}

#logo {
  width: 15%;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 15%/2);
  top: calc(50% + 5px - 15%/2);
  aspect-ratio: 1/1;
  
  
}

header .almadinah {
  width: 100%;
  left: 0;
  top: 50px;
  position: absolute;
  font-weight: bolder;
  text-align: center;
  font-size: 0.55rem;
  color: #0059b3;
  //border: 1px solid black;
  //width: fit-content;
   white-space: nowrap;
  font-weight: bold;
}

.almadinah {
   white-space: nowrap;
}

.triangle,  .strip {
  background: #004080;
  z-index: 100;
  width: 20%;
  height: 60px;
  position: absolute;
  
}
.triangle.left {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 60%);
  left: 0;
  background: #004080;
}
.strip.left {
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%);
  left: 0;
}
  .strip.right {
  clip-path: polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%);
  right: 0;
    
  
}
  .mid {
    bottom: 0;
    width: 80%;
    box-sizing: border-box;
    z-index: 100000;
  //  height: 60px;
    padding: 4px;
  }
  
.triangle.right {
  clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 100%);
  right: 0;
}



ol > li {
  list-style-type: upper-roman; /* or lower-roman */
}



</style>
</body>
</html>`;
}
