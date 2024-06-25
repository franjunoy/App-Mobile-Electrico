export const userAccounts = [
  {
    nombre: 'Juan Pérez',
    email: 'juan.perez@hotmail.com',
    numeroAfiliado: '123456',
    contraseña: 'password123',
    foto: '',
    domicilio: '123 Calle Falsa, Rosario, Santa Fe, Argentina',
    tarjetas: ['Visa 1234', 'Mastercard 5678'],
    facturasElectronicas: [
      { descripcion: 'Factura Enero', monto: 1000 },
      { descripcion: 'Factura Febrero', monto: 1500 },
      { descripcion: 'Factura Marzo', monto: 1700 },
      { descripcion: 'Factura Abril', monto: 1800 },
      { descripcion: 'Factura Mayo', monto: 2100 },
      { descripcion: 'Factura Junio', monto: 2500 }
    ],
    misPagos: [
      { descripcion: 'Mes Enero', monto: 1000 },
      { descripcion: 'Mes Febrero', monto: 1500 },
      { descripcion: 'Mes Marzo', monto: 1700 },
      { descripcion: 'Mes Abril', monto: 1800 },
      { descripcion: 'Mes Mayo', monto: 2100 },
      { descripcion: 'Mes Junio', monto: 2500 }
    ],
    misConsumos: [
      { descripcion: 'Enero', consumo: 400 },
      { descripcion: 'Febrero', consumo: 370 },
      { descripcion: 'Marzo', consumo: 400 },
      { descripcion: 'Abril', consumo: 420 },
      { descripcion: 'Mayo', consumo: 370 },
      { descripcion: 'Junio', consumo: 350 }
    ],
    notificaciones: [
      { mensaje: 'Nueva factura disponible' },
      { mensaje: 'Pago realizado con éxito' }
    ]
  },
  {
    nombre: 'María Gómez',
    email: 'maria.gomez@hotmail.com',
    numeroAfiliado: '654321',
    contraseña: 'password456',
    foto: 'https://example.com/foto2.jpg',
    domicilio: '456 Calle Verdadera, Rosario, Santa Fe, Argentina',
    tarjetas: ['Visa 8765', 'Mastercard 4321'],
    facturasElectronicas: [
      { descripcion: 'Factura Enero', monto: 900 },
      { descripcion: 'Factura Febrero', monto: 1400 },
      { descripcion: 'Factura Marzo', monto: 1200 },
      { descripcion: 'Factura Abril', monto: 1250 },
      { descripcion: 'Factura Mayo', monto: 900 },
      { descripcion: 'Factura Junio', monto: 1100 }
    ],
    misPagos: [
      { descripcion: 'Mes Enero', monto: 900 },
      { descripcion: 'Mes Febrero', monto: 1400 },
      { descripcion: 'Mes Marzo', monto: 1200 },
      { descripcion: 'Mes Abril', monto: 1250 },
      { descripcion: 'Mes Mayo', monto: 900 },
      { descripcion: 'Mes Junio', monto: 1100 }
    ],
    misConsumos: [
      { descripcion: 'Enero', consumo: 350 },
      { descripcion: 'Febrero', consumo: 360 },
      { descripcion: 'Marzo', consumo: 340 },
      { descripcion: 'Abril', consumo: 340 },
      { descripcion: 'Mayo', consumo: 300 },
      { descripcion: 'Junio', consumo: 350 }
    ],
    notificaciones: [
      { mensaje: 'Nueva factura disponible' },
      { mensaje: 'Pago realizado con éxito' }
    ]
  },
  {
    nombre: 'Carlos López',
    email: 'carlos.lopez@gmail.com',
    numeroAfiliado: '789012',
    contraseña: 'password789',
    foto: '',
    domicilio: '789 Calle Real, Rosario, Santa Fe, Argentina',
    tarjetas: ['Visa 5678', 'Mastercard 1234'],
    facturasElectronicas: [
      { descripcion: 'Factura Enero', monto: 100 },
      { descripcion: 'Factura Febrero', monto: 150 },
      { descripcion: 'Factura Marzo', monto: 170 },
      { descripcion: 'Factura Abril', monto: 180 },
      { descripcion: 'Factura Mayo', monto: 210 },
      { descripcion: 'Factura Junio', monto: 250 }
    ],
    misPagos: [
      { descripcion: 'Mes Enero', monto: 100 },
      { descripcion: 'Mes Febrero', monto: 150 },
      { descripcion: 'Mes Marzo', monto: 170 },
      { descripcion: 'Mes Abril', monto: 180 },
      { descripcion: 'Mes Mayo', monto: 210 }
    ],
    misConsumos: [
      { descripcion: 'Enero', consumo: 300 },
      { descripcion: 'Febrero', consumo: 300 },
      { descripcion: 'Marzo', consumo: 250 },
      { descripcion: 'Abril', consumo: 300 },
      { descripcion: 'Mayo', consumo: 270 },
      { descripcion: 'Junio', consumo: 270 }
    ],
    notificaciones: [
      { mensaje: 'Nueva factura disponible' },
      { mensaje: 'Factura mes de Junio impaga' }
    ]
  }
];
