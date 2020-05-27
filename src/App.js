import React from 'react'
import variables from './variables'
import MktoButton from './components/MktoButton'
import Container from './components/Container'
import MktoText from './components/MktoText'

function App() {
  const height1 = 500
  const height2 = 400
  const dividerMargins = 75

  return (
    <>
      <main>
        <div className="text-center p-3">
          <img
            src={variables.logo.default}
            alt="logo"
            style={{ maxHeight: 50, maxWidth: '100%' }}
          />
        </div>
        <div className="position-relative">
          <div
            className="d-flex align-items-center mb-5 position-relative"
            style={{
              height: height1,
            }}
          >
            <img
              className="position-absolute"
              src="http://info.cornellcookson.com/rs/256-VME-936/images/header-image-1920x664.jpg"
              alt="header"
              style={{
                height: height1,
                width: '100%',
                objectFit: 'cover',
                objectPosition: '100%',
              }}
            />
            <Container>
              <div className="row no-gutters w-100 text-white">
                <div className="d-none d-xl-block col-12 col-xl-6" />
                <div className="col-12 col-xl-6 h-100 pl-xl-5 d-flex  flex-column align-items-center d-xl-block">
                  <h1 className="header-text mb-4 mb-sm-2">
                    <MktoText id="section-1-header" name="Section 1 Header">
                      Section 1 Header
                    </MktoText>
                    <div
                      style={{
                        position: 'relative',
                        width: 60,
                        left: 2,
                        borderBottom: '2px solid white',
                      }}
                    />
                  </h1>
                  <div
                    className="mb-4 header-detail"
                    style={{ textJustify: 'inter-word', textAlign: 'justify' }}
                  >
                    <MktoText id="section-1-text" name="Section 1 Text">
                      Section 1 text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod
                    </MktoText>
                  </div>
                  <div className="row justify-content-center">
                    <Input1 />
                    <Input1 />
                    <Input1 />
                    <Input1 />
                    <Input1 />
                    <Input1 button />
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <Container>
            <div className="text-center mb-5">
              <h4>Section 2</h4>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-xl-6 mb-5 mb-xl-0 d-flex flex-column justify-content-between">
                <h4>Section 3</h4>
                <div
                  style={{ textJustify: 'inter-word', textAlign: 'justify' }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="text-center text-xl-left my-5 my-xl-0">
                  <MktoButton style={{ width: 200 }}>Link 1</MktoButton>
                </div>
              </div>
              <div className="col-12 col-xl-6 d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-laptop-preview-600x360.png"
                  alt="laptop"
                />
              </div>
            </div>
            <img
              src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-gray-divider-line-1366x47.png"
              className="img-fluid"
              style={{
                marginTop: dividerMargins,
                marginBottom: dividerMargins,
              }}
              alt="divider"
            />
            <h4 className="text-center mb-5">Section 4</h4>
            <div className="row">
              <Bubble
                image={
                  'http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-circle-photo-one-172x172.png'
                }
              />
              <Bubble
                image={
                  'http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-circle-photo-two-172x172.png'
                }
              />
              <Bubble
                image={
                  'http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-circle-photo-three-172x172.png'
                }
              />
            </div>
            <div className="text-center mb-5 mt-xl-5">
              <MktoButton style={{ width: 200 }}>LEARN MORE</MktoButton>
            </div>
          </Container>
          <div className="mb-2">
            <img
              src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-cta-background-section-1920x398.png"
              alt="cta-background"
              className="position-absolute mt-auto"
              style={{
                height: height2,
                width: '100%',
                objectFit: 'cover',
                objectPosition: '100%',
                bottom: 0,
              }}
            />
            <Container>
              <div
                className="row"
                style={{
                  height: height2,
                }}
              >
                <div className="col-12 col-lg-7 h-100 w-100 text-dark py-4">
                  <div className="h-100 text-center d-flex flex-column justify-content-center align-items-center text-white px-4 position-relative">
                    <img
                      className="position-absolute h-100 w-100"
                      src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-message-background-761x347.png"
                      alt="message-background"
                      style={{ zIndex: 0 }}
                    />
                    <div style={{ zIndex: 1 }}>
                      <img
                        src="http://info.cornellcookson.com/rs/256-VME-936/images/cornell-cookson-kitchen-sink-LP-template-chat-icon-circle-88x90.png"
                        alt="chat-icon"
                        className="mb-4"
                      />
                      <h5 className="mb-4">Section 6</h5>
                      <div style={{ maxWidth: 400 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-dark text-light text-center pt-5 pb-5 px-3">
          <h5 className="mb-2">Section 7</h5>
          <div className="mx-auto mb-4" style={{ maxWidth: 500 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div
            className="row justify-content-center mx-auto"
            style={{ maxWidth: 700 }}
          >
            <Input2 />
            <Input2 />
            <Input2 />
            <Input2 />
            <Input2 />
            <Input2 button />
          </div>
        </div>
      </footer>
    </>
  )
}

function Input1({ button }) {
  return (
    <div className="col-12 col-xl-6 my-1 my-xl-2 justify-content-center d-flex">
      {button ? (
        <MktoButton className="w-100" style={{ maxWidth: 330 }}>
          SUBMIT CTA
        </MktoButton>
      ) : (
        <input className="w-100" style={{ maxWidth: 330 }} />
      )}
    </div>
  )
}

function Input2({ button }) {
  return (
    <div className="col-12 col-xl-4 my-2 justify-content-center d-flex">
      {button ? (
        <MktoButton className="w-100" style={{ maxWidth: 330 }}>
          SUBMIT CTA
        </MktoButton>
      ) : (
        <input className="w-100" style={{ maxWidth: 330 }} />
      )}
    </div>
  )
}

function Bubble({ image }) {
  return (
    <div className="col-12 col-xl-4 mb-5 mb-xl-0">
      <div className="d-flex flex-column align-items-center mx-3">
        <img src={image} alt="bubble" className="mb-4" />
        <h5 className="mb-4">Header Goes Here</h5>
        <div className="text-center" style={{ maxWidth: 600 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  )
}

export default App
