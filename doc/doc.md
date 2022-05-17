## Functions

<dl>
<dt><a href="#laryfy">laryfy(component)</a> ⇒ <code>React.FunctionComponent</code></dt>
<dd><p>It takes a component and return it with all the Lary props. It apply also the global theme to the component.</p></dd>
<dt><a href="#LaryProvider">LaryProvider(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>It must wrap all your app to use Lary's components. You can pass the theme configuration props to the provider, or use the default theme. You can use these props :</p></dd>
<dt><a href="#Container">Container(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Takes all Lary props and add to them the container props:</p></dd>
<dt><a href="#Element">Element(props)</a> ⇒ <code>JSX.Element</code></dt>
<dd><p>Takes all Lary props, it's basicaly a View component, but with some extra props</p></dd>
</dl>

<a name="laryfy"></a>

## laryfy(component) ⇒ <code>React.FunctionComponent</code>

<p>It takes a component and return it with all the Lary props. It apply also the global theme to the component.</p>

**Kind**: global function  
**Exemple**: How to use it ⤵️

```javascript
import { TextInput } from 'react-native-paper';

const LaryfiedTextInput = laryfy<React.ComponentProps<typeof TextInput>>(TextInput)


//then you can use it like this in your app:

<LaryfiedTextInput bgSecondary relative f2 autoComplete='false' label='test' value='test' onChangeText={(text: string) => {console.log(text)}}/>

//in this case, "bgSecondary", "relative", "f2" are the Lary's props. Others props are the props of the TextInput component.
```

| Param     | Description                     |
| --------- | ------------------------------- |
| component | <p>: ComponentType<unknown></p> |

**Properties**

| Name                                                               | Description                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| bd(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) | <p>To set the border color to the choosen one.</p>               |
| borderColor                                                        | <p>To set the border color.</p>                                  |
| in(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) | <p>To set the color to the choosen one.</p>                      |
| color                                                              | <p>To set the color.</p>                                         |
| bg(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) | <p>To set the background color to the choosen one.</p>           |
| backgroundColor                                                    | <p>To set the background color.</p>                              |
| align(Center-Start-End)                                            | <p>To set the alignement to the secondary axis.</p>              |
| justify(Center-Start-End-Between-Around-evenly)                    | <p>To set the alignement to the main axis.</p>                   |
| xl                                                                 | <p>Display itself in min 1280px device width.</p>                |
| lg                                                                 | <p>Display itself in min 1024px and max 1979px device width.</p> |
| md                                                                 | <p>Display itself in min 768px and max 1023px device width.</p>  |
| sm                                                                 | <p>Display itself in max 640px device width.</p>                 |
| f(1..8)                                                            | <p>To set flex property to the choosen one.</p>                  |
| fn                                                                 | <p>To set flex property to 'none'.</p>                           |
| flex                                                               | <p>To set the flex property.</p>                                 |
| fb(1..8)                                                           | <p>To set the flexBasis property to the choosen one.</p>         |
| fbFull                                                             | <p>To set the flexBasis property to '100%'.</p>                  |
| flexBasis                                                          | <p>To set the flexBasis property.</p>                            |
| absolute                                                           | <p>To set the position to absolute.</p>                          |
| relative                                                           | <p>To set the position to relative.</p>                          |
| top(1..8)                                                          | <p>To set the top property to the choosen one.</p>               |
| top                                                                | <p>To set the top property.</p>                                  |
| bottom(1..8)                                                       | <p>To set the bottom property to the choosen one.</p>            |
| bottom                                                             | <p>To set the bottom property.</p>                               |
| left(1..8)                                                         | <p>To set the left property to the choosen one.</p>              |
| left                                                               | <p>To set the left property.</p>                                 |
| right(1..8)                                                        | <p>To set the right property to the choosen one.</p>             |
| right                                                              | <p>To set the right property.</p>                                |
| m(1..8)                                                            | <p>To set the margin property to the choosen one.</p>            |
| margin                                                             | <p>To set the margin property.</p>                               |
| mr(1..8)                                                           | <p>To set the marginRight property to the choosen one.</p>       |
| marginRight                                                        | <p>To set the marginRight property.</p>                          |
| ml(1..8)                                                           | <p>To set the marginLeft property to the choosen one.</p>        |
| marginLeft                                                         | <p>To set the marginLeft property.</p>                           |
| mt(1..8)                                                           | <p>To set the marginTop property to the choosen one.</p>         |
| marginTop                                                          | <p>To set the marginTop property.</p>                            |
| mb(1..8)                                                           | <p>To set the marginBottom property to the choosen one.</p>      |
| marginBottom                                                       | <p>To set the marginBottom property.</p>                         |
| marginX                                                            | <p>To set the margin left and right property.</p>                |
| marginY                                                            | <p>To set the margin top and bottom property.</p>                |
| r(1..8)                                                            | <p>To set the borderRadius property to the choosen one.</p>      |
| borderRadius                                                       | <p>To set the borderRadius property.</p>                         |
| b(1..8)                                                            | <p>To set the borderWidth property to the choosen one.</p>       |
| borderWidth                                                        | <p>To set the borderWidth property.</p>                          |
| p(1..8)                                                            | <p>To set the padding property to the choosen one.</p>           |
| padding                                                            | <p>To set the padding property.</p>                              |
| pl(1..8)                                                           | <p>To set the paddingLeft property to the choosen one.</p>       |
| paddingLeft                                                        | <p>To set the paddingLeft property.</p>                          |
| pr(1..8)                                                           | <p>To set the paddingRight property to the choosen one.</p>      |
| paddingRight                                                       | <p>To set the paddingRight property.</p>                         |
| pt(1..8)                                                           | <p>To set the paddingTop property to the choosen one.</p>        |
| paddingTop                                                         | <p>To set the paddingTop property.</p>                           |
| pb(1..8)                                                           | <p>To set the paddingBottom property to the choosen one.</p>     |
| widthFull                                                          | <p>To set the width property to 100%.</p>                        |
| heightFull                                                         | <p>To set the height property to 100%.</p>                       |
| widthScreen                                                        | <p>To set the width property to 100vw.</p>                       |
| heightScreen                                                       | <p>To set the height property to 100vh.</p>                      |
| width                                                              | <p>To set the width property.</p>                                |
| height                                                             | <p>To set the height property.</p>                               |
| paddingBottom                                                      | <p>To set the paddingBottom property.</p>                        |
| paddingTop                                                         | <p>To set the paddingTop property.</p>                           |
| paddingX                                                           | <p>To set the padding left and right property.</p>               |
| paddingY                                                           | <p>To set the padding top and bottom property.</p>               |
| paddingLeft                                                        | <p>To set the paddingLeft property.</p>                          |
| paddingRight                                                       | <p>To set the paddingRight property.</p>                         |
| borderRadius                                                       | <p>To set the borderRadius property.</p>                         |
| borderEndEndRadius                                                 | <p>To set the borderEndEndRadius property.</p>                   |
| borderEndStartRadius                                               | <p>To set the borderEndStartRadius property.</p>                 |
| borderStartEndRadius                                               | <p>To set the borderStartEndRadius property.</p>                 |
| borderStartStartRadius                                             | <p>To set the borderStartStartRadius property.</p>               |
| borderBottomEndRadius                                              | <p>To set the borderBottomEndRadius property.</p>                |
| borderBottomStartRadius                                            | <p>To set the borderBottomStartRadius property.</p>              |
| borderTopEndRadius                                                 | <p>To set the borderTopEndRadius property.</p>                   |
| borderTopStartRadius                                               | <p>To set the borderTopStartRadius property.</p>                 |
| borderTopWidth                                                     | <p>To set the borderTopWidth property.</p>                       |
| borderLeftWidth                                                    | <p>To set the borderLeftWidth property.</p>                      |
| borderRightWidth                                                   | <p>To set the borderRightWidth property.</p>                     |
| borderBottomWidth                                                  | <p>To set the borderBottomWidth property.</p>                    |
| borderWidth                                                        | <p>To set the borderWidth property.</p>                          |
| bold                                                               | <p>To set the fontWeight property to bold.</p>                   |
| text(Center-Right-Left)                                            | <p>To set the textAlign property to the choosen one.</p>         |

<a name="LaryProvider"></a>

## LaryProvider(props) ⇒ <code>JSX.Element</code>

<p>It must wrap all your app to use Lary's components. You can pass the theme configuration props to the provider, or use the default theme. You can use these props :</p>

**Kind**: global function  
**Exemple**: How to use it ⤵️

```javascript
const MainProvider = ({ children }: { children: JSX.Element }) => {
  return <LaryProvider color={{ ...YOUR_COLOR_CONFIGURATION }}>{children}</LaryProvider>;
};
```

**Exemple**: There is an exemple of the color configuration file ⤵️

```javascript
const COLOR = {
  PRIMARY: '#5B4FF7',
  SECONDARY: '#C4C4C4',
  SUCCESS: '#4CD964',
  DANGER: '#FF3B30',
  WARNING: '#FF9500',
  INFO: '#5B4FF7',
  LIGHT: '#F3F3F3',
  DARK: '#212121',
  WHITE: '#FFFFFF',
  MUTED: '#313131'
};

export default COLOR;
```

**Exemple**: There is an exemple of the layout configuration file ⤵️

```javascript
const LAYOUT = {
  FLEX: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8
  },
  FLEX_BASIS: {
    1: '1%',
    2: '2%',
    3: '3%',
    4: '4%',
    5: '5%',
    6: '6%',
    7: '7%',
    8: '8%'
  }
};

export default LAYOUT;
```

**Exemple**: There is an exemple of the shape configuration file ⤵️

```javascript
const SHAPE = {
  BORDER_RADIUS: {
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 25,
    6: 30,
    7: 35,
    8: 40
  },
  BORDER_WIDTH: {
    1: 1,
    2: 2,
    3: 4,
    4: 5,
    5: 8,
    6: 10,
    7: 12,
    8: 14
  },
  PADDING: {
    1: '1%',
    2: '2%',
    3: '3%',
    4: '4%',
    5: '5%',
    6: '6%',
    7: '7%',
    8: '8%'
  }
};

export default SHAPE;
```

**Exemple**: There is an exemple of the spacing configuration file ⤵️

```javascript
const SPACING = {
  1: '1%',
  2: '2%',
  3: '3%',
  4: '4%',
  5: '5%',
  6: '6%',
  7: '7%',
  8: '8%'
};

export default SPACING;
```

**Exemple**: There is an exemple of the position configuration file ⤵️

```javascript
const POSITION = {
  1: '1%',
  2: '2%',
  3: '3%',
  4: '4%',
  5: '5%',
  6: '6%',
  7: '7%',
  8: '8%'
};

export default POSITION;
```

| Param | Description                    |
| ----- | ------------------------------ |
| props | <p>: LaryProviderPropsType</p> |

**Properties**

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| color     | <p>To overload colors theme configuration.</p>    |
| layout    | <p>To overload layout theme configuration.</p>    |
| shape     | <p>To overload shape theme configuration.</p>     |
| spacing   | <p>To overload spacing theme configuration.</p>   |
| positions | <p>To overload positions theme configuration.</p> |

<a name="Container"></a>

## Container(props) ⇒ <code>JSX.Element</code>

<p>Takes all Lary props and add to them the container props:</p>

**Kind**: global function  
**Exemple**: How to use it ⤵️

```javascript
<Container row contentCenter m8 r8 p4>
  {children}
</Container>
```

| Param | Description                 |
| ----- | --------------------------- |
| props | <p>: containerPropsType</p> |

**Properties**

| Name          | Description                                             |
| ------------- | ------------------------------------------------------- |
| row           | <p>it's mean flexDirection: &quot;row&quot;</p>         |
| column        | <p>it's mean flexDirection: &quot;column&quot;</p>      |
| wrap          | <p>it's mean flexWrap: &quot;wrap&quot;</p>             |
| nowrap        | <p>it's mean flexWrap: &quot;nowrap&quot;</p>           |
| contentCenter | <p>it's mean justifyContent: &quot;center&quot;</p>     |
| contentLeft   | <p>it's mean justifyContent: &quot;flex-start&quot;</p> |
| contentRight  | <p>it's mean justifyContent: &quot;flex-end&quot;</p>   |

<a name="Element"></a>

## Element(props) ⇒ <code>JSX.Element</code>

<p>Takes all Lary props, it's basicaly a View component, but with some extra props</p>

**Kind**: global function  
**Exemple**: How to use it ⤵️

```javascript
<Element bgPrimary p5 m8>
  {children}
</Element>
```

| Param | Description               |
| ----- | ------------------------- |
| props | <p>: elementPropsType</p> |
