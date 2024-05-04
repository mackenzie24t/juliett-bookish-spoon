$(document).ready(()=> {

    // output when user types
    $("#inputBox").keydown(()=> {
        // Use string.split() to get character array 
        var userInput = document.getElementById("inputBox").value.toUpperCase();
        let charArr = userInput.split(""); 
        console.log(charArr);
        let fullText = "";

        // loops through the character array
        // when a character is found, concatenate it onto the full output
        for (let i = 0; i < charArr.length; i++) 
        {
            if (charArr[i] == "A")
            {
                fullText = fullText.concat(" ", "Alfa");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "B")
            {
                fullText = fullText.concat(" ", "Bravo");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "C")
            {
                fullText = fullText.concat(" ", "Charlie");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "D")
            {
                fullText = fullText.concat(" ", "Delta");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "E")
            {
                fullText = fullText.concat(" ", "Echo");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "F")
            {
                fullText = fullText.concat(" ", "Foxtrot");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "G")
            {
                fullText = fullText.concat(" ", "Golf");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "H")
            {
                fullText = fullText.concat(" ", "Hotel");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "I")
            {
                fullText = fullText.concat(" ", "India");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "J")
            {
                fullText = fullText.concat(" ", "Juliett");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "K")
            {
                fullText = fullText.concat(" ", "Kilo");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "L")
            {
                fullText = fullText.concat(" ", "Lima");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "M")
            {
                fullText = fullText.concat(" ", "Mike");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "N")
            {
                fullText = fullText.concat(" ", "November");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "O")
            {
                fullText = fullText.concat(" ", "Oscar");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "P")
            {
                fullText = fullText.concat(" ", "Papa");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "Q")
            {
                fullText = fullText.concat(" ", "Quebec");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "R")
            {
                fullText = fullText.concat(" ", "Romeo");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "S")
            {
                fullText = fullText.concat(" ", "Sierra");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "T")
            {
                fullText = fullText.concat(" ", "Tango");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "U")
            {
                fullText = fullText.concat(" ", "Uniform");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "V")
            {
                fullText = fullText.concat(" ", "Victor");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "W")
            {
                fullText = fullText.concat(" ", "Whiskey");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "X")
            {
                fullText = fullText.concat(" ", "X-ray");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "Y")
            {
                fullText = fullText.concat(" ", "Yankee");
                $("#conversion").text(fullText);
            }
            else if (charArr[i] == "Z")
            {
                fullText = fullText.concat(" ", "Zulu");
                $("#conversion").text(fullText);
            }
        }
    });
});
