# Lary

<i id="description">A utility-first style library for React Native on top of <a href='https://github.com/nandorojo/dripsy' target='_blank'>Dripsy</a>.</i> 
<br>
> If you are too lazy, use lary ;)

<br>
Read the <a href="https://github.com/RiceCooker-dev/Lary/blob/master/doc/doc.md">doc</a> ;)
<br><br>

```javascript
const Title = laryfy < React.ComponentProps < typeof PaperTitle >> PaperTitle;
const Image = laryfy < React.ComponentProps < typeof NativeImage >> NativeImage;
const Button = laryfy < React.ComponentProps < typeof PaperButton >> PaperButton;

const Card = (): JSX.Element => {
  return (
    <Element m1 r4 bgWarning flexBasis={'30%'}>
      <Container column widthFull>
        <Image
          height={400}
          r4
          source={{
            uri: 'https://img.freepik.com/free-vector/animal-doing-dabbing-movement_23-2147851266.jpg'
          }}
        />
        <Container row m6>
          <Title f3 inWhite bold textCenter>
            Dabbing Unicorn
          </Title>
          <Title f1 inWhite bold textCenter>
            $5.6
          </Title>
          <Button f1 bgSecondary mode="contained" onPress={() => console.log('Pressed')}>
            Buy
          </Button>
        </Container>
      </Container>
    </Element>
  );
};
```

<img src="https://i.ibb.co/NZh1HZ9/result.png"/>

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
