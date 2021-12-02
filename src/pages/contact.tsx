import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import Layout from '@/container/Layout'
import type { NextPage } from 'next'
import styled from 'styled-components'

const Contact:NextPage = () => {
    return (
        <Body>
            <Layout title="Contact Me"/>
            <ContactHero/>
            <ContactForm/>
            
        </Body>
    )
}

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

export default Contact
