import React from 'react'
import Header from '../../components/Header'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import { ContentContainer, Form } from './styles'
import ShortenerService from '../../services/shortenerService'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      url: '',
      code: '',
      errorMenssage: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { url } = this.state

    this.setState({ isLoading: true, errorMenssage: '' })

    if (!url) {
      this.setState({
        isLoading: false,
        errorMenssage: 'Informe uma url para encurtar!',
      })
    } else {
      try {
        const service = new ShortenerService()
        const result = await service.generate({ url })

        this.setState({ isLoading: false, code: result.code })
      } catch (error) {
        this.setState({
          isLoading: false,
          errorMenssage: 'Ops, Ocorreu um ao tentar encurtar a url',
        })
      }
    }
  }

  render() {
    return (
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <ContentContainer>
          <Form onSubmit={Button}>
            <InputGroup>
              <FormControl
                placeholder="Digite a url para encurtar"
                defaultValue=""
                onChange={(e) => this.setState({ url: e.target.value })}
              />
              <Button variant="primary" type="submit">
                Encurtar
              </Button>
            </InputGroup>
          </Form>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage
