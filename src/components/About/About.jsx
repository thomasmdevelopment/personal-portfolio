import styled from 'styled-components'
import { Heading } from '../utilities/Heading'
import { Skill } from './Skill'
import { skills } from '../../constants/skills'
import { decode } from 'html-entities'

export const About = () => {
  const skillItems = skills.map(item =>
    <Skill
      key={item.id}
      logo={item.logo}
      name={item.name}
    />
  )

  return (
    <Container
      id='about'
    >
      <Heading>
        <span>
          01.
        </span>
        <span>
          About
        </span>
      </Heading>
      <Description>
        <p>
          Hi there, my name is Tom, and I'm a Front-End Developer.
        </p>
        <p>
          My Web Development journey began following the completion of{decode('&#160;')}
          <a
            href='https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0'
            target='_blank'
          >
            Harvard University's CS50: Introduction to Computer Science
          </a>
          . This course set the foundation for the knowledge I have today by teaching me how to solve programming problems efficiently and how both the web and programming languages work from a fundamental level.
        </p>
        <p>
          Today, I primarily use React and while I feel confident with the library, I’m certainly open to using technologies that I’m unfamiliar with as I love challenging myself and improving my skill set. Below are the languages and tools I have experience with thus far.
        </p>
      </Description>
      <Skills>
        {skillItems}
      </Skills>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  font-weight: 400;
  margin: 0 auto;
  max-width: 1400px;
  padding: 8rem 16rem;
  row-gap: 5rem;

  & a:nth-child(1) {
    color: #FFFFFF;
    text-decoration: underline;
  }

  @media (max-width: 1400px) {
    max-width: 87.5vw;
    padding: 5vw;
  }

  @media (max-width: 700px) {
    padding: 3.5rem 5vw;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  line-height: 1.6;
  row-gap: 2rem;

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 700px) {
    font-size: 1.6rem;
    margin-top: -2rem;
  }
`

const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  gap: 1rem;
  justify-content: center;

  @media (max-width: 1000px) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 100px);
  }

  @media (max-width: 438px) {
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 90px);
  }

  @media (max-width: 374px) {
    margin: 0 -1rem;
  }

  @media (max-width: 348px) {
    gap: 0.5rem;
  }

  @media (max-width: 335px) {
    margin: 0 -1.5rem;
  }

  @media (max-width: 322px) {
    gap: 0.25rem;
  }
`