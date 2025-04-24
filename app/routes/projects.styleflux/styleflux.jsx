import videostylefluxLarge from '~/assets/styleflux-large.mp4';
import videoStyleflux from '~/assets/styleflux.mp4';
import imageStylefluxBackgroundDotsLarge from '~/assets/styleflux-background-dots-large.png';
import imageStylefluxBackgroundDots from '~/assets/styleflux-background-dots.png';
import stylefluxAppLarge from '~/assets/styleflux-app-large.jpg';
import stylefluxAppPlaceholder from '~/assets/styleflux-app-placeholder.jpg';
import stylefluxApp from '~/assets/styleflux-app.jpg';
import loopBackgroundLarge from '~/assets/loop-background-large.jpg';
import loopBackgroundPlaceholder from '~/assets/loop-background-large.jpg';
import loopBackground from '~/assets/loop-background-large.jpg';
import stylefluxSidebarProductLarge from '~/assets/styleflux-sidebar-product-large.jpg';
import stylefluxSidebarProduct from '~/assets/styleflux-sidebar-product.jpg';
import stylefluxSidebarProductPlaceholder from '~/assets/styleflux-sidebar-product-placeholder.jpg';
import stylefluxSidebarCartLarge from '~/assets/styleflux-sidebar-cart-large.jpg';
import stylefluxSidebarCart from '~/assets/styleflux-sidebar-cart.jpg';
import stylefluxSidebarCartPlaceholder from '~/assets/styleflux-sidebar-cart-placeholder.jpg';
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
import styles from './styleflux.module.css';

const title = 'StyleFlux: Seamless iOS Shopping Experience';
const description = 'StyleFlux is an iOS shopping app built with SwiftUI, offering real-time product browsing, user authentication, and cart management through Firebase.';
const roles = ['iOS Development', 'Firebase Integration', 'MVVM Architecture', 'Real-Time Sync', 'Combine for Async Handling'];


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
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${stylefluxApp} 800w, ${stylefluxAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={stylefluxAppPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
             <ProjectSectionText>
             StyleFlux is a iOS shopping app that gives users a smooth online shopping experience. It uses Firebase for user login, 
             browsing products, and managing the shopping cart. The app is built with reusable SwiftUI components and designed to 
             scale easily. While it's a learning project, it also functions as a real shopping app. Firebase helps manage real-time 
             data and store product images, making it a strong base for future updates and features.
              </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
              <ul>
                  <li><strong>User Authentication:</strong> Implemented using Firebase Authentication for secure login and persistent sessions.</li>
                  <li><strong>Product Browsing:</strong> Real-time data fetched from Firestore, displayed using SwiftUI views.</li>
                  <li><strong>MVVM Architecture:</strong> Ensures clean code separation between views, business logic, and data handling.</li>
                  <li><strong>Combine Framework:</strong> Used for managing asynchronous data streams and state updates.</li>
                </ul>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${stylefluxSidebarCart} 350w, ${stylefluxSidebarCartLarge} 700w`}
                width={350}
                height={750}
                placeholder={stylefluxSidebarCartPlaceholder}
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${stylefluxSidebarProduct} 350w, ${stylefluxSidebarProductLarge} 700w`}
                width={350}
                height={750}
                placeholder={stylefluxSidebarProductPlaceholder}
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
                  <ProjectSectionHeading>Dynamic Cart</ProjectSectionHeading>
                  <ProjectSectionText>
                  The Dynamic Cart in StyleFlux makes shopping easy by saving cart items in real-time and keeping them even after logging out. Using Firestore, cart changes like additions, removals, or quantity updates are instantly reflected across the app. It syncs across devices, so users can pick up where they left off. Product images load smoothly, and changes made offline are updated once the user is back online.
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
