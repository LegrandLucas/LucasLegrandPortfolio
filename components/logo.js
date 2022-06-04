import Link from "next/link"
import Image from "next/Image"
import styled from "@emotion/styled"
import { Text, useColorModeValue } from "@chakra-ui/react"
import burgerIcon from "../assets/burgerIcon.png"

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center
    height: 50px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={burgerIcon} width={20} height={20} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', "whiteAlpha.900")}
                        fontFamily="M Plus Rounded 1c"
                        fontWeight="bold"
                        ml={3}>
                        Lucas Legrand
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo