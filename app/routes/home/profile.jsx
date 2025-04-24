import React, { useEffect, useRef, useState, Fragment } from 'react';
import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { media } from '~/utils/style';
import styles from './profile.module.css';

const techStack = [
  {name: "Python", icon: "/icons/Python.png"},
  {name: "C", icon: "/icons/C.png"},
  { name: "JavaScript", icon: "/icons/JavaScript.png" },
  {name: "Swift", icon: "/icons/Swift.png"},
  {name: "Django", icon: "/icons/Django.png"},
  { name: "React", icon: "/icons/React.png" },
  { name: "NodeJS", icon: "/icons/Nodejs.png" },
  { name: "MongoDB", icon: "/icons/MongoDB.png" },
  {name: "PostgreSQL", icon: "/icons/PostgresSQL.png"},
  {name: "SQL", icon: "/icons/SQL.png"},
  {name: "AWS", icon: "/icons/AWS.png"},
  {name: "Selenium", icon: "/icons/Selenium.png"},
];

import Contact from '../contact/contact';

// Animated Tech Icons
function TechIconsAnimated() {
  const iconRefs = useRef([]);
  const [pointerPos, setPointerPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPointerPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const animateIcons = () => {
      const time = Date.now();
      iconRefs.current.forEach((icon, i) => {
        if (!icon) return;
        const rect = icon.getBoundingClientRect();
        const iconCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        const dx = pointerPos.x - iconCenter.x;
        const dy = pointerPos.y - iconCenter.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const effectThreshold = 100;

        let rotation = 0;
        let scale = 1;
        if (distance < effectThreshold) {
          const angle = Math.atan2(dy, dx) * (10 / Math.PI);
          const noiseRotation = Math.sin(time / 2000 + i) * 1;
          rotation = angle + noiseRotation;
          scale = 1.3 + Math.sin(time / 1500 + i) * 0.01;
        }
        icon.style.transform = `rotate(${rotation}deg) scale(${scale})`;
      });
      animationFrameId = requestAnimationFrame(animateIcons);
    };
    animateIcons();
    return () => cancelAnimationFrame(animationFrameId);
  }, [pointerPos]);

  return (
    <div className={styles.techIconsGridWrapper}>
      <div className={styles.techIconsGrid}>
        {techStack.map((tech, i) => (
          <div key={i} className={styles.techIconItem}>
            <div
              className={styles.iconWrapper}
              ref={(el) => (iconRefs.current[i] = el)}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={styles.iconImage}
                width={48}
                height={48}
              />
            </div>
            <div className={styles.techName}>{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
// Tech Stack Section
const TechStackSection = ({ visible }) => (
  <div className={styles.techSection} data-visible={visible}>
    <Heading level={3} className={styles.title} data-visible={visible}>
      <DecoderText text="My Tech Stack" start={visible} delay={300} />
    </Heading>
    <div className={styles.techIconsWrapper} data-visible={visible}>
      <TechIconsAnimated />
    </div>
  </div>
);


function ProfileText({ visible, titleId }) {
  return (
    <Fragment>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text="Hi there" start={visible} delay={500} />
      </Heading>
      <Text className={styles.description} data-visible={visible} size="l" as="p">
        I’m Deepinder, a software developer based in Vancouver. My expertise spans frontend and backend development,
        API integration, and cloud technologies. I enjoy crafting seamless user experiences and building scalable applications.
      </Text>
    </Fragment>
  );
}

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div ref={nodeRef} className={styles.content}>
            <TechStackSection visible={visible} />
           
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Contact />
            </div>

            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Deepinder Dhillon"
                />
                <svg
                  className={styles.svg}
                  data-visible={visible}
                  viewBox="0 0 136 766"
                >
                  <text
                    x="50%"
                    y="50%"
                    transform="rotate(90, 128, 343)"
                    fontSize="28"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="currentColor"
                    opacity={0.9}
                  >
                    Deepinder Dhillon
                  </text>
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};