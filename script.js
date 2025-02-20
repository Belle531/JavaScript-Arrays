
    const colors = ["red", "green", "blue"];
    console.log(colors[0]);
    
    colors.push('yellow');
    console.log(colors);
    
    colors.pop();
    console.log(colors); 
    
    colors.unshift("purple");
    console.log(colors);
    
    colors.shift(); 
    console.log(colors);
    
    console.log(colors.length);
    
    const colorString = colors.join("-"); 
    console.log(colorString);
    
    colors[1] = "pink";
    console.log(colors);
    
    const numbers = [10, 20, 30, 40, 50];
    console.log(numbers[2]);
    
    numbers.pop();
    numbers.unshift(5, 10);
    console.log(numbers);

    let attendees = ["Cassandra", "Tiffany", "Dionell", "Michelle"];

    attendess.push("Lexius Waltar");

    attendees.pop();

    console.log("attendees:");
    for (let i = 0; i <attendees.length; i++)
    console.log(attendees[i]);

    