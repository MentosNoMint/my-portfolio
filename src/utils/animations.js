export const moveToTopRight = (gsap, ref) => {
  gsap.to(ref.current.position, {
    x: 2.7,
    y: 1,
    duration: 1.5,
    ease: 'power3.inOut',
    delay: 0.4,
    scale: 0.5,
  });

  gsap.to(ref.current.scale, {
    x: 0.4,
    y: 0.4,
    z: 0.4,
    duration: 1.5,
    ease: 'power3.inOut',
    delay: 0.4,
  });

  gsap.to(ref.current.rotation, {
    y: ref.current.rotation.y + Math.PI * 2,
    duration: 10,
    ease: 'linear',
    delay: 0.4,
    repeat: -1,
    yoyo: true,
  });
};

export const hideElement = (gsap, ref, type, reversed) => {
  gsap.to(ref.current.children, {
    y: reversed ? 0 : `${type}140px`,
    duration: 0.7,
    delay: 0.8,
    stagger: 0.08,
    marginTop: reversed ? '16px' : '0px',
  });
};

export const arrowElement = (gsap, ref, reversed) => {
  gsap.to(ref.current, {
    y: reversed ? 140 : 0,
    duration: 0.7,
    delay: 0.6,
  });
};

export const defaultPostion = (gsap, ref) => {
  gsap.to(ref.current.position, {
    x: 0,
    y: 0,
    duration: 1.5,
    ease: 'power3.inOut',
    delay: 0.4,
    scale: 0.5,
  });
  gsap.to(ref.current.scale, {
    x: 1,
    y: 1,
    z: 1,
    duration: 1.5,
    ease: 'power3.inOut',
    delay: 0.4,
  });

  gsap.to(ref.current.rotation, {
    y: 0,
    duration: 2,
    delay: 0.4,
    // onComplete: () => {
    //   gsap.killTweensOf(ref.current.rotation);
    // },
  });
};
