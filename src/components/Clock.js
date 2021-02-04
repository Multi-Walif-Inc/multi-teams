export default function Clock() {
// this code need some optimization and refactoring perhaps! //

     let time = new Date(); 
     let hour = time.getHours(); 
     let min = time.getMinutes(); 
     let sec = time.getSeconds(); 

     let Am_pm = " AM"; 

     if (hour > 12) { 
         hour -= 12; 
         Am_pm = " PM"; 
     } 
     if (hour === 0) { 
         hour = 12; 
         Am_pm = "AM"; 
     } 

     hour = hour < 10 ? "0" + hour : hour; 
     min = min < 10 ? "0" + min : min; 
     sec = sec < 10 ? "0" + sec : sec; 

     let currentTime = hour + ":"  
         + min + ":" + sec + Am_pm; 

         return currentTime;
}
