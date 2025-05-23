import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="30"
      height="30"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
       
        <path d="M29.356,11.223l-11.353-8.92c-1.18-0.928-2.827-0.928-4.009,0L2.645,11.222c-0.529,0.415-0.729,1.095-0.51,1.73
	C2.354,13.589,2.931,14,3.604,14c0.553,0,1-0.447,1-1c0-0.23-0.078-0.442-0.208-0.611L15.23,3.875
	c0.618-0.485,1.514-0.209,1.932,0.32c0.513,0.651,0.4,1.594-0.251,2.106L9,12.529V25.5C9,26.328,8.328,27,7.5,27
	C6.673,27,6,26.328,6,25.5v-6.25V16c0-0.553-0.447-1-1-1s-1,0.447-1,1v9.5C4,27.43,5.57,29,7.5,29h17c1.93,0,3.5-1.57,3.5-3.5V14
	h0.396c0.674,0,1.251-0.411,1.47-1.048C30.085,12.317,29.885,11.637,29.356,11.223z M13,16c0-0.552,0.448-1,1-1h4
	c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1V16z"/>          </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
