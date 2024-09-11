// import { useState, useEffect } from 'react';
// // import './styles.css'; // Import your Tailwind CSS styles

// const RotateCircle = () => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth - 0.5) * 360;
//     const y = (e.clientY / window.innerHeight - 0.5) * 360;
//     setRotation({ x, y });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div
//         className="w-20 h-20 rounded-full bg-blue-500 transform origin-center"
//         style={{
//           transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`
//         }}
//       />
//     </div>
//   );
// };

// export default RotateCircle;



import  { useState } from 'react';

const MoveCircle = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCirclePosition({ x, y });
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-200"
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-64 h-64">
        <div
          className="absolute w-12 h-12 rounded-full bg-blue-500"
          style={{
            top: circlePosition.y - 6 + 'px', // Adjust circle size (w-12, h-12) / 2
            left: circlePosition.x - 6 + 'px'
          }}
        />
      </div>
    </div>
  );
};

export default MoveCircle;
