import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const COLORS = {
  FB_BLUE_DARK: '#3b5998',
  FB_BLUE_LIGHTEST: '#dfe3ee',
  GREY_DARK: '#CCC',
  GREY_DARKER: '#929292',
  GREY_DARKEST: '#333',
  GREY_LIGHT: '#e5e5e5',
  WHITE: '#f7f7f7'
}

const BORDER_RADIUS = 'border-radius: 3px;'

// ---------------------------------------------------------------------------//
// SHARED COMPONENTS
// ---------------------------------------------------------------------------//

export const Body = styled.body`
  background: #f7f7f7;
  font-family: "Helvetica Nueue", Helvetica, Arial, sans-serif;
  font-weight: 300;
  margin: 0;
`

export const Header = styled.header`
  align-items: center;
  background: ${COLORS.FB_BLUE_LIGHTEST};
  color: ${COLORS.FB_BLUE_DARK}
  display: flex;
  font-size: 3rem;
  height: 240px;
  justify-content: center;
  position: relative;

  h1 {
    font-size: 4rem;
  }
`

export const HeaderImage = styled.img`
  background-color: #f7f7f7;
  border-radius: 100px;
  border: 10px solid #fff;
  box-shadow: 1px 1px 5px rgba(51, 51, 51, 0.22);
  height: 150px;
  left: 5%;
  position: absolute;
  width: 150px;
`

export const ViewportContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-y: scroll;
`

export const PageContainer = ({ children }) => <ViewportContainer>
  <ScrollContainer>{children}</ScrollContainer>
</ViewportContainer>

PageContainer.propTypes = {
  children: PropTypes.node
}

// ---------------------------------------------------------------------------//
// LOGIN PAGE
// ---------------------------------------------------------------------------//
export const LoginPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

export const LoginForm = styled.form`
  ${BORDER_RADIUS}
  background: ${COLORS.FB_BLUE_LIGHTEST};
  display: flex;
  flex-direction: column;
  padding: 3rem;
  position: relative;
  width: 60%;
`

export const LoginImage = styled.img`
  position: absolute;
  top: -200px;
`

export const FormInput = styled.input`
  ${BORDER_RADIUS}
  background: #FFF;
  border: 1px solid ${COLORS.GREY_DARKER};
  box-sizing: border-box;
  color: ${COLORS.GREY_DARKEST};
  font-size: 1.5rem;
  font-weight: 300;
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 1rem;
  padding: 0 2rem;
`

export const SubmitButton = styled.button`
  ${BORDER_RADIUS}
  background: ${COLORS.FB_BLUE_DARK};
  border: 1px solid ${COLORS.GREY_DARK};
  box-sizing: border-box;
  color: ${COLORS.WHITE};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
  height: 3rem;
  line-height: 3rem;
  margin-bottom: 1rem;
  padding: 0 2rem;
`

// ---------------------------------------------------------------------------//
// FEED PAGE
// ---------------------------------------------------------------------------//
export const ContentContainer = styled.div`
  align-items: center;
  background-color: ${COLORS.GREY_LIGHT}
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  padding-top: 2rem;
  padding: 0;
`

export const NewPostForm = styled.form`
  ${BORDER_RADIUS}
  background: ${COLORS.FB_BLUE_LIGHTEST};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 0 5%;
  position: relative;
  width: 100%;
`

export const FormTextArea = styled.textarea`
  ${BORDER_RADIUS}
  background: #FFF;
  border: 1px solid ${COLORS.GREY_DARKER};
  box-sizing: border-box;
  color: ${COLORS.GREY_DARKEST};
  font-size: 1rem;
  font-weight: 300;
  height: 3rem;
  height: 6rem;
  line-height: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  resize: none;
`

export const PostsList = styled.ol`
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  padding: 0;
  width: 90%;
`

export const PostListItem = styled.li`
  ${BORDER_RADIUS}
  align-items: center;
  background-color: ${COLORS.WHITE}
  border: 1px solid ${COLORS.GREY_DARK}
  box-sizing: border-box;
  color: ${COLORS.GREY_DARKEST}
  display:flex;
  font-size: 1.2rem;
  line-height: 1.5rem;
  list-style: none;
  margin-bottom: 2rem;
  overflow: hidden;
  overflow: visible;
  padding: 2rem 2rem 2rem 0;
  position: relative;
  width: calc(100% - 50px);

  ::after {
    background-color: ${COLORS.FB_BLUE_DARK}
    content: '';
    display: ${props => props.isPrivate ? 'block' : 'none'}
    height: 100%;
    position: absolute;
    right: 0;
    top:0;
    width: 5px;
  }
`
export const PostListItemImage = styled.img`
  background-color: ${COLORS.WHITE}
  border-radius: 100px;
  border: 10px solid #fff;
  box-shadow: 1px 1px 5px rgba(51, 51, 51, 0.22)
  height: 100px;
  width: 100px;
  margin-left: -50px;
`

export const PostListItemImagePlaceholder = styled.div`
  background-color: ${COLORS.WHITE}
  border-radius: 100px;
  border: 10px solid #fff;
  box-shadow: 1px 1px 5px rgba(51, 51, 51, 0.22)
  height: 100px;
  width: 100px;
  margin-left: -50px;
  flex: 0 0 auto;
`

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`

export const PostListItemHeader = styled.p`
  color: ${COLORS.FB_BLUE_DARK};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`
