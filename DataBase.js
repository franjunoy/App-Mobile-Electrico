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
      { descripcion: 'Mes Mayo', monto: 210 },
      { descripcion: 'Mes Junio', monto: 250 }
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
    email: 'maria.gomez@example.com',
    numeroAfiliado: '654321',
    contraseña: 'password456',
    foto: 'https://example.com/foto2.jpg',
    domicilio: '456 Calle Verdadera, Ciudad',
    tarjetas: ['Visa 8765', 'Mastercard 4321'],
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
      { descripcion: 'Mes Mayo', monto: 210 },
      { descripcion: 'Mes Junio', monto: 250 }
    ],
    misConsumos: [
      { descripcion: 'Compra Supermercado', monto: 60 },
      { descripcion: 'Compra Ropa', monto: 150 }
    ],
    notificaciones: [
      { mensaje: 'Pago realizado con éxito' },
      { mensaje: 'Nueva factura disponible' }
    ]
  },
  {
    nombre: 'Carlos López',
    email: 'carlos.lopez@example.com',
    numeroAfiliado: '789012',
    contraseña: 'password789',
    foto: 'https://example.com/foto3.jpg',
    domicilio: '789 Calle Real, Ciudad',
    tarjetas: ['Visa 5678', 'Mastercard 1234'],
    facturasElectronicas: [
      { descripcion: 'Factura Enero', monto: 300 },
      { descripcion: 'Factura Febrero', monto: 350 }
    ],
    misPagos: [
      { descripcion: 'Pago Alquiler', monto: 700 },
      { descripcion: 'Pago Servicios', monto: 400 }
    ],
    misConsumos: [
      { descripcion: 'Compra Supermercado', monto: 70 },
      { descripcion: 'Compra Ropa', monto: 200 }
    ],
    notificaciones: [
      { mensaje: 'Pago realizado con éxito' },
      { mensaje: 'Nueva factura disponible' }
    ]
  }
];
