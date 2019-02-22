import React, { useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import PageText from './PageText'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    fetch(
      'http://cms.danielmilner.com/api/forms/submit/contact?token=c9a791a2a75471b3490897c86f1547',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: {
            Name: name,
            Email: email,
            Message: message,
          },
        }),
      }
    ).then(setSubmit(true))
  }

  return (
    (submit === false && (
      <Form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
          type="text"
          name="name"
          required
        />
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          type="email"
          name="email"
          required
        />
        <TextArea
          onChange={e => setMessage(e.target.value)}
          placeholder="Your message..."
          name="message"
          value={message}
          required
        />
        <SubmitButton type="submit" value="Send" />
      </Form>
    )) || <PageText>Thanks for contacting me!</PageText>
  )
}
