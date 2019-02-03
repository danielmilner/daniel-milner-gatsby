import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 0 5rem 0;
`

const Title = styled(Link)`
  font-family: ${props => props.theme.sanSerifFont};
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.primaryColor};
  display: block;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`

const Excerpt = styled.div`
  padding: 1rem 0;
`

const Meta = styled.div`
  display: flex;
`

const MetaItem = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  color: ${props => props.theme.darkColor};
`

const PostListItem = props => (
  <Container>
    <Title to={props.link}>{props.title}</Title>
    <Meta>
      <MetaItem>
        <i class="far fa-calendar" /> {props.date}
      </MetaItem>
    </Meta>
    <Excerpt>{props.children}</Excerpt>
  </Container>
)

export default PostListItem
