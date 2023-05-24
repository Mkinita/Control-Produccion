import QRCode from 'qrcode.react';

function QRGenerator({asr}) {
    
  return (
    <div className='flex justify-center items-center h-full'>
      <QRCode value={asr} />
    </div>
  );
}

export default QRGenerator;
