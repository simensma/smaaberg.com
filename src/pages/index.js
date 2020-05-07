import React from 'react'
// import HomePage from '../components/HomePage'
import styled from 'styled-components'
import HeaderContent from '../components/HeaderContent';
import Theme from 'theme';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import SectionBorder from '../components/SectionBorder';
import ContactForm from '../components/ContactForm';
import LoadingPage from '../components/LoadingPage';
import $ from 'jquery';
import MetaTags from 'react-meta-tags';

const BGIMG = '/images/smaaberg-bg';
const HIKEIMG = '/images/hiking-bg';



const MainPage = styled.div`
  height: 100%;
`;

const Section = styled.div`
  position: relative;
  padding: 256px 16px;
  min-height: 500px;

  & > * {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

const HeaderSection = styled(Section)`
  padding-top: 10%;
`;

const DarkSection = styled(Section)`
  background-color: ${Theme().darkest};
`;

function withImgExt(webpSupport, path) {
  return `${path}${webpSupport? '.webp': '.jpg'}`;
}

const ImageSectionCSS = (webpSupport) => styled(Section)`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${withImgExt(webpSupport, HIKEIMG)});
  background-attachment: fixed;
  background-size: cover;
`;

const HPCSS = (webpSupport) => styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.75)), url(${withImgExt(webpSupport, BGIMG)});
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;
`;



class Page extends React.Component {

  constructor() {
    super();

    this.state = {loaded: false, webpSupport: this.canUseWebp()};
    this.content = this.content.bind(this);
  }
 
  canUseWebp() {
    const elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    } else {
      return false;
    }
  }

  componentDidMount() {
    const self = this;
    $('<img/>').attr('src', withImgExt(this.state.webpSupport, BGIMG)).on('load', function() {
      $(this).remove();

      self.setState({loaded: true});
    });
  }

  content() {
    const HP = HPCSS(this.state.webpSupport);
    const ImageSection = ImageSectionCSS(this.state.webpSupport);

    if(this.state.loaded) {
      return (
        <MainPage>
          <HP>
            <SectionBorder position="bottom"></SectionBorder>
            <HeaderSection><HeaderContent></HeaderContent></HeaderSection>
          </HP>
          <DarkSection><AboutSection style={{}}></AboutSection></DarkSection>
          <ImageSection>
            <SectionBorder position="top"></SectionBorder>
            <ResumeSection style={{}}></ResumeSection>
            <SectionBorder position="bottom"></SectionBorder>
          </ImageSection>
          <DarkSection><ContactForm></ContactForm></DarkSection>
        </MainPage>
      )
    } else {
      return <LoadingPage></LoadingPage>
    }
  }

  render() {
    // const MetaTags = styled.div``;
    return <div style={{height: '100%'}}><MetaTags>
      <title>Simen Fivelstad Smaaberg - Software Developer</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="Simen Fivelstad Smaaberg's home page. I'm a Full-Stack software developer available for freelance and full-time work. Get in touch!" />
      <meta property="og:title" content="Simen Fivelstad Smaaberg - Software Developer" />
      <meta property="og:image" content="images/avatar.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="application-name" content="Simen Fivelstad Smaaberg - Hire"/>

     
    </MetaTags>
    {this.content()}
    </div>

  }
}

export default Page;
