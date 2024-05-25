import React from 'react';
import ScannerQr from './src-interno/ScannerQr';

const Qrs = () => {
  const qrDataArray = [
    { codigo: 'a9ce5e82-c059-4d9c-98fd-60a5887bef9a', isValid: true },
    {
      codigo: 'Texto2 ',
      isValid: true
    },
    { codigo: 'Texto3', isValid: true }
  ];

  return <ScannerQr qrDataArray={qrDataArray} />;
};

export default Qrs;
