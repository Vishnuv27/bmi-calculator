function calculateBMI() {
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
        alert('Please enter valid age, height, and weight values.');
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var resultElement = document.getElementById('result');

    resultElement.innerHTML = 'Your BMI: ' + bmi.toFixed(2);

    // Update the health meter
    updateHealthMeter(bmi);
}

function updateHealthMeter(bmi) {
    var options = {
        angle: 0,
        lineWidth: 0.44,
        radiusScale: 1,
        pointer: {
            length: 0.6,
            strokeWidth: 0.035,
            color: '#000000'
        },
        limitMax: true,
        limitMin: true,
        colorStart: '#6FADCF',
        colorStop: '#8FC0DA',
        strokeColor: '#E0E0E0',
        generateGradient: true
    };

    // Set the gauge value based on BMI
    if (bmi < 18.5) {
        options.colorStart = '#3498db';
        options.colorStop = '#2980b9';
        options.strokeColor = '#2c3e50';
    } else if (bmi < 25) {
        options.colorStart = '#2ecc71';
        options.colorStop = '#27ae60';
        options.strokeColor = '#2c3e50';
    } else if (bmi < 30) {
        options.colorStart = '#f1c40f';
        options.colorStop = '#f39c12';
        options.strokeColor = '#2c3e50';
    } else {
        options.colorStart = '#e74c3c';
        options.colorStop = '#c0392b';
        options.strokeColor = '#2c3e50';
    }

    var target = document.getElementById('health-gauge');
    var gauge = new Gauge(target).setOptions(options);
    gauge.maxValue = 40; // Set the max value to an arbitrary value
    gauge.setMinValue(0);
    gauge.animationSpeed = 20; // Adjust the speed of the animation
    gauge.set(bmi);
}