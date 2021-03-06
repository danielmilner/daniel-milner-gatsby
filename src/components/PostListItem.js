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
  flex-wrap: wrap;
  margin: 1.25rem -0.25rem 0 -0.25rem;
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
  margin: 0.25rem;
`

const PostListItem = props => {
  const postDate = new Date(props.date)
  return (
    <GridItem padding={'0'}>
      <PostLink to={`/${props.link}`}>
        <PostImage fluid={props.image.imageFile.childImageSharp.fluid} />
        <Inner>
          <Meta>
            <MetaItem>
              {postDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
              })}
            </MetaItem>
          </Meta>
          <Title>{props.title}</Title>
          {props.tags !== undefined && (
            <Tags>
              {props.tags.nodes.map(tag => {
                return <Tag key={tag.id}>{tag.name}</Tag>
              })}
            </Tags>
          )}
        </Inner>
      </PostLink>
    </GridItem>
  )
}

export default PostListItem
