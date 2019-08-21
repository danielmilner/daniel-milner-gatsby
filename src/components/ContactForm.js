import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Form = styled.form`
  margin-bottom: 4rem;
`

const Input = styled.input`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.textSize};
  color: ${props => props.theme.textColor};
  font-weight: 300;
  line-height: 2.8rem;
  font-size: 1.7rem;
  padding: 1rem;
  display: block;
  width: 100%;
  max-width: 55rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    max-width: 100%;
  }
`

const TextArea = styled.textarea`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.textSize};
  color: ${props => props.theme.textColor};
  font-weight: 300;
  line-height: 2.8rem;
  font-size: 1.7rem;
  padding: 1rem;
  display: block;
  width: 100%;
  max-width: 55rem;
  height: 20rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    max-width: 100%;
  }
`

const SubmitButton = styled.input`
  color: #fff;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
  padding: 0.8rem 2rem;
  margin: 0;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.primaryColor};
  border: 0;
  margin-bottom: 1rem;
  -webkit-appearance: none;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    width: 100%;
  }

  &:hover,
  &:active {
    background-color: ${props => darken(0.1, props.theme.primaryColor)};
    color: #ffffff;
  }
`

export default function ContactForm() {
  return (
    <Form name="contact" method="post" netlify>
      <Input placeholder="Your name" type="text" name="name" required />
      <Input placeholder="Your email" type="email" name="email" required />
      <TextArea placeholder="Your message..." name="message" required />
      <SubmitButton type="submit" value="Send" />
    </Form>
  )
}
