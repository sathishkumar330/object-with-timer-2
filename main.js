let b=parseInt(prompt("Enter the value"))
		
		let a=new Date();
			a.setMonth(b);
		let res=a.getMonth();
		
		if(res>=0 && res<=3){
			console.log("summer");
			}
		else if(res>=4 && res<=7){
			console.log("winter");
			}
		else if(res>=8 && res<=11){
			console.log("fall");
			} 