let grades = [73, 67, 38, 33]

function gradingStudents(grades){
    for(let i=0;i<grades.length;i++){
        if(75-grades[i]<3){
            console.log(Math.round(75))
        }else if(70-grades[i]<=3){
            console.log(Math.round(67))
        }else if(40-grades[i]<3){
            console.log(40)
        }else{
            console.log(grades[i])
        }
    }
}
gradingStudents(grades)