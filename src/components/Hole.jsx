import Mole from './Mole'

export default function Hole({ isActive, onWhack, index }) {
  return (
    <div
      className={`w-28 h-28 rounded-full bg-gradient-to-b from-neutral-800 to-black shadow-inner relative
      ${index < 3 ? "mt-[6rem]" : ""}
      ${isActive ? '' : 'overflow-hidden'}`}
    >
    
      <Mole isActive={isActive} onWhack={onWhack} />
    </div>
  )
}
