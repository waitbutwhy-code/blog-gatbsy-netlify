import React from "react"
import styled from "styled-components"
import theme from "../../config/theme"


const LogoStyle = styled.div.attrs(props => ({
    className: props.className,
  }))`
  span {
    font-weight: bold;
    font-family: ${theme.fontFamily.serif}
  }
   & .white {
    background: white;
    padding: 0 0 0 0rem;
    color: ${theme.colors.bg}
   }
  
  `

  const Logo = () => (
      <LogoStyle>
               <span className={"white"}>
          _Bro  
          </span>
          <span>
          conomist ..{" "}
          </span>
      </LogoStyle>
  )

  export default Logo
  