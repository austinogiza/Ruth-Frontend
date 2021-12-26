import axios, { AxiosResponse } from "axios"
import Loader from "components/Loader"
import Notification from "components/Notification"
import { ContactURL } from "constants/Constants"
import { BodyWrapper } from "container/Wrapper"
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import styled from "styled-components"
import { FormBut } from "styles/ButtonStyles"
import { RuthTheme } from "styles/ColorStyles"
import { MainInput, MainTextArea } from "styles/InputStyles"
import { Header5, TinySub, LightTinySub } from "styles/TextStyles"

const ContactForm: FC = () => {
  const initial = {
    name: "",
    email: "",
    message: "",
  }
  const [form, setForm] = useState(initial)
  const [timer, setTimer] = useState<number>(5)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [nameError, setNameError] = useState<string | null>(null)
  const [messageError, setMessageError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [sent, setSent] = useState<boolean>(false)

  const { name, email, message } = form
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmailError(null)
    setNameError(null)
    setMessageError(null)
    setForm({ ...form, [name]: value })
  }

  useEffect(() => {
    if (sent) {
      window.setInterval(() => {
        setTimer((timer) => timer - 1)

        if (timer === 0) {
          setSent(false)
        }
      }, 1000)
    }
  }, [timer, sent])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (
      message.trim() === "" ||
      name.trim() === "" ||
      !email.includes("@") ||
      email.trim() === ""
    ) {
      setLoading(false)

      if (email.trim() === "" && message.trim() === "" && name.trim() === "") {
        setEmailError("Enter Email")
        setNameError("Enter Name")
        setMessageError("Enter Message")
      } else if (email.trim() === "") {
        setEmailError("Enter Email")
      } else if (name.trim() === "") {
        setNameError("Enter Name")
      } else if (message.trim() === "") {
        setMessageError("Enter Message")
      } else if (!email.includes("@")) {
        setEmailError("Please enter valid email")
      }
    } else {
      axios
        .post(ContactURL, { name, email, message })
        .then((res: AxiosResponse) => {
          setLoading(false)
          setForm(initial)
          setSent(true)
        })
        .catch((err: AxiosResponse) => {
          setLoading(false)
        })
    }
  }
  const closeIcon = () => {
    setSent(false)
  }

  return (
    <Body>
      {sent && <Notification close={closeIcon} />}
      <Wrapper>
        <FormTitle>
          <Title>
            Send me a message/mail directly at contact@ruth or through the form
            below. Talk to you soon!
          </Title>

          <FormCover>
            <FormBody onSubmit={onSubmit}>
              <FormWrapper>
                <FormLabel htmlFor="name">
                  <FormText>Name</FormText>
                </FormLabel>
                <FormInput
                  id="name"
                  value={name}
                  onChange={onChange}
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
                {nameError && (
                  <Error>
                    <ErrorText>{nameError}</ErrorText>
                  </Error>
                )}
              </FormWrapper>
              <FormWrapper>
                <FormLabel htmlFor="email">
                  <FormText>Email</FormText>
                </FormLabel>
                <FormInput
                  id="email"
                  value={email}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Your email"
                />
                {emailError && (
                  <Error>
                    <ErrorText>{emailError}</ErrorText>
                  </Error>
                )}
              </FormWrapper>
              <FormWrapper>
                <FormLabel htmlFor="message">
                  <FormText>Message</FormText>
                </FormLabel>
                <FormTextArea
                  id="message"
                  value={message}
                  onChange={onChange}
                  name="message"
                  placeholder="Your message"
                />
                {messageError && (
                  <Error>
                    <ErrorText>{messageError}</ErrorText>
                  </Error>
                )}
              </FormWrapper>
              <FormWrap>
                <FormButton>{loading ? <Loader /> : "Submit"}</FormButton>
              </FormWrap>
            </FormBody>
          </FormCover>
        </FormTitle>
      </Wrapper>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`

const Wrapper = styled(BodyWrapper)`
  display: flex;
  flex-direction: column;
`

const FormTitle = styled.div`
  color: ${RuthTheme.white};
  max-width: 900px;
  width: 100%;

  margin: 32px auto;
`
const Title = styled(Header5)`
  text-align: center;
`
const FormCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  max-width: 500px;
  margin: 24px auto;
`
const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 16px 0;
  color: ${RuthTheme.white};
`
const FormLabel = styled.label`
  width: 100%;
  margin: 16px 0;
  cursor: pointer;
`
const FormText = styled(TinySub)``
const FormInput = styled(MainInput)`
  margin: 0 0 8px 0;
`
const FormTextArea = styled(MainTextArea)`
  margin: 0 0 8px 0;
`
const FormWrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 40px auto;
`
const FormButton = styled(FormBut)``
const Error = styled.span`
  margin: 0;
  width: 100%;
  text-align: left;
  color: ${RuthTheme.secondary};
`
const ErrorText = styled(LightTinySub)``
export default ContactForm
