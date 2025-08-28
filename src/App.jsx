// import React from 'react'
// import Weather from './components/Weather'

// function App() {
//   return (
//     <>
//       <div>
//         <Weather temperature={16}/>
//       </div>
//     </>
//   )
// }

// export default App


import React from "react";
import DataGenerator from "./components/DataGenerator";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <DataGenerator />
    </div>
  );
}
