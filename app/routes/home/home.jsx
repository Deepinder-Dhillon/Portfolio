import stylefluxTexture2Large from '~/assets/styleflux2_large.jpg';
import stylefluxTexture2Placeholder from '~/assets/styleflux2_placeholder.jpg';
import stylefluxTexture2 from '~/assets/styleflux2.jpg';
import stylefluxTextureLarge from '~/assets/styleflux-large.jpg';
import stylefluxTexturePlaceholder from '~/assets/styleflux_placeholder.jpg';
import stylefluxTexture from '~/assets/styleflux.jpg';
import smartTextureLarge from '~/assets/smart-app-large.jpg';
import smartTexturePlaceholder from '~/assets/smart-app-placeholder.jpg';
import smartTexture from '~/assets/smart-app.jpg';
import ccompileLarge from '~/assets/c-compile-large.jpg';
import ccompilePlaceholder from '~/assets/c-compile-placeholder.jpg';
import ccompileTexture from '~/assets/c-compile.jpg';
import loopTextureLarge from '~/assets/loop-builder-dark-large.png';
import loopTexturePlaceholder from '~/assets/loop-builder-dark-placeholder.jpg';
import loopTexture from '~/assets/loop-builder-dark.jpg';
import qmTexture2Large from '~/assets/qm-large.jpg';
import qmTexture2Placeholder from '~/assets/qm_placeholder.jpg';
import qmTexture2 from '~/assets/qm.jpg';
import qmTextureLarge from '~/assets/qm1-large.jpg';
import qmTexturePlaceholder from '~/assets/qm1_placeholder.jpg';
import qmTexture from '~/assets/qm1.jpg';
import stTexture2Large from '~/assets/st-large.jpg';
import stTexture2Placeholder from '~/assets/st_placeholder.jpg';
import stTexture2 from '~/assets/st.jpg';
import stTextureLarge from '~/assets/st1-large.jpg';
import stTexturePlaceholder from '~/assets/st1_placeholder.jpg';
import stTexture from '~/assets/st1.jpg';

import config from '~/config.json';
import styles from './home.module.css';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';



// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software + Developer',
    description: `Portfolio of ${config.name} — a software developer passionate about coding, focused on building thoughtful mobile apps and web experiences that just work.`,
  })

};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      

      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="The future of Collaboration"
        description="A platform where users can share their ideas, connect with like-minded individuals, and form teams to bring projects to life. Find collaborators based on skills, engage in discussions, and build together."
        buttonText="View project"
        buttonLink="/projects/loop"
        model={{
          type: 'laptop',
          alt: 'Loop Collaborator app',
          textures: [
            {
              srcSet: `${loopTexture} 1280w, ${loopTextureLarge} 2560w`,
              placeholder: loopTexturePlaceholder,
            },
          ],
        }}
        tags={['React', 'NextJS', 'Sanity', 'TypeScript']}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="StyleFlux - Seamless Shopping"  
        description="Developed a SwiftUI-powered shopping app with Firebase for real-time data and secure authentication."         
        buttonText="View project"
        buttonLink="/projects/styleflux"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${stylefluxTexture} 375w, ${stylefluxTextureLarge} 750w`,
              placeholder: stylefluxTexturePlaceholder,
            },
            {
              srcSet: `${stylefluxTexture2} 375w, ${stylefluxTexture2Large} 750w`,
              placeholder: stylefluxTexture2Placeholder,
            },
          ],
        }}
        tags={['Xcode', 'Firebase', 'Swift']}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="SmartPortal - Patient Management System"  
        description="Built a full-stack patient management system using Django and React, featuring secure authentication, patient record management."  

        buttonText="View on GitHub"
        buttonLink="https://github.com/Deepinder-Dhillon/SmartPortal"
        model={{
          type: 'laptop',
          alt: 'SmartPortal',
          textures: [
            {
              srcSet: `${smartTexture} 800w, ${smartTextureLarge} 1920w`,
              placeholder: smartTexturePlaceholder,
            },
          ],
        }}
        tags={['React', 'Django', 'Python', 'JavaScript']}
      />

      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="QuickMath - Math Practice App"  
        description="Developed a SwiftUI-powered shopping app with Firebase for real-time data and secure authentication."         
        buttonText="View Project"
        buttonLink="/projects/quickmath"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${qmTexture} 375w, ${qmTextureLarge} 750w`,
              placeholder: qmTexturePlaceholder,
            },
            {
              srcSet: `${qmTexture2} 375w, ${qmTexture2Large} 750w`,
              placeholder: qmTexture2Placeholder,
            },
          ],
        }}
        tags={['Xcode', 'CoreML', 'Swift']}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="C-Compile - VS Code Extension"  
        description="A simple extension that helps you build C projects in VS Code. It creates a Makefile for you, figures out which .c files are needed by scanning your #include headers, and compiles everything with a single command."  

        buttonText="View on Marketplace"
        buttonLink="https://marketplace.visualstudio.com/items?itemName=DeepinderDhillon.cCompiler"
        model={{
          type: 'laptop',
          alt: 'C Compiler',
          textures: [
            {
              srcSet: `${ccompileTexture} 800w, ${ccompileLarge} 1920w`,
              placeholder: ccompilePlaceholder,
            },
          ],
        }}
        tags={['Vscode', 'JavaScript']}
      />

      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={6}
        title="Stellar Dust - UE5 Game"  
        description="Designed and developed a 2D space shooter in Unreal Engine 5 using C++, featuring custom gameplay logic, enemy AI, and reactive HUD elements."        
        buttonText="View Project on GitHub"
        buttonLink="https://github.com/Deepinder-Dhillon/StellarDust"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${stTexture} 375w, ${stTextureLarge} 750w`,
              placeholder: stTexturePlaceholder,
            },
            {
              srcSet: `${stTexture2} 375w, ${stTexture2Large} 750w`,
              placeholder: stTexture2Placeholder,
            },
          ],
        }}
        tags={['UE5', 'VSStudio', 'C++']}
      />
     
    
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="about"
      />
 
      <Footer />
    </div>
  );
};
