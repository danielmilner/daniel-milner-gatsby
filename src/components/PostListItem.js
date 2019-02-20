import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'
import GridItem from './GridItem'

const PostLink = styled(Link)`
  text-decoration: none;
  flex: auto;
`

const Inner = styled.div`
  padding: 2rem;
`

const PostImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 15vw;
  @media (max-width: ${props =>
      props.theme.tabletWidth}) and (orientation: portrait) {
    height: 40vw;
  }
  @media (max-width: ${props =>
      props.theme.tabletWidth}) and (orientation: landscape) {
    height: 20vw;
  }
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.primaryColor};
`

const Meta = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const MetaItem = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.textColor};
`

const Tags = styled.div`
  display: flex;
  margin-top: 1.5rem;
`

const Tag = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffffff;
  background-color: ${props => props.theme.altTextColor};
  padding: 0.1rem 0.8rem;
  border-radius: 0.4rem;
  &:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`

const PostListItem = props => (
  <GridItem padding={'0'}>
    <PostLink to={`/${props.link}`}>
      <PostImage fluid={props.image.childImageSharp.fluid} />
      <Inner>
        <Meta>
          <MetaItem>{props.date}</MetaItem>
        </Meta>
        <Title>{props.title}</Title>
        {props.tags !== undefined && (
          <Tags>
            {props.tags.map(tag => {
              return <Tag key={tag}>{tag}</Tag>
            })}
          </Tags>
        )}
      </Inner>
    </PostLink>
  </GridItem>
)

export default PostListItem
