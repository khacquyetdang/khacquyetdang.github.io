(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/index.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/index.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n\n@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css');\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');\n/*@import url('./assets/css/bootstrap.css');\n@import url('./assets/css/cm-overlay.css');\n@import url('./assets/css/style.css');\n@import url('./assets/css/font-awesome.css');\n*/\n/* overlay - centered modal dialog*/\n.overlay-visible\n{\n    overflow:hidden !important;\n}\n#cm-overlay-mask,\n#cm-wrap\n{\n    position: fixed;\n    left: 0;\n    top: 0;\n    width:100%;\n    height:100%;\n    z-index: 9991;\n    text-align:center;\n/* IE<9 support hack */\n}\n/* chrome bug fix causing overlay-mask to not appear */\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n#cm-overlay-mask\n{\n    overflow:scroll;\n}\n#cm-overlay-mask::-webkit-scrollbar\n{\n    width:0px; \n}}\n#cm-wrap\n{\n    visibility:hidden;\n    white-space:nowrap;\n}\n#cm-wrap *\n{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n#cm-wrap .cm-box,\n#cm-wrap .cm-scale\n{\n    white-space:normal;\n    vertical-align:middle;\n    position:relative;\n    display:inline-block;\n/* IE<8 support hacks */\n    *display:inline;\n    *zoom:1;\n}\n#cm-wrap .cm-scale\n{\n    height:100%;\n    line-height:100%;\n    width:0;\n}\n#cm-wrap .cm-box img,\n#cm-wrap .cm-box iframe\n{\n    display:block;\n}\n/* customise mask colour */\n#cm-overlay-mask\n{\n    background-color:#000000;\n}\n/* customise loader GIF */\n#cm-wrap\n{\n    background:none;\n}\n#cm-wrap.cm-loaded\n{\n    background-image:none;\n}\n/* overlay border and shadow */\n#cm-overlay\n{\n    box-shadow:0 0 90px 5px #000;\n    /**/\n    opacity:0;\n    z-index:9992;\n}\n/* close link style */\n#cm-wrap #cm-close\n{\n    display:block;\n\theight: 61px;\n    width: 59px;\n    position:absolute;\n    right:0;\n    top:0;\n    background:transparent url('close.png') scroll no-repeat center center;\n    cursor:pointer;\n    z-index:9993;\n    zoom:1;\n    text-indent:-999em;\n    opacity:0.5;\n}\n/* prev and next buttons */\n#cm-wrap #cm-prev,\n#cm-wrap #cm-next\n{\n    display:block;\n    position:absolute;\n    height: 97px;\n    width: 49px;\n    top:50%;\n    margin-top:-63px;\n    text-indent:-999em;\n    opacity:0.5;\n    outline:none;\n    z-index:9993;\n}\n#cm-wrap #cm-prev\n{\n    left:0;\n    background:transparent url('prev.png') scroll no-repeat 0 center;\n}\n#cm-wrap #cm-next\n{\n    right:0;\n    background:transparent url('next.png') scroll no-repeat 100% center;\n}\n#cm-wrap #cm-prev:hover,\n#cm-wrap #cm-next:hover,\n#cm-wrap #cm-close:hover\n{\n    opacity:1;\n}\n/* tooltip for close link (jquery tools) */\n.tooltip\n{\n    text-align:center;\n    font-family:sans-serif;\n    color:#eee;\n    background:#000;\n    padding:10px;\n    border:1px solid #eee;\n    z-index:99999;\n    font-size:12px;\n    background: #000;\n    border: 1px solid #eee;\n}\n.tooltip:after, .tooltip:before\n{\n    bottom: 100%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n.tooltip:after\n{\n    border-color: rgba(0, 0, 0, 0);\n    border-bottom-color: #000;\n    border-width: 10px;\n    left: 50%;\n    margin-left: -10px;\n}\n.tooltip:before\n{\n    border-color: rgba(238, 238, 238, 0);\n    border-bottom-color: #eee;\n    border-width: 11px;\n    left: 50%;\n    margin-left: -11px;\n}\n@media (max-width: 640px){\n\t#cm-wrap .cm-box img, #cm-wrap .cm-box iframe {\n\t\tdisplay: block;\n\t\twidth: 80%;\n\t\tmargin: 0 auto;\n\t\theight: inherit;\n\t}\n\t#cm-overlay {\n\t\tborder: none;\n\t}\n}\n/* You can add global styles to this file, and also import other style files */\n/*--\nAuthor: W3layouts\nAuthor URL: http://w3layouts.com\nLicense: Creative Commons Attribution 3.0 Unported\nLicense URL: http://creativecommons.org/licenses/by/3.0/\n--*/\nbody {\n  margin: 0;\n  background: #fff;\n  font-family: 'Source Sans Pro', sans-serif;\n}\nbody a,\n.agile_form input[type=\"submit\"] {\n  transition: 0.5s all;\n  text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-family: 'Source Sans Pro', sans-serif;\n}\np {\n  margin: 0;\n  line-height: 1.8;\n  font-size: 1em;\n  color: #000;\n}\n.tab-content {\n  /*border: solid;*/\n}\nul,\nlabel {\n  margin: 0;\n  padding: 0;\n}\nbody a:hover,\nbody a:focus {\n  text-decoration: none;\n  outline: none;\n}\n/*-- banner --*/\n.banner {\n  /*background: url(../images/bg2.jpg)no-repeat center 0px fixed;*/\n  background: #7ecaf6;\n  background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -ms-background-size: cover;\n}\n.banner-text {\n  padding: 16em 0;\n  text-align: center;\n}\n/*-- banner-text --*/\n.banner-text h1 {\n  font-size: 3.5em;\n  line-height: 1.5em;\n  display: inline-block;\n  border: solid #7ecaf6;\n  border-width: 4px;\n  color: rgb(255, 255, 255);\n  background: #567182;\n  padding: 0 1em;\n  letter-spacing: 1px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.banner-text h1 a {\n  color: #fff;\n}\nh2.w3ls-bnrtext {\n  color: #fff;\n  margin: 0.8em 0 0.2em;\n  font-size: 4em;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\nh2.w3ls-bnrtext span {\n  font-weight: 800;\n}\np.w3ls-p {\n  font-size: 1.2em;\n  color: #fff;\n  text-transform: capitalize;\n  padding-top: 1em;\n  letter-spacing: 1px;\n  display: inline-block;\n  border-top: 4px double #fff;\n}\na.buy {\n  font-size: 1em;\n  color: #fff;\n  padding: 0.7em 0;\n  margin: 4em auto 0;\n  text-align: center;\n  border-radius: 5px;\n  border: 2px solid;\n  letter-spacing: 2px;\n  position: relative;\n  text-transform: uppercase;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  display: block;\n  width: 17%;\n}\n/* Individual button styles */\n.btn-wayra {\n  overflow: hidden;\n  transition: border-color 0.3s, color 0.3s;\n  -moz-transition: border-color 0.3s, color 0.3s;\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n  -moz-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\n.btn-wayra::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 150%;\n  height: 100%;\n  background: #cfdce5;\n  z-index: -1;\n  -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n  transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n  -moz-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n  -o-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n  -ms-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n  -webkit-transform-origin: 0% 100%;\n  transform-origin: 0% 100%;\n  -moz-transform-origin: 0% 100%;\n  transition: opacity 0.3s, background-color 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.3s, background-color 0.3s;\n  transition: transform 0.3s, opacity 0.3s, background-color 0.3s, -webkit-transform 0.3s;\n  -moz-transition: -moz-transform 0.3s, opacity 0.3s, background-color 0.3s;\n}\n.btn-wayra:hover {\n  color: #000;\n  border-color: #cfdce5;\n}\n.btn-wayra.button--inverted:hover {\n  color: #cfdce5;\n  border-color: #fff;\n}\n.btn-wayra:hover::before {\n  opacity: 1;\n  background-color: #cfdce5;\n  -webkit-transform: rotate3d(0, 0, 1, 0deg);\n  transform: rotate3d(0, 0, 1, 0deg);\n  -moz-transform: rotate3d(0, 0, 1, 0deg);\n  -o-transform: rotate3d(0, 0, 1, 0deg);\n  -ms-transform: rotate3d(0, 0, 1, 0deg);\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n  -moz-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n}\nbtn-wayra:hover {\n  color: #000;\n}\n.btn-wayra.button--inverted:hover::before {\n  background-color: #fff;\n}\n/*-- //banner --*/\n/*-- //banner --*/\n/*-- menu-navigation --*/\nnav {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100%;\n  position: fixed;\n  right: -220px;\n  top: 0;\n  transition: right 0.2s linear;\n  width: 220px;\n  z-index: 9001;\n  /* IT'S OVER 9000! */\n  padding-top: 4em;\n}\n#menuToggle {\n  display: block;\n  position: fixed;\n  height: 40px;\n  right: 15%;\n  top: 33px;\n  width: 46px;\n  z-index: 9999;\n}\n#menuToggle span {\n  background: #7690a1;\n  display: block;\n  height: 10%;\n  left: 20%;\n  position: absolute;\n  top: 45%;\n  width: 60%;\n}\n#menuToggle span:before,\n#menuToggle span:after {\n  background: #7690a1;\n  content: '';\n  display: block;\n  height: 100%;\n  position: absolute;\n  top: -250%;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  width: 100%;\n}\n#menuToggle span:after {\n  top: 250%;\n}\nnav a {\n  color: #fff;\n  display: block;\n  font-size: 1.3em;\n  margin: 30px 0 30px 30px;\n  font-weight: 300;\n  letter-spacing: 1px;\n}\nnav a:after {\n  background: #7ecaf6;\n  content: '';\n  display: block;\n  height: 2px;\n  transition: width 0.5s;\n  width: 0;\n  margin-top: 0.2em;\n}\nnav a:hover:after {\n  width: 100%;\n}\n.menu nav a:hover,\n.menu nav a:focus {\n  color: #cfdce5;\n}\n.open nav {\n  right: 0;\n}\n.open #menuToggle span {\n  background: transparent;\n  left: 20%;\n  top: 45%;\n}\n.open #menuToggle span:before,\n.open #menuToggle span:after {\n  background: white;\n  top: 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.open #menuToggle span:after {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n#menuToggle .navClosed {\n  transition: background 0.1s linear;\n}\n#menuToggle .navClosed:before,\n#menuToggle .navClosed:after {\n  -moz-transition: top 0.2s linear 0.1s, -moz-transform 0.2s linear 0.1s;\n  -o-transition: top 0.2s linear 0.1s, -o-transform 0.2s linear 0.1s;\n  -webkit-transition: top 0.2s linear, -webkit-transform 0.2s linear;\n  -webkit-transition-delay: 0.1s, 0.1s;\n  transition: top 0.2s linear 0.1s, -webkit-transform 0.2s linear 0.1s;\n  transition: top 0.2s linear 0.1s, transform 0.2s linear 0.1s;\n  transition: top 0.2s linear 0.1s, transform 0.2s linear 0.1s, -webkit-transform 0.2s linear 0.1s;\n}\n#menuToggle .navOpen {\n  -moz-transition: background 0.1s linear 0.2s;\n  -o-transition: background 0.1s linear 0.2s;\n  -webkit-transition: background 0.1s linear;\n  -webkit-transition-delay: 0.2s;\n  transition: background 0.1s linear 0.2s;\n}\n#menuToggle .navOpen:before,\n#menuToggle .navOpen:after {\n  transition: top 0.2s linear, -webkit-transform 0.2s linear;\n  transition: top 0.2s linear, transform 0.2s linear;\n  transition: top 0.2s linear, transform 0.2s linear, -webkit-transform 0.2s linear;\n}\n/*-- //menu-navigation --*/\n.w3ls-section {\n  padding: 5em 0;\n}\n/* about */\nh3.agileits-title {\n  font-size: 2.5em;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 1.5em;\n  color: #1853a1;\n  text-align: center;\n}\na.wthree-.about-link {\n  color: #fff;\n  border: 1px solid #03afdd;\n  background: #03afdd;\n  border-radius: 0;\n  padding: 0.5em 2.5em;\n  outline: none;\n  font-size: 1em;\n  margin: 4% auto 0;\n  font-weight: 600;\n  letter-spacing: 4px;\n  display: inline-block;\n  text-transform: uppercase;\n}\n.agileits-about-grid p {\n  width: 80%;\n  margin: 0 auto;\n}\n.agileits-about-grid1 {\n  background: #7bd0c1;\n}\n.agileits-about-grid2 {\n  background: #8bde8c;\n}\n.agileits-about-grid3 {\n  background: #7ecaf6;\n}\n/* //about */\n/* about-bottom */\n.agileits-about-btm {\n  padding-bottom: 4em;\n}\n.ab1 {\n  padding: 2em;\n}\n.ab1 span {\n  color: #fff;\n  font-size: 2em;\n}\nh4.agileinfo-head {\n  color: #005da2;\n  text-transform: capitalize;\n  font-weight: 600;\n  margin: 0.7em 0;\n  font-size: 1.8em;\n}\n.ab1 h5 {\n  color: #000;\n  font-size: 1em;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 1em 0 0.2em;\n}\n.ab1 p {\n  color: #fff;\n}\n/* //about-bottom */\n/* skills */\n.w3_agileits-service-left h3 {\n  text-align: left;\n  color: #fff;\n}\n.skills-right {\n  text-align: center;\n  margin: 0 auto;\n  width: 50%;\n}\ndiv#skills {\n  background: url('bg1.jpg') fixed;\n  background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -ms-background-size: cover;\n}\n/*-- Skills bar effects --*/\n.skill-grids {\n  margin: 3em 0;\n}\n.skills h4 {\n  font-size: 1.8em;\n  color: #4378ff;\n  letter-spacing: 2px;\n  margin-bottom: 0.8em;\n}\n.skills-w3lsleft ul li {\n  display: block;\n  font-size: 1em;\n  color: #999;\n  margin-top: 1em;\n}\n.skills-w3lsleft ul li i.fa {\n  font-size: 1.2em;\n  margin-right: 0.5em;\n}\n.skillbar {\n  position: relative;\n  display: inline-block;\n  margin: 15px 0;\n  width: 100%;\n  background: #eee;\n  height: 35px;\n  border-radius: 3px;\n  width: 100%;\n}\n.skillbar-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 110px;\n  font-weight: bold;\n  font-size: 13px;\n  color: #fff;\n  background: #6adcfa;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  background: rgba(0, 0, 0, 0.1);\n  padding: 0 20px;\n  height: 35px;\n  line-height: 35px;\n}\n.skillbar-bar {\n  height: 35px;\n  width: 0px;\n  background: #6adcfa;\n  border-radius: 3px;\n  display: inline-block;\n}\n.skill-bar-percent {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  font-size: 11px;\n  height: 35px;\n  line-height: 35px;\n  color: rgba(0, 0, 0, 0.88);\n}\n/*-- //Skills bar effects --*/\n.vertical-skills {\n  margin-top: 85px;\n  text-align: center;\n}\n.vertical-skills li {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 200px;\n  margin: 0 10px;\n}\n.vertical-skills li:before {\n  content: '';\n  background: #03afdd;\n  display: block;\n  top: -53px;\n  left: 20px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n}\n.vertical-skills li:after {\n  content: '';\n  background: #9a9a9a;\n  display: block;\n  top: -43px;\n  left: 24px;\n  width: 1px;\n  height: 93px;\n  position: absolute;\n}\n@media (max-width: 400px) {\n  .vertical-skills li {\n    width: 25px;\n  }\n}\n.vertical-skills li span.skill {\n  position: absolute;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-name: height;\n          animation-name: height;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: #fff;\n}\n.vertical-skills li div.skill {\n  position: absolute;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-name: height;\n          animation-name: height;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: #fff;\n  z-index: 2;\n}\n.vertical-skills li span.title {\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  top: -85px;\n  font-size: 1.1em;\n  color: #fff;\n  font-weight: 600;\n}\nspan.value {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  display: inline-block;\n  margin: 6em 0;\n  color: #fff;\n  font-weight: 800;\n  letter-spacing: 2px;\n  font-size: 1em;\n}\n/* ANIMATIONS */\n@-webkit-keyframes height {\n\n  0%,\n  100% {\n    transition-timing-function: cubic-bezier(1, 0, 0.65, 0.85);\n  }\n\n  0% {\n    height: 0;\n  }\n\n  100% {\n    max-height: 100%;\n  }\n}\n@keyframes height {\n\n  0%,\n  100% {\n    transition-timing-function: cubic-bezier(1, 0, 0.65, 0.85);\n  }\n\n  0% {\n    height: 0;\n  }\n\n  100% {\n    max-height: 100%;\n  }\n}\n/* //skills */\n/* services */\n.w3ls-sub-text {\n  padding-left: 3em;\n}\n.w3_agileits-service-left p {\n  color: #fff;\n}\ndiv#services h3 {\n  color: #fff;\n}\n.services-grid img {\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n}\n.services-w3ls-row.agileits-w3layouts.service1,\n.services-w3ls-row.agileits-w3layouts.service4 {\n  margin: 0 auto;\n  width: 25%;\n  text-align: center;\n  position: relative;\n}\n.services-w3ls-row.agileits-w3layouts.service1:before,\n.services-w3ls-row.agileits-w3layouts.service4:before {\n  content: '';\n  background: #fff;\n  display: block;\n  width: 21%;\n  left: 39%;\n  height: 2px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  position: absolute;\n}\n.services-w3ls-row.agileits-w3layouts.service1:before {\n  bottom: -35px;\n}\n.services-w3ls-row.agileits-w3layouts.service4:before {\n  top: -35px;\n}\n.services-grid.agileits-w3layouts.service2 {\n  text-align: right;\n  padding-right: 4em;\n  padding-left: 2em;\n}\n.services-grid.agileits-w3layouts.service3 {\n  padding-left: 4em;\n  padding-right: 2em;\n}\n.sub-icon {\n  margin-top: 3em;\n}\n.sub-icon span,\n.s-top span {\n  font-size: 4em;\n  color: #fff;\n}\ndiv#services {\n  background: #03afdd;\n}\n.agileits-w3layouts h5 {\n  color: #e4e0e0;\n  font-size: 1.5em;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 0 0 0.5em;\n}\n.s-top {\n  margin: 1em 0;\n}\n.services-grid.agileits-w3layouts {\n  margin-top: 10em;\n}\n.services-grid img {\n  padding: 2em;\n  border: 10px solid #fff;\n  background: #f2849e;\n  margin: 3em 0;\n  position: relative;\n}\n.img-agileits:before,\n.img-agileits:after {\n  content: '';\n  background: #fff;\n  display: block;\n  width: 16%;\n  top: 46%;\n  height: 2px;\n  position: absolute;\n}\n.img-agileits:before {\n  left: -35px;\n}\n.img-agileits:after {\n  right: -45px;\n}\n/*//services */\n/*-- gallery --*/\n.nav-tabs>li.active>a,\n.nav-tabs>li.active>a:hover,\n.nav-tabs>li.active>a:focus {\n  color: #ffffff;\n  cursor: pointer;\n  background: #03afdd;\n  border: solid 2px #03afdd;\n}\n.nav-tabs>li>a {\n  margin-right: 3px;\n  font-size: 1em;\n  color: #212121;\n  border: solid 2px #03afdd;\n  border-radius: 0px;\n  -webkit-border-radius: 0px;\n  -ms-border-radius: 0px;\n  -o-border-radius: 0px;\n  -moz-border-radius: 0px;\n  padding: .5em 1em;\n  text-transform: capitalize;\n}\n.nav-tabs>li>a:focus {\n  background: transparent;\n}\n.nav-tabs {\n  border-bottom: none;\n  margin: 0 auto 3em;\n  width: 40%;\n  text-align: center;\n}\n.nav-tabs>li {\n  margin: 0 10px 0 0;\n}\n.nav-tabs>li>a:hover {\n  color: #FFFFFF;\n  background: #03afdd;\n  border: solid 2px #03afdd;\n}\n.w3_tab_img_left {\n  padding: 1px;\n}\n.w3_tab_img_left_inner {\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid rgba(14, 95, 85, 0.5);\n}\n.agile-gallery-info {\n  padding: 1em;\n  background: #ffffff;\n}\n.agile-gallery-info h5 {\n  color: #000000;\n  font-size: 1em;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 4px;\n  margin: 0;\n}\n.agile-gallery-info p {\n  color: #999999;\n  font-size: .9em;\n  line-height: 1.8em;\n  margin: .5em 0 0 0;\n}\n.agile-gallery-info {\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n}\n.w3_tab_img_left:hover .agile-gallery-info {\n  background: #03afdd;\n  color: #FFFFFF;\n}\n.w3_tab_img_left:hover .agile-gallery-info p {\n  color: #FFFFFF;\n}\n/*-- //gallery --*/\n/*-- Contact --*/\n.contact-main-w3ls {\n  /*background: url(../images/contact.jpg) no-repeat center;*/\n  background: rgba(39, 174, 96, 0.25);\n  background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -ms-background-size: cover;\n}\n.contact-left-w3ls {\n  padding: 0;\n  background: rgba(0, 0, 0, 0.51);\n  border-right: 1px solid rgba(255, 255, 255, 0.29);\n}\n.contact-right-w3l h3:before {\n  width: 35%;\n}\n.contact-text-agileinfo a {\n  line-height: 2;\n  color: #fff;\n  font-size: 1.1em;\n}\n.contact-left-w3ls p {\n  color: #fff;\n  font-size: 1em;\n  letter-spacing: 1px;\n}\n.contact-left-w3ls h4 {\n  color: #49c7ed;\n  font-weight: 600;\n  margin-top: 0.4em;\n  font-size: 1.2em;\n  text-transform: uppercase;\n}\n.agileits-main-right label {\n  margin: 0.5em 0 1em;\n  font-size: 1.1em;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n  display: inline-block;\n  font-weight: 600;\n  color: #000;\n}\n.w3ls-text {\n  width: 48%;\n  float: left;\n}\n.agileits-main-right {\n  padding: 3em;\n}\n.agile_form input[type=text] {\n  padding: 0.9em 1em;\n  color: #000;\n  width: 100%;\n  font-size: 1em;\n  outline: none;\n  border: 1px solid #c5c0c0;\n  background: #f5f5f5;\n  margin: 0 0 1em 0;\n}\n.agile_form input[type=\"email\"] {\n  width: 100%;\n  padding: 0.9em 1em;\n  color: #000;\n  font-size: 1em;\n  outline: none;\n  border: 1px solid #c5c0c0;\n  background: #f5f5f5;\n  margin: 0 0 1em 0;\n}\n.agile_form textarea {\n  font-size: 1em;\n  color: #000;\n  padding: 0.8em 1em;\n  margin-bottom: 1em;\n  width: 100%;\n  outline: none;\n  resize: none;\n  height: 11em;\n  border: 1px solid #c5c0c0;\n  background: #f5f5f5;\n  margin: 0 0 1em 0;\n}\n.agile_form input[type=\"submit\"] {\n  width: 30%;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 1.2em;\n  font-weight: 600;\n  padding: 0.5em 0;\n  letter-spacing: 1px;\n  border: 1px solid #696867;\n  background: #1853a1;\n}\n.agile_form input[type=\"submit\"]:hover {\n  color: #1853a1;\n  background: rgb(255, 255, 255);\n}\n.contact-right-w3l {\n  padding: 5em 12em;\n  border-right: 1px solid rgba(255, 255, 255, 0.29);\n}\n.contact-grid-agileinfo {\n  padding: 3em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.29);\n}\n.visit {\n  border: none;\n}\n.contact-main ::-webkit-input-placeholder {\n  color: #fff;\n}\n.contact-main :-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n}\n.contact-main ::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n}\n.contact-main :-ms-input-placeholder {\n  color: #fff;\n}\n/*-- social-icons --*/\nul.w3-links li {\n  margin: 0 0.5em;\n  display: inline-block;\n}\nul.w3-links {\n  margin-top: 0;\n}\nul.w3-links li a i.fa {\n  color: #f5f5f5;\n  background: #1853a1;\n  font-size: 1em;\n  line-height: 2.2em;\n  text-align: center;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  width: 36px;\n  height: 36px;\n  border: 2px solid #fff;\n}\nul.w3-links li a i.fa:hover {\n  color: #fff;\n  background: transparent;\n}\n/*-- //contact --*/\n.agileits_w3layouts-footer {\n  text-align: center;\n  padding: 2em 0;\n  background: #1853a1;\n}\n.agileits_w3layouts-footer p {\n  color: #fff;\n  letter-spacing: 1px;\n}\n.agileits_w3layouts-footer p a {\n  color: #7ecaf6;\n  text-decoration: none;\n  transition: .5s all;\n}\n.agileits_w3layouts-footer p a:hover {\n  color: #fff;\n}\n/*-- bottom-to-top --*/\n#toTop {\n  display: none;\n  text-decoration: none;\n  position: fixed;\n  bottom: 24px;\n  right: 3%;\n  overflow: hidden;\n  z-index: 999;\n  width: 32px;\n  height: 32px;\n  border: none;\n  text-indent: 100%;\n  background: url('move-top.png') no-repeat 0px 0px;\n}\n#toTopHover {\n  width: 32px;\n  height: 32px;\n  display: block;\n  overflow: hidden;\n  float: right;\n  opacity: 0;\n  -moz-opacity: 0;\n  filter: alpha(opacity=0);\n}\n/*-- //bottom-to-top --*/\n/* -- Responsive code -- */\n@media screen and (max-width: 1600px) {}\n@media screen and (max-width: 1440px) {}\n@media screen and (max-width: 1366px) {}\n@media screen and (max-width: 1280px) {}\n@media screen and (max-width: 1080px) {\n  .banner-text {\n    padding: 13em 0;\n  }\n\n  .nav-tabs {\n    width: 48%;\n  }\n\n  .services-grid.agileits-w3layouts {\n    margin-top: 7em;\n  }\n}\n@media screen and (max-width: 1050px) {}\n@media screen and (max-width: 1024px) {\n  .banner-text {\n    padding: 11em 0;\n  }\n\n  .agile_form input[type=text],\n  .agile_form textarea,\n  .agile_form input[type=\"email\"] {\n    padding: 0.6em 1em;\n  }\n\n  .agileits-main-right label {\n    margin: 0.5em 0 0.7em;\n  }\n\n  .img-agileits:after {\n    right: -35px;\n  }\n\n  .services-grid.agileits-w3layouts.service3 {\n    padding-left: 1em;\n  }\n\n  .services-grid.agileits-w3layouts.service2 {\n    padding-right: 2em;\n  }\n\n  .img-agileits:before {\n    left: -3px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .banner-text h1 {\n    font-size: 3.3em;\n    padding: 0 0.5em;\n  }\n\n  a.buy {\n    width: 23%;\n  }\n\n  h2.w3ls-bnrtext {\n    font-size: 3.5em;\n  }\n\n  .agileits-about-grid p {\n    width: 100%;\n  }\n\n  .skills-right {\n    margin: 3em 0;\n    float: left;\n    width: 54%;\n  }\n\n  div#skills {\n    padding: 4em 0 1em;\n  }\n\n  .nav-tabs {\n    width: 62%;\n  }\n\n  .services-w3ls-row.agileits-w3layouts.service1,\n  .services- w3ls-row.agileits-w3layouts.service4,\n  .services-grid.agileits-w3layouts.service2 {\n    margin: 0 1em;\n    width: 46%;\n    float: left;\n    text-align: left;\n    padding: 0;\n  }\n\n  .services-w3ls-row.agileits-w3layouts.service1:before,\n  .img-agileits:before,\n  .img-agileits:after,\n  .services-w3ls-row.agileits-w3layouts.service4:before {\n    display: none;\n  }\n\n  .w3ls-sub-text {\n    padding-left: 0;\n  }\n\n  .sub-icon {\n    padding: 0;\n    margin: 1em 0;\n  }\n\n  .services-grid.agileits-w3layouts {\n    margin: 0;\n  }\n\n  .sub-icon {\n    margin-top: 1em;\n  }\n\n  .services-grid.agileits-w3layouts.service3,\n  .services-w3ls-row.agileits-w3layouts.service4 {\n    float: none;\n    width: 100%;\n    margin: 2em 0;\n    text-align: left;\n    padding: 0;\n  }\n\n  .services-grid img {\n    width: 40%;\n  }\n\n  .services-grid.img-agileits {\n    clear: both;\n  }\n}\n@media screen and (max-width: 900px) {\n  h3.agileits-title {\n    margin-bottom: 1.2em;\n    font-size: 2.3em;\n  }\n\n  .w3ls-section {\n    padding: 4em 0;\n  }\n}\n@media screen and (max-width: 800px) {\n  .banner-text {\n    padding: 10em 0;\n  }\n\n  h2.w3ls-bnrtext {\n    font-size: 3.3em;\n  }\n\n  .agile-gallery-info h5 {\n    letter-spacing: 3px;\n  }\n}\n@media screen and (max-width: 768px) {\n\n  .services-w3ls-row.agileits-w3layouts.service1,\n  .services- w3ls-row.agileits-w3layouts.service4,\n  .services-grid.agileits-w3layouts.service2 {\n    padding: 1em;\n  }\n\n  .services-grid.agileits-w3layouts.service3,\n  .services-w3ls-row.agileits-w3layouts.service4 {\n    padding: 0 2em;\n  }\n\n  .banner-text h1 {\n    font-size: 3.1em;\n  }\n\n  a.buy {\n    margin: 2.5em auto 0;\n  }\n}\n@media screen and (min-width: 737px) {\n  .w3-flex {\n    display: flex;\n  }\n\n  .ab1 {\n    flex: 1;\n  }\n}\n@media screen and (max-width: 736px) {\n  .banner-text {\n    padding: 8.5em 0;\n  }\n\n  .agileits-about-grid p {\n    width: 96%;\n  }\n\n  .ab1 {\n    float: none;\n  }\n\n  .skills-right {\n    width: 58%;\n  }\n\n  .nav-tabs {\n    width: 66%;\n  }\n\n  .vertical-skills li {\n    width: 44px;\n  }\n\n  .w3_tab_img_left {\n    width: 50%;\n    float: left;\n  }\n\n  .services-grid img {\n    width: 50%;\n  }\n\n  .services-w3ls-row.agileits-w3layouts.service1,\n  .services- w3ls-row.agileits-w3layouts.service4,\n  .services-grid.agileits-w3layouts.service2 {\n    width: 45%;\n  }\n\n  h3.agileits-title {\n    font-size: 2.1em;\n  }\n}\n@media screen and (max-width: 667px) {\n  .contact-grid-agileinfo {\n    padding: 2em;\n  }\n\n  .nav-tabs {\n    width: 72%;\n  }\n\n  a.buy {\n    width: 26%;\n  }\n\n  .banner-text h1 {\n    font-size: 3em;\n  }\n}\n@media screen and (max-width: 640px) {\n  h2.w3ls-bnrtext {\n    font-size: 3.1em;\n  }\n\n  .skills-right {\n    width: 62%;\n  }\n\n  .nav-tabs {\n    width: 76%;\n  }\n\n  .services-w3ls-row.agileits-w3layouts.service1,\n  .services- w3ls-row.agileits-w3layouts.service4,\n  .services-grid.agileits-w3layouts.service2 {\n    width: 84%;\n  }\n\n  .sub-icon span,\n  .s-top span {\n    font-size: 3.5em;\n  }\n\n  .agile_form input[type=\"submit\"] {\n    width: 23%;\n    font-size: 1.1em;\n  }\n}\n@media screen and (max-width: 600px) {\n  .banner-text h1 {\n    font-size: 2.8em;\n  }\n\n  a.buy {\n    width: 30%;\n  }\n\n  h2.w3ls-bnrtext {\n    font-size: 3em;\n  }\n\n  .agileits-about-grid p {\n    width: 92%;\n  }\n\n  .skills-right {\n    width: 66%;\n  }\n\n  .vertical-skills li {\n    width: 40px;\n  }\n\n  .nav-tabs {\n    width: 82%;\n  }\n}\n@media screen and (max-width: 568px) {\n\n  .services-w3ls-row.agileits-w3layouts.service1,\n  .services- w3ls-row.agileits-w3layouts.service4,\n  .services-grid.agileits-w3layouts.service2 {\n    width: 96%;\n  }\n\n  .nav-tabs {\n    width: 86%;\n  }\n\n  .services-grid img {\n    padding: 1em;\n  }\n}\n@media screen and (max-width: 480px) {\n  h2.w3ls-bnrtext {\n    font-size: 2.8em;\n  }\n\n  p.w3ls-p {\n    font-size: 1.1em;\n  }\n\n  a.buy {\n    width: 40%;\n  }\n\n  .skills-right {\n    width: 78%;\n  }\n\n  .nav-tabs>li {\n    margin: 0 3px 0 0;\n  }\n\n  .nav-tabs {\n    width: 97%;\n  }\n\n  .services-w3ls-row.agileits-w3layouts.service1,\n  .services- w3ls-row.agileits-w3layouts.service4,\n  .services-grid.agileits-w3layouts.service2 {\n    padding: 1em 1em 0.5em;\n  }\n\n  .services-grid.agileits-w3layouts.service3,\n  .services-w3ls-row.agileits-w3layouts.service4 {\n    margin: 1em 0;\n  }\n\n  .vertical-skills li span.title {\n    left: 9px;\n  }\n}\n@media screen and (max-width: 414px) {\n  .banner-text h1 {\n    font-size: 2.6em;\n  }\n\n  h2.w3ls-bnrtext {\n    font-size: 2.5em;\n  }\n\n  .banner-text {\n    padding: 7.5em 0;\n  }\n\n  a.buy {\n    width: 45%;\n  }\n\n  .agileits-about-grid p {\n    width: 98%;\n  }\n\n  .skills-right {\n    width: 86%;\n  }\n\n  .vertical-skills li {\n    width: 35px;\n  }\n\n  .nav-tabs>li>a {\n    padding: .5em 0.7em;\n    font-size: 0.92em;\n  }\n\n  .contact-grid-agileinfo {\n    padding: 1.5em 0.6em;\n  }\n\n  ul.w3-links li {\n    margin: 0 0.4em;\n  }\n\n  .agileits-main-right {\n    padding: 3em 2em;\n  }\n\n  h3.agileits-title {\n    font-size: 2em;\n  }\n\n  .services-grid img {\n    width: 56%;\n  }\n\n  .agile_form input[type=\"submit\"] {\n    width: 26%;\n    font-size: 1em;\n  }\n\n  .agileits_w3layouts-footer {\n    padding: 2em 1em;\n  }\n}\n@media screen and (max-width: 384px) {\n  .banner-text {\n    padding: 6em 0;\n  }\n\n  h2.w3ls-bnrtext {\n    font-size: 2.31em;\n  }\n\n  a.buy {\n    width: 48%;\n    margin: 1.7em auto;\n  }\n\n  .skills-right {\n    padding: 0;\n  }\n\n  .nav-tabs>li {\n    margin: 8px 0;\n    float: none;\n  }\n\n  .nav-tabs {\n    margin: 0 auto 2em;\n  }\n\n  .w3ls-section {\n    padding: 3em 0;\n  }\n\n  .services-grid img {\n    width: 70%;\n  }\n\n  .contact-icon-wthree {\n    float: none;\n    margin-bottom: 15px;\n    width: 100%;\n  }\n\n  .contact-text-agileinfo {\n    width: 100%;\n    float: none;\n  }\n\n  .contact-grid-agileinfo {\n    padding: 1em 0 1.8em;\n  }\n\n  .pull-right {\n    float: none !important;\n  }\n\n  h3.agileits-title.cont-w3l {\n    text-transform: capitalize;\n  }\n\n  a.wthree-.about-link {\n    padding: 0.5em 1.5em;\n  }\n}\n@media screen and (max-width: 375px) {\n  .banner-text h1 {\n    font-size: 2.4em;\n  }\n\n  .banner-text {\n    padding: 5em 0;\n  }\n\n  h2.w3ls-bnrtext {\n    font-size: 2.26em;\n  }\n\n  a.buy {\n    letter-spacing: 1px;\n    padding: 0.5em 0;\n  }\n\n  h3.agileits-title {\n    margin-bottom: 0.8em;\n  }\n\n  .wthree-.about-link {\n    padding: 0.5em 1.8em;\n    letter-spacing: 2px;\n  }\n\n  h4.agileinfo-head {\n    font-size: 1.7em;\n  }\n\n  .vertical-skills li {\n    width: 32px;\n  }\n\n  .vertical-skills li:after {\n    left: 18px;\n  }\n\n  .vertical-skills li:before {\n    left: 14px;\n  }\n\n  .w3_tab_img_left {\n    width: 100%;\n  }\n\n  .agileits-main-right {\n    padding: 3em 1.5em;\n  }\n\n  .agileits_w3layouts-footer {\n    padding: 1em 0;\n  }\n}\n@media screen and (max-width: 320px) {\n  .banner-text h1 {\n    font-size: 2.2em;\n  }\n\n  .w3ls-section {\n    padding: 2.7em 0;\n  }\n\n  .banner-text {\n    padding: 4em 0 3em;\n  }\n\n  h2.w3ls-bnrtext span {\n    font-weight: 600;\n  }\n\n  h2.w3ls-bnrtext {\n    font-size: 1.88em;\n  }\n\n  a.buy {\n    letter-spacing: 0.5px;\n    width: 53%;\n  }\n\n  h3.agileits-title {\n    font-size: 1.9em;\n  }\n\n  a.wthree-.about-link {\n    padding: 0.5em 1.2em;\n    letter-spacing: 2px;\n  }\n\n  .vertical-skills li {\n    margin: 0 6px;\n  }\n\n  .agileits_w3layouts-footer {\n    padding: 1em 0.8em;\n  }\n\n  .vertical-skills li {\n    margin: 0 2px;\n  }\n\n  .services-w3ls-row.agileits-w3layouts.service1,\n  .services- w3ls-row.agileits-w3layouts.service4,\n  .services-grid.agileits-w3layouts.service2 {\n    padding: 1em 0em 0.5em;\n  }\n\n  .services-grid.agileits-w3layouts.service3,\n  .services-w3ls-row.agileits-w3layouts.service4 {\n    padding: 0 1em;\n  }\n\n  #menuToggle {\n    right: 7%;\n  }\n}\n/* -- //Responsive code -- */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2luZGV4LmNzcyIsInNyYy9hc3NldHMvY3NzL2NtLW92ZXJsYXkuY3NzIiwic3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLG9GQUFvRjtBQUdwRiw2RkFBNkY7QUFUN0Y7Ozs7Q0FJQztBQ0pELG1DQUFtQztBQUNuQzs7SUFFSSwwQkFBMEI7QUFDOUI7QUFDQTs7O0lBR0ksZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCLHNCQUFzQjtBQUN0QjtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxTQUFTO0FBQ2IsQ0FBQztBQUNEOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBRXpCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7OztJQUdJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qix1QkFBdUI7S0FDbkIsY0FBZTtLQUNmLE1BQU87QUFDWDtBQUNBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsT0FBTztBQUNYO0FBQ0E7OztJQUdJLGFBQWE7QUFDakI7QUFFQSwwQkFBMEI7QUFDMUI7O0lBRUksd0JBQXdCO0FBQzVCO0FBQ0EseUJBQXlCO0FBQ3pCOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQSw4QkFBOEI7QUFDOUI7O0lBS0ksNEJBQTRCO0lBQzVCLEdBQUc7SUFDSCxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBLHFCQUFxQjtBQUNyQjs7SUFFSSxhQUFhO0NBQ2hCLFlBQVk7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxLQUFL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RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7OztJQUdFLHNCQUFzQjtFQUN4Qjs7RUFFQTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFFQSw0QkFBNEIiLCJmaWxlIjoic3JjL2Fzc2V0cy9jc3MvaW5kZXguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0IHVybCgnLi9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jc3MnKTtcbkBpbXBvcnQgdXJsKCcuL2Fzc2V0cy9jc3MvY20tb3ZlcmxheS5jc3MnKTtcbkBpbXBvcnQgdXJsKCcuL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJyk7XG5AaW1wb3J0IHVybCgnLi9hc3NldHMvY3NzL2ZvbnQtYXdlc29tZS5jc3MnKTtcbiovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcbkBpbXBvcnQgdXJsKCdjbS1vdmVybGF5LmNzcycpO1xuQGltcG9ydCB1cmwoJ3N0eWxlcy5jc3MnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5jc3MnKTtcbiIsIi8qIG92ZXJsYXkgLSBjZW50ZXJlZCBtb2RhbCBkaWFsb2cqL1xuLm92ZXJsYXktdmlzaWJsZVxue1xuICAgIG92ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50O1xufVxuI2NtLW92ZXJsYXktbWFzayxcbiNjbS13cmFwXG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgei1pbmRleDogOTk5MTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbi8qIElFPDkgc3VwcG9ydCBoYWNrICovXG59XG4vKiBjaHJvbWUgYnVnIGZpeCBjYXVzaW5nIG92ZXJsYXktbWFzayB0byBub3QgYXBwZWFyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcbiNjbS1vdmVybGF5LW1hc2tcbntcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG59XG4jY20tb3ZlcmxheS1tYXNrOjotd2Via2l0LXNjcm9sbGJhclxue1xuICAgIHdpZHRoOjBweDsgXG59fVxuI2NtLXdyYXBcbntcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG59XG4jY20td3JhcCAqXG57XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuI2NtLXdyYXAgLmNtLWJveCxcbiNjbS13cmFwIC5jbS1zY2FsZVxue1xuICAgIHdoaXRlLXNwYWNlOm5vcm1hbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4vKiBJRTw4IHN1cHBvcnQgaGFja3MgKi9cbiAgICAqZGlzcGxheTppbmxpbmU7XG4gICAgKnpvb206MTtcbn1cbiNjbS13cmFwIC5jbS1zY2FsZVxue1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6MDtcbn1cbiNjbS13cmFwIC5jbS1ib3ggaW1nLFxuI2NtLXdyYXAgLmNtLWJveCBpZnJhbWVcbntcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG4vKiBjdXN0b21pc2UgbWFzayBjb2xvdXIgKi9cbiNjbS1vdmVybGF5LW1hc2tcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XG59XG4vKiBjdXN0b21pc2UgbG9hZGVyIEdJRiAqL1xuI2NtLXdyYXBcbntcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG59XG4jY20td3JhcC5jbS1sb2FkZWRcbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XG59XG4vKiBvdmVybGF5IGJvcmRlciBhbmQgc2hhZG93ICovXG4jY20tb3ZlcmxheVxue1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDkwcHggIzAwMDtcbiAgICAta2h0bWwtYm94LXNoYWRvdzowIDAgOTBweCA1cHggIzAwMDtcbiAgICAtbW96LWJveC1zaGFkb3c6MCAwIDkwcHggNXB4ICMwMDA7XG4gICAgYm94LXNoYWRvdzowIDAgOTBweCA1cHggIzAwMDtcbiAgICAvKiovXG4gICAgb3BhY2l0eTowO1xuICAgIHotaW5kZXg6OTk5Mjtcbn1cbi8qIGNsb3NlIGxpbmsgc3R5bGUgKi9cbiNjbS13cmFwICNjbS1jbG9zZVxue1xuICAgIGRpc3BsYXk6YmxvY2s7XG5cdGhlaWdodDogNjFweDtcbiAgICB3aWR0aDogNTlweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICByaWdodDowO1xuICAgIHRvcDowO1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgdXJsKC4uL2ltYWdlcy9jbG9zZS5wbmcpIHNjcm9sbCBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB6LWluZGV4Ojk5OTM7XG4gICAgem9vbToxO1xuICAgIHRleHQtaW5kZW50Oi05OTllbTtcbiAgICBvcGFjaXR5OjAuNTtcbn1cbi8qIHByZXYgYW5kIG5leHQgYnV0dG9ucyAqL1xuI2NtLXdyYXAgI2NtLXByZXYsXG4jY20td3JhcCAjY20tbmV4dFxue1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA5N3B4O1xuICAgIHdpZHRoOiA0OXB4O1xuICAgIHRvcDo1MCU7XG4gICAgbWFyZ2luLXRvcDotNjNweDtcbiAgICB0ZXh0LWluZGVudDotOTk5ZW07XG4gICAgb3BhY2l0eTowLjU7XG4gICAgb3V0bGluZTpub25lO1xuICAgIHotaW5kZXg6OTk5Mztcbn1cbiNjbS13cmFwICNjbS1wcmV2XG57XG4gICAgbGVmdDowO1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgdXJsKC4uL2ltYWdlcy9wcmV2LnBuZykgc2Nyb2xsIG5vLXJlcGVhdCAwIGNlbnRlcjtcbn1cbiNjbS13cmFwICNjbS1uZXh0XG57XG4gICAgcmlnaHQ6MDtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50IHVybCguLi9pbWFnZXMvbmV4dC5wbmcpIHNjcm9sbCBuby1yZXBlYXQgMTAwJSBjZW50ZXI7XG59XG4jY20td3JhcCAjY20tcHJldjpob3ZlcixcbiNjbS13cmFwICNjbS1uZXh0OmhvdmVyLFxuI2NtLXdyYXAgI2NtLWNsb3NlOmhvdmVyXG57XG4gICAgb3BhY2l0eToxO1xufVxuXG5cbi8qIHRvb2x0aXAgZm9yIGNsb3NlIGxpbmsgKGpxdWVyeSB0b29scykgKi9cbi50b29sdGlwXG57XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgICBjb2xvcjojZWVlO1xuICAgIGJhY2tncm91bmQ6IzAwMDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZWVlO1xuICAgIHotaW5kZXg6OTk5OTk7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuLnRvb2x0aXA6YWZ0ZXIsIC50b29sdGlwOmJlZm9yZVxue1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4udG9vbHRpcDphZnRlclxue1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci13aWR0aDogMTBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLnRvb2x0aXA6YmVmb3JlXG57XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDApO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLXdpZHRoOiAxMXB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpe1xuXHQjY20td3JhcCAuY20tYm94IGltZywgI2NtLXdyYXAgLmNtLWJveCBpZnJhbWUge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiA4MCU7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0aGVpZ2h0OiBpbmhlcml0O1xuXHR9XG5cdCNjbS1vdmVybGF5IHtcblx0XHRib3JkZXI6IG5vbmU7XG5cdH1cbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKi0tXG5BdXRob3I6IFczbGF5b3V0c1xuQXV0aG9yIFVSTDogaHR0cDovL3czbGF5b3V0cy5jb21cbkxpY2Vuc2U6IENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gMy4wIFVucG9ydGVkXG5MaWNlbnNlIFVSTDogaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1xuLS0qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkgYSxcbi5hZ2lsZV9mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtby10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW1zLXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGFiLWNvbnRlbnQge1xuICAvKmJvcmRlcjogc29saWQ7Ki9cbn1cblxudWwsXG5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSBhOmhvdmVyLFxuYm9keSBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKi0tIGJhbm5lciAtLSovXG5cbi5iYW5uZXIge1xuICAvKmJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvYmcyLmpwZyluby1yZXBlYXQgY2VudGVyIDBweCBmaXhlZDsqL1xuICBiYWNrZ3JvdW5kOiAjN2VjYWY2O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1zLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gIHBhZGRpbmc6IDE2ZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKi0tIGJhbm5lci10ZXh0IC0tKi9cblxuLmJhbm5lci10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiAzLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogc29saWQgIzdlY2FmNjtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJhY2tncm91bmQ6ICM1NjcxODI7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYmFubmVyLXRleHQgaDEgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5oMi53M2xzLWJucnRleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwLjhlbSAwIDAuMmVtO1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDIudzNscy1ibnJ0ZXh0IHNwYW4ge1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5wLnczbHMtcCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItdG9wOiA0cHggZG91YmxlICNmZmY7XG59XG5cbmEuYnV5IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjdlbSAwO1xuICBtYXJnaW46IDRlbSBhdXRvIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNyU7XG59XG5cbi8qIEluZGl2aWR1YWwgYnV0dG9uIHN0eWxlcyAqL1xuXG4uYnRuLXdheXJhIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xufVxuXG4uYnRuLXdheXJhOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNjZmRjZTU7XG4gIHotaW5kZXg6IC0xO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKSB0cmFuc2xhdGUzZCgwLCAtM2VtLCAwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpIHRyYW5zbGF0ZTNkKDAsIC0zZW0sIDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKSB0cmFuc2xhdGUzZCgwLCAtM2VtLCAwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpIHRyYW5zbGF0ZTNkKDAsIC0zZW0sIDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpIHRyYW5zbGF0ZTNkKDAsIC0zZW0sIDApO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4uYnRuLXdheXJhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1jb2xvcjogI2NmZGNlNTtcbn1cblxuLmJ0bi13YXlyYS5idXR0b24tLWludmVydGVkOmhvdmVyIHtcbiAgY29sb3I6ICNjZmRjZTU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi13YXlyYTpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZGNlNTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbn1cblxuYnRuLXdheXJhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5idG4td2F5cmEuYnV0dG9uLS1pbnZlcnRlZDpob3Zlcjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLyotLSAvL2Jhbm5lciAtLSovXG5cbi8qLS0gLy9iYW5uZXIgLS0qL1xuXG4vKi0tIG1lbnUtbmF2aWdhdGlvbiAtLSovXG5cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAtMjIwcHg7XG4gIHRvcDogMDtcbiAgLW1vei10cmFuc2l0aW9uOiByaWdodCAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogcmlnaHQgMC4ycyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogcmlnaHQgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuMnMgbGluZWFyO1xuICB3aWR0aDogMjIwcHg7XG4gIHotaW5kZXg6IDkwMDE7XG4gIC8qIElUJ1MgT1ZFUiA5MDAwISAqL1xuICBwYWRkaW5nLXRvcDogNGVtO1xufVxuXG4jbWVudVRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNDBweDtcbiAgcmlnaHQ6IDE1JTtcbiAgdG9wOiAzM3B4O1xuICB3aWR0aDogNDZweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuI21lbnVUb2dnbGUgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICM3NjkwYTE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwJTtcbiAgbGVmdDogMjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICB3aWR0aDogNjAlO1xufVxuXG4jbWVudVRvZ2dsZSBzcGFuOmJlZm9yZSxcbiNtZW51VG9nZ2xlIHNwYW46YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzY5MGExO1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNTAlO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI21lbnVUb2dnbGUgc3BhbjphZnRlciB7XG4gIHRvcDogMjUwJTtcbn1cblxubmF2IGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG1hcmdpbjogMzBweCAwIDMwcHggMzBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxubmF2IGE6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjN2VjYWY2O1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMnB4O1xuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IHdpZHRoIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbi10b3A6IDAuMmVtO1xufVxuXG5uYXYgYTpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudSBuYXYgYTpob3Zlcixcbi5tZW51IG5hdiBhOmZvY3VzIHtcbiAgY29sb3I6ICNjZmRjZTU7XG59XG5cbi5vcGVuIG5hdiB7XG4gIHJpZ2h0OiAwO1xufVxuXG4ub3BlbiAjbWVudVRvZ2dsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDIwJTtcbiAgdG9wOiA0NSU7XG59XG5cbi5vcGVuICNtZW51VG9nZ2xlIHNwYW46YmVmb3JlLFxuLm9wZW4gI21lbnVUb2dnbGUgc3BhbjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0b3A6IDA7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4ub3BlbiAjbWVudVRvZ2dsZSBzcGFuOmFmdGVyIHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4jbWVudVRvZ2dsZSAubmF2Q2xvc2VkIHtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMXMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcyBsaW5lYXI7XG59XG5cbiNtZW51VG9nZ2xlIC5uYXZDbG9zZWQ6YmVmb3JlLFxuI21lbnVUb2dnbGUgLm5hdkNsb3NlZDphZnRlciB7XG4gIC1tb3otdHJhbnNpdGlvbjogdG9wIDAuMnMgbGluZWFyIDAuMXMsIC1tb3otdHJhbnNmb3JtIDAuMnMgbGluZWFyIDAuMXM7XG4gIC1vLXRyYW5zaXRpb246IHRvcCAwLjJzIGxpbmVhciAwLjFzLCAtby10cmFuc2Zvcm0gMC4ycyBsaW5lYXIgMC4xcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC4ycyBsaW5lYXIsIC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXMsIDAuMXM7XG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGxpbmVhciAwLjFzLCB0cmFuc2Zvcm0gMC4ycyBsaW5lYXIgMC4xcztcbn1cblxuI21lbnVUb2dnbGUgLm5hdk9wZW4ge1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcyBsaW5lYXIgMC4ycztcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjFzIGxpbmVhciAwLjJzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xcyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjFzIGxpbmVhciAwLjJzO1xufVxuXG4jbWVudVRvZ2dsZSAubmF2T3BlbjpiZWZvcmUsXG4jbWVudVRvZ2dsZSAubmF2T3BlbjphZnRlciB7XG4gIC1tb3otdHJhbnNpdGlvbjogdG9wIDAuMnMgbGluZWFyLCAtbW96LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogdG9wIDAuMnMgbGluZWFyLCAtby10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuMnMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMnMgbGluZWFyLCB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG59XG5cbi8qLS0gLy9tZW51LW5hdmlnYXRpb24gLS0qL1xuXG4udzNscy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNWVtIDA7XG59XG5cbi8qIGFib3V0ICovXG5cbmgzLmFnaWxlaXRzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gIGNvbG9yOiAjMTg1M2ExO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEud3RocmVlLS5hYm91dC1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwM2FmZGQ7XG4gIGJhY2tncm91bmQ6ICMwM2FmZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuNWVtIDIuNWVtO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiA0JSBhdXRvIDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFnaWxlaXRzLWFib3V0LWdyaWQgcCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYWdpbGVpdHMtYWJvdXQtZ3JpZDEge1xuICBiYWNrZ3JvdW5kOiAjN2JkMGMxO1xufVxuXG4uYWdpbGVpdHMtYWJvdXQtZ3JpZDIge1xuICBiYWNrZ3JvdW5kOiAjOGJkZThjO1xufVxuXG4uYWdpbGVpdHMtYWJvdXQtZ3JpZDMge1xuICBiYWNrZ3JvdW5kOiAjN2VjYWY2O1xufVxuXG4vKiAvL2Fib3V0ICovXG5cbi8qIGFib3V0LWJvdHRvbSAqL1xuXG4uYWdpbGVpdHMtYWJvdXQtYnRtIHtcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcbn1cblxuLmFiMSB7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLmFiMSBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oNC5hZ2lsZWluZm8taGVhZCB7XG4gIGNvbG9yOiAjMDA1ZGEyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwLjdlbSAwO1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuXG4uYWIxIGg1IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDFlbSAwIDAuMmVtO1xufVxuXG4uYWIxIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogLy9hYm91dC1ib3R0b20gKi9cblxuLyogc2tpbGxzICovXG5cbi53M19hZ2lsZWl0cy1zZXJ2aWNlLWxlZnQgaDMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNraWxscy1yaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbmRpdiNza2lsbHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vaW1hZ2VzL2JnMS5qcGcnKSBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tcy1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vKi0tIFNraWxscyBiYXIgZWZmZWN0cyAtLSovXG5cbi5za2lsbC1ncmlkcyB7XG4gIG1hcmdpbjogM2VtIDA7XG59XG5cbi5za2lsbHMgaDQge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBjb2xvcjogIzQzNzhmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG59XG5cbi5za2lsbHMtdzNsc2xlZnQgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5za2lsbHMtdzNsc2xlZnQgdWwgbGkgaS5mYSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi5za2lsbGJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGhlaWdodDogMzVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtby1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5za2lsbGJhci10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNmFkY2ZhO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5za2lsbGJhci1iYXIge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM2YWRjZmE7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5za2lsbC1iYXItcGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg4KTtcbn1cblxuLyotLSAvL1NraWxscyBiYXIgZWZmZWN0cyAtLSovXG5cbi52ZXJ0aWNhbC1za2lsbHMge1xuICBtYXJnaW4tdG9wOiA4NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52ZXJ0aWNhbC1za2lsbHMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4udmVydGljYWwtc2tpbGxzIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiAjMDNhZmRkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAtNTNweDtcbiAgbGVmdDogMjBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi52ZXJ0aWNhbC1za2lsbHMgbGk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogIzlhOWE5YTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogLTQzcHg7XG4gIGxlZnQ6IDI0cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogOTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnZlcnRpY2FsLXNraWxscyBsaSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn1cblxuLnZlcnRpY2FsLXNraWxscyBsaSBzcGFuLnNraWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24tbmFtZTogaGVpZ2h0O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnZlcnRpY2FsLXNraWxscyBsaSBkaXYuc2tpbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBoZWlnaHQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAyO1xufVxuXG4udmVydGljYWwtc2tpbGxzIGxpIHNwYW4udGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogLTg1cHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5zcGFuLnZhbHVlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDZlbSAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi8qIEFOSU1BVElPTlMgKi9cblxuQGtleWZyYW1lcyBoZWlnaHQge1xuXG4gIDAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDAuODUpO1xuICB9XG5cbiAgMCUge1xuICAgIGhlaWdodDogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLyogLy9za2lsbHMgKi9cblxuLyogc2VydmljZXMgKi9cblxuLnczbHMtc3ViLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbn1cblxuLnczX2FnaWxlaXRzLXNlcnZpY2UtbGVmdCBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmRpdiNzZXJ2aWNlcyBoMyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VydmljZXMtZ3JpZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2VydmljZXMtdzNscy1yb3cuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2UxLFxuLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlNCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMTpiZWZvcmUsXG4uc2VydmljZXMtdzNscy1yb3cuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2U0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIxJTtcbiAgbGVmdDogMzklO1xuICBoZWlnaHQ6IDJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zZXJ2aWNlcy13M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTE6YmVmb3JlIHtcbiAgYm90dG9tOiAtMzVweDtcbn1cblxuLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlNDpiZWZvcmUge1xuICB0b3A6IC0zNXB4O1xufVxuXG4uc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNGVtO1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbn1cblxuLnNlcnZpY2VzLWdyaWQuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2UzIHtcbiAgcGFkZGluZy1sZWZ0OiA0ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbn1cblxuLnN1Yi1pY29uIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4uc3ViLWljb24gc3Bhbixcbi5zLXRvcCBzcGFuIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5kaXYjc2VydmljZXMge1xuICBiYWNrZ3JvdW5kOiAjMDNhZmRkO1xufVxuXG4uYWdpbGVpdHMtdzNsYXlvdXRzIGg1IHtcbiAgY29sb3I6ICNlNGUwZTA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDAuNWVtO1xufVxuXG4ucy10b3Age1xuICBtYXJnaW46IDFlbSAwO1xufVxuXG4uc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMge1xuICBtYXJnaW4tdG9wOiAxMGVtO1xufVxuXG4uc2VydmljZXMtZ3JpZCBpbWcge1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjI4NDllO1xuICBtYXJnaW46IDNlbSAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWctYWdpbGVpdHM6YmVmb3JlLFxuLmltZy1hZ2lsZWl0czphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE2JTtcbiAgdG9wOiA0NiU7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbWctYWdpbGVpdHM6YmVmb3JlIHtcbiAgbGVmdDogLTM1cHg7XG59XG5cbi5pbWctYWdpbGVpdHM6YWZ0ZXIge1xuICByaWdodDogLTQ1cHg7XG59XG5cbi8qLy9zZXJ2aWNlcyAqL1xuXG4vKi0tIGdhbGxlcnkgLS0qL1xuXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmEsXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIsXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDNhZmRkO1xuICBib3JkZXI6IHNvbGlkIDJweCAjMDNhZmRkO1xufVxuXG4ubmF2LXRhYnM+bGk+YSB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlcjogc29saWQgMnB4ICMwM2FmZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm5hdi10YWJzPmxpPmE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG8gM2VtO1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtdGFicz5saSB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cblxuLm5hdi10YWJzPmxpPmE6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZDogIzAzYWZkZDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzAzYWZkZDtcbn1cblxuLnczX3RhYl9pbWdfbGVmdCB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLnczX3RhYl9pbWdfbGVmdF9pbm5lciB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQsIDk1LCA4NSwgMC41KTtcbn1cblxuLmFnaWxlLWdhbGxlcnktaW5mbyB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmFnaWxlLWdhbGxlcnktaW5mbyBoNSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWdpbGUtZ2FsbGVyeS1pbmZvIHAge1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAuOWVtO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIG1hcmdpbjogLjVlbSAwIDAgMDtcbn1cblxuLmFnaWxlLWdhbGxlcnktaW5mbyB7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgYWxsO1xuICAtby10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGFsbDtcbiAgLW1zLXRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG4udzNfdGFiX2ltZ19sZWZ0OmhvdmVyIC5hZ2lsZS1nYWxsZXJ5LWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMDNhZmRkO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnczX3RhYl9pbWdfbGVmdDpob3ZlciAuYWdpbGUtZ2FsbGVyeS1pbmZvIHAge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLyotLSAvL2dhbGxlcnkgLS0qL1xuXG4vKi0tIENvbnRhY3QgLS0qL1xuXG4uY29udGFjdC1tYWluLXczbHMge1xuICAvKmJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvY29udGFjdC5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7Ki9cbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC4yNSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbXMtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRhY3QtbGVmdC13M2xzIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUxKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5KTtcbn1cblxuLmNvbnRhY3QtcmlnaHQtdzNsIGgzOmJlZm9yZSB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi5jb250YWN0LXRleHQtYWdpbGVpbmZvIGEge1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5jb250YWN0LWxlZnQtdzNscyBwIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uY29udGFjdC1sZWZ0LXczbHMgaDQge1xuICBjb2xvcjogIzQ5YzdlZDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMC40ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hZ2lsZWl0cy1tYWluLXJpZ2h0IGxhYmVsIHtcbiAgbWFyZ2luOiAwLjVlbSAwIDFlbTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udzNscy10ZXh0IHtcbiAgd2lkdGg6IDQ4JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5hZ2lsZWl0cy1tYWluLXJpZ2h0IHtcbiAgcGFkZGluZzogM2VtO1xufVxuXG4uYWdpbGVfZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgcGFkZGluZzogMC45ZW0gMWVtO1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzVjMGMwO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBtYXJnaW46IDAgMCAxZW0gMDtcbn1cblxuLmFnaWxlX2Zvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuOWVtIDFlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzVjMGMwO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBtYXJnaW46IDAgMCAxZW0gMDtcbn1cblxuLmFnaWxlX2Zvcm0gdGV4dGFyZWEge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAuOGVtIDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDExZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWMwYzA7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIG1hcmdpbjogMCAwIDFlbSAwO1xufVxuXG4uYWdpbGVfZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjk2ODY3O1xuICBiYWNrZ3JvdW5kOiAjMTg1M2ExO1xufVxuXG4uYWdpbGVfZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgY29sb3I6ICMxODUzYTE7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmNvbnRhY3QtcmlnaHQtdzNsIHtcbiAgcGFkZGluZzogNWVtIDEyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOSk7XG59XG5cbi5jb250YWN0LWdyaWQtYWdpbGVpbmZvIHtcbiAgcGFkZGluZzogM2VtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5KTtcbn1cblxuLnZpc2l0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY29udGFjdC1tYWluIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFjdC1tYWluIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWN0LW1haW4gOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWN0LW1haW4gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKi0tIHNvY2lhbC1pY29ucyAtLSovXG5cbnVsLnczLWxpbmtzIGxpIHtcbiAgbWFyZ2luOiAwIDAuNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnVsLnczLWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxudWwudzMtbGlua3MgbGkgYSBpLmZhIHtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGJhY2tncm91bmQ6ICMxODUzYTE7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMi4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG5cbnVsLnczLWxpbmtzIGxpIGEgaS5mYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyotLSAvL2NvbnRhY3QgLS0qL1xuXG4uYWdpbGVpdHNfdzNsYXlvdXRzLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtIDA7XG4gIGJhY2tncm91bmQ6ICMxODUzYTE7XG59XG5cbi5hZ2lsZWl0c193M2xheW91dHMtZm9vdGVyIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmFnaWxlaXRzX3czbGF5b3V0cy1mb290ZXIgcCBhIHtcbiAgY29sb3I6ICM3ZWNhZjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IC41cyBhbGw7XG4gIHRyYW5zaXRpb246IC41cyBhbGw7XG59XG5cbi5hZ2lsZWl0c193M2xheW91dHMtZm9vdGVyIHAgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKi0tIGJvdHRvbS10by10b3AgLS0qL1xuXG4jdG9Ub3Age1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNHB4O1xuICByaWdodDogMyU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWluZGVudDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLy4uL2ltYWdlcy9tb3ZlLXRvcC5wbmcnKSBuby1yZXBlYXQgMHB4IDBweDtcbn1cblxuI3RvVG9wSG92ZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvcGFjaXR5OiAwO1xuICAtbW96LW9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cblxuLyotLSAvL2JvdHRvbS10by10b3AgLS0qL1xuXG4vKiAtLSBSZXNwb25zaXZlIGNvZGUgLS0gKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiAxM2VtIDA7XG4gIH1cblxuICAubmF2LXRhYnMge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMge1xuICAgIG1hcmdpbi10b3A6IDdlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDExZW0gMDtcbiAgfVxuXG4gIC5hZ2lsZV9mb3JtIGlucHV0W3R5cGU9dGV4dF0sXG4gIC5hZ2lsZV9mb3JtIHRleHRhcmVhLFxuICAuYWdpbGVfZm9ybSBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xuICAgIHBhZGRpbmc6IDAuNmVtIDFlbTtcbiAgfVxuXG4gIC5hZ2lsZWl0cy1tYWluLXJpZ2h0IGxhYmVsIHtcbiAgICBtYXJnaW46IDAuNWVtIDAgMC43ZW07XG4gIH1cblxuICAuaW1nLWFnaWxlaXRzOmFmdGVyIHtcbiAgICByaWdodDogLTM1cHg7XG4gIH1cblxuICAuc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTMge1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICB9XG5cbiAgLnNlcnZpY2VzLWdyaWQuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2UyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIH1cblxuICAuaW1nLWFnaWxlaXRzOmJlZm9yZSB7XG4gICAgbGVmdDogLTNweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYmFubmVyLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMy4zZW07XG4gICAgcGFkZGluZzogMCAwLjVlbTtcbiAgfVxuXG4gIGEuYnV5IHtcbiAgICB3aWR0aDogMjMlO1xuICB9XG5cbiAgaDIudzNscy1ibnJ0ZXh0IHtcbiAgICBmb250LXNpemU6IDMuNWVtO1xuICB9XG5cbiAgLmFnaWxlaXRzLWFib3V0LWdyaWQgcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2tpbGxzLXJpZ2h0IHtcbiAgICBtYXJnaW46IDNlbSAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1NCU7XG4gIH1cblxuICBkaXYjc2tpbGxzIHtcbiAgICBwYWRkaW5nOiA0ZW0gMCAxZW07XG4gIH1cblxuICAubmF2LXRhYnMge1xuICAgIHdpZHRoOiA2MiU7XG4gIH1cblxuICAuc2VydmljZXMtdzNscy1yb3cuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2UxLFxuICAuc2VydmljZXMtIHczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlNCxcbiAgLnNlcnZpY2VzLWdyaWQuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2UyIHtcbiAgICBtYXJnaW46IDAgMWVtO1xuICAgIHdpZHRoOiA0NiU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMTpiZWZvcmUsXG4gIC5pbWctYWdpbGVpdHM6YmVmb3JlLFxuICAuaW1nLWFnaWxlaXRzOmFmdGVyLFxuICAuc2VydmljZXMtdzNscy1yb3cuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2U0OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC53M2xzLXN1Yi10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAuc3ViLWljb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1ncmlkLmFnaWxlaXRzLXczbGF5b3V0cyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnN1Yi1pY29uIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cblxuICAuc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTMsXG4gIC5zZXJ2aWNlcy13M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMmVtIDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnNlcnZpY2VzLWdyaWQgaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG5cbiAgLnNlcnZpY2VzLWdyaWQuaW1nLWFnaWxlaXRzIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICBoMy5hZ2lsZWl0cy10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gICAgZm9udC1zaXplOiAyLjNlbTtcbiAgfVxuXG4gIC53M2xzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRlbSAwO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5iYW5uZXItdGV4dCB7XG4gICAgcGFkZGluZzogMTBlbSAwO1xuICB9XG5cbiAgaDIudzNscy1ibnJ0ZXh0IHtcbiAgICBmb250LXNpemU6IDMuM2VtO1xuICB9XG5cbiAgLmFnaWxlLWdhbGxlcnktaW5mbyBoNSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gIC5zZXJ2aWNlcy13M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTEsXG4gIC5zZXJ2aWNlcy0gdzNscy1yb3cuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2U0LFxuICAuc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTIge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1ncmlkLmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMyxcbiAgLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlNCB7XG4gICAgcGFkZGluZzogMCAyZW07XG4gIH1cblxuICAuYmFubmVyLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMy4xZW07XG4gIH1cblxuICBhLmJ1eSB7XG4gICAgbWFyZ2luOiAyLjVlbSBhdXRvIDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzM3cHgpIHtcbiAgLnczLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuYWIxIHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5iYW5uZXItdGV4dCB7XG4gICAgcGFkZGluZzogOC41ZW0gMDtcbiAgfVxuXG4gIC5hZ2lsZWl0cy1hYm91dC1ncmlkIHAge1xuICAgIHdpZHRoOiA5NiU7XG4gIH1cblxuICAuYWIxIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC5za2lsbHMtcmlnaHQge1xuICAgIHdpZHRoOiA1OCU7XG4gIH1cblxuICAubmF2LXRhYnMge1xuICAgIHdpZHRoOiA2NiU7XG4gIH1cblxuICAudmVydGljYWwtc2tpbGxzIGxpIHtcbiAgICB3aWR0aDogNDRweDtcbiAgfVxuXG4gIC53M190YWJfaW1nX2xlZnQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAuc2VydmljZXMtZ3JpZCBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuc2VydmljZXMtdzNscy1yb3cuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2UxLFxuICAuc2VydmljZXMtIHczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlNCxcbiAgLnNlcnZpY2VzLWdyaWQuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2UyIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG5cbiAgaDMuYWdpbGVpdHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgLmNvbnRhY3QtZ3JpZC1hZ2lsZWluZm8ge1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgfVxuXG4gIC5uYXYtdGFicyB7XG4gICAgd2lkdGg6IDcyJTtcbiAgfVxuXG4gIGEuYnV5IHtcbiAgICB3aWR0aDogMjYlO1xuICB9XG5cbiAgLmJhbm5lci10ZXh0IGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICBoMi53M2xzLWJucnRleHQge1xuICAgIGZvbnQtc2l6ZTogMy4xZW07XG4gIH1cblxuICAuc2tpbGxzLXJpZ2h0IHtcbiAgICB3aWR0aDogNjIlO1xuICB9XG5cbiAgLm5hdi10YWJzIHtcbiAgICB3aWR0aDogNzYlO1xuICB9XG5cbiAgLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMSxcbiAgLnNlcnZpY2VzLSB3M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTQsXG4gIC5zZXJ2aWNlcy1ncmlkLmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMiB7XG4gICAgd2lkdGg6IDg0JTtcbiAgfVxuXG4gIC5zdWItaWNvbiBzcGFuLFxuICAucy10b3Agc3BhbiB7XG4gICAgZm9udC1zaXplOiAzLjVlbTtcbiAgfVxuXG4gIC5hZ2lsZV9mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIHdpZHRoOiAyMyU7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYmFubmVyLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMi44ZW07XG4gIH1cblxuICBhLmJ1eSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuXG4gIGgyLnczbHMtYm5ydGV4dCB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cblxuICAuYWdpbGVpdHMtYWJvdXQtZ3JpZCBwIHtcbiAgICB3aWR0aDogOTIlO1xuICB9XG5cbiAgLnNraWxscy1yaWdodCB7XG4gICAgd2lkdGg6IDY2JTtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1za2lsbHMgbGkge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG5cbiAgLm5hdi10YWJzIHtcbiAgICB3aWR0aDogODIlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG5cbiAgLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMSxcbiAgLnNlcnZpY2VzLSB3M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTQsXG4gIC5zZXJ2aWNlcy1ncmlkLmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMiB7XG4gICAgd2lkdGg6IDk2JTtcbiAgfVxuXG4gIC5uYXYtdGFicyB7XG4gICAgd2lkdGg6IDg2JTtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1ncmlkIGltZyB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIGgyLnczbHMtYm5ydGV4dCB7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgfVxuXG4gIHAudzNscy1wIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG5cbiAgYS5idXkge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cblxuICAuc2tpbGxzLXJpZ2h0IHtcbiAgICB3aWR0aDogNzglO1xuICB9XG5cbiAgLm5hdi10YWJzPmxpIHtcbiAgICBtYXJnaW46IDAgM3B4IDAgMDtcbiAgfVxuXG4gIC5uYXYtdGFicyB7XG4gICAgd2lkdGg6IDk3JTtcbiAgfVxuXG4gIC5zZXJ2aWNlcy13M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTEsXG4gIC5zZXJ2aWNlcy0gdzNscy1yb3cuYWdpbGVpdHMtdzNsYXlvdXRzLnNlcnZpY2U0LFxuICAuc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTIge1xuICAgIHBhZGRpbmc6IDFlbSAxZW0gMC41ZW07XG4gIH1cblxuICAuc2VydmljZXMtZ3JpZC5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTMsXG4gIC5zZXJ2aWNlcy13M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTQge1xuICAgIG1hcmdpbjogMWVtIDA7XG4gIH1cblxuICAudmVydGljYWwtc2tpbGxzIGxpIHNwYW4udGl0bGUge1xuICAgIGxlZnQ6IDlweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuYmFubmVyLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMi42ZW07XG4gIH1cblxuICBoMi53M2xzLWJucnRleHQge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cblxuICAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDcuNWVtIDA7XG4gIH1cblxuICBhLmJ1eSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuXG4gIC5hZ2lsZWl0cy1hYm91dC1ncmlkIHAge1xuICAgIHdpZHRoOiA5OCU7XG4gIH1cblxuICAuc2tpbGxzLXJpZ2h0IHtcbiAgICB3aWR0aDogODYlO1xuICB9XG5cbiAgLnZlcnRpY2FsLXNraWxscyBsaSB7XG4gICAgd2lkdGg6IDM1cHg7XG4gIH1cblxuICAubmF2LXRhYnM+bGk+YSB7XG4gICAgcGFkZGluZzogLjVlbSAwLjdlbTtcbiAgICBmb250LXNpemU6IDAuOTJlbTtcbiAgfVxuXG4gIC5jb250YWN0LWdyaWQtYWdpbGVpbmZvIHtcbiAgICBwYWRkaW5nOiAxLjVlbSAwLjZlbTtcbiAgfVxuXG4gIHVsLnczLWxpbmtzIGxpIHtcbiAgICBtYXJnaW46IDAgMC40ZW07XG4gIH1cblxuICAuYWdpbGVpdHMtbWFpbi1yaWdodCB7XG4gICAgcGFkZGluZzogM2VtIDJlbTtcbiAgfVxuXG4gIGgzLmFnaWxlaXRzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1ncmlkIGltZyB7XG4gICAgd2lkdGg6IDU2JTtcbiAgfVxuXG4gIC5hZ2lsZV9mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIHdpZHRoOiAyNiU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICAuYWdpbGVpdHNfdzNsYXlvdXRzLWZvb3RlciB7XG4gICAgcGFkZGluZzogMmVtIDFlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDZlbSAwO1xuICB9XG5cbiAgaDIudzNscy1ibnJ0ZXh0IHtcbiAgICBmb250LXNpemU6IDIuMzFlbTtcbiAgfVxuXG4gIGEuYnV5IHtcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbjogMS43ZW0gYXV0bztcbiAgfVxuXG4gIC5za2lsbHMtcmlnaHQge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubmF2LXRhYnM+bGkge1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAubmF2LXRhYnMge1xuICAgIG1hcmdpbjogMCBhdXRvIDJlbTtcbiAgfVxuXG4gIC53M2xzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDNlbSAwO1xuICB9XG5cbiAgLnNlcnZpY2VzLWdyaWQgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmNvbnRhY3QtaWNvbi13dGhyZWUge1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGFjdC10ZXh0LWFnaWxlaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAuY29udGFjdC1ncmlkLWFnaWxlaW5mbyB7XG4gICAgcGFkZGluZzogMWVtIDAgMS44ZW07XG4gIH1cblxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGgzLmFnaWxlaXRzLXRpdGxlLmNvbnQtdzNsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4gIGEud3RocmVlLS5hYm91dC1saW5rIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuYmFubmVyLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMi40ZW07XG4gIH1cblxuICAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDVlbSAwO1xuICB9XG5cbiAgaDIudzNscy1ibnJ0ZXh0IHtcbiAgICBmb250LXNpemU6IDIuMjZlbTtcbiAgfVxuXG4gIGEuYnV5IHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gIH1cblxuICBoMy5hZ2lsZWl0cy10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIH1cblxuICAud3RocmVlLS5hYm91dC1saW5rIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAxLjhlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG5cbiAgaDQuYWdpbGVpbmZvLWhlYWQge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gIH1cblxuICAudmVydGljYWwtc2tpbGxzIGxpIHtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1za2lsbHMgbGk6YWZ0ZXIge1xuICAgIGxlZnQ6IDE4cHg7XG4gIH1cblxuICAudmVydGljYWwtc2tpbGxzIGxpOmJlZm9yZSB7XG4gICAgbGVmdDogMTRweDtcbiAgfVxuXG4gIC53M190YWJfaW1nX2xlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmFnaWxlaXRzLW1haW4tcmlnaHQge1xuICAgIHBhZGRpbmc6IDNlbSAxLjVlbTtcbiAgfVxuXG4gIC5hZ2lsZWl0c193M2xheW91dHMtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuYmFubmVyLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gIH1cblxuICAudzNscy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyLjdlbSAwO1xuICB9XG5cbiAgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA0ZW0gMCAzZW07XG4gIH1cblxuICBoMi53M2xzLWJucnRleHQgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGgyLnczbHMtYm5ydGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjg4ZW07XG4gIH1cblxuICBhLmJ1eSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHdpZHRoOiA1MyU7XG4gIH1cblxuICBoMy5hZ2lsZWl0cy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjllbTtcbiAgfVxuXG4gIGEud3RocmVlLS5hYm91dC1saW5rIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAxLjJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG5cbiAgLnZlcnRpY2FsLXNraWxscyBsaSB7XG4gICAgbWFyZ2luOiAwIDZweDtcbiAgfVxuXG4gIC5hZ2lsZWl0c193M2xheW91dHMtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxZW0gMC44ZW07XG4gIH1cblxuICAudmVydGljYWwtc2tpbGxzIGxpIHtcbiAgICBtYXJnaW46IDAgMnB4O1xuICB9XG5cbiAgLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMSxcbiAgLnNlcnZpY2VzLSB3M2xzLXJvdy5hZ2lsZWl0cy13M2xheW91dHMuc2VydmljZTQsXG4gIC5zZXJ2aWNlcy1ncmlkLmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMiB7XG4gICAgcGFkZGluZzogMWVtIDBlbSAwLjVlbTtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1ncmlkLmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlMyxcbiAgLnNlcnZpY2VzLXczbHMtcm93LmFnaWxlaXRzLXczbGF5b3V0cy5zZXJ2aWNlNCB7XG4gICAgcGFkZGluZzogMCAxZW07XG4gIH1cblxuICAjbWVudVRvZ2dsZSB7XG4gICAgcmlnaHQ6IDclO1xuICB9XG59XG5cbi8qIC0tIC8vUmVzcG9uc2l2ZSBjb2RlIC0tICovXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/css/index.css":
/*!**********************************!*\
  !*** ./src/assets/css/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./index.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!****************************************!*\
  !*** multi ./src/assets/css/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dang/workspace/moncv/src/assets/css/index.css */"./src/assets/css/index.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map