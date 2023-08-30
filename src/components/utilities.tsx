let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
let curMonth = date.getMonth();
let dayOfMonth = date.getDate();
let suffix;
if(dayOfMonth%10 == 1)
    suffix ="st"    
else if(dayOfMonth%10 == 2)
    suffix = "nd"
else if(dayOfMonth%10 == 3)
    suffix = "rd"
else 
    suffix = "th"
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February" , "March" , "April" , "May" , "June", "July" , "August" , 
    "September" , "October" , "November" , "December"];


export const currentDate = `${weekDay[day]}, ${month[curMonth]} ${dayOfMonth}${suffix}, ${year}`; 



interface TaskProp 
{
    username:String,
    title:String,
    text: String,
    completed:Boolean,
    date: String
}

export type taskProp =
{
    incompleteTasks: TaskProp[],
    completeTasks:TaskProp[]
}