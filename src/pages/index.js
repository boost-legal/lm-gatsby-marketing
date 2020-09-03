import React from 'react';
import posed from 'react-pose';
import SEO from '../components/seo';
import Logo from '../assets/svg/lawmatics-preloader.svg';

const AnimStagger = posed.div({
  enter: { staggerChildren: 100, delayChildren: 500 },
});
const Anim = posed.span({
  init: { marginTop: 50 },
  enter: { marginTop: 0,
    opacity: 1,
    transition: {
      default: { ease: 'easeOut', duration: 1000 },
    } },
  exit: { opacity: 0 },
});

const IndexPage = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center text-center">
    <SEO title="Under Development" />
    <AnimStagger className="flex flex-col items-center">
      <Anim><Logo /></Anim>
      <Anim><h1>Coming soon</h1></Anim>
      <Anim><p className="text-boost-secondary-50">Currently under development.</p></Anim>
    </AnimStagger>
  </div>
);

export default IndexPage;
