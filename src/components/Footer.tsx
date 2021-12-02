import { FC } from "react"
import styled from "styled-components"

import {useRouter} from 'next/router'

const Footer:FC = () => {

    const router = useRouter()
    return (

        <>
{router.pathname==='/404'?
null:
<>

<Body>
            <Cover>

                <Logo>

                </Logo>
                <CopyRight>
                    &copy; {new Date().getFullYear()}
                </CopyRight>
            </Cover>
            
        </Body>
</>
}
        </>

    )
}

const Body = styled.footer`

`
const Cover = styled.div`

`
const Logo = styled.div`

`
const CopyRight = styled.div`

`

export default Footer
