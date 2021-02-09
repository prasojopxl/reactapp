import React, { useState, useEffect } from 'react';

const DayThree = () => {
  const [skor, setSkor] = useState(10);
  
    useEffect(() => {
        setSkor(100)
    }, []);

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