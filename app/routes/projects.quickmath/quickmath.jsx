import imageStylefluxBackgroundDotsLarge from '~/assets/styleflux-background-dots-large.png';
import imageStylefluxBackgroundDots from '~/assets/styleflux-background-dots.png';
import stylefluxAppPlaceholder from '~/assets/styleflux-app-placeholder.jpg';
import loopBackgroundLarge from '~/assets/loop-background-large.jpg';
import loopBackgroundPlaceholder from '~/assets/loop-background-large.jpg';
import loopBackground from '~/assets/loop-background-large.jpg';

import videostylefluxLarge from '~/assets/quickmath-large.mp4';
import videoStyleflux from '~/assets/quickmath.mp4';
import quickmathSidebarMainLarge from '~/assets/quick-sidebar-main-large.jpg';
import quickmathSidebarMain from '~/assets/quick-sidebar-main.jpg';
import quickmathSidebarMainPlaceholder from '~/assets/quick-sidebar-main-placeholder.jpg';
import quickmathSidebarOverLarge from '~/assets/quick-sidebar-over-large.jpg';
import quickmathSidebarOver from '~/assets/quick-sidebar-over.jpg';
import quickmathSidebarOverPlaceholder from '~/assets/quick-sidebar-over-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './quickmath.module.css';

const title = 'QuickMath: Adaptive Game Experience';
const description = 'QuickMath is an iOS math game built with SwiftUI, featuring real-time problem generation, adaptive difficulty using CoreML, and a dynamic timer.';
const roles = ['iOS Development', 'CoreML Integration', 'Swift UI'];


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={loopBackground}
          srcSet={`${loopBackground} 1280w, ${loopBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={loopBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Deepinder-Dhillon/StyleFlux"
          roles={roles}
        />

        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Making Math Fun and Challenging</ProjectSectionHeading>
              <ProjectSectionText>
              QuickMath is an interactive iOS math game that makes practicing math fun and challenging. It picks problems on the fly using CoreML to adjust the difficulty based on how well the player is doing, creating a personalized experience.
              </ProjectSectionText>
              <ProjectSectionText>
              Built with SwiftUI, the game features smooth animations, a responsive interface, and a dynamic timer that adds excitement by adjusting to the player’s performance. As users improve, the problems get harder, encouraging a balance of speed, accuracy, and strategy to keep the game engaging and rewarding
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${quickmathSidebarOver} 350w, ${quickmathSidebarOverLarge} 700w`}
                width={350}
                height={750}
                placeholder={quickmathSidebarOverPlaceholder}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${quickmathSidebarMain} 350w, ${quickmathSidebarMainLarge} 700w`}
                width={350}
                height={750}
                placeholder={quickmathSidebarMainPlaceholder}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageStylefluxBackgroundDots} 1280w, ${imageStylefluxBackgroundDotsLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={stylefluxAppPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Features</ProjectSectionHeading>
                  <ProjectSectionText>
                  <ul>
                    <li><strong>Real-Time Problem Generation:</strong> Instantly creates math problems that match the player’s skill level for a personalized challenge.</li>
                    <li><strong>Smart Difficulty Scaling:</strong> CoreML organizes problems into five levels and increases difficulty as the player’s score improves.</li>
                    <li><strong>Adaptive Timer:</strong> The timer adjusts based on speed and accuracy, adding excitement and encouraging strategic play.</li>
                  </ul>
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${videoStyleflux} 1280w, ${videostylefluxLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={stylefluxAppPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>

       
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
