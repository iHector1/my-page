import Link from 'next/link'
import {Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Mon from './icons/moon'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
  svg {
    transition: 200ms ease;
  }
  &:hover svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Mon width={60} height={60} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Varela Round, arial"
            aling="center"
            ml={2}
          >
             Héctor González
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo