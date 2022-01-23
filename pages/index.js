import styled from 'styled-components'

import Link from 'next/link'
import Image from 'next/image'

import fernandaGriecco from '../public/1.png'
import griecco from '../public/2.png'
import taynaSouza from '../public/3.png'
import maxterFit from '../public/4.png'
import socialMedia from '../public/5.png'
import socialMedia2 from '../public/6.png'
import grito from '../public/7.png'
import magazineRio from '../public/8.png'
import helioBrandao from '../public/heliobrandao.png'
import duLucca from '../public/dulucca.png'


// TODO: Muting error, fix as soon as zeit/next.js/issues/7915 resolved
const originalError = console.error;

console.error = (...args) => {
  if (/Warning.*Function components cannot be given refs/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};


const Container = styled.div `
  margin: 0px 150px;

  .imagem:hover {
    opacity:0.5;
    transition: all 0.2s ease-in-out;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  @media (max-width:768px) {
    margin: 0;
  } 
    
  
`
const PrimeiroContainer = styled.div `
  display: flex;

  cursor:pointer;

  width: 100%;

  @media (max-width:768px) {
    flex-direction: column;
  }
  
`
const SegundoContainer = styled.div `
  display: flex;
  cursor:pointer;

  @media (max-width:768px) {
    flex-direction: column;
  }
`
const TerceiroContainer = styled.div `
  display: flex;
  cursor: pointer;

  @media (max-width:768px) {
    flex-direction: column;
  }
`
const QuartoContainer = styled.div `
  display: flex;
  cursor: pointer;

  @media (max-width:768px) {
    flex-direction: column;
  }
`
const QuintoContainer = styled.div `
  display: flex;
  cursor: pointer;

  @media (max-width:768px) {
    flex-direction: column;
  }
`



export default function Home() {

  return (
    <Container>
      <PrimeiroContainer>
        <Link href="/">
          <Image
            src={helioBrandao}
            width={810}
            height={630}
            alt="Identidade Hélio Brandão"
            className="imagem"
            quality={100}
            placeholder="blur"
          />
        </Link>
        <Link href="/">
          <Image
            src={duLucca}
            width={810}
            height={630}
            alt="Identidade visual DuLucca"
            className="imagem"
            quality={100}
            placeholder="blur"
          />
        </Link>
      </PrimeiroContainer>
      <SegundoContainer>
        <Link href="/">
          <Image
            src={fernandaGriecco}
            width={810}
            height={630}
            alt="Identidade visual Fernanda Griecco"
            className="imagem"
            quality={100}
            placeholder="blur"
          />
        </Link>
        
        <Image
          src={griecco}
          width={810}
          height={630}
          className="imagem"
          alt="Identidade visual Griecco Imobiliária"
          quality={100}
          placeholder="blur"
        />
      </SegundoContainer>
      <TerceiroContainer>
        <Image
          src={taynaSouza}
          width={810}
          height={630}
          className="imagem" 
          quality={100}
          alt="Identidade visual Tayna Souza"
          placeholder="blur"
        />
        <Link href="/">
          <Image
            src={maxterFit}
            width={810}
            height={630}
            className="imagem" 
            quality={100}
            alt="Identidade visual Maxterfit"
            placeholder="blur"
          />
        </Link>
      </TerceiroContainer>
      <QuartoContainer>
        <Link href="/">
          <Image
            src={socialMedia}
            width={810}
            height={630}
            className="imagem"
            quality={100}
            alt="Social Media 2020"
            placeholder="blur"
          />
        </Link>
        <Link href="/">
          <Image
            src={socialMedia2}
            width={810}
            height={630}
            className="imagem"
            quality={100}
            alt="Social Media eleições 2020"
            placeholder="blur"
          />
        </Link>
      </QuartoContainer>
      <QuintoContainer>
        <Image
          src={grito}
          width={810}
          height={630}
          className="imagem"
          quality={100}
          alt="Grito Filmes"
          placeholder="blur"
        />
        <Image
          src={magazineRio}
          width={810}
          height={630}
          className="imagem"
          placeholder="blur"
          quality={100}
          alt="Magazine in Rio"
        />
      </QuintoContainer>
    </Container>
  )
}
