function calcularMediaDeBags()
    {
        var quantdadePax = document.getElementById('valor1').value;
        var media3Dias = document.getElementById('valor2').value;
        var calcularMedia = quantdadePax * media3Dias;
        var result = calcularMedia.toFixed(1);
        document.getElementById('info').innerHTML = (calcularMedia);
    }
    function calcularDiferencaDeFuel()
    {
        var fuelComandante = document.getElementById('fuel-coma').value;
        var fuelRecomendado = document.getElementById('fuel-rec').value;
        var diferencaFuel = fuelComandante - fuelRecomendado;
        document.getElementById('infoFuel').innerHTML = (diferencaFuel +' kg')
        
    }
