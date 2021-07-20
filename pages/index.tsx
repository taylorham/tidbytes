import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { TypographicStyles } from "../styles/TypographicStyles";
import { Header } from "../components/Header";
import {
  DiagonalBackground,
  LayerDiagonalsWithShadow,
} from "../styles/DiagonalBackground";

const About = styled.section`
  padding: 2rem;
  text-align: right;
`;

const Projects = styled.section`
  padding: 2rem;
`;

const BlogPosts = styled.section`
  padding: 2rem;
  text-align: right;
`;

export default function Home() {
  return (
    <>
      <TypographicStyles />
      <Head>
        <title>TidBytes | Taylor Ham</title>
        <meta name="description" content="Taylor Ham's Tech Tips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <LayerDiagonalsWithShadow>
          <Header />
          <DiagonalBackground
            angle={6}
            background={`linear-gradient(
              -0.455turn,
               var(--slate),
               var(--shadow) 110%
            );`}
          >
            <About>
              <h2>The Developer</h2>
              <p>
                Yo. I'm Taylor Ham, and I like reinventing wheels to find out
                how and why they work.
              </p>
            </About>
          </DiagonalBackground>
          <DiagonalBackground
            angle={-6}
            background={`linear-gradient(
              0.455turn,
               var(--slate),
               var(--shadow) 110%
            );`}
          >
            <Projects>
              <h2>The Code</h2>
              <p>I like to build stuff that helps people build stuff.</p>
            </Projects>
          </DiagonalBackground>
          <DiagonalBackground
            angle={4}
            background={`linear-gradient(
              -0.455turn,
               var(--slate),
               var(--shadow) 110%
            );`}
          >
            <BlogPosts>
              <h2>The Words</h2>
              <p>
                Hopefully you can learn from my mistakes. Warning: may contain
                strong opinions.
              </p>
            </BlogPosts>
          </DiagonalBackground>
        </LayerDiagonalsWithShadow>
      </Layout>
    </>
  );
}
