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

const BGIMG = '/images/smaaberg-bg.jpg';

const HP = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.75)), url(${BGIMG});
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;
`;



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

const ImageSection = styled(Section)`
  background-image: linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/images/hiking-bg.jpg');
  background-attachment: fixed;
  background-size: cover;

`;

class Page extends React.Component {

  constructor() {
    super();

    this.state = {loaded: false};
  }
 
  componentDidMount() {
    const self = this;
    $('<img/>').attr('src', BGIMG).on('load', function() {
      $(this).remove();

      self.setState({loaded: true});
    });
  }

  render() {
    
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
}

export default Page;
