import React, { useEffect, useState } from 'react';
import styles from './tags.module.css';

export function Tags({ selectedLabels = [] }) {

  const [status, setStatus] = useState('entering');


  useEffect(() => {

    const timer = setTimeout(() => {
      setStatus('entered');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const techStack = [
    { label: 'React', iconUrl: '/icons/React.png' },
    { label: 'TypeScript', iconUrl: '/icons/TypeScript.png' },
    { label: 'NextJS', iconUrl: '/icons/Nextjs.png' },
    {label: 'Sanity', iconUrl: '/icons/sanity.png'},
    {label: 'Xcode', iconUrl: '/icons/Xcode.png'},
    {label: 'Swift', iconUrl: '/icons/Swift.png'},
    {label: 'Firebase', iconUrl: '/icons/Firebase.png'},
    {label: 'Django', iconUrl: '/icons/Django.png'},
    {label: 'Python', iconUrl: '/icons/Python.png'},
    {label: 'JavaScript', iconUrl: '/icons/JavaScript.png'},
    {label: 'CoreML', iconUrl: '/icons/CoreML.png'},
    {label: 'UE5', iconUrl: '/icons/unrealengine.png'},
    {label: 'VSStudio', iconUrl: '/icons/Visual_Studio.png'},
    {label: 'C++', iconUrl: '/icons/cplus.png'},
    
  ];


  const filteredStack = techStack.filter((item) =>
    selectedLabels.includes(item.label)
  );

  return (
    <div className={styles.badgesContainer} data-status={status}>
      {filteredStack.map((tech) => (
        <div key={tech.label} className={styles.badge}>
          <img
            src={tech.iconUrl}
            alt={`${tech.label} icon`}
            className={styles.icon}
          />
          <span className={styles.label}>{tech.label}</span>
        </div>
      ))}
    </div>
  );
}
