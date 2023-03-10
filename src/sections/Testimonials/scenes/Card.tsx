import { MouseEventHandler, useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import { Mesh } from 'three';

interface CardProps {
  position: [number, number, number];
  isSelected: boolean;
  handleClick: (event: ThreeEvent<MouseEvent>) => void;
  name: string;
  company: string;
  image: string;
}

const Card = ({
  position,
  isSelected,
  handleClick,
  name,
  company,
  image,
}: CardProps) => {
  const cardRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const spring = useSpring({
    scale: hovered ? 1.05 : 1,
    ...(isSelected
      ? {
        positionX: 0,
        positionZ: 2,
      } : {
        positionX: position[0],
        positionZ: position[2],
      }),
  });

  useFrame((state) => {
    if (!cardRef.current) return;

    const { elapsedTime } = state.clock;

    if (!isSelected || Math.abs(cardRef.current.position.y) > 0.05) {
      cardRef.current.position.y = position[1] + Math.sin(elapsedTime * 2) * 0.05;
    }
  });

  const handleHTMLClick: MouseEventHandler<HTMLDivElement> = (event) => {
    handleClick(event as unknown as ThreeEvent<MouseEvent>);
  };

  return (
    <>
      <a.mesh
        onPointerOut={() => setHovered(false)}
        onPointerEnter={() => setHovered(true)}
        ref={cardRef}
        position-x={spring.positionX}
        position-y={position[1]}
        position-z={spring.positionZ}
        scale={spring.scale}
        onClick={handleClick}
      >
        <boxGeometry args={[2, 3, 0.5]} />
        <meshStandardMaterial color="#020154" />

        <group position-z={0.26}>
          <Html
            transform
            occlude
            style={{
              opacity: 1,
              transition: 'opacity 0.3s',
              width: 79,
              height: 120,
              background: 'transparent',
              color: '#fff',
              cursor: 'pointer',
            }}>
            <div
              onClick={handleHTMLClick}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 10,
              }}
            >

              <div style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt=""
                  style={{
                    width: '100%',
                  }}
                />
              </div>
              
              <span
                style={{
                  fontSize: 4,
                  marginTop: 4,
                  fontWeight: 'bold',
                }}>{name} - {company}</span>

              <span
                style={{
                  fontSize: 4,
                  marginTop: 4,
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                <br />
                <br />
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
              </span>

            </div>
          </Html>
        </group>
      </a.mesh>

    </>
  );
};
 
export default Card;
