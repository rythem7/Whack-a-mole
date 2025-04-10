import imgSrc from '../assets/mole.png';

// export default function Mole({ isActive, onWhack }) {
//     return (
//         <div
//         className={`w-18 h-18 bg-secondary rounded-full absolute left-1/2 -translate-x-1/2 transition-all duration-300
//           ${isActive ? 'bottom-16 animate-bounce pointer-events-auto' : 'bottom-[-5rem]'} 
//           cursor-pointer shadow-lg`}
//         onClick={onWhack}
//       />
      
//     )
//   }
  export default function Mole({ isActive, onWhack }) {
    return (
        <img
            src={imgSrc} // Replace with the actual path to your mole image
            alt="Mole"
            className={`bg-transparent aspect-3/4 px-1 w-20 h-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/4 transition-all duration-300
            ${isActive ? 'bottom-7 animate-bounce pointer-events-auto' : 'bottom-[-11rem]'} 
            cursor-pointer shadow-lg`}
            onClick={onWhack}
        />
    );
}