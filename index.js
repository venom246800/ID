AFRAME.registerComponent('markerhandler', {


    init: function() {
    	console.log("sdsadsa");
        const animatedMarker1 = document.querySelector("#animated-marker1");
        const animatedMarker2 = document.querySelector("#animated-marker2");
        const animatedMarker3 = document.querySelector("#animated-marker3");
               
        const sl1 = document.querySelector("#sl1");
		const sl2 = document.querySelector("#sl2");

        const sr1 = document.querySelector("#sr1");
		const sr2 = document.querySelector("#sr2");
        const sr3 = document.querySelector("#sr3");
        const sr4 = document.querySelector("#sr4");
		const sr5 = document.querySelector("#sr5");
        const sr6 = document.querySelector("#sr6");
        const sr7 = document.querySelector("#sr7");

        const sb1 = document.querySelector("#sb1");
		const sb2 = document.querySelector("#sb2");
        const sb3 = document.querySelector("#sb3");
        const sb4 = document.querySelector("#sb4");
		const sb5 = document.querySelector("#sb5");
        const sb6 = document.querySelector("#sb6");
        const sb7 = document.querySelector("#sb7");
		const sb8 = document.querySelector("#sb8");

		const rl1 = document.querySelector("#rl1");

        const rr1 = document.querySelector("#rr1");
		const rr2 = document.querySelector("#rr2");
        const rr3 = document.querySelector("#rr3");
        const rr4 = document.querySelector("#rr4");
		const rr5 = document.querySelector("#rr5");
        const rr6 = document.querySelector("#rr6");
        const rr7 = document.querySelector("#rr7");

        const rb1 = document.querySelector("#rb1");
		const rb2 = document.querySelector("#rb2");
        const rb3 = document.querySelector("#rb3");
        const rb4 = document.querySelector("#rb4");
		const rb5 = document.querySelector("#rb5");
        const rb6 = document.querySelector("#rb6");
        const rb7 = document.querySelector("#rb7");
		const rb8 = document.querySelector("#rb8");


		const al1 = document.querySelector("#al1");

        const ar1 = document.querySelector("#ar1");
		const ar2 = document.querySelector("#ar2");
        const ar3 = document.querySelector("#ar3");
        const ar4 = document.querySelector("#ar4");
		const ar5 = document.querySelector("#ar5");
        const ar6 = document.querySelector("#ar6");
        const ar7 = document.querySelector("#ar7");

        const ab1 = document.querySelector("#ab1");
		const ab2 = document.querySelector("#ab2");
        const ab3 = document.querySelector("#ab3");
        const ab4 = document.querySelector("#ab4");
		const ab5 = document.querySelector("#ab5");
        const ab6 = document.querySelector("#ab6");
        const ab7 = document.querySelector("#ab7");
		const ab8 = document.querySelector("#ab8");



    var x = 0;
    var y = 0;
    var z = 0;
    animatedMarker1.addEventListener('click', function(ev1, target){
        const intersectedElement1 = ev1 && ev1.detail && ev1.detail.intersectedEl;
        if (sl1 && intersectedElement1 === sl1) {
        	console.log("function 1 called");
           if(x==0)
            {
            	x=1;
              	sr1.setAttribute('visible','true');
              	sr2.setAttribute('visible','true');
              	sr3.setAttribute('visible','true');
              	sr4.setAttribute('visible','true');
              	sr5.setAttribute('visible','true');
              	sr6.setAttribute('visible','true');
              	sr7.setAttribute('visible','true');
            }
            else if(x==1)
            {
            	x = 2;
            	sb1.setAttribute('visible','true');
              	sb2.setAttribute('visible','true');
              	sb3.setAttribute('visible','true');
              	sb4.setAttribute('visible','true');
              	sb5.setAttribute('visible','true');
              	sb6.setAttribute('visible','true');
              	sb7.setAttribute('visible','true');
              	sb8.setAttribute('visible','true');
            }
            else if(x==2)
            {
            	x=0;
            	sr1.setAttribute('visible','false');
              	sr2.setAttribute('visible','false');
              	sr3.setAttribute('visible','false');
              	sr4.setAttribute('visible','false');
              	sr5.setAttribute('visible','false');
              	sr6.setAttribute('visible','false');
              	sr7.setAttribute('visible','false');

              	sb1.setAttribute('visible','false');
              	sb2.setAttribute('visible','false');
              	sb3.setAttribute('visible','false');
              	sb4.setAttribute('visible','false');
              	sb5.setAttribute('visible','false');
              	sb6.setAttribute('visible','false');
              	sb7.setAttribute('visible','false');
              	sb8.setAttribute('visible','false');
            }
        }
        if (sl2 && intersectedElement1 === sl2) {
        	console.log("function 1 called");
           if(x==0)
            {
            	x=1;
              	sr1.setAttribute('visible','true');
              	sr2.setAttribute('visible','true');
              	sr3.setAttribute('visible','true');
              	sr4.setAttribute('visible','true');
              	sr5.setAttribute('visible','true');
              	sr6.setAttribute('visible','true');
              	sr7.setAttribute('visible','true');
            }
            else if(x==1)
            {
            	x = 2;
            	sb1.setAttribute('visible','true');
              	sb2.setAttribute('visible','true');
              	sb3.setAttribute('visible','true');
              	sb4.setAttribute('visible','true');
              	sb5.setAttribute('visible','true');
              	sb6.setAttribute('visible','true');
              	sb7.setAttribute('visible','true');
              	sb8.setAttribute('visible','true');
            }
            else if(x==2)
            {
            	x=0;
            	sr1.setAttribute('visible','false');
              	sr2.setAttribute('visible','false');
              	sr3.setAttribute('visible','false');
              	sr4.setAttribute('visible','false');
              	sr5.setAttribute('visible','false');
              	sr6.setAttribute('visible','false');
              	sr7.setAttribute('visible','false');

              	sb1.setAttribute('visible','false');
              	sb2.setAttribute('visible','false');
              	sb3.setAttribute('visible','false');
              	sb4.setAttribute('visible','false');
              	sb5.setAttribute('visible','false');
              	sb6.setAttribute('visible','false');
              	sb7.setAttribute('visible','false');
              	sb8.setAttribute('visible','false');
            }
        }
    });

    animatedMarker2.addEventListener('click', function(ev2, target){
        const intersectedElement2 = ev2 && ev2.detail && ev2.detail.intersectedEl;
        if (rl1 && intersectedElement2 === rl1) {
        	console.log("function 2 called");
           if(y==0)
            {
            	y=1;
              	rr1.setAttribute('visible','true');
              	rr2.setAttribute('visible','true');
              	rr3.setAttribute('visible','true');
              	rr4.setAttribute('visible','true');
              	rr5.setAttribute('visible','true');
              	rr6.setAttribute('visible','true');
              	rr7.setAttribute('visible','true');
            }
            else if(y==1)
            {
            	y = 2;
            	rb1.setAttribute('visible','true');
              	rb2.setAttribute('visible','true');
              	rb3.setAttribute('visible','true');
              	rb4.setAttribute('visible','true');
              	rb5.setAttribute('visible','true');
              	rb6.setAttribute('visible','true');
              	rb7.setAttribute('visible','true');
              	rb8.setAttribute('visible','true');
            }
            else if(y==2)
            {
            	y=0;
            	rr1.setAttribute('visible','false');
              	rr2.setAttribute('visible','false');
              	rr3.setAttribute('visible','false');
              	rr4.setAttribute('visible','false');
              	rr5.setAttribute('visible','false');
              	rr6.setAttribute('visible','false');
              	rr7.setAttribute('visible','false');

              	rb1.setAttribute('visible','false');
              	rb2.setAttribute('visible','false');
              	rb3.setAttribute('visible','false');
              	rb4.setAttribute('visible','false');
              	rb5.setAttribute('visible','false');
              	rb6.setAttribute('visible','false');
              	rb7.setAttribute('visible','false');
              	rb8.setAttribute('visible','false');
            }
        }
    });

    animatedMarker3.addEventListener('click', function(ev3, target){
        const intersectedElement3 = ev3 && ev3.detail && ev3.detail.intersectedEl;
        if (al1 && intersectedElement3 === al1) {
        	console.log("function 3 called");
           if(z==0)
            {
            	z=1;
              	ar1.setAttribute('visible','true');
              	ar2.setAttribute('visible','true');
              	ar3.setAttribute('visible','true');
              	ar4.setAttribute('visible','true');
              	ar5.setAttribute('visible','true');
              	ar6.setAttribute('visible','true');
              	ar7.setAttribute('visible','true');
            }
            else if(z==1)
            {
            	z = 2;
            	ab1.setAttribute('visible','true');
              	ab2.setAttribute('visible','true');
              	ab3.setAttribute('visible','true');
              	ab4.setAttribute('visible','true');
              	ab5.setAttribute('visible','true');
              	ab6.setAttribute('visible','true');
              	ab7.setAttribute('visible','true');
              	ab8.setAttribute('visible','true');
            }
            else if(z==2)
            {
            	z=0;
            	ar1.setAttribute('visible','false');
              	ar2.setAttribute('visible','false');
              	ar3.setAttribute('visible','false');
              	ar4.setAttribute('visible','false');
              	ar5.setAttribute('visible','false');
              	ar6.setAttribute('visible','false');
              	ar7.setAttribute('visible','false');

              	ab1.setAttribute('visible','false');
              	ab2.setAttribute('visible','false');
              	ab3.setAttribute('visible','false');
              	ab4.setAttribute('visible','false');
              	ab5.setAttribute('visible','false');
              	ab6.setAttribute('visible','false');
              	ab7.setAttribute('visible','false');
              	ab8.setAttribute('visible','false');
            }
        }
    });


  }

});