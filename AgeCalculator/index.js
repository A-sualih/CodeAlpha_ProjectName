
    let userInput=document.getElementById('date');
    userInput.max=new Date().toISOString().split("T")[0];
    let result=document.getElementById("result");
    function CalculateAge(){
        let birthDate=new Date(userInput.value);
        //
        let d1=birthDate.getDate();
        let m1=birthDate.getMonth()+1;
        let y1=birthDate.getFullYear();
        let today=new Date();
        let d2=today.getDate();
        let m2=today.getMonth()+1;
        let y2=today.getFullYear();

        let d3,m3,y3;
        y3=y2-y1;  // 2004-2025 20
        if(m2 >=m1){   //10>9
            m3=m2-m1;  
        }else{ //9-10
            y3--;   //19                      
            m3=12+m2-m1; //11
        }
        if(d2>=d1){
            d3=d2-d1
        }
        else{
         m3--;
         d3=getDaysInMonth(y1,m1)+d2-d1;
        }
        if(m3<0){
            m3=11;
            y3--;
        }
        console.log(y3,m3,d3);
        result.innerHTML=`You are <span> ${y3}</span> Years,<span>${m3}</span> Months ,<span>${d3}</span> days old`
    }
        function getDaysInMonth(year,month){  // 2004,3
            return new Date(year,month,0).getDate(); //return last day ot that month number of days in that month
        }
 