var tarifa = [
    {id: 1, Vehiculo: "Auto", base: 500, horas: 200},
    {id: 2, Vehiculo: "Camioneta", base: 700, horas: 300},
    {id: 3, Vehiculo: "Auto", base: 300,horas: 100},
];

var garage = {
    reservas: [],
    
    hacerReserva: function(Vehiculo, patente, horas) {
        var precio = this.calcularPrecio(horas);
        this.reservas.push({ Vehiculo: Vehiculo, patente: patente, horas: horas, precio: precio });
    },
    
    calcularPrecio: function(horas) {
     
        var tarifaEncontrada = tarifa.find(function(tarifa) {
            return tarifa.horas === horas;
        });

      
        return tarifaEncontrada ? tarifaEncontrada.base + (horas * tarifaEncontrada.horas) : 0;
    },
    
    mostrarReservas: function() {
        var mensaje = "Reservas:\n";
        for (var i = 0; i < this.reservas.length; i++) {
            mensaje += `Vehiculo: ${this.reservas[i].Vehiculo}, patente: ${this.reservas[i].patente}, Horas: ${this.reservas[i].horas} horas, Precio: $${this.reservas[i].precio}\n`;
        }
        alert(mensaje);
    }
};

var nombreVehiculo= prompt("Ingrese su Vehiculo:");
var patenteUsuario = prompt("Ingrese el número de patente de su vehículo:");
var tiempoEstacionamiento = parseInt(prompt("Ingrese el tiempo de estacionamiento en horas:"));

garage.hacerReserva(nombreVehiculo, patenteUsuario, tiempoEstacionamiento);
garage.mostrarReservas();
