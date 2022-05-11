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

| Param | Description |
| --- | --- |
| component | <p>: ComponentType<unknown></p> |

**Properties**

| Name | Description |
| --- | --- |
| bdInfo | <p>To set the border color to info.</p> |
| bdSuccess | <p>To set the border color to success.</p> |
| bdWarning | <p>To set the border color to warning.</p> |
| bdPrimary | <p>To set the border color to primary.</p> |
| bdSecondary | <p>To set the border color to secondary.</p> |
| bdLight | <p>To set the border color to light.</p> |
| bdMuted | <p>To set the border color to muted.</p> |
| bdDanger | <p>To set the border color to danger.</p> |
| bdDark | <p>To set the border color to dark.</p> |
| borderColor | <p>To set the border color.</p> |
| inInfo | <p>To set the color to info.</p> |
| inSuccess | <p>To set the color to success.</p> |
| inWarning | <p>To set the color to warning.</p> |
| inPrimary | <p>To set the color to primary.</p> |
| inSecondary | <p>To set the color to secondary.</p> |
| inLight | <p>To set the color to light.</p> |
| inMuted | <p>To set the color to muted.</p> |
| inDanger | <p>To set the color to danger.</p> |
| inDark | <p>To set the color to dark.</p> |
| color | <p>To set the color.</p> |
| bgInfo | <p>To set the background color to info.</p> |
| bgSuccess | <p>To set the background color to success.</p> |
| bgWarning | <p>To set the background color to warning.</p> |
| bgPrimary | <p>To set the background color to primary.</p> |
| bgSecondary | <p>To set the background color to secondary.</p> |
| bgLight | <p>To set the background color to light.</p> |
| bgMuted | <p>To set the background color to muted.</p> |
| bgDanger | <p>To set the background color to danger.</p> |
| bgDark | <p>To set the background color to dark.</p> |
| backgroundColor | <p>To set the background color.</p> |
| alignCenter | <p>To set the alignement to center.</p> |
| alignLeft | <p>To set the alignement to left.</p> |
| alignRight | <p>To set the alignement to right.</p> |
| xl | <p>Display itself in min 1280px device width.</p> |
| lg | <p>Display itself in min 1024px and max 1979px device width.</p> |
| md | <p>Display itself in min 768px and max 1023px device width.</p> |
| sm | <p>Display itself in max 640px device width.</p> |
| f1 | <p>To set flex property to flex level 1.</p> |
| f2 | <p>To set flex property to flex level 2.</p> |
| f3 | <p>To set flex property to flex level 3.</p> |
| f4 | <p>To set flex property to flex level 4.</p> |
| f5 | <p>To set flex property to flex level 5.</p> |
| f6 | <p>To set flex property to flex level 6.</p> |
| f7 | <p>To set flex property to flex level 7.</p> |
| f8 | <p>To set flex property to flex level 8.</p> |
| fn | <p>To set flex property to 'none'.</p> |
| flex | <p>To set the flex property.</p> |
| fb1 | <p>To set the flexBasis property to flexBasis level 1.</p> |
| fb2 | <p>To set the flexBasis property to flexBasis level 2.</p> |
| fb3 | <p>To set the flexBasis property to flexBasis level 3.</p> |
| fb4 | <p>To set the flexBasis property to flexBasis level 4.</p> |
| fb5 | <p>To set the flexBasis property to flexBasis level 5.</p> |
| fb6 | <p>To set the flexBasis property to flexBasis level 6.</p> |
| fb7 | <p>To set the flexBasis property to flexBasis level 7.</p> |
| fb8 | <p>To set the flexBasis property to flexBasis level 8.</p> |
| fbFull | <p>To set the flexBasis property to '100%'.</p> |
| flexBasis | <p>To set the flexBasis property.</p> |
| absolute | <p>To set the position to absolute.</p> |
| relative | <p>To set the position to relative.</p> |
| top1 | <p>To set the top property to top level 1.</p> |
| top2 | <p>To set the top property to top level 2.</p> |
| top3 | <p>To set the top property to top level 3.</p> |
| top4 | <p>To set the top property to top level 4.</p> |
| top5 | <p>To set the top property to top level 5.</p> |
| top6 | <p>To set the top property to top level 6.</p> |
| top7 | <p>To set the top property to top level 7.</p> |
| top8 | <p>To set the top property to top level 8.</p> |
| top | <p>To set the top property.</p> |
| bottom1 | <p>To set the bottom property to bottom level 1.</p> |
| bottom2 | <p>To set the bottom property to bottom level 2.</p> |
| bottom3 | <p>To set the bottom property to bottom level 3.</p> |
| bottom4 | <p>To set the bottom property to bottom level 4.</p> |
| bottom5 | <p>To set the bottom property to bottom level 5.</p> |
| bottom6 | <p>To set the bottom property to bottom level 6.</p> |
| bottom7 | <p>To set the bottom property to bottom level 7.</p> |
| bottom8 | <p>To set the bottom property to bottom level 8.</p> |
| bottom | <p>To set the bottom property.</p> |
| left1 | <p>To set the left property to left level 1.</p> |
| left2 | <p>To set the left property to left level 2.</p> |
| left3 | <p>To set the left property to left level 3.</p> |
| left4 | <p>To set the left property to left level 4.</p> |
| left5 | <p>To set the left property to left level 5.</p> |
| left6 | <p>To set the left property to left level 6.</p> |
| left7 | <p>To set the left property to left level 7.</p> |
| left8 | <p>To set the left property to left level 8.</p> |
| left | <p>To set the left property.</p> |
| right1 | <p>To set the right property to right level 1.</p> |
| right2 | <p>To set the right property to right level 2.</p> |
| right3 | <p>To set the right property to right level 3.</p> |
| right4 | <p>To set the right property to right level 4.</p> |
| right5 | <p>To set the right property to right level 5.</p> |
| right6 | <p>To set the right property to right level 6.</p> |
| right7 | <p>To set the right property to right level 7.</p> |
| right8 | <p>To set the right property to right level 8.</p> |
| right | <p>To set the right property.</p> |
| m1 | <p>To set the margin property to margin level 1.</p> |
| m2 | <p>To set the margin property to margin level 2.</p> |
| m3 | <p>To set the margin property to margin level 3.</p> |
| m4 | <p>To set the margin property to margin level 4.</p> |
| m5 | <p>To set the margin property to margin level 5.</p> |
| m6 | <p>To set the margin property to margin level 6.</p> |
| m7 | <p>To set the margin property to margin level 7.</p> |
| m8 | <p>To set the margin property to margin level 8.</p> |
| margin | <p>To set the margin property.</p> |
| mr1 | <p>To set the marginRight property to marginRight level 1.</p> |
| mr2 | <p>To set the marginRight property to marginRight level 2.</p> |
| mr3 | <p>To set the marginRight property to marginRight level 3.</p> |
| mr4 | <p>To set the marginRight property to marginRight level 4.</p> |
| mr5 | <p>To set the marginRight property to marginRight level 5.</p> |
| mr6 | <p>To set the marginRight property to marginRight level 6.</p> |
| mr7 | <p>To set the marginRight property to marginRight level 7.</p> |
| mr8 | <p>To set the marginRight property to marginRight level 8.</p> |
| marginRight | <p>To set the marginRight property.</p> |
| ml1 | <p>To set the marginLeft property to marginLeft level 1.</p> |
| ml2 | <p>To set the marginLeft property to marginLeft level 2.</p> |
| ml3 | <p>To set the marginLeft property to marginLeft level 3.</p> |
| ml4 | <p>To set the marginLeft property to marginLeft level 4.</p> |
| ml5 | <p>To set the marginLeft property to marginLeft level 5.</p> |
| ml6 | <p>To set the marginLeft property to marginLeft level 6.</p> |
| ml7 | <p>To set the marginLeft property to marginLeft level 7.</p> |
| ml8 | <p>To set the marginLeft property to marginLeft level 8.</p> |
| marginLeft | <p>To set the marginLeft property.</p> |
| mt1 | <p>To set the marginTop property to marginTop level 1.</p> |
| mt2 | <p>To set the marginTop property to marginTop level 2.</p> |
| mt3 | <p>To set the marginTop property to marginTop level 3.</p> |
| mt4 | <p>To set the marginTop property to marginTop level 4.</p> |
| mt5 | <p>To set the marginTop property to marginTop level 5.</p> |
| mt6 | <p>To set the marginTop property to marginTop level 6.</p> |
| mt7 | <p>To set the marginTop property to marginTop level 7.</p> |
| mt8 | <p>To set the marginTop property to marginTop level 8.</p> |
| marginTop | <p>To set the marginTop property.</p> |
| mb1 | <p>To set the marginBottom property to marginBottom level 1.</p> |
| mb2 | <p>To set the marginBottom property to marginBottom level 2.</p> |
| mb3 | <p>To set the marginBottom property to marginBottom level 3.</p> |
| mb4 | <p>To set the marginBottom property to marginBottom level 4.</p> |
| mb5 | <p>To set the marginBottom property to marginBottom level 5.</p> |
| mb6 | <p>To set the marginBottom property to marginBottom level 6.</p> |
| mb7 | <p>To set the marginBottom property to marginBottom level 7.</p> |
| mb8 | <p>To set the marginBottom property to marginBottom level 8.</p> |
| marginBottom | <p>To set the marginBottom property.</p> |
| marginX | <p>To set the margin left and right property.</p> |
| marginY | <p>To set the margin top and bottom property.</p> |
| r1 | <p>To set the borderRadius property to borderRadius level 1.</p> |
| r2 | <p>To set the borderRadius property to borderRadius level 2.</p> |
| r3 | <p>To set the borderRadius property to borderRadius level 3.</p> |
| r4 | <p>To set the borderRadius property to borderRadius level 4.</p> |
| r5 | <p>To set the borderRadius property to borderRadius level 5.</p> |
| r6 | <p>To set the borderRadius property to borderRadius level 6.</p> |
| r7 | <p>To set the borderRadius property to borderRadius level 7.</p> |
| r8 | <p>To set the borderRadius property to borderRadius level 8.</p> |
| borderRadius | <p>To set the borderRadius property.</p> |
| b1 | <p>To set the borderWidth property to borderWidth level 1.</p> |
| b2 | <p>To set the borderWidth property to borderWidth level 2.</p> |
| b3 | <p>To set the borderWidth property to borderWidth level 3.</p> |
| b4 | <p>To set the borderWidth property to borderWidth level 4.</p> |
| b5 | <p>To set the borderWidth property to borderWidth level 5.</p> |
| b6 | <p>To set the borderWidth property to borderWidth level 6.</p> |
| b7 | <p>To set the borderWidth property to borderWidth level 7.</p> |
| b8 | <p>To set the borderWidth property to borderWidth level 8.</p> |
| borderWidth | <p>To set the borderWidth property.</p> |
| p1 | <p>To set the padding property to padding level 1.</p> |
| p2 | <p>To set the padding property to padding level 2.</p> |
| p3 | <p>To set the padding property to padding level 3.</p> |
| p4 | <p>To set the padding property to padding level 4.</p> |
| p5 | <p>To set the padding property to padding level 5.</p> |
| p6 | <p>To set the padding property to padding level 6.</p> |
| p7 | <p>To set the padding property to padding level 7.</p> |
| p8 | <p>To set the padding property to padding level 8.</p> |
| padding | <p>To set the padding property.</p> |
| pl1 | <p>To set the paddingLeft property to paddingLeft level 1.</p> |
| pl2 | <p>To set the paddingLeft property to paddingLeft level 2.</p> |
| pl3 | <p>To set the paddingLeft property to paddingLeft level 3.</p> |
| pl4 | <p>To set the paddingLeft property to paddingLeft level 4.</p> |
| pl5 | <p>To set the paddingLeft property to paddingLeft level 5.</p> |
| pl6 | <p>To set the paddingLeft property to paddingLeft level 6.</p> |
| pl7 | <p>To set the paddingLeft property to paddingLeft level 7.</p> |
| pl8 | <p>To set the paddingLeft property to paddingLeft level 8.</p> |
| paddingLeft | <p>To set the paddingLeft property.</p> |
| pr1 | <p>To set the paddingRight property to paddingRight level 1.</p> |
| pr2 | <p>To set the paddingRight property to paddingRight level 2.</p> |
| pr3 | <p>To set the paddingRight property to paddingRight level 3.</p> |
| pr4 | <p>To set the paddingRight property to paddingRight level 4.</p> |
| pr5 | <p>To set the paddingRight property to paddingRight level 5.</p> |
| pr6 | <p>To set the paddingRight property to paddingRight level 6.</p> |
| pr7 | <p>To set the paddingRight property to paddingRight level 7.</p> |
| pr8 | <p>To set the paddingRight property to paddingRight level 8.</p> |
| paddingRight | <p>To set the paddingRight property.</p> |
| pt1 | <p>To set the paddingTop property to paddingTop level 1.</p> |
| pt2 | <p>To set the paddingTop property to paddingTop level 2.</p> |
| pt3 | <p>To set the paddingTop property to paddingTop level 3.</p> |
| pt4 | <p>To set the paddingTop property to paddingTop level 4.</p> |
| pt5 | <p>To set the paddingTop property to paddingTop level 5.</p> |
| pt6 | <p>To set the paddingTop property to paddingTop level 6.</p> |
| pt7 | <p>To set the paddingTop property to paddingTop level 7.</p> |
| pt8 | <p>To set the paddingTop property to paddingTop level 8.</p> |
| paddingTop | <p>To set the paddingTop property.</p> |
| pb1 | <p>To set the paddingBottom property to paddingBottom level 1.</p> |
| pb2 | <p>To set the paddingBottom property to paddingBottom level 2.</p> |
| pb3 | <p>To set the paddingBottom property to paddingBottom level 3.</p> |
| pb4 | <p>To set the paddingBottom property to paddingBottom level 4.</p> |
| pb5 | <p>To set the paddingBottom property to paddingBottom level 5.</p> |
| pb6 | <p>To set the paddingBottom property to paddingBottom level 6.</p> |
| pb7 | <p>To set the paddingBottom property to paddingBottom level 7.</p> |
| pb8 | <p>To set the paddingBottom property to paddingBottom level 8.</p> |
| widthFull | <p>To set the width property to 100%.</p> |
| heightFull | <p>To set the height property to 100%.</p> |
| widthScreen | <p>To set the width property to 100vw.</p> |
| heightScreen | <p>To set the height property to 100vh.</p> |
| width | <p>To set the width property.</p> |
| height | <p>To set the height property.</p> |
| paddingBottom | <p>To set the paddingBottom property.</p> |
| paddingTop | <p>To set the paddingTop property.</p> |
| paddingX | <p>To set the padding left and right property.</p> |
| paddingY | <p>To set the padding top and bottom property.</p> |
| paddingLeft | <p>To set the paddingLeft property.</p> |
| paddingRight | <p>To set the paddingRight property.</p> |
| borderRadius | <p>To set the borderRadius property.</p> |
| borderEndEndRadius | <p>To set the borderEndEndRadius property.</p> |
| borderEndStartRadius | <p>To set the borderEndStartRadius property.</p> |
| borderStartEndRadius | <p>To set the borderStartEndRadius property.</p> |
| borderStartStartRadius | <p>To set the borderStartStartRadius property.</p> |
| borderBottomEndRadius | <p>To set the borderBottomEndRadius property.</p> |
| borderBottomStartRadius | <p>To set the borderBottomStartRadius property.</p> |
| borderTopEndRadius | <p>To set the borderTopEndRadius property.</p> |
| borderTopStartRadius | <p>To set the borderTopStartRadius property.</p> |
| borderTopWidth | <p>To set the borderTopWidth property.</p> |
| borderLeftWidth | <p>To set the borderLeftWidth property.</p> |
| borderRightWidth | <p>To set the borderRightWidth property.</p> |
| borderBottomWidth | <p>To set the borderBottomWidth property.</p> |
| borderWidth | <p>To set the borderWidth property.</p> |

<a name="LaryProvider"></a>

## LaryProvider(props) ⇒ <code>JSX.Element</code>
<p>It must wrap all your app to use Lary's components. You can pass the theme configuration props to the provider, or use the default theme. You can use these props :</p>

**Kind**: global function  
**Exemple**: How to use it ⤵️
```javascript
const MainProvider = ({ children }: { children: JSX.Element }) => {
   return (
       <LaryProvider color={{...YOUR_COLOR_CONFIGURATION}}>
           {children}
       </LaryProvider>
   )
}
```  
**Exemple**: There is an exemple of the color configuration file ⤵️
```javascript
const COLOR = {
    PRIMARY : '#5B4FF7',
    SECONDARY: '#C4C4C4',
    SUCCESS: '#4CD964',
    DANGER: '#FF3B30',
    WARNING: '#FF9500',
    INFO: '#5B4FF7',
    LIGHT: '#F3F3F3',
    DARK: '#212121',
    WHITE: '#FFFFFF',
    MUTED: '#313131',
}

export default COLOR
```  
**Exemple**: There is an exemple of the layout configuration file ⤵️ 
```javascript
const LAYOUT = {
  FLEX : {
      '1' : 1,
      '2' : 2,
      '3' : 3,
      '4' : 4,
      '5' : 5,
      '6' : 6,
      '7' : 7,
      '8' : 8,
  },
  FLEX_BASIS : {
      '1' : '1%',
      '2' : '2%',
      '3' : '3%',
      '4' : '4%',
      '5' : '5%',
      '6' : '6%',
      '7' : '7%',
      '8' : '8%',
  }
}

export default LAYOUT
```  
**Exemple**: There is an exemple of the shape configuration file ⤵️ 
```javascript
const SHAPE = {
  BORDER_RADIUS: {
      '1' : 5,
      '2' : 10,
      '3' : 15,
      '4' : 20,
      '5' : 25,
      '6' : 30,
      '7' : 35,
      '8' : 40,
  },
  BORDER_WIDTH: {
      '1' : 1,
      '2' : 2,
      '3' : 4,
      '4' : 5,
      '5' : 8,
      '6' : 10,
      '7' : 12,
      '8' : 14,
  },
  PADDING: {
      '1' : '1%',
      '2' : '2%',
      '3' : '3%',
      '4' : '4%',
      '5' : '5%',
      '6' : '6%',
      '7' : '7%',
      '8' : '8%',
  },
}

export default SHAPE;
```  
**Exemple**: There is an exemple of the spacing configuration file ⤵️ 
```javascript
const SPACING = {
     '1' : '1%',
     '2' : '2%',
     '3' : '3%',
     '4' : '4%',
     '5' : '5%',
     '6' : '6%',
     '7' : '7%',
     '8' : '8%',
 }

 export default SPACING
```  
**Exemple**: There is an exemple of the position configuration file ⤵️
```javascript
const POSITION = {
    '1': '1%',
    '2': '2%',
    '3': '3%',
    '4': '4%',
    '5': '5%',
    '6': '6%',
    '7': '7%',
    '8': '8%',
 }

 export default POSITION
```  

| Param | Description |
| --- | --- |
| props | <p>: LaryProviderPropsType</p> |

**Properties**

| Name | Description |
| --- | --- |
| color | <p>To overload colors theme configuration.</p> |
| layout | <p>To overload layout theme configuration.</p> |
| shape | <p>To overload shape theme configuration.</p> |
| spacing | <p>To overload spacing theme configuration.</p> |
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

| Param | Description |
| --- | --- |
| props | <p>: containerPropsType</p> |

**Properties**

| Name | Description |
| --- | --- |
| row | <p>it's mean flexDirection: &quot;row&quot;</p> |
| column | <p>it's mean flexDirection: &quot;column&quot;</p> |
| wrap | <p>it's mean flexWrap: &quot;wrap&quot;</p> |
| nowrap | <p>it's mean flexWrap: &quot;nowrap&quot;</p> |
| contentCenter | <p>it's mean justifyContent: &quot;center&quot;</p> |
| contentLeft | <p>it's mean justifyContent: &quot;flex-start&quot;</p> |
| contentRight | <p>it's mean justifyContent: &quot;flex-end&quot;</p> |

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

| Param | Description |
| --- | --- |
| props | <p>: elementPropsType</p> |

