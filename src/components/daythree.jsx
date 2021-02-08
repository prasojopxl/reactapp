import React, { useState } from 'react';

const DayThree = () => {
  const [skor, setSkor] = useState(0);
  
  return (
    <div>
        {skor}
        <button onClick={() => setSkor(skor + 1)}>Tambah</button>
        <button onClick={() => setSkor(skor - 1)}>Kurang</button>
        <button onClick={() => setSkor(100)}>Selesai</button>
    </div>
  );
}

export default DayThree;