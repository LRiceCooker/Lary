# Lary

<i id="description">A utility-first style library for React Native on top of <a href='https://github.com/nandorojo/dripsy' target='_blank'>Dripsy</a>.</i>
<br>

> If you are too lazy, use lary ;)

<br>
Read the <a href="https://github.com/RiceCooker-dev/Lary/blob/master/doc/doc.md">doc</a>
<br><br>

```javascript
import { laryfy, Element, Container, useBreakPoints } from '@_ricecooker/lary';
import { Text as NativeText } from 'react-native';
import { Image as NativeImage } from 'react-native';
import { TouchableOpacity as PaperButton } from 'react-native';

const Text = laryfy < typeof NativeText > NativeText;
const Image = laryfy < typeof NativeImage > NativeImage;
const Button = laryfy < typeof PaperButton > PaperButton;

const Card = (): JSX.Element => {
  const { isSm } = useBreakPoints();
  return (
    <Container row justifyCenter>
      <Element m1 r4 bgWarning maxWidth={500} widthFull>
        <Container column widthFull>
          <Image
            height={400}
            r4
            source={{
              uri: 'https://img.freepik.com/free-vector/animal-doing-dabbing-movement_23-2147851266.jpg'
            }}
          />
          <Container row m6 alignCenter justifyCenter>
            <Text f3 inWhite bold textCenter text2xl>
              {isSm ? 'Unicorn' : 'Dabbing Unicorn'}
            </Text>
            <Text f1 inWhite bold textCenter text2xl>
              $5.6
            </Text>
            <Button f1 bgSecondary onPress={() => console.log('Pressed')} r4>
              <Container row m1>
                <Text f3 inWhite bold textCenter>
                  Buy
                </Text>
              </Container>
            </Button>
          </Container>
        </Container>
      </Element>
    </Container>
  );
};

export default Card;
```

<img src="https://i.postimg.cc/5N3fHmhf/exemple.png"/>

<h2>📥 Installation</h2>

<h3>With npm</h3>

```bash
npm i @_ricecooker/lary
```

<h3>With yarn</h3>

```bash
yarn add @_ricecooker/lary
```

<h2>🧐 Features</h2>

Here're some of the project's best features:

- Boolean props for load style on your component
- Laryfy components from your favorite library sutch as <a href='https://github.com/callstack/react-native-paper' target='_blank'>react-native-paper</a>
- Overload the default Lary's theme configuration with your own one
- Support media queries

<h2>🔗 Deps</h2>

Dependencies required in this project:

- <a href='https://github.com/facebook/react' target='_blank'>React</a>
- <a href='https://github.com/facebook/react-native' target='_blank'>React-Native</a>

<h2>💻 Built with</h2>

Technologies used in this project:

- <a href='https://github.com/nandorojo/dripsy' target='_blank'>Dripsy</a>
- <a href='https://github.com/facebook/react-native' target='_blank'>React-Native</a>

<h2>🛡️ License:</h2>

This project is licensed under the Beerware
