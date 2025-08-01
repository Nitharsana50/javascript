<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Calculate Program</title>
    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
            margin-top: 50px;
        }
        input, select, button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
        }
        #result {
            margin-top: 20px;
            font-weight: bold;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h2>Calculate Program</h2>
    <input type="number" placeholder="Enter the first value:" id="num1" />
    <input type="number" placeholder="Enter the second value:" id="num2" />  
    <select id="operation">
        <option value="add">Add</option>
        <option value="subtraction">Subtraction</option>
    </select>
    <button onclick="calculate()">Calculate</button>
    <div id="result">Result</div>

    <script>
        function calculate() {
            const num1 = parseInt(document.getElementById("num1").value);
            const num2 = parseInt(document.getElementById("num2").value);
            const operation = document.getElementById("operation").value;
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                result = "Please check your inputs.";
            } else {
                switch(operation) {
                    case "add":
                        result = num1 + num2;
                        break;
                    case "subtraction":
                        result = num1 - num2;
                        break;
                    default:
                        result = "Invalid operation";
                }
            }
            document.getElementById("result").innerText = result;
        }
    </script>
</body>
</html>
