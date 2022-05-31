import React, { createContext, useContext, useMemo, useState, useRef, useEffect, forwardRef, useCallback } from 'react';
import { Dimensions, Platform, StyleSheet, View as View$2, Pressable, Text as Text$1, Image, PixelRatio, Linking, ScrollView, TextInput, FlatList, ActivityIndicator, SafeAreaView, useWindowDimensions } from 'react-native';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DripsyThemeContext = /*#__PURE__*/createContext(null);

var useDripsyTheme = function useDripsyTheme() {
  return useContext(DripsyThemeContext);
};

var BreakpointIndexContext = /*#__PURE__*/createContext(0);
var useBreakpointIndex = function useBreakpointIndex() {
  return useContext(BreakpointIndexContext);
};

var getBreakpointIndex = function getBreakpointIndex(_ref) {
  var width = _ref.width,
      breakpoints = _ref.breakpoints;

  var breakpointPixels = _toConsumableArray(breakpoints).reverse().find(function (breakpoint) {
    return width >= breakpoint;
  });

  var breakpointIndex = breakpoints.findIndex(function (breakpoint) {
    return breakpointPixels === breakpoint;
  });
  breakpointIndex = breakpointIndex === -1 ? 0 : breakpointIndex + 1;
  return breakpointIndex;
};

var useBreakpoints = function useBreakpoints() {
  var _dripsy$theme;

  var dripsy = useDripsyTheme();
  var breakpoints = dripsy === null || dripsy === void 0 ? void 0 : (_dripsy$theme = dripsy.theme) === null || _dripsy$theme === void 0 ? void 0 : _dripsy$theme.breakpoints;

  if (breakpoints && typeof __DEV__ !== 'undefined' && __DEV__) {
    if (!Array.isArray(breakpoints)) {
      var arrayError = '[dripsy] theme.breakpoints must be an array. Or, you can leave it blank. However, you used \n' + JSON.stringify(breakpoints) + '\n Please turn this into an array, or remove the "breakpoints" field from your theme.';
      throw new Error(arrayError);
    }
  }

  return useMemo(function () {
    return (breakpoints || defaultBreakpoints).map(function (breakpoint) {
      if (typeof breakpoint === 'string') {
        if (breakpoint.endsWith('px')) {
          return Number(breakpoint.replace('px', ''));
        }
      }

      if (typeof breakpoint !== 'number') {
        console.error('[dripsy] Invalid breakpoints passed to theme.breakpoints. Expected an array of numbers, or strings ending with "px", but got this: \n', JSON.stringify(breakpoints), '\nPlease turn these into numbers, or remove the breakpoints array from your theme.');
      }

      return Number(breakpoint);
    });
  }, [breakpoints]);
};
var defaultBreakpoints = [576, 768, 992, 1200];

var useCreateBreakpointIndex = function useCreateBreakpointIndex() {
  var breakpoints = useBreakpoints();

  var _useState = useState(function () {
    return getBreakpointIndex({
      width: Dimensions.get('window').width,
      breakpoints: breakpoints
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var indexRef = useRef(index);
  useEffect(function () {
    indexRef.current = index;
  }, [index]);
  useEffect(function () {
    var onChange = function onChange(_ref) {
      var width = _ref.window.width;
      var breakpointIndex = getBreakpointIndex({
        width: width,
        breakpoints: breakpoints
      });

      if (breakpointIndex !== indexRef.current) {
        setIndex(breakpointIndex);
      }
    };

    var unsubscribe = Dimensions.addEventListener('change', onChange);
    onChange({
      window: Dimensions.get('window'),
      screen: Dimensions.get('screen')
    });
    return function () {
      if (!(unsubscribe !== null && unsubscribe !== void 0 && unsubscribe.remove)) {
        Dimensions.removeEventListener('change', onChange);
      } else {
        unsubscribe.remove();
      }
    };
  }, [breakpoints]);
  return index;
};

function BreakpointIndexProvider(_ref2) {
  var children = _ref2.children;
  var breakpointIndex = useCreateBreakpointIndex();
  return /*#__PURE__*/React.createElement(BreakpointIndexContext.Provider, {
    value: breakpointIndex
  }, children);
}

/**
 * @deprecated SSR IS DEPRECATED
 */
var SUPPORT_FRESNEL_SSR = false;

// from theme-ui/css
function get(obj, key, def, p, undef) {
  var path = key && typeof key === 'string' ? key.split('.') : [key];

  for (p = 0; p < path.length; p++) {
    obj = obj ? obj[path[p]] : undef;
  }

  return obj === undef ? def : obj;
}

var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  marginX: 'marginHorizontal',
  marginY: 'marginVertical',
  paddingX: 'paddingHorizontal',
  paddingY: 'paddingVertical'
};
var scales = {
  // RN SPECIFIC SCALES FIRST
  textShadowColor: 'colors',
  shadowColor: 'colors',
  // REST
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  caretColor: 'colors',
  opacity: 'opacities',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  marginVertical: 'space',
  marginHorizontal: 'space',
  marginBlock: 'space',
  marginBlockEnd: 'space',
  marginBlockStart: 'space',
  marginInline: 'space',
  marginInlineEnd: 'space',
  marginInlineStart: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  paddingHorizontal: 'space',
  paddingVertical: 'space',
  paddingBlock: 'space',
  paddingBlockEnd: 'space',
  paddingBlockStart: 'space',
  paddingInline: 'space',
  paddingInlineEnd: 'space',
  paddingInlineStart: 'space',
  inset: 'space',
  insetBlock: 'space',
  insetBlockEnd: 'space',
  insetBlockStart: 'space',
  insetInline: 'space',
  insetInlineEnd: 'space',
  insetInlineStart: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  borderBlock: 'borders',
  borderBlockEnd: 'borders',
  borderBlockEndStyle: 'borderStyles',
  borderBlockEndWidth: 'borderWidths',
  borderBlockStart: 'borders',
  borderBlockStartStyle: 'borderStyles',
  borderBlockStartWidth: 'borderWidths',
  borderBlockStyle: 'borderStyles',
  borderBlockWidth: 'borderWidths',
  borderEndEndRadius: 'radii',
  borderEndStartRadius: 'radii',
  borderInline: 'borders',
  borderInlineEnd: 'borders',
  borderInlineEndStyle: 'borderStyles',
  borderInlineEndWidth: 'borderWidths',
  borderInlineStart: 'borders',
  borderInlineStartStyle: 'borderStyles',
  borderInlineStartWidth: 'borderWidths',
  borderInlineStyle: 'borderStyles',
  borderInlineWidth: 'borderWidths',
  borderStartEndRadius: 'radii',
  borderStartStartRadius: 'radii',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  blockSize: 'sizes',
  inlineSize: 'sizes',
  maxBlockSize: 'sizes',
  maxInlineSize: 'sizes',
  minBlockSize: 'sizes',
  minInlineSize: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var _excluded$3 = ["themeKey", "fontFamily"];
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};

var responsive = function responsive(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      breakpoint = _ref.breakpoint;

  return function (theme) {
    var next = {};

    var _loop = function _loop(key) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) return "continue";

      if (!Array.isArray(value)) {
        // @ts-ignore
        next[key] = value;
        return "continue";
      }

      if (key === 'transform') {
        // @ts-ignore
        next[key] = value;
        return "continue";
      }

      if (Platform.OS === 'web' && SUPPORT_FRESNEL_SSR) {
        next.responsiveSSRStyles = next.responsiveSSRStyles || [];
        var mediaQueries = [0].concat(_toConsumableArray(defaultBreakpoints));

        for (var i = 0; i < mediaQueries.length; i++) {
          next.responsiveSSRStyles[i] = next.responsiveSSRStyles[i] || {};
          var styleAtThisMediaQuery = value[i]; // say we have value value = ['blue', null, 'green']
          // then styleAtThisMediaQuery[1] = null
          // we want it to be blue, since it's mobile-first

          if (styleAtThisMediaQuery == null) {
            var _ret2 = function () {
              if (i === 0) {
                // if we're at the first breakpoint, and it's null, just do nothing
                // for later values, we'll extract this value from the previous value
                return "continue";
              } // if we're after the first breakpoint, let's extract this style value from a previous breakpoint


              var nearestBreakpoint = function nearestBreakpoint(breakpointIndex) {
                // mobile-first breakpoints
                if (breakpointIndex <= 0 || typeof breakpointIndex !== 'number') return 0;

                if (value[breakpointIndex] == null) {
                  // if this value doesn't have a breakpoint, find the previous, recursively
                  return nearestBreakpoint(breakpointIndex - 1);
                }

                return breakpointIndex;
              };

              var previousBreakpoint = nearestBreakpoint(i);
              var styleAtPreviousMediaQuery = value[previousBreakpoint];

              if (styleAtPreviousMediaQuery) {
                styleAtThisMediaQuery = styleAtPreviousMediaQuery;
              }
            }();

            if (_ret2 === "continue") continue;
          }

          next.responsiveSSRStyles[i][key] = styleAtThisMediaQuery;
        }
      } else {
        // since we aren't on web, we let RN handle the breakpoints with JS
        var nearestBreakpoint = function nearestBreakpoint(breakpointIndex) {
          // mobile-first breakpoints
          if (breakpointIndex <= 0 || typeof breakpointIndex !== 'number') return 0;

          if (value[breakpointIndex] == null) {
            // if this value doesn't have a breakpoint, find the previous, recursively
            return nearestBreakpoint(breakpointIndex - 1);
          }

          return breakpointIndex;
        }; // if we're on mobile, we do have a breakpoint
        // so we can override TS here w/ `as number`


        var breakpointIndex = nearestBreakpoint(breakpoint);
        next[key] = value[breakpointIndex];
      }
    };

    for (var key in styles) {
      var _ret = _loop(key);

      if (_ret === "continue") continue;
    }

    return next;
  };
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    if (typeof value === 'string' && value.startsWith('-')) {
      var valueWithoutMinus = value.substring(1);

      var _n = get(scale, valueWithoutMinus, valueWithoutMinus);

      return "-".concat(_n);
    }

    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return Number(n) * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginBlock', 'marginBlockEnd', 'marginBlockStart', 'marginInline', 'marginInlineEnd', 'marginInlineStart', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, curr, positiveOrNegative));
}, {});
/**
 * Here we remove web style keys from components to prevent annoying errors on native
 */

var filterWebStyleKeys = function filterWebStyleKeys() {
  var styleProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Platform.OS == 'web') {
    return styleProp;
  } // avoid prop mutations


  var finalStyles = _objectSpread2({}, styleProp);

  var webOnlyKeys = [// from https://necolas.github.io/react-native-web/docs/styling/#non-standard-properties
  'animationKeyframes', 'animationFillMode', 'transitionProperty', 'whiteSpace', 'userSelect', 'transitionDuration', 'transitionTimingFunction', 'cursor', 'animationDuration', 'animationDelay', 'transitionDelay', 'animationDirection', 'animationIterationCount', 'outlineColor'];
  webOnlyKeys.forEach(function (key) {
    if (finalStyles !== null && finalStyles !== void 0 && finalStyles[key]) {
      finalStyles === null || finalStyles === void 0 ? true : delete finalStyles[key];
    }
  });
  return finalStyles;
};

var css = function css() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var breakpoint // { ssr }: { ssr?: boolean } = {}
  = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        themeKey = _ref2.themeKey,
        fontFamilyFromProps = _ref2.fontFamily,
        props = _objectWithoutProperties(_ref2, _excluded$3);

    var theme = _objectSpread2(_objectSpread2({}, defaultTheme), 'theme' in props ? props.theme : props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var filteredOutWebKeys = filterWebStyleKeys(obj);
    var styles = responsive(filteredOutWebKeys, {
      breakpoint: breakpoint
    })(theme);

    for (var key in styles) {
      var _theme$textShadows, _theme$shadows;

      var x = styles[key];
      var val = typeof x == 'function' ? x(theme) : x;

      if (key == 'variant') {
        // const variant = css(get(theme, val))(theme)
        var variant = css(get(theme, themeKey + '.' + val, get(theme, val)), breakpoint)({
          theme: theme
        });
        result = _objectSpread2(_objectSpread2({}, result), variant);
        continue;
      }

      if (key == 'transform') {
        result[key] = val;
        continue;
      }

      if (key == 'textShadow' && val && (_theme$textShadows = theme.textShadows) !== null && _theme$textShadows !== void 0 && _theme$textShadows[val]) {
        // we want to change textShadowColor to theme keys via css function
        // @ts-expect-error theme UI doesn't have RN textShadow*, need to add this later
        var styledTextShadow = css(theme.textShadows[val], breakpoint)(theme);
        result = _objectSpread2(_objectSpread2({}, result), styledTextShadow);
        continue;
      }

      if (key == 'boxShadow' && val && (_theme$shadows = theme.shadows) !== null && _theme$shadows !== void 0 && _theme$shadows[val]) {
        // @ts-expect-error theme UI doesn't have RN shadow*, need to add this later
        var styledBoxShadow = css(theme.shadows[val], breakpoint)(theme);
        result = _objectSpread2(_objectSpread2({}, result), styledBoxShadow);
        continue;
      }

      if (val === '') {
        console.error("[dripsy] Invalid style. You passed an empty string ('') for ".concat(key, ". Please fix this."));
        continue;
      }

      if (val && _typeof(val) == 'object') {
        // @ts-ignore
        result[key] = css(val, breakpoint)(theme);
        continue;
      }

      if (typeof val == 'boolean') {
        // StyleSheet doesn't allow booleans
        continue;
      }

      var prop = key in aliases ? aliases[key] : key;
      var scaleName = prop in scales ? scales[prop] : undefined; // @ts-expect-error

      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (key === 'fontFamily') {
        var _result;

        // ok, building off of fontWeight prior
        // we just need to check if we've already set the fontFamily based on the weight
        // if we have, continue. Otherwise, set it
        if ((_result = result) !== null && _result !== void 0 && _result.fontFamily) {
          continue;
        }

        if (value === 'root') {
          var _theme$fonts;

          // if we're setting this font to the `root` font,
          // make sure it actually exists
          // why? because by default, our text sets the `root` style
          // however, this only applies if you have a custom font
          // if you don't have a custom font named root, we shold ignore the fontFamily: 'root' definition
          if (!(theme !== null && theme !== void 0 && (_theme$fonts = theme.fonts) !== null && _theme$fonts !== void 0 && _theme$fonts.root)) {
            // techincally speaking, if value === 'root', this means that we already know there's no custom root font
            // why? bc value extracts the theme values. Since `root` is a reserved word in dripsy, we know this wouldn't work.
            // however, we still check to make sure. It's also easier to understand if I forget later,
            // ...or if someone accidentally names a font `root` even though the docs say not to
            continue;
          }
        } // ok, no font-family set yet, so let's continue.

      }

      if (key == 'fontWeight' && styles !== null && styles !== void 0 && styles.fontWeight) {
        var _styles$fontFamily, _theme$fonts2;

        // let's check if we have a custom font that corresponds to this font weight
        // we have a custom font for this family in our theme
        // example: if we pass fontWeight: 'bold', and fontFamily: 'arial', this will be true for themes that have
        // customFonts: {arial: {bold: 'arialBold'}}
        // we also pass the font-family from other CSS props here at the top of the function, so fall back to that if it exists
        var fontFamilyKeyFromStyles = (_styles$fontFamily = styles === null || styles === void 0 ? void 0 : styles.fontFamily) !== null && _styles$fontFamily !== void 0 ? _styles$fontFamily : fontFamilyFromProps; // default font for all text styles

        var rootFontFamilyFromTheme = theme === null || theme === void 0 ? void 0 : (_theme$fonts2 = theme.fonts) === null || _theme$fonts2 === void 0 ? void 0 : _theme$fonts2.root; // either the raw value, or one from our theme

        if (fontFamilyKeyFromStyles || rootFontFamilyFromTheme) {
          var fontWeight = value;
          var fontFamily = void 0;

          if (fontFamilyKeyFromStyles) {
            var _theme$fonts$fontFami, _theme$fonts3;

            // first, check if our theme has a font with this name. If not, just use the normal name.
            // for instance, if we pass fontFamily: 'body', and our theme has:
            // { fonts: {body: 'arial'}} (<- in this case, if fontFamilyKey = 'body', we get 'arial' back)
            // then we'd want to get fonts.body = 'arial'
            // however, if we're just writing fontFamily: 'arial' instead of 'body', we need no alias
            fontFamily = (_theme$fonts$fontFami = theme === null || theme === void 0 ? void 0 : (_theme$fonts3 = theme.fonts) === null || _theme$fonts3 === void 0 ? void 0 : _theme$fonts3[fontFamilyKeyFromStyles]) !== null && _theme$fonts$fontFami !== void 0 ? _theme$fonts$fontFami : fontFamilyKeyFromStyles;
          } else if (rootFontFamilyFromTheme) {
            fontFamily = rootFontFamilyFromTheme;
          } // const fontFamily =
          //   (theme?.fonts as any)?.[fontFamilyKey] ?? fontFamilyKey


          if (fontFamily) {
            var _theme$customFonts, _theme$customFonts$fo;

            if (typeof fontFamily != 'string') {
              console.error("[dripsy] error. Passed font family name that was not a string. This value should either be a string which corresponds to a key of your theme.fonts, or, it should be a string that corresponds to a raw font name. Your font will not be applied, please resolve this.");
              continue;
            }

            var customFontFamilyForWeight = theme === null || theme === void 0 ? void 0 : (_theme$customFonts = theme.customFonts) === null || _theme$customFonts === void 0 ? void 0 : (_theme$customFonts$fo = _theme$customFonts[fontFamily]) === null || _theme$customFonts$fo === void 0 ? void 0 : _theme$customFonts$fo[fontWeight];

            if (customFontFamilyForWeight) {
              // ok, now we just need to set the fontFamily to this value. oof
              // following the comment above, in this case, we set fontFamily: `arialBold`
              result.fontFamily = customFontFamilyForWeight;
              continue;
            }
          }
        }
      }

      if (key == 'size') {
        result.width = value;
        result.height = value;
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

function mapPropsToStyledComponent(props, options) {
  var themeKey = options.themeKey,
      defaultStyle = options.defaultStyle,
      defaultVariant = options.defaultVariant,
      _options$defaultVaria = options.defaultVariants,
      defaultVariants = _options$defaultVaria === void 0 ? [] : _options$defaultVaria;
  var breakpoint = props.breakpoint,
      sx = props.sx,
      theme = props.theme,
      variant = props.variant,
      style = props.style,
      variants = props.variants; // Override the defaults with added ones; don't get rid of them altogether

  var multipleVariants = [].concat(_toConsumableArray(defaultVariants), [defaultVariant]);

  if (variants !== null && variants !== void 0 && variants.length) {
    multipleVariants = [].concat(_toConsumableArray(multipleVariants), _toConsumableArray(variants));
  } // If a variant exists make it take precedence


  if (variant) multipleVariants = [].concat(_toConsumableArray(multipleVariants), [variant]);
  multipleVariants = multipleVariants.filter(Boolean);
  var maybeUnstyledVariantObjectFromTheme = get(theme, themeKey + '.' + variant, get(theme, variant || defaultVariant)); // const variantStyle = css(unstyledVariant, breakpoint)({ theme, themeKey })
  // get the font-family from the variant, and pass it to the other styles as a fallback.
  // if there is no font-family in the variant, check the defaultStyle
  // this lets us support customFonts/font weights (https://github.com/nandorojo/dripsy/issues/51)

  var _ref = maybeUnstyledVariantObjectFromTheme || {},
      fontFamily = _ref.fontFamily;

  fontFamily = fontFamily || (defaultStyle === null || defaultStyle === void 0 ? void 0 : defaultStyle.fontFamily);
  var baseStyle = css(defaultStyle, breakpoint)({
    theme: theme,
    fontFamily: fontFamily,
    themeKey: themeKey
  });
  var multipleVariantsStyle = multipleVariants.map(function (variantKey) {
    return css( // @ts-expect-error why does get think it's a number and not undefined?
    get(theme, themeKey + '.' + variantKey, get(theme, variantKey)), breakpoint)({
      theme: theme,
      fontFamily: fontFamily,
      themeKey: themeKey
    });
  }).reduce(function () {
    var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _objectSpread2(_objectSpread2({}, prev), next);
  }, {});
  var superStyle = css(sx, breakpoint)({
    theme: theme,
    fontFamily: fontFamily,
    themeKey: themeKey
  });

  var createStyleSheet = function createStyleSheet(style) {
    var stylesheet = StyleSheet.create({
      style: style
    });
    return stylesheet.style;
  };

  var baseStyleSheet = createStyleSheet(_objectSpread2(_objectSpread2({}, baseStyle), multipleVariantsStyle));
  var superStyleSheet = createStyleSheet(superStyle);
  var styles = [// order the styles from default, to variant, style, and finally sx
  baseStyleSheet].concat(_toConsumableArray(Array.isArray(style) ? style : [style]), [superStyleSheet]);

  if (typeof style == 'function') {
    // for Pressable, we pass a function prop to style
    styles = function styles(interactionState) {
      return [baseStyleSheet, style(interactionState), superStyleSheet];
    };
  }

  return {
    styles: styles
  };
}

var o = new WeakMap();
var l = 0;
function i(t) {
  var c = _typeof(t),
      s = t && t.constructor,
      f = s == Date;

  var e, n;

  if (Object(t) === t && !f && s != RegExp) {
    if (e = o.get(t), e) return e;

    if (e = ++l + "~", o.set(t, e), s == Array) {
      for (e = "@", n = 0; n < t.length; n++) {
        e += i(t[n]) + ",";
      }

      o.set(t, e);
    }

    if (s == Object) {
      e = "#";
      var y = Object.keys(t).sort();

      for (; typeof (n = y.pop()) != "undefined";) {
        typeof t[n] != "undefined" && (e += n + ":" + i(t[n]) + ",");
      }

      o.set(t, e);
    }
  } else e = f ? t.toJSON() : c == "symbol" ? t.toString() : c == "string" ? JSON.stringify(t) : "" + t;

  return e;
}

function useStableMemo(factory, deps) {
  return useMemo(factory, [i(deps)]);
}

var _excluded$2 = ["defaultStyle"],
    _excluded2 = ["sx", "as", "variant", "style", "themeKey", "variants"];
function createThemedComponent(Component) {
  var _Component$displayNam;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      baseStyle = _ref.defaultStyle,
      options = _objectWithoutProperties(_ref, _excluded$2);

  var WrappedComponent = /*#__PURE__*/React.forwardRef(function Wrapped(prop, ref) {
    var _sx = prop.sx,
        SuperComponent = prop.as,
        variant = prop.variant,
        style = prop.style,
        _prop$themeKey = prop.themeKey,
        themeKey = _prop$themeKey === void 0 ? options.themeKey : _prop$themeKey,
        _prop$variants = prop.variants,
        variants = _prop$variants === void 0 ? options.defaultVariants : _prop$variants,
        props = _objectWithoutProperties(prop, _excluded2);

    if (typeof __DEV__ !== 'undefined' && typeof SuperComponent === 'string') {
      console.error("[dripsy] Looks like you used an invalid \"as\" prop. \"".concat(SuperComponent, "\" can't be string. Please pass a valid React component. HTML elements are not supported."));
    }

    var defaultStyle = typeof baseStyle == 'function' ? baseStyle(prop) : baseStyle;

    var _useDripsyTheme = useDripsyTheme(),
        theme = _useDripsyTheme.theme; // make the sx factory out here so that it's a stable dependency for useStableMemo


    var sx = typeof _sx == 'function' ? _sx(theme) : _sx;
    var breakpoint = useBreakpointIndex();

    var _useStableMemo = useStableMemo(function () {
      return mapPropsToStyledComponent({
        theme: theme,
        breakpoint: breakpoint,
        variant: variant,
        sx: sx,
        style: style,
        variants: variants
      }, _objectSpread2(_objectSpread2({}, options), {}, {
        themeKey: themeKey,
        defaultStyle: defaultStyle
      }));
    }, [theme, breakpoint, variant, sx, style, variants, themeKey, defaultStyle]),
        styles = _useStableMemo.styles;

    var TheComponent = SuperComponent || Component;
    return /*#__PURE__*/React.createElement(TheComponent, _extends({}, props, {
      ref: ref,
      style: styles
    }));
  });
  WrappedComponent.displayName = "Dripsy.".concat((_Component$displayNam = Component === null || Component === void 0 ? void 0 : Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : 'NoNameComponent');
  return WrappedComponent;
}

var View$1 = createThemedComponent(View$2);

createThemedComponent(View$2, {
  defaultStyle: {
    flexDirection: 'row'
  }
});

/**
 * `styled` is little more than a recreation of `createThemedComponent`, with a nicer API. It does the same thing, but looks a bit nicer to use and has a clean name 😇
 *
 * ```jsx
 * import { Text } from 'react-native'
 *
 * const MyText = styled(Text)({
 *   borderBottomStyle: 'solid',
 *   color: ['primary', 'secondary']
 * })
 * ```
 *
 */

function styled(Component) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      themeKey = _ref.themeKey,
      defaultVariant = _ref.defaultVariant;

  return function dripsyFactory(defaultStyle) {
    return createThemedComponent(Component, {
      defaultVariant: defaultVariant,
      themeKey: themeKey,
      defaultStyle: defaultStyle
    });
  };
}

styled(Pressable)(function (_ref) {
  var showCursor = _ref.showCursor;
  return _objectSpread2({}, Platform.select({
    web: {
      cursor: showCursor ? 'pointer' : 'default'
    }
  }));
});

var defaultFontStyle = {
  fontFamily: 'root'
};

createThemedComponent(Text$1, {
  themeKey: 'text',
  defaultVariant: 'body',
  defaultStyle: defaultFontStyle
});

createThemedComponent(Image);

function rem(value) {
  if (Platform.OS === 'web') return "".concat(value, "rem");
  return PixelRatio.getFontScale() * 16 * value;
}
function em(value) {
  if (Platform.OS === 'web') return "".concat(value, "em");
  return rem(value);
}

var Text = Text$1;

function createHeadingComponent(level) {
  var nativeProps = Platform.select({
    web: {
      'aria-level': "".concat(level)
    },
    "default": {}
  });
  return /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(Text, Object.assign({}, nativeProps, {
      accessibilityRole: "header"
    }, props, {
      style: [styles$1["h".concat(level)], props.style],
      ref: ref
    }));
  });
}

var H1 = createHeadingComponent(1);
var H2 = createHeadingComponent(2);
var H3 = createHeadingComponent(3);
var H4 = createHeadingComponent(4);
var H5 = createHeadingComponent(5);
var H6 = createHeadingComponent(6); // Default web styles: http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css

var styles$1 = StyleSheet.create({
  h1: {
    fontSize: em(2),
    marginVertical: em(0.67),
    fontWeight: 'bold'
  },
  h2: {
    fontSize: em(1.5),
    marginVertical: em(0.83),
    fontWeight: 'bold'
  },
  h3: {
    fontSize: em(1.17),
    marginVertical: em(1),
    fontWeight: 'bold'
  },
  h4: {
    fontSize: em(1),
    marginVertical: em(1.33),
    fontWeight: 'bold'
  },
  h5: {
    fontSize: em(0.83),
    marginVertical: em(1.67),
    fontWeight: 'bold'
  },
  h6: {
    fontSize: em(0.67),
    marginVertical: em(2.33),
    fontWeight: 'bold'
  }
});

var _excluded$1 = ["href", "target"];
var A = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var href = _ref.href,
      target = _ref.target,
      props = _objectWithoutProperties(_ref, _excluded$1);

  var nativeProps = Platform.select({
    web: {
      href: href,
      target: target
    },
    "default": {
      onPress: function onPress(event) {
        props.onPress && props.onPress(event);

        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href);
        }
      }
    }
  });
  return /*#__PURE__*/React.createElement(Text, Object.assign({
    accessibilityRole: "link"
  }, props, nativeProps, {
    ref: ref
  }));
});

var View = View$2;

function createView$1() {
  var nativeProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(View, Object.assign({}, nativeProps, props, {
      ref: ref
    }));
  });
}

createView$1(Platform.select({
  web: {
    accessibilityRole: 'navigation'
  }
}));
createView$1(Platform.select({
  web: {
    accessibilityRole: 'contentinfo'
  }
}));
createView$1(Platform.select({
  web: {
    accessibilityRole: 'complementary'
  }
}));
createView$1(Platform.select({
  web: {
    accessibilityRole: 'banner'
  },
  "default": {
    accessibilityRole: 'header'
  }
}));
createView$1(Platform.select({
  web: {
    accessibilityRole: 'main'
  }
}));
createView$1(Platform.select({
  web: {
    accessibilityRole: 'article'
  }
}));

var _excluded = ["style"];
var P = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Text, Object.assign({}, props, {
    style: [styles.p, style],
    ref: ref
  }));
});
var styles = StyleSheet.create({
  p: {
    marginVertical: em(1)
  },
  b: {
    fontWeight: 'bold'
  },
  q: {
    fontStyle: 'italic'
  },
  code: {
    fontFamily: Platform.select({
      "default": 'Courier',
      android: 'monospace'
    }),
    fontWeight: '500'
  },
  pre: {
    marginVertical: em(1)
  },
  blockQuote: {
    marginVertical: em(1)
  },
  br: {
    width: 0,
    height: em(0.5)
  },
  s: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  mark: {
    backgroundColor: 'yellow',
    color: 'black'
  },
  i: {
    fontStyle: 'italic'
  }
});

StyleSheet.create({
  hr: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#9A9A9A',
    borderBottomColor: '#EEEEEE',
    marginVertical: 8
  }
});

StyleSheet.create({
  caption: {
    textAlign: 'center',
    fontSize: em(1)
  },
  th: {
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: em(1)
  },
  tr: {
    flexDirection: 'row'
  },
  td: {
    flex: 1,
    fontSize: em(1)
  }
});

function createView() {
  var nativeProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return /*#__PURE__*/forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(View, Object.assign({}, nativeProps, props, {
      ref: ref
    }));
  });
}

createView(Platform.select({
  web: {
    accessibilityRole: 'list'
  }
}));

createThemedComponent(H1, {
  themeKey: 'text',
  defaultVariant: 'h1',
  defaultStyle: defaultFontStyle
});

createThemedComponent(H2, {
  themeKey: 'text',
  defaultVariant: 'h2',
  defaultStyle: defaultFontStyle
});

createThemedComponent(H3, {
  themeKey: 'text',
  defaultVariant: 'h3',
  defaultStyle: defaultFontStyle
});

createThemedComponent(H4, {
  themeKey: 'text',
  defaultVariant: 'h4',
  defaultStyle: defaultFontStyle
});

createThemedComponent(H5, {
  themeKey: 'text',
  defaultVariant: 'h5',
  defaultStyle: defaultFontStyle
});

createThemedComponent(H6, {
  themeKey: 'text',
  defaultVariant: 'h6',
  defaultStyle: defaultFontStyle
});

//   themeKey: 'text',
//   defaultVariant: 'a',
//   defaultStyle: defaultFontStyle,
// })

styled(A, {
  themeKey: 'text',
  defaultVariant: 'a'
})(defaultFontStyle);

createThemedComponent(P, {
  themeKey: 'text',
  defaultVariant: 'p',
  defaultStyle: defaultFontStyle
});

function useSx() {
  var _useDripsyTheme = useDripsyTheme(),
      theme = _useDripsyTheme.theme;

  var breakpoint = useBreakpointIndex();
  var cache = useRef({});
  return useCallback(function (sx) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        themeKey = _ref.themeKey;

    var themedStyle = css(sx, breakpoint)({
      theme: theme,
      themeKey: themeKey
    });
    var hash = i(themedStyle);

    if (!cache.current[hash]) {
      cache.current[hash] = themedStyle;
    }

    return cache.current[hash];
  }, [breakpoint, theme]);
}

createThemedComponent(ScrollView);

createThemedComponent(TextInput, {
  themeKey: 'forms',
  defaultVariant: 'input',
  defaultStyle: defaultFontStyle
});

createThemedComponent(FlatList);

function Indicator(props) {
  var colors = useDripsyTheme().theme.colors;
  var color = props.color;

  if (typeof color === 'string' && colors !== null && colors !== void 0 && colors[color]) {
    color = colors[color];
  }

  return /*#__PURE__*/React.createElement(ActivityIndicator, _extends({}, props, {
    color: color
  }));
}

createThemedComponent(Indicator);

createThemedComponent(View$2, {
  defaultVariant: 'container',
  themeKey: 'layout',
  defaultStyle: {
    mx: 'auto',
    maxWidth: 'container',
    width: '100%'
  }
});

createThemedComponent(SafeAreaView);

var useIsSSRReady = function useIsSSRReady(_ref) {
  var _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? false : _ref$ssr;

  var _useState = useState(function () {
    if (Platform.OS !== 'web') {
      return true;
    }

    if (ssr) {
      return false;
    }

    return true;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  var isSSR = useRef(ssr);
  useEffect(function () {
    if (isSSR.current) {
      setReady(true);
    }
  }, []);
  return {
    ready: ready
  };
};

function DripsyProvider(p) {
  var _p$ssrPlaceholder = p.ssrPlaceholder,
      ssrPlaceholder = _p$ssrPlaceholder === void 0 ? null : _p$ssrPlaceholder,
      ssr = p.ssr,
      theme = p.theme,
      children = p.children;

  var _useIsSSRReady = useIsSSRReady({
    ssr: ssr
  }),
      ready = _useIsSSRReady.ready;

  var context = useMemo(function () {
    return {
      theme: theme
    };
  }, [theme]);

  if (!ready) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, ssrPlaceholder);
  }

  return /*#__PURE__*/React.createElement(DripsyThemeContext.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(BreakpointIndexProvider, null, children));
}

StyleSheet.create({
  visuallyHidden: {
    opacity: 0
  }
});

function makeTheme(theme) {
  return theme;
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

var shape$1 = {
    BORDER_RADIUS: {
        '1': 5,
        '2': 10,
        '3': 15,
        '4': 20,
        '5': 25,
        '6': 30,
        '7': 35,
        '8': 40
    },
    BORDER_WIDTH: {
        '1': 1,
        '2': 2,
        '3': 4,
        '4': 5,
        '5': 8,
        '6': 10,
        '7': 12,
        '8': 14
    },
    PADDING: {
        '1': '1%',
        '2': '2%',
        '3': '3%',
        '4': '4%',
        '5': '5%',
        '6': '6%',
        '7': '7%',
        '8': '8%'
    }
};

var shape = {
    r1: {
        borderRadius: shape$1.BORDER_RADIUS[1]
    },
    r2: {
        borderRadius: shape$1.BORDER_RADIUS[2]
    },
    r3: {
        borderRadius: shape$1.BORDER_RADIUS[3]
    },
    r4: {
        borderRadius: shape$1.BORDER_RADIUS[4]
    },
    r5: {
        borderRadius: shape$1.BORDER_RADIUS[5]
    },
    r6: {
        borderRadius: shape$1.BORDER_RADIUS[6]
    },
    r7: {
        borderRadius: shape$1.BORDER_RADIUS[7]
    },
    r8: {
        borderRadius: shape$1.BORDER_RADIUS[8]
    },
    p1: {
        padding: shape$1.PADDING[1]
    },
    p2: {
        padding: shape$1.PADDING[2]
    },
    p3: {
        padding: shape$1.PADDING[3]
    },
    p4: {
        padding: shape$1.PADDING[4]
    },
    p5: {
        padding: shape$1.PADDING[5]
    },
    p6: {
        padding: shape$1.PADDING[6]
    },
    p7: {
        padding: shape$1.PADDING[7]
    },
    p8: {
        padding: shape$1.PADDING[8]
    },
    pr1: {
        paddingRight: shape$1.PADDING[1]
    },
    pr2: {
        paddingRight: shape$1.PADDING[2]
    },
    pr3: {
        paddingRight: shape$1.PADDING[3]
    },
    pr4: {
        paddingRight: shape$1.PADDING[4]
    },
    pr5: {
        paddingRight: shape$1.PADDING[5]
    },
    pr6: {
        paddingRight: shape$1.PADDING[6]
    },
    pr7: {
        paddingRight: shape$1.PADDING[7]
    },
    pr8: {
        paddingRight: shape$1.PADDING[8]
    },
    pl1: {
        paddingLeft: shape$1.PADDING[1]
    },
    pl2: {
        paddingLeft: shape$1.PADDING[2]
    },
    pl3: {
        paddingLeft: shape$1.PADDING[3]
    },
    pl4: {
        paddingLeft: shape$1.PADDING[4]
    },
    pl5: {
        paddingLeft: shape$1.PADDING[5]
    },
    pl6: {
        paddingLeft: shape$1.PADDING[6]
    },
    pl7: {
        paddingLeft: shape$1.PADDING[7]
    },
    pl8: {
        paddingLeft: shape$1.PADDING[8]
    },
    pt1: {
        paddingTop: shape$1.PADDING[1]
    },
    pt2: {
        paddingTop: shape$1.PADDING[2]
    },
    pt3: {
        paddingTop: shape$1.PADDING[3]
    },
    pt4: {
        paddingTop: shape$1.PADDING[4]
    },
    pt5: {
        paddingTop: shape$1.PADDING[5]
    },
    pt6: {
        paddingTop: shape$1.PADDING[6]
    },
    pt7: {
        paddingTop: shape$1.PADDING[7]
    },
    pt8: {
        paddingTop: shape$1.PADDING[8]
    },
    pb1: {
        paddingBottom: shape$1.PADDING[1]
    },
    pb2: {
        paddingBottom: shape$1.PADDING[2]
    },
    pb3: {
        paddingBottom: shape$1.PADDING[3]
    },
    pb4: {
        paddingBottom: shape$1.PADDING[4]
    },
    pb5: {
        paddingBottom: shape$1.PADDING[5]
    },
    pb6: {
        paddingBottom: shape$1.PADDING[6]
    },
    pb7: {
        paddingBottom: shape$1.PADDING[7]
    },
    pb8: {
        paddingBottom: shape$1.PADDING[8]
    },
    b1: {
        borderWidth: shape$1.BORDER_WIDTH[1]
    },
    b2: {
        borderWidth: shape$1.BORDER_WIDTH[2]
    },
    b3: {
        borderWidth: shape$1.BORDER_WIDTH[3]
    },
    b4: {
        borderWidth: shape$1.BORDER_WIDTH[4]
    },
    b5: {
        borderWidth: shape$1.BORDER_WIDTH[5]
    },
    b6: {
        borderWidth: shape$1.BORDER_WIDTH[6]
    },
    b7: {
        borderWidth: shape$1.BORDER_WIDTH[7]
    },
    b8: {
        borderWidth: shape$1.BORDER_WIDTH[8]
    },
    widthFull: {
        width: '100%'
    },
    heightFull: {
        height: '100%'
    },
    widthScreen: {
        width: Dimensions.get('window').width
    },
    heightScreen: {
        height: Dimensions.get('window').height
    }
};

var layout$1 = {
    FLEX: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8
    },
    FLEX_BASIS: {
        '1': '1%',
        '2': '2%',
        '3': '3%',
        '4': '4%',
        '5': '5%',
        '6': '6%',
        '7': '7%',
        '8': '8%'
    }
};

var layout = {
    alignCenter: {
        alignItems: 'center'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyAround: {
        justifyContent: 'space-around'
    },
    justifyEvenly: {
        justifyContent: 'space-around'
    },
    f1: {
        flex: layout$1.FLEX[1]
    },
    f2: {
        flex: layout$1.FLEX[2]
    },
    f3: {
        flex: layout$1.FLEX[3]
    },
    f4: {
        flex: layout$1.FLEX[4]
    },
    f5: {
        flex: layout$1.FLEX[5]
    },
    f6: {
        flex: layout$1.FLEX[6]
    },
    f7: {
        flex: layout$1.FLEX[7]
    },
    f8: {
        flex: layout$1.FLEX[8]
    },
    fb1: {
        flexBasis: layout$1.FLEX_BASIS[1]
    },
    fb2: {
        flexBasis: layout$1.FLEX_BASIS[2]
    },
    fb3: {
        flexBasis: layout$1.FLEX_BASIS[3]
    },
    fb4: {
        flexBasis: layout$1.FLEX_BASIS[4]
    },
    fb5: {
        flexBasis: layout$1.FLEX_BASIS[5]
    },
    fb6: {
        flexBasis: layout$1.FLEX_BASIS[6]
    },
    fb7: {
        flexBasis: layout$1.FLEX_BASIS[7]
    },
    fb8: {
        flexBasis: layout$1.FLEX_BASIS[8]
    },
    fbFull: {
        flexBasis: '100%'
    },
    fn: {
        flex: 0
    }
};

var COLOR = {
    PRIMARY: '#407AA8',
    SECONDARY: '#51ACF5',
    SUCCESS: '#8AF494',
    DANGER: '#A83B38',
    WARNING: '#F46E6A',
    INFO: '#BAA4F5',
    LIGHT: '#F3F0C7',
    DARK: '#131313',
    WHITE: '#FFFFFF',
    MUTED: '#303136'
};

var color = {
    bdInfo: {
        borderColor: COLOR.INFO
    },
    bgInfo: {
        backgroundColor: COLOR.INFO
    },
    inInfo: {
        color: COLOR.INFO
    },
    bdWarning: {
        borderColor: COLOR.WARNING
    },
    bgWarning: {
        backgroundColor: COLOR.WARNING
    },
    inWarning: {
        color: COLOR.WARNING
    },
    bdPrimary: {
        borderColor: COLOR.PRIMARY
    },
    bgPrimary: {
        backgroundColor: COLOR.PRIMARY
    },
    inPrimary: {
        color: COLOR.PRIMARY
    },
    bdSecondary: {
        borderColor: COLOR.SECONDARY
    },
    bgSecondary: {
        backgroundColor: COLOR.SECONDARY
    },
    inSecondary: {
        color: COLOR.SECONDARY
    },
    bdLight: {
        borderColor: COLOR.LIGHT
    },
    bgLight: {
        backgroundColor: COLOR.LIGHT
    },
    inLight: {
        color: COLOR.LIGHT
    },
    bdDark: {
        borderColor: COLOR.DARK
    },
    bgDark: {
        backgroundColor: COLOR.DARK
    },
    inDark: {
        color: COLOR.DARK
    },
    bdMuted: {
        borderColor: COLOR.MUTED
    },
    bgMuted: {
        backgroundColor: COLOR.MUTED
    },
    inMuted: {
        color: COLOR.MUTED
    },
    bdDanger: {
        borderColor: COLOR.DANGER
    },
    bgDanger: {
        backgroundColor: COLOR.DANGER
    },
    inDanger: {
        color: COLOR.DANGER
    },
    bdSuccess: {
        borderColor: COLOR.SUCCESS
    },
    bgSuccess: {
        backgroundColor: COLOR.SUCCESS
    },
    inSuccess: {
        color: COLOR.SUCCESS
    },
    bdWhite: {
        borderColor: COLOR.WHITE
    },
    bgWhite: {
        backgroundColor: COLOR.WHITE
    },
    inWhite: {
        color: COLOR.WHITE
    }
};

var position$1 = {
    '1': '1%',
    '2': '2%',
    '3': '3%',
    '4': '4%',
    '5': '5%',
    '6': '6%',
    '7': '7%',
    '8': '8%'
};

var position = {
    relative: {
        position: 'relative'
    },
    absolute: {
        position: 'absolute'
    },
    top1: {
        top: position$1[1]
    },
    top2: {
        top: position$1[2]
    },
    top3: {
        top: position$1[3]
    },
    top4: {
        top: position$1[4]
    },
    top5: {
        top: position$1[5]
    },
    top6: {
        top: position$1[6]
    },
    top7: {
        top: position$1[7]
    },
    top8: {
        top: position$1[8]
    },
    bottom1: {
        bottom: position$1[1]
    },
    bottom2: {
        bottom: position$1[2]
    },
    bottom3: {
        bottom: position$1[3]
    },
    bottom4: {
        bottom: position$1[4]
    },
    bottom5: {
        bottom: position$1[5]
    },
    bottom6: {
        bottom: position$1[6]
    },
    bottom7: {
        bottom: position$1[7]
    },
    bottom8: {
        bottom: position$1[8]
    },
    left1: {
        left: position$1[1]
    },
    left2: {
        left: position$1[2]
    },
    left3: {
        left: position$1[3]
    },
    left4: {
        left: position$1[4]
    },
    left5: {
        left: position$1[5]
    },
    left6: {
        left: position$1[6]
    },
    left7: {
        left: position$1[7]
    },
    left8: {
        left: position$1[8]
    },
    right1: {
        right: position$1[1]
    },
    right2: {
        right: position$1[2]
    },
    right3: {
        right: position$1[3]
    },
    right4: {
        right: position$1[4]
    },
    right5: {
        right: position$1[5]
    },
    right6: {
        right: position$1[6]
    },
    right7: {
        right: position$1[7]
    },
    right8: {
        right: position$1[8]
    }
};

var spacing$1 = {
    '1': '1%',
    '2': '2%',
    '3': '3%',
    '4': '4%',
    '5': '5%',
    '6': '6%',
    '7': '7%',
    '8': '8%'
};

var spacing = {
    m1: {
        margin: spacing$1[1]
    },
    m2: {
        margin: spacing$1[2]
    },
    m3: {
        margin: spacing$1[3]
    },
    m4: {
        margin: spacing$1[4]
    },
    m5: {
        margin: spacing$1[5]
    },
    m6: {
        margin: spacing$1[6]
    },
    m7: {
        margin: spacing$1[7]
    },
    m8: {
        margin: spacing$1[8]
    },
    mr1: {
        marginRight: spacing$1[1]
    },
    mr2: {
        marginRight: spacing$1[2]
    },
    mr3: {
        marginRight: spacing$1[3]
    },
    mr4: {
        marginRight: spacing$1[4]
    },
    mr5: {
        marginRight: spacing$1[5]
    },
    mr6: {
        marginRight: spacing$1[6]
    },
    mr7: {
        marginRight: spacing$1[7]
    },
    mr8: {
        marginRight: spacing$1[8]
    },
    ml1: {
        marginLeft: spacing$1[1]
    },
    ml2: {
        marginLeft: spacing$1[2]
    },
    ml3: {
        marginLeft: spacing$1[3]
    },
    ml4: {
        marginLeft: spacing$1[4]
    },
    ml5: {
        marginLeft: spacing$1[5]
    },
    ml6: {
        marginLeft: spacing$1[6]
    },
    ml7: {
        marginLeft: spacing$1[7]
    },
    ml8: {
        marginLeft: spacing$1[8]
    },
    mt1: {
        marginTop: spacing$1[1]
    },
    mt2: {
        marginTop: spacing$1[2]
    },
    mt3: {
        marginTop: spacing$1[3]
    },
    mt4: {
        marginTop: spacing$1[4]
    },
    mt5: {
        marginTop: spacing$1[5]
    },
    mt6: {
        marginTop: spacing$1[6]
    },
    mt7: {
        marginTop: spacing$1[7]
    },
    mt8: {
        marginTop: spacing$1[8]
    },
    mb1: {
        marginBottom: spacing$1[1]
    },
    mb2: {
        marginBottom: spacing$1[2]
    },
    mb3: {
        marginBottom: spacing$1[3]
    },
    mb4: {
        marginBottom: spacing$1[4]
    },
    mb5: {
        marginBottom: spacing$1[5]
    },
    mb6: {
        marginBottom: spacing$1[6]
    },
    mb7: {
        marginBottom: spacing$1[7]
    },
    mb8: {
        marginBottom: spacing$1[8]
    }
};

var container = {
    container: {
        display: 'flex'
    },
    fullHeight: {
        height: 'auto'
    },
    scroll: {
        flex: 1,
        height: 'auto'
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    wrap: {
        flexWrap: 'wrap'
    },
    nowrap: {
        flexWrap: 'nowrap'
    },
    contentCenter: {
        justifyContent: 'center'
    },
    contentLeft: {
        justifyContent: 'flex-start'
    },
    contentRight: {
        justifyContent: 'flex-end'
    }
};

var element = {
    element: {}
};

var components = _assign(_assign({}, container), element);

var FONT_SIZE = {
    xs: '0.75em',
    sm: '0.875em',
    base: '1em',
    lg: '1.125em',
    xl: '1.25em',
    '2xl': '1.5em',
    '3xl': '2em',
    '4xl': '3em'
};

var typography = {
    bold: {
        fontWeight: 'bold'
    },
    italic: {
        fontStyle: 'italic'
    },
    underline: {
        textDecorationLine: 'underline'
    },
    textXs: {
        fontSize: FONT_SIZE['xs']
    },
    textSm: {
        fontSize: FONT_SIZE['sm']
    },
    textBase: {
        fontSize: FONT_SIZE['base']
    },
    textLg: {
        fontSize: FONT_SIZE['lg']
    },
    textXl: {
        fontSize: FONT_SIZE['xl']
    },
    text2xl: {
        fontSize: FONT_SIZE['2xl']
    },
    text3xl: {
        fontSize: FONT_SIZE['3xl']
    },
    text4xl: {
        fontSize: FONT_SIZE['4xl']
    },
    textCenter: {
        textAlign: 'center'
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    }
};

var defaultStyles = _assign(_assign(_assign(_assign(_assign(_assign({}, color), shape), spacing), layout), position), typography);

var variants = _assign({ layout: defaultStyles }, components);

var theme = makeTheme(_assign({}, variants));

var themeOverLoader = function (laryProps) {
    var overLoadedShape = shape;
    var overLoadedLayout = layout;
    var overLoadedColor = color;
    var overLoadedPosition = position;
    var overLoadedSpacing = spacing;
    var overLoadedTypography = typography;
    if (laryProps.shape) {
        var overLoadedShapeKeys = Object.keys(overLoadedShape);
        for (var _i = 0, overLoadedShapeKeys_1 = overLoadedShapeKeys; _i < overLoadedShapeKeys_1.length; _i++) {
            var key = overLoadedShapeKeys_1[_i];
            var styleAttribute = Object.keys(overLoadedShape[key])[0];
            if (key.indexOf('r') === 0)
                overLoadedShape[key][styleAttribute] = laryProps.shape.BORDER_RADIUS[key.replace('r', '')];
            if (key.indexOf('p') === 0)
                overLoadedShape[key][styleAttribute] =
                    laryProps.shape.PADDING[key
                        .replace('p', '')
                        .replace('pr', '')
                        .replace('pl', '')
                        .replace('pb', '')
                        .replace('pt', '')];
            if (key.indexOf('b') === 0)
                overLoadedShape[key][styleAttribute] = laryProps.shape.BORDER_WIDTH[key.replace('b', '')];
        }
    }
    if (laryProps.layout) {
        var overLoadedLayoutKeys = Object.keys(overLoadedLayout);
        for (var _a = 0, overLoadedLayoutKeys_1 = overLoadedLayoutKeys; _a < overLoadedLayoutKeys_1.length; _a++) {
            var key = overLoadedLayoutKeys_1[_a];
            var styleAttribute = Object.keys(overLoadedLayout[key])[0];
            if (key.indexOf('fb') === 0 && key.indexOf('full') === -1)
                overLoadedLayout[key][styleAttribute] = laryProps.layout.FLEX_BASIS[key.replace('fb', '')];
            else if (key.indexOf('f') === 0 && key.indexOf('full') === -1)
                overLoadedLayout[key][styleAttribute] = laryProps.layout.FLEX[key.replace('f', '')];
        }
    }
    if (laryProps.color) {
        var overLoadedColorKeys = Object.keys(color);
        for (var _b = 0, overLoadedColorKeys_1 = overLoadedColorKeys; _b < overLoadedColorKeys_1.length; _b++) {
            var key = overLoadedColorKeys_1[_b];
            var styleAttribute = Object.keys(overLoadedColor[key])[0];
            if (key.indexOf('Info') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.INFO;
            if (key.indexOf('Warning') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.WARNING;
            if (key.indexOf('Primary') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.PRIMARY;
            if (key.indexOf('Secondary') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.SECONDARY;
            if (key.indexOf('Light') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.LIGHT;
            if (key.indexOf('Dark') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.DARK;
            if (key.indexOf('Muted') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.MUTED;
            if (key.indexOf('White') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.WHITE;
            if (key.indexOf('Danger') !== -1)
                overLoadedColor[key][styleAttribute] = laryProps.color.DANGER;
        }
    }
    if (laryProps.position) {
        var overLoadedPositionKeys = Object.keys(overLoadedPosition);
        for (var _c = 0, overLoadedPositionKeys_1 = overLoadedPositionKeys; _c < overLoadedPositionKeys_1.length; _c++) {
            var key = overLoadedPositionKeys_1[_c];
            var styleAttribute = Object.keys(overLoadedPosition[key])[0];
            if (key.indexOf('top') === 0)
                overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('top', '')];
            if (key.indexOf('bottom') === 0)
                overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('bottom', '')];
            if (key.indexOf('left') === 0)
                overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('left', '')];
            if (key.indexOf('right') === 0)
                overLoadedPosition[key][styleAttribute] = laryProps.position[key.replace('right', '')];
        }
    }
    if (laryProps.spacing) {
        var overLoadedSpacingKeys = Object.keys(overLoadedSpacing);
        for (var _d = 0, overLoadedSpacingKeys_1 = overLoadedSpacingKeys; _d < overLoadedSpacingKeys_1.length; _d++) {
            var key = overLoadedSpacingKeys_1[_d];
            var styleAttribute = Object.keys(overLoadedSpacing[key])[0];
            overLoadedSpacing[key][styleAttribute] =
                laryProps.spacing[key
                    .replace('m', '')
                    .replace('mt', '')
                    .replace('mr', '')
                    .replace('mb', '')
                    .replace('ml', '')];
        }
    }
    if (laryProps.typography) {
        var overLoadedTypographyKeys = Object.keys(overLoadedTypography);
        for (var _e = 0, overLoadedTypographyKeys_1 = overLoadedTypographyKeys; _e < overLoadedTypographyKeys_1.length; _e++) {
            var key = overLoadedTypographyKeys_1[_e];
            var styleAttribute = Object.keys(overLoadedTypography[key]);
            var configKey = key.replace('text', '').toLowerCase();
            console.log('key =>', configKey, 'isExistOnConfig => ', !!laryProps.typography[key]);
            if (laryProps.typography[configKey])
                overLoadedTypography[key][styleAttribute] = laryProps.typography[configKey];
        }
    }
    if (laryProps.shape ||
        laryProps.layout ||
        laryProps.color ||
        laryProps.position ||
        laryProps.spacing ||
        laryProps.typography) {
        var overLoadedVariants = _assign(_assign({}, components), { layout: _assign(_assign(_assign(_assign(_assign(_assign({}, overLoadedShape), overLoadedLayout), overLoadedColor), overLoadedPosition), overLoadedSpacing), overLoadedTypography) });
        return makeTheme(overLoadedVariants);
    }
    return theme;
};

/**
 * @function LaryProvider
 *
 * @param props : LaryProviderPropsType
 *
 *
 * @description It must wrap all your app to use Lary's components. You can pass the theme configuration props to the provider, or use the default theme. You can use these props :
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * const MainProvider = ({ children }: { children: JSX.Element }) => {
 *    return (
 *        <LaryProvider color={{...YOUR_COLOR_CONFIGURATION}}>
 *            {children}
 *        </LaryProvider>
 *    )
 * }
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 * @exemple There is an exemple of the color configuration file ⤵️
 * ```javascript
 * const COLOR = {
 *     PRIMARY : '#5B4FF7',
 *     SECONDARY: '#C4C4C4',
 *     SUCCESS: '#4CD964',
 *     DANGER: '#FF3B30',
 *     WARNING: '#FF9500',
 *     INFO: '#5B4FF7',
 *     LIGHT: '#F3F3F3',
 *     DARK: '#212121',
 *     WHITE: '#FFFFFF',
 *     MUTED: '#313131',
 * }
 *
 * export default COLOR
 * ```
 * @exemple There is an exemple of the layout configuration file ⤵️
 *```javascript
 * const LAYOUT = {
 *   FLEX : {
 *       '1' : 1,
 *       '2' : 2,
 *       '3' : 3,
 *       '4' : 4,
 *       '5' : 5,
 *       '6' : 6,
 *       '7' : 7,
 *       '8' : 8,
 *   },
 *   FLEX_BASIS : {
 *       '1' : '1%',
 *       '2' : '2%',
 *       '3' : '3%',
 *       '4' : '4%',
 *       '5' : '5%',
 *       '6' : '6%',
 *       '7' : '7%',
 *       '8' : '8%',
 *   }
 * }
 *
 * export default LAYOUT
 * ```
 * @exemple There is an exemple of the shape configuration file ⤵️
 * ```javascript
 * const SHAPE = {
 *   BORDER_RADIUS: {
 *       '1' : 5,
 *       '2' : 10,
 *       '3' : 15,
 *       '4' : 20,
 *       '5' : 25,
 *       '6' : 30,
 *       '7' : 35,
 *       '8' : 40,
 *   },
 *   BORDER_WIDTH: {
 *       '1' : 1,
 *       '2' : 2,
 *       '3' : 4,
 *       '4' : 5,
 *       '5' : 8,
 *       '6' : 10,
 *       '7' : 12,
 *       '8' : 14,
 *   },
 *   PADDING: {
 *       '1' : '1%',
 *       '2' : '2%',
 *       '3' : '3%',
 *       '4' : '4%',
 *       '5' : '5%',
 *       '6' : '6%',
 *       '7' : '7%',
 *       '8' : '8%',
 *   },
 * }
 *
 * export default SHAPE;
 * ```
 * @exemple There is an exemple of the spacing configuration file ⤵️
 * ```javascript
 * const SPACING = {
 *      '1' : '1%',
 *      '2' : '2%',
 *      '3' : '3%',
 *      '4' : '4%',
 *      '5' : '5%',
 *      '6' : '6%',
 *      '7' : '7%',
 *      '8' : '8%',
 *  }
 *
 *  export default SPACING
 * ```
 * @exemple There is an exemple of the position configuration file ⤵️
 * ```javascript
 * const POSITION = {
 *     '1': '1%',
 *     '2': '2%',
 *     '3': '3%',
 *     '4': '4%',
 *     '5': '5%',
 *     '6': '6%',
 *     '7': '7%',
 *     '8': '8%',
 *  }
 *
 *  export default POSITION
 * ```
 *
 * @property color To overload colors theme configuration.
 * @property layout To overload layout theme configuration.
 * @property shape To overload shape theme configuration.
 * @property spacing To overload spacing theme configuration.
 * @property positions To overload positions theme configuration.
 *
 * @returns {JSX.Element}
 */
var LaryProvider = function (props) {
    return (React.createElement(DripsyProvider, { theme: themeOverLoader(props) }, props.children));
};

var stylesPropsToInject = [
    'style',
    'flexBasis',
    'flex',
    'top',
    'bottom',
    'right',
    'left',
    'width',
    'height',
    'marginRight',
    'marginLeft',
    'marginBottom',
    'margin',
    'marginTop',
    'marginX',
    'marginY',
    'padding',
    'paddingLeft',
    'paddingRight',
    'paddingX',
    'paddingY',
    'borderRadius',
    'borderEndEndRadius',
    'borderTopLeftRadius',
    'borderEndStartRadius',
    'borderStartEndRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderStartStartRadius',
    'borderBottomRightRadius',
    'backgroundColor',
    'borderColor',
    'color'
];

var nonStyleProps = ['children', 'sm', 'md', 'lg', 'xl'];

var consts = {
    stylesPropsToInject: stylesPropsToInject,
    nonStyleProps: nonStyleProps
};

var themeVariantsNamesGenerator = function (props) {
    var themeKeys = Object.keys(theme);
    return Object.keys(props)
        .filter(function (prop) {
        return [].concat(consts.nonStyleProps).concat(consts.stylesPropsToInject).indexOf(prop) === -1;
    })
        .map(function (prop) {
        return themeKeys.indexOf(prop) !== -1 ? prop : "layout.".concat(prop);
    });
};

var styleSheetCompiler = function (props) {
    var styles = _assign({}, props.style);
    for (var _i = 0, _a = consts.stylesPropsToInject; _i < _a.length; _i++) {
        var propsToInject = _a[_i];
        // @ts-expect-error - we know that key is a string and we are sure that it is in the theme
        if (propsToInject !== 'style')
            styles[propsToInject] = props[propsToInject];
    }
    return styles;
};

var propsInjector = function (props) {
    var propsToInject = {};
    // @ts-expect-error - layout is not undefined in the theme
    var themePropsNames = Object.keys(theme.layout)
        .concat(nonStyleProps)
        .concat(stylesPropsToInject);
    Object.keys(props).forEach(function (key) {
        // @ts-expect-error - we know that key is a string
        if (themePropsNames.indexOf(key) === -1)
            propsToInject[key] = props[key];
    });
    return propsToInject;
};

var width = Dimensions.get('screen').width;
Dimensions.get('screen').height;
var responsiveWidth = function (nbr) {
    return Platform.OS === 'web'
        ? (nbr *
            Math.min(Dimensions.get('window').width, Dimensions.get('window').height) *
            PixelRatio.get()) /
            width
        : nbr;
};

var useBreakPoints = function () {
    var width = useWindowDimensions().width;
    var isXl = width >= responsiveWidth(1280);
    var isLg = width >= responsiveWidth(1024) && width < responsiveWidth(1280);
    var isMd = width >= responsiveWidth(768) && width < responsiveWidth(1024);
    var isSm = width < responsiveWidth(768);
    return [isXl, isLg, isMd, isSm];
};

var Media = function (_a) {
    var passedProps = _a.passedProps, children = _a.children;
    var _b = useBreakPoints(), isXl = _b[0], isLg = _b[1], isMd = _b[2], isSm = _b[3];
    return !passedProps.xl && !passedProps.lg && !passedProps.md && !passedProps.sm ? (children) : (React.createElement(React.Fragment, null,
        passedProps.xl ? (isXl ? children : null) : null,
        passedProps.lg ? (isLg ? children : null) : null,
        passedProps.md ? (isMd ? children : null) : null,
        passedProps.sm ? (isSm ? children : null) : null));
};

var Style = function (_a) {
    var style = _a.style, children = _a.children;
    var sx = useSx();
    return style ? React.cloneElement(children, { style: sx(style) }) : children;
};

/**
 * @function laryfy
 * @param component : ComponentType<unknown>
 *
 * @description It takes a component and return it with all the Lary props. It apply also the global theme to the component.
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * import { TextInput } from 'react-native-paper';
 *
 * const LaryfiedTextInput = laryfy<React.ComponentProps<typeof TextInput>>(TextInput)
 *
 *
 * //then you can use it like this in your app:
 *
 * <LaryfiedTextInput bgSecondary relative f2 autoComplete='false' label='test' value='test' onChangeText={(text: string) => {console.log(text)}}/>
 *
 * //in this case, "bgSecondary", "relative", "f2" are the Lary's props. Others props are the props of the TextInput component.
 * ```
 *
 * @property bd(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) To set the border color to the choosen one.
 * @property borderColor To set the border color.
 * @property in(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) To set the color to the choosen one.
 * @property color To set the color.
 * @property bg(Success-Warning-Secondary-Light-Muted-Danger-Dark-Success-Info) To set the background color to the choosen one.
 * @property backgroundColor To set the background color.
 * @property align(Center-Start-End) To set the alignement to the secondary axis.
 * @property justify(Center-Start-End-Between-Around-evenly) To set the alignement to the main axis.
 * @property xl Display itself in min 1280px device width.
 * @property lg Display itself in min 1024px and max 1979px device width.
 * @property md Display itself in min 768px and max 1023px device width.
 * @property sm Display itself in max 640px device width.
 * @property f(1..8) To set flex property to the choosen one.
 * @property fn To set flex property to 'none'.
 * @property flex To set the flex property.
 * @property fb(1..8) To set the flexBasis property to the choosen one.
 * @property fbFull To set the flexBasis property to '100%'.
 * @property flexBasis To set the flexBasis property.
 * @property absolute To set the position to absolute.
 * @property relative To set the position to relative.
 * @property top(1..8) To set the top property to the choosen one.
 * @property top To set the top property.
 * @property bottom(1..8) To set the bottom property to the choosen one.
 * @property bottom To set the bottom property.
 * @property left(1..8) To set the left property to the choosen one.
 * @property left To set the left property.
 * @property right(1..8) To set the right property to the choosen one.
 * @property right To set the right property.
 * @property m(1..8) To set the margin property to the choosen one.
 * @property margin To set the margin property.
 * @property mr(1..8) To set the marginRight property to the choosen one.
 * @property marginRight To set the marginRight property.
 * @property ml(1..8) To set the marginLeft property to the choosen one.
 * @property marginLeft To set the marginLeft property.
 * @property mt(1..8) To set the marginTop property to the choosen one.
 * @property marginTop To set the marginTop property.
 * @property mb(1..8) To set the marginBottom property to the choosen one.
 * @property marginBottom To set the marginBottom property.
 * @property marginX To set the margin left and right property.
 * @property marginY To set the margin top and bottom property.
 * @property r(1..8) To set the borderRadius property to the choosen one.
 * @property borderRadius To set the borderRadius property.
 * @property b(1..8) To set the borderWidth property to the choosen one.
 * @property borderWidth To set the borderWidth property.
 * @property p(1..8) To set the padding property to the choosen one.
 * @property padding To set the padding property.
 * @property pl(1..8) To set the paddingLeft property to the choosen one.
 * @property paddingLeft To set the paddingLeft property.
 * @property pr(1..8) To set the paddingRight property to the choosen one.
 * @property paddingRight To set the paddingRight property.
 * @property pt(1..8) To set the paddingTop property to the choosen one.
 * @property paddingTop To set the paddingTop property.
 * @property pb(1..8) To set the paddingBottom property to the choosen one.
 * @property widthFull To set the width property to 100%.
 * @property heightFull To set the height property to 100%.
 * @property widthScreen To set the width property to 100vw.
 * @property heightScreen To set the height property to 100vh.
 * @property width To set the width property.
 * @property height To set the height property.
 * @property paddingBottom To set the paddingBottom property.
 * @property paddingTop To set the paddingTop property.
 * @property paddingX To set the padding left and right property.
 * @property paddingY To set the padding top and bottom property.
 * @property paddingLeft To set the paddingLeft property.
 * @property paddingRight To set the paddingRight property.
 * @property borderRadius To set the borderRadius property.
 * @property borderEndEndRadius To set the borderEndEndRadius property.
 * @property borderEndStartRadius To set the borderEndStartRadius property.
 * @property borderStartEndRadius To set the borderStartEndRadius property.
 * @property borderStartStartRadius To set the borderStartStartRadius property.
 * @property borderBottomEndRadius To set the borderBottomEndRadius property.
 * @property borderBottomStartRadius To set the borderBottomStartRadius property.
 * @property borderTopEndRadius To set the borderTopEndRadius property.
 * @property borderTopStartRadius To set the borderTopStartRadius property.
 * @property borderTopWidth To set the borderTopWidth property.
 * @property borderLeftWidth To set the borderLeftWidth property.
 * @property borderRightWidth To set the borderRightWidth property.
 * @property borderBottomWidth To set the borderBottomWidth property.
 * @property borderWidth To set the borderWidth property.
 * @property bold To set the fontWeight property to bold.
 * @property text(Center-Right-Left) To set the textAlign property to the choosen one.
 * @property italic To set the fontStyle property to italic.
 * @property underline To set the textDecorationLine property to underline.
 * @property text(sm-xs-base-lg-xl-2xl-3xl-4xl) To set the fontSize property to defined one.
 *
 * @returns {React.FunctionComponent}
 */
function laryfy(component) {
    var RawComponent = styled(component)();
    var laryfiedComponent = function (props) {
        props = props ? props : {};
        var styles = themeVariantsNamesGenerator(props);
        var children = (props === null || props === void 0 ? void 0 : props.children) || null;
        return (React.createElement(Media, { passedProps: props },
            React.createElement(Style, { style: styleSheetCompiler(props) },
                React.createElement(RawComponent, _assign({ variants: styles }, propsInjector(props)), children))));
    };
    return laryfiedComponent;
}

/**
 * @function Container
 *
 * @param props : containerPropsType
 *
 * @description Takes all Lary props and add to them the container props:
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * <Container row contentCenter m8 r8 p4>
 *     {children}
 * </Container>
 * ```
 * @property row it's mean flexDirection: "row"
 * @property column it's mean flexDirection: "column"
 * @property wrap it's mean flexWrap: "wrap"
 * @property nowrap it's mean flexWrap: "nowrap"
 * @property contentCenter it's mean justifyContent: "center"
 * @property contentLeft it's mean justifyContent: "flex-start"
 * @property contentRight it's mean justifyContent: "flex-end"
 *
 *
 * @returns {JSX.Element}
 */
var Container = function (props) {
    var styles = themeVariantsNamesGenerator(props);
    return (React.createElement(Media, { passedProps: props },
        React.createElement(Style, { style: props.style },
            React.createElement(View$1, { variants: styles }, props.children))));
};

/**
 * @function Element
 *
 * @param props : elementPropsType
 *
 * @description Takes all Lary props, it's basicaly a View component, but with some extra props
 *
 * @exemple How to use it ⤵️
 * ```javascript
 * <Element bgPrimary p5 m8>
 *      {children}
 * </Element>
 * ```
 *
 * @returns {JSX.Element}
 */
var Element = function (props) {
    var styles = themeVariantsNamesGenerator(props);
    return (React.createElement(Media, { passedProps: props },
        React.createElement(Style, { style: styleSheetCompiler(props) },
            React.createElement(View$1, { variants: styles }, props.children))));
};

export { Container, Element, LaryProvider, laryfy };
//# sourceMappingURL=index.js.map
