import {useState, useRef} from 'react'

interface CardTiltWrapperProps{
  children:React.ReactNode;
  className?: string
}

const CardTiltWrapper = ({children, className =''}: CardTiltWrapperProps) => {
    const [transformSTyle, setTransformSTyle] = useState("");
    const itemRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove=(e:React.MouseEvent<HTMLDivElement>): void =>{
        if(!itemRef.current)return;

        const {left, top, width, height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left)/width;
        const relativeY = (e.clientY - top)/height;

        const tiltX = (relativeX -0.50) * 10;
        const tiltY = (relativeY -0.50) * 10;

        const newTransform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

        setTransformSTyle(newTransform);
    }
    const handleMouseLeave=()=>{
        setTransformSTyle('');
    }
  return (
    <div className={className + "transition-all duration-150 cursor-grab"}
    style={{transform:transformSTyle}}
    ref={itemRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    >
        {children}
    </div>
  )
}

export default CardTiltWrapper