import React from 'react'
import Header from '../../components/Header'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatsContainer } from './styles'
import ShortenedService from '../../services/shortenerService'

class RedirectPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      url: '',
      errorMenssage: '',
    }
  }

  async componentDidMount() {
    const { code } = this.props.match.params

    try {
      const sevice = new ShortenedService()
      const { url } = await sevice.getLink(code)

      window.location = url
    } catch (error) {
      this.setState({
        isLoading: false,
        errorMenssage: 'Ops! A url solicitada não existe',
      })
    }
  }

  render() {
    const { errorMessage } = this.state

    return (
      <Container>
        {errorMessage ? (
          <>
            <Header>Seu novo encurtador de url!</Header>

            <StatsContainer className="text-center">
              <FontAwesomeIcon
                size="3x"
                color="#f8d7da"
                icon="exclamation-triangle"
              />
              <p className="m-3">{errorMessage}</p>
              <a className="btn btn-primary" href="/">
                Encurtar nova URL #RedirectPage
              </a>
            </StatsContainer>
          </>
        ) : (
          <p className="text-center">Redirecionando...</p>
        )}
      </Container>
    )
  }
}

export default RedirectPage
