
import loopAppLarge from '~/assets/loop-app-large.jpg';
import loopAppPlaceholder from '~/assets/loop-app-placeholder.jpg';
import loopApp from '~/assets/loop-app.jpg';
import loopBackgroundBarLarge from '~/assets/loop-background-bar-large.jpg';
import loopBackgroundBarPlaceholder from '~/assets/loop-background-bar-placeholder.jpg';
import loopBackgroundBar from '~/assets/loop-background-bar.jpg';
import loopBackgroundLarge from '~/assets/loop-background-large.jpg';
import loopBackgroundPlaceholder from '~/assets/loop-background-large.jpg';
import loopBackground from '~/assets/loop-background-large.jpg';
import loopSidebarConnLarge from '~/assets/loop-sidebar-conn-large.jpg';
import loopSidebarConn from '~/assets/loop-sidebar-conn.jpg';
import loopSidebarMsgLarge from '~/assets/loop-sidebar-msg-large.jpg';
import loopSidebarMsgPlaceholder from '~/assets/loop-sidebar-msg-placeholder.jpg';
import loopSidebarMsg from '~/assets/loop-sidebar-msg.jpg';
import loopSlidesLarge from '~/assets/loop-slides-large.jpg';
import loopSlidesPlaceholder from '~/assets/loop-slides-placeholder.jpg';
import loopSlides from '~/assets/loop-slides.jpg';
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
import styles from './loop.module.css';

const title = 'Building Loop: A Collaborative Platform';
const description = 'Loop is in active development as a full-stack platform where creators share ideas and collaborate on projects. The backend implementation is currently in progress, focusing on database structure, authentication, and API integrations.';
const roles = ['Full Stack Development', 'Database Architecture', 'Authentication & Security', 'API Development'];


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
          url="https://github.com/Deepinder-Dhillon/loop"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${loopApp} 800w, ${loopAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={loopAppPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
              <ul>
        <li><strong>Idea Pages:</strong> Showcase your concept with images, descriptions, and progress updates.</li>
        <li><strong>Connection Requests:</strong> Find collaborators based on skills and interests.</li>
        <li><strong>Messaging & Chat:</strong> Discuss ideas in real time, share files, and gather feedback quickly.</li>

      </ul>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${loopSidebarMsg} 350w, ${loopSidebarMsgLarge} 700w`}
                width={350}
                height={750}
                placeholder={loopSidebarMsgPlaceholder}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${loopSidebarConn} 350w, ${loopSidebarConnLarge} 700w`}
                width={350}
                height={750}
                placeholder={loopSidebarMsgPlaceholder}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Why Loop?</ProjectSectionHeading>
              <ProjectSectionText>
              Bringing ideas to life often requires teamwork, but finding the right collaborators can be tough. 
              Loop bridges that gap by making it easy to share your ideas, showcase your skills, and connect with 
              people who are just as passionate as you.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${loopSlides} 800w, ${loopSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={loopSlidesPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${loopBackgroundBar} 440w, ${loopBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={loopBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
              
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
              The Loop Profile Page highlights a user's skills, ideas, and connections, making it easy to 
              showcase work and find collaborators. With features like direct messaging, social links, 
              and idea highlights, users can build their network and engage with like-minded creators.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
       
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
