			var hp1 = hp2 = 150;
			var dmg1 = dmg2 = 35;
			var arm1 = arm2 = 30;
			var bdmg = 9;
			var barm = 8;
			var dmgred = 6;
			var armred = 7;
			var armmin = 10;

		addEventListener("keydown", function(event) {  
			var resultHp1 = document.getElementById("resultHp1");
			var resultUpDmg1 = document.getElementById("resultUpDmg1");
			var resultUpArm1 = document.getElementById("resultUpArm1");
			var resultHp2 = document.getElementById("resultHp2");
			var resultUpDmg2 = document.getElementById("resultUpDmg2");
			var resultUpArm2 = document.getElementById("resultUpArm2");

			function playSound(url){
				var s = new Audio();
				s.src = url;
				s.play();
			}

			function bot(){				//Действия "бота" в ответ на действия игрока
				if((dmg2 - arm1) >= 20){	
					playSound("source/audio/Atc.mp3");		
	   		 		hp1 = hp1 - (dmg2 - arm1);
	   		 		resultHp1.textContent = hp1;
	   		 		document.Cowboy2Base.src= "source/image/AnimationCowboy2Attack.gif";
	   		 		if (hp1 <= 0) alert("Вы проиграли. Для повтора обновите страницу");
					if (hp1 <= 0 && hp2 <= 0) alert("Ничья. Для повтора обновите страницу");
	   		 	}
	   		 	else if ((dmg2 - arm1) <= 10 && (dmg1 - arm2) <= 10) {	
	   		 		playSound("source/audio/Buff.mp3");	
	   		 		arm2 -= armmin;
	   		 		dmg2 += bdmg;
	   		 		if (arm2 <= 0) arm2 = 0;
	   		 		resultUpArm2.textContent = arm2;
	   		 		resultUpDmg2.textContent = dmg2;
	   		 		document.Cowboy2Base.src= "source/image/AnimationCowboy2BonusDamage.gif";
	   		 	}
	   		 	else if ((dmg1 - arm2) >= 30) {
	   		 		playSound("source/audio/Buff.mp3");
	   		 		arm2 += barm;
	   		 		document.Cowboy2Base.src= "source/image/AnimationCowboy2BonusArmor.gif";
	   		 		resultUpArm2.textContent = arm2;
	   		 	}
	   		 	else if (dmg1 - arm2 >= 7) {
	   		 		playSound("source/audio/Debuff.mp3");
	   		 		dmg1 -= dmgred;
	   		 		if (dmg1 <= 0) dmg1 = 0;
	   		 		resultUpDmg1.textContent = dmg1;
	   		 		document.Cowboy2Base.src= "source/image/AnimationCowboy2DebufDmg.gif";
	   		 	}
	   		 	else if ((dmg2 - arm1) <= 10 && (dmg2 - arm1) >= 5 && (arm2 - dmg1) <= 10) {
	   		 		playSound("source/audio/Debuff.mp3");
	   		 		arm1 -= armred;
	   		 		if (arm1 <= 0) arm1 = 0;
	   		 		resultUpArm1.textContent = arm1;
	   		 		document.Cowboy2Base.src= "source/image/AnimationCowboy2DebufArm.gif";
	   		 	}	
	   		 	else {
	   		 		playSound("source/audio/Buff.mp3");
	   		 		arm2 -= armmin;
	   		 		dmg2 += bdmg;
	   		 		if (arm2 <= 0) arm2 = 0;
	   		 		resultUpArm2.textContent = arm2;
	   		 		resultUpDmg2.textContent = dmg2;
	   		 		document.Cowboy2Base.src= "source/image/AnimationCowboy2BonusDamage.gif";
	   		 	}				
	   		 }


	   		 if (event.keyCode == 49)				//+защита	(клаваиша "1")
	   		 {
	   		 	playSound("source/audio/Buff.mp3");
	   		 	arm1 += barm;
	   		 	resultUpArm1.textContent = arm1;
	   		 	document.Cowboy1Base.src= "source/image/AnimationCowboy1BonusArmor.gif";
	   		 	bot();
	   		 }

	  		 if (event.keyCode == 50)				//+атака, -защита    (клаваиша "2")
	  		 {
	  		 	playSound("source/audio/Buff.mp3");
	  		 	dmg1 += bdmg;
	  		 	arm1 -= armmin;
	  		 		if (arm1 < 0) arm1 = 0;
	  		 	resultUpDmg1.textContent = dmg1;
	  		 	resultUpArm1.textContent = arm1;
	  		 	document.Cowboy1Base.src= "source/image/AnimationCowboy1BonusDamage.gif";
	  		 	bot();
	      	}

	   		 if (event.keyCode == 51)				//-защита врагу		(клаваиша "3")
	   		 {
	   		 	playSound("source/audio/Debuff.mp3");
	   		 	arm2 -= armred;
	   		 	if (arm2 < 0) arm2 = 0;
	   		 	resultUpArm2.textContent = arm2;
	   		 	document.Cowboy1Base.src= "source/image/AnimationCowboy1DebufArm.gif";
	   		 	bot();
	   		 }

	   		 if (event.keyCode == 52)				//-атака врагу	(клаваиша "4")
	   		 {	
				playSound("source/audio/Debuff.mp3");
				dmg2 -= dmgred;
				if (dmg2 < 0) dmg2 = 0;
				resultUpDmg2.textContent = dmg2;
				document.Cowboy1Base.src= "source/image/AnimationCowboy1DebufDmg.gif";
				bot();
			}

	  	     if (event.keyCode == 53)				//атака	 (клаваиша "5")
	  	     {
	  	     	playSound("source/audio/Atc.mp3");
	      		if (dmg1 <= arm2) hp2 = hp2;
	      		if (dmg1 > arm2) hp2 = hp2 - (dmg1 - arm2);
	      		if (hp2 <= 0) alert("Вы выиграли. Для повтора обновите страницу");
	      		resultHp2.textContent = hp2;
	      		document.Cowboy1Base.src= "source/image/AnimationCowboy1Attack.gif";
	      		bot();
	      	 }	
	  		});