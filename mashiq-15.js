// let a = 80,
//     b = 1.6,
//     c = a / (b * b);
//     console.log(c);

let markWieght = 57
    markHieght = 1.6;
    markBmi = markWieght / (markHieght * markHieght);
    console.log(markBmi);

    if(markBmi > 25 ){
      console.log("mark sen juda semizan :(");
    } 
    else if (markBmi < 25 && markBmi >= 15){
      console.log("mark sen normalsan :)");
    }
    else{
      console.log ("mark sen juda ozg'insan :(");
    }