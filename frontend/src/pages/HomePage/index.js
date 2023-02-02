import React from 'react'
import Header from '../../components/Header'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Spinner,
} from 'react-bootstrap'
import { ContentContainer, Form, AdsBlock } from './styles'
import ShortenerService from '../../services/shortenerService'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      url: '',
      code: '',
      errorMenssage: '',
      copied: false,
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
          errorMenssage: 'Ops..., Ocorreu um erro ao tentar encurtar a url',
        })
      }
    }
  }

  copyToClipboard = () => {
    const element = this.inputURL
    element.select()
  }

  render() {
    const { isLoading, errorMenssage, code } = this.state

    return (
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Digite a url para encurtar"
                defaultValue=""
                onChange={(e) => this.setState({ url: e.target.value })}
              />

              <Button variant="primary" type="submit">
                Encurtar
              </Button>
            </InputGroup>
            {isLoading ? (
              <Spinner animation="border" />
            ) : (
              code && (
                <>
                  <InputGroup className="mb-3">
                    <FormControl
                      autoFocus={true}
                      defaultValue={`https://pituTools.tk/${code}`}
                      ref={(input) => (this.inputURL = input)}
                    />

                    <CopyToClipboard
                      text={this.state.inputURL}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <Button
                        variant="outline-success"
                        onClick={() => this.copyToClipboard()}
                      >
                        Copiar
                      </Button>
                    </CopyToClipboard>

                    {this.state.copied ? (
                      <Button variant="outline-danger m-.5">Copiado</Button>
                    ) : null}
                  </InputGroup>
                  <p>
                    Para acompanhar as estatísticas, acesse:
                    https://pituTools.tk/{code}
                  </p>
                </>
              )
            )}

            {errorMenssage && <Alert variant="danger">{errorMenssage}</Alert>}
          </Form>
        </ContentContainer>

        <ContentContainer>
          <AdsBlock>Adsense</AdsBlock>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage
