// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"store/actions/changeRoute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return function (args) {
    var page = args.page,
        action = args.action;
    return {
      steps: [function () {
        return {
          domain: '_Store_',
          method: 'set',
          args: {
            currentPage: page
          },
          sideEffect: function sideEffect() {
            if (action === 'replace') window.history.replaceState(null, null, page);
            if (action === 'push') window.history.pushState(null, null, page);
            if (action === 'back') window.history.back();
          }
        };
      }]
    };
  };
};

exports.default = _default;
},{}],"store/actions/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "changeRoute", {
  enumerable: true,
  get: function () {
    return _changeRoute.default;
  }
});

var _changeRoute = _interopRequireDefault(require("./changeRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./changeRoute":"store/actions/changeRoute.js"}],"store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var actions = _interopRequireWildcard(require("./actions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = {
  actions: actions,
  observables: {
    // Domain properties
    user_id: '',
    language: 'en',
    // pages
    currentPage: 'home',
    // home, agreements
    isMenuOpen: false
  }
};
exports.default = _default;
},{"./actions":"store/actions/index.js"}],"lib/constants/paths.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paths = void 0;
var images = 'https://res.cloudinary.com/jmaguirrei/image/upload/myride';
var Paths = {
  IMAGES: images,
  HOME_IMAGES: "".concat(images, "/internal/home"),
  LOGO_LIGHT: "".concat(images, "/internal/logo/logo-light"),
  LOGO_DARK: "".concat(images, "/internal/logo/logo-dark")
};
exports.Paths = Paths;
},{}],"lib/constants/colors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Colors = void 0;
var Colors = {
  GREY_BACKGROUND: 'hsl(214, 14%, 48%)',
  BLUE_TEXT: 'hsl(215, 79%, 38%)'
};
exports.Colors = Colors;
},{}],"lib/constants/sizes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = void 0;
var Sizes = {
  HEADER_HEIGHT: '55px'
};
exports.Sizes = Sizes;
},{}],"lib/content/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;

var _paths = require("../constants/paths");

var Home = [{
  type: 'image',
  className: 'hero-image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/home-hero-main")
}, {
  type: 'text',
  className: 'headline',
  text: 'Ahorra dinero y viaja más entretenido compartiendo viajes con personas que hacen rutas similares'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/home-save-money")
}, {
  type: 'text',
  className: 'title',
  text: 'Ahorra Dinero'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Comparte gastos con otras personas que realizan rutas similares. Ofrece asientos disponibles en tu auto o súbete una de las miles de rutas que ya hay en la comunidad.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/home-flexible-safe")
}, {
  type: 'text',
  className: 'title',
  text: 'Flexible y Seguro'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Tú decides con quién y cuándo compartir. La integración con Facebook te permite revisar si tienes amigos en común con otra persona o ver su perfil antes de decidir si quieres compartir viajes con ella.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/home-frequent-trips")
}, {
  type: 'text',
  className: 'title',
  text: 'Viajes Frecuentes y Ocasionales'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Viajes diarios al trabajo o estudio, viajes ocasionales fuera de la ciudad. Siempre puedes hacerlo más entretenido y conveniente con MyRide!'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/home-easy-coordination")
}, {
  type: 'text',
  className: 'title',
  text: 'Fácil Coordinación'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Ve en tiempo real dónde viene el conductor o dónde están los demás pasajeros para facilitar el encuentro y la puntualidad.'
}];
exports.Home = Home;
},{"../constants/paths":"lib/constants/paths.js"}],"lib/content/agreements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Agreements = void 0;

var _paths = require("../constants/paths");

var Agreements = [{
  type: 'image',
  className: 'hero-image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/agreements-hero")
}, {
  type: 'text',
  className: 'headline',
  text: 'Optimiza el uso de estacionamientos y vehículos en tu organización'
}, {
  type: 'text',
  className: 'big-title',
  text: 'Convenios para empresas'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/agreements-secure")
}, {
  type: 'text',
  className: 'title',
  text: 'Seguridad'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Creamos una red privada para tu organización dentro de la comunidad pública. Validación con correo institucional.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/agreements-stats")
}, {
  type: 'text',
  className: 'title',
  text: 'Estadísticas'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Web de administración para ver en tiempo real reportes, rankings y estadísticas de uso del sistema entre los colaboradores.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/agreements-support")
}, {
  type: 'text',
  className: 'title',
  text: 'Soporte'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Incluye toolkit de implementación, con gráficas, comunicación y políticas recomendadas. Soporte técnico y a usuarios por correo o teléfono.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'image',
  className: 'image',
  url: "".concat(_paths.Paths.HOME_IMAGES, "/agreements-gift")
}, {
  type: 'text',
  className: 'title',
  text: 'Regalo de Bienvenida'
}, {
  type: 'text',
  className: 'paragraph',
  text: 'Cargamos saldo a los primeros colaboradores registrados para que puedan comenzar de inmediato!'
}];
exports.Agreements = Agreements;
},{"../constants/paths":"lib/constants/paths.js"}],"lib/content/faq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Faq = void 0;
// import { Paths } from '../constants/paths';
var Faq = [{
  type: 'text',
  className: 'question',
  text: '¿Qué es el carpool o auto compartido?'
}, {
  type: 'text',
  className: 'answer',
  text: 'Se llama carpool o auto compartido a la práctica de compartir viajes en auto con otras personas que hacen rutas similares, permitiendo hacer un uso más eficiente de los vehículos y compartir los gastos del viaje.'
}, {
  type: 'text',
  className: 'answer',
  text: 'El carpool se trata de viajes no comerciales, donde conductores ofrecen asientos disponibles en su auto en rutas que ya están haciendo y seguirán haciendo de todas maneras, como su viaje diario al trabajo o al estudio. Se permite compartir los gastos del viaje con los pasajeros como un incentivo a los conductores a disponibilizar los asientos pero lo recaudado no puede ser mayor que el costo del viaje.'
}, {
  type: 'text',
  className: 'answer',
  text: 'Además de reducir los costos de traslado por persona, el carpool te permite tener una mejor experiencia de viaje compartiendo con gente con la que tú decides viajar. Al no ser viajes comerciales, las personas siempre pueden decidir con quién y cuándo quieren compartir viajes.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Cuál es la diferencia respecto a servicios como Uber o Cabify?'
}, {
  type: 'text',
  className: 'answer',
  text: 'Los servicios como Uber o Cabify corresponden a ride hailing o viajes por demanda, en que un chofer conduce como actividad comercial, transportando pasajeros al lugar donde éstos necesitan ir y recibiendo a cambio una remuneración que apunta a cubrir los costos del viaje y dejar una ganancia económica al chofer por su trabajo.'
}, {
  type: 'text',
  className: 'answer',
  text: 'En el carpool (MyRide), los conductores publican las rutas que ellos ya están realizando por necesidades propias y ofrecen compartir sus asientos disponibles con pasajeros a los que esa ruta les resulte útil. De esta manera pueden tener una experiencia de viaje más entretenida y compartir los gastos del viaje con más personas, sin generar una ganancia económica.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Por qué debo registrarme con Facebook?'
}, {
  type: 'text',
  className: 'answer',
  text: 'Crear una comunidad segura es la prioridad de MyRide. A diferencia de otros medios, el registro por Facebook permite que podamos importar automáticamente el respaldo social de los usuarios a sus perfiles de MyRide.'
}, {
  type: 'text',
  className: 'answer',
  text: 'De esta manera, siempre podrás contar con una base de información relevante antes de decidir si quieres compartir un viaje con otra persona o no, como el número de amigos que tiene en Facebook, si tienen amigos en común, foto de perfil, etc.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Qué pasa con eventuales perfiles falsos?'
}, {
  type: 'text',
  className: 'answer',
  text: 'Si bien es posible que alguien cree un perfil falso en Facebook que le permita registrarse en MyRide, es muy fácil para los usuarios identificarlo. Si recibes por ejemplo una solicitud de seguir tu ruta de una persona que tiene 15 amigos y ninguno de ellos en común contigo nuestra recomendación es simple: no compartas viajes con esa persona. Es posible que sea un perfil legítimo pero ante la duda es mejor no exponerse.'
}, {
  type: 'text',
  className: 'answer',
  text: 'Esto no es posible de lograr abriendo el sistema a registro con correo electrónico personal u otros medios. Sabemos que por distintas razones hay gente que prefiere'
}, {
  type: 'text',
  className: 'answer',
  text: 'no tener cuenta de Facebook y entendemos su decisión, pero queremos dejar en claro que la razón detrás de esta restricción es la seguridad de nuestra comunidad y que las puertas están abiertas si deciden crear una cuenta gratuita en esa red social para sumarse a MyRide.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Quieres proponer más alternativas seguras de registro para que incorporemos?'
}, {
  type: 'text',
  className: 'answer',
  text: 'Escríbenos a soporte@myride.com'
}, {
  type: 'text',
  className: 'answer',
  text: 'Si tu empresa o universidad tiene convenio con MyRide también podrás registrarte con tu correo institucional, aprovechando la validación corporativa (ver más).'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Por qué no puedo elegir el aporte por pasajero?'
}, {
  type: 'text',
  className: 'answer',
  text: 'En esta nueva versión de la aplicación y en base al feedback de nuestros usuarios, MyRide define los aportes de los pasajeros en base a la distancia de la ruta. Esto permite:'
}, {
  type: 'text',
  className: 'answer',
  text: 'Facilitar el proceso de publicación: muchos conductores nos decían que no sabían bien cuánto era un aporte razonable para pedir a los pasajeros ya que al ser un sistema'
}, {
  type: 'text',
  className: 'answer',
  text: 'nuevo no hay una referencia clara. Esto hacía que el proceso de publicar sus rutas fuera más complejo. Además, a muchos les complicaba tener que justificar el aporte que habían elegido y el hecho de que lo defina el sistema les quita esa responsabilidad de encima.'
}, {
  type: 'text',
  className: 'answer',
  text: 'Evitar viajes comerciales: buscamos que el compartir gastos sea un incentivo adicional para que las personas que regularmente viajan en auto estén más dispuestas a compartirlo, pero no está permitido realizar viajes comerciales, es decir, viajes donde se recaude más que el costo y se genere una ganancia económica. Manejar centralizadamente los aportes nos permite asegurar de que no se estén realizando viajes comerciales en nuestra plataforma.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Cómo se definen los aportes por pasajero?'
}, {
  type: 'text',
  className: 'answer',
  text: 'El aporte por pasajero depende de la distancia de la ruta del conductor. El monto final viene de un modelo que construimos utilizando los datos de uso del Beta de la primera versión pública de MyRide.'
}, {
  type: 'text',
  className: 'answer',
  text: 'A partir de los miles de datos recolectados de las expectativas de los conductores y de la disposición a pagar de los pasajeros, ajustamos el modelo de aportes para que refleje el precio justo que los mismos usuarios definieron como comunidad.'
}, {
  type: 'text',
  className: 'answer',
  text: 'Tener la información agregada de todos los usuarios nos permite ir optimizando el modelo y mantener una plataforma de aportes justa de manera mucho más eficiente que si cada usuario lo hace por separado.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Por qué no se puede realizar el aporte con dinero en efectivo?'
}, {
  type: 'text',
  className: 'answer',
  text: 'Hay 3 razones principales por las que no permitimos aportes con dinero en efectivo:'
}, {
  type: 'text',
  className: 'answer',
  text: 'Cobrar a los pasajeros es un momento incómodo para muchos conductores. El pago electrónico ayuda a que no necesites hablar de dinero en tus viajes y solo te dediques a pasarlo bien!'
}, {
  type: 'text',
  className: 'answer',
  text: 'El pago con efectivo es muy poco práctico ya que requiere tener el monto justo por parte del pasajero o tener cambio por parte del conductor.'
}, {
  type: 'text',
  className: 'answer',
  text: 'El sistema de pago electrónico permite facilitar el cobro de los gastos de gestión de la plataforma y financiar su operación, mejoramiento y crecimiento!'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: '¿Hay algún requisito o condiciones mínimas que deba tener mi vehículo para poder participar como conductor en MyRide?'
}, {
  type: 'text',
  className: 'answer',
  text: 'Solo los requisitos que la legislación local exige para poder utilizar el vehículo. MyRide no pide ningún requisito adicional a lo exigido por la Ley respecto a los vehículos.'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: 'Si comparto mi auto, ¿es obligatorio llevar gente todos los días en que hago mi ruta?'
}, {
  type: 'text',
  className: 'answer',
  text: 'No. Sabemos que la flexibilidad es muy importante para nuestros usuarios por lo que tú vas confirmando a los seguidores de tu ruta los días que quieres compartir y ellos van reservando asientos. Si no quieres o no puedes compartir algún día no hay problema 🙂'
},
/* --------------------------------------------------------------------------------------------- */
{
  type: 'text',
  className: 'question',
  text: 'Si comparto mi auto con alguien a la ida, ¿tengo necesariamente que compartirlo a la vuelta?'
}, {
  type: 'text',
  className: 'answer',
  text: 'No. La ida y la vuelta se tratan como rutas independientes (se publican por separado). Puedes publicar solo ida, solo vuelta, o ambas según te acomode. Esto significa que no solo decides qué días quieres compartir cada una como se explica en el punto anterior, sino que incluso puedes tener seguidores distintos para la ida o la vuelta.'
}];
exports.Faq = Faq;
},{}],"lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Paths", {
  enumerable: true,
  get: function () {
    return _paths.Paths;
  }
});
Object.defineProperty(exports, "Colors", {
  enumerable: true,
  get: function () {
    return _colors.Colors;
  }
});
Object.defineProperty(exports, "Sizes", {
  enumerable: true,
  get: function () {
    return _sizes.Sizes;
  }
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function () {
    return _home.Home;
  }
});
Object.defineProperty(exports, "Agreements", {
  enumerable: true,
  get: function () {
    return _agreements.Agreements;
  }
});
Object.defineProperty(exports, "Faq", {
  enumerable: true,
  get: function () {
    return _faq.Faq;
  }
});

var _paths = require("./constants/paths");

var _colors = require("./constants/colors");

var _sizes = require("./constants/sizes");

var _home = require("./content/home");

var _agreements = require("./content/agreements");

var _faq = require("./content/faq");
},{"./constants/paths":"lib/constants/paths.js","./constants/colors":"lib/constants/colors.js","./constants/sizes":"lib/constants/sizes.js","./content/home":"lib/content/home.js","./content/agreements":"lib/content/agreements.js","./content/faq":"lib/content/faq.js"}],"ui/components/MenuIcon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuIcon = void 0;
var size = 40;
var lineW = 74; // %

var lineH = Math.floor(size / 10);

var MenuIcon = function MenuIcon(client) {
  return client.hoc({
    classes: {
      wrapper: "\n        position: absolute;\n        display: flex;\n        flex-flow: column;\n        justify-content: center;\n        height: ".concat(size, "px;\n        width: ").concat(size, "px;\n        cursor: pointer;\n      "),
      line: "\n        position: absolute;\n        width: ".concat(lineW, "%;\n        left: ").concat(0.5 * (100 - lineW), "%;\n        height: ").concat(lineH, "px;\n        border-radius: ").concat(size, "px;\n        transition: all .4s cubic-bezier(0.65, 0.04, 0.29, 0.97);\n        transform-origin: center center;\n      ")
    },
    styles: {
      wrapper: function wrapper(_ref) {
        var inStyle = _ref.inStyle;
        return "\n        ".concat(inStyle, "\n      ");
      },
      top: function top(_ref2) {
        var isOpen = _ref2.isOpen,
            color = _ref2.color;
        return "\n        background: ".concat(color, ";\n        transform: translateY(").concat(isOpen ? 0 : -0.25 * size, "px) rotateZ(").concat(isOpen ? 45 : 0, "deg);\n      ");
      },
      middle: function middle(_ref3) {
        var isOpen = _ref3.isOpen,
            color = _ref3.color;
        return "\n        background: ".concat(color, ";\n        opacity: ").concat(isOpen ? 0 : 1, ";\n      ");
      },
      bottom: function bottom(_ref4) {
        var isOpen = _ref4.isOpen,
            color = _ref4.color;
        return "\n        background: ".concat(color, ";\n        transform: translateY(").concat(isOpen ? 0 : 0.25 * size, "px) rotateZ(").concat(isOpen ? -45 : 0, "deg);\n      ");
      }
    },
    render: function render(_ref5) {
      var props = _ref5.props,
          classes = _ref5.classes,
          styles = _ref5.styles;
      console.log("{ props, classes, styles }", {
        props: props,
        classes: classes,
        styles: styles
      });
      return client.ui.elements("div", {
        style: styles.wrapper(props),
        className: classes.wrapper,
        onclick: props.onClick
      }, client.ui.elements("div", {
        className: classes.line,
        style: styles.top(props)
      }), client.ui.elements("div", {
        className: classes.line,
        style: styles.middle(props)
      }), client.ui.elements("div", {
        className: classes.line,
        style: styles.bottom(props)
      })); // return (
      //   div({ class: classes.wrapper, style: styles.wrapper(props), onclick: props.onClick },
      //     div({ class: classes.line, style: styles.top(props) }),
      //     div({ class: classes.line, style: styles.middle(props) }),
      //     div({ class: classes.line, style: styles.bottom(props) }),
      //   )
      // );
    }
  });
};

exports.MenuIcon = MenuIcon;
},{}],"ui/components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MenuIcon", {
  enumerable: true,
  get: function () {
    return _MenuIcon.MenuIcon;
  }
});

var _MenuIcon = require("./MenuIcon");
},{"./MenuIcon":"ui/components/MenuIcon.js"}],"ui/fragments/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var Header = function Header(client) {
  return client.hoc({
    state: function state(props, store) {
      return {
        isMenuOpen: store.get('isMenuOpen')
      };
    },
    classes: {
      header: "\n        display: flex;\n        align-items: center;\n        width: 100%;\n        justify-content: center;\n        height: ".concat(client.lib.Sizes.HEADER_HEIGHT, ";\n        background: ").concat(client.lib.Colors.GREY_BACKGROUND, ";\n      ")
    },
    styles: {
      logo: function logo(isMenuOpen) {
        return "\n        opacity: ".concat(isMenuOpen ? 0 : 1, ";\n        pointer-events: ").concat(isMenuOpen ? 'auto' : 'none', ";\n        max-height: 50%;\n        image-rendering: -webkit-optimize-contrast;\n      ");
      }
    },
    render: function render(_ref) {
      var state = _ref.state,
          classes = _ref.classes,
          styles = _ref.styles;
      return client.ui.elements("div", {
        id: "header",
        className: classes.header
      }, client.ui.elements("img", {
        src: client.lib.Paths.LOGO_LIGHT,
        style: styles.logo(state.isMenuOpen)
      })); // return (
      //   div({ id: 'header', class: classes.header },
      //     img({ src: client.lib.Paths.LOGO_LIGHT, style: styles.logo(state.isMenuOpen) })
      //   )
      // );
    }
  });
};

exports.Header = Header;
},{}],"ui/fragments/Menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var Menu = function Menu(client) {
  return client.hoc({
    state: function state(props, store) {
      return {
        isMenuOpen: store.get('isMenuOpen')
      };
    },
    actions: function actions(props, store) {
      return {
        onclick: function onclick(page) {
          store.call('changeRoute', {
            page: page,
            action: 'replace'
          });
          store.toggle('isMenuOpen');
        }
      };
    },
    classes: {
      link: "\n        font-size: 20px;\n        padding: 20px;\n        cursor: pointer;\n        color: white;\n      "
    },
    styles: {
      menu: function menu(isMenuOpen) {
        return "\n        position: absolute;\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        width: 100%;\n        height: 100vh;\n        z-index: 10;\n        background: ".concat(client.lib.Colors.GREY_BACKGROUND, ";\n        opacity: ").concat(isMenuOpen ? 0.98 : 0, ";\n        pointer-events: ").concat(isMenuOpen ? 'auto' : 'none', ";\n        transition: opacity .4s ease;\n      ");
      }
    },
    render: function render(_ref) {
      var actions = _ref.actions,
          state = _ref.state,
          styles = _ref.styles,
          classes = _ref.classes;
      var _onclick = actions.onclick;
      return client.ui.elements("div", {
        id: "menu",
        style: styles.menu(state.isMenuOpen)
      }, client.ui.elements("div", {
        className: classes.link,
        onclick: function onclick() {
          return _onclick('home');
        }
      }, "Home"), client.ui.elements("div", {
        className: classes.link,
        onclick: function onclick() {
          return _onclick('agreements');
        }
      }, "Convenios"), client.ui.elements("div", {
        className: classes.link,
        onclick: function onclick() {
          return _onclick('faq');
        }
      }, "Preguntas Frecuentes")); // return (
      //   div({ id: 'menu', style: styles.menu(state.isMenuOpen) },
      //     div({ class: classes.link, onclick: () => onclick('home') }, 'Home'),
      //     div({ class: classes.link, onclick: () => onclick('agreements') }, 'Convenios'),
      //     div({ class: classes.link, onclick: () => onclick('faq') }, 'Preguntas Frecuentes'),
      //   )
      // );
    }
  });
};

exports.Menu = Menu;
},{}],"ui/fragments/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.Header;
  }
});
Object.defineProperty(exports, "Menu", {
  enumerable: true,
  get: function () {
    return _Menu.Menu;
  }
});

var _Header = require("./Header");

var _Menu = require("./Menu");
},{"./Header":"ui/fragments/Header.js","./Menu":"ui/fragments/Menu.js"}],"ui/pages/<Home>/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client) {
  return client.hoc({
    classes: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        text-align: center;\n        padding-bottom: 25vh;\n      ",
      headline: "\n        font-size: 24px;\n        padding: 20px;\n      ",
      title: "\n        font-size: 20px;\n        font-weight: bold;\n        padding: 20px;\n      ",
      paragraph: "\n        padding: 20px 20px 60px;\n        font-size: 18px;\n        color: hsl(0, 0%, 45%);\n      ",
      'hero-image': "\n        max-height: 50vh;\n      ",
      image: "\n        margin-top: 30px;\n        max-width: 30%;\n      "
    },
    render: function render(_ref) {
      var classes = _ref.classes;
      return client.ui.elements("div", {
        id: "home-wrapper",
        className: classes.wrapper
      }, client.lib.Home.map(function (item) {
        var type = item.type,
            url = item.url,
            text = item.text,
            className = item.className;
        var classStyles = classes[className];
        if (type === 'image') return client.ui.elements("img", {
          src: url,
          className: classStyles
        });
        return client.ui.elements("div", {
          className: classStyles
        }, text);
      })); // return (
      //   div({ id: 'home-wrapper', class: classes.wrapper },
      //     client.lib.Home.map(item => {
      //       const { type, url, text, className } = item;
      //       const classStyles = classes[className];
      //       if (type === 'image') return img({ src: url, class: classStyles });
      //       return div({ class: classStyles }, text);
      //     })
      //   )
      // );
    }
  });
};

exports.default = _default;
},{}],"ui/pages/<Agreements>/Agreements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client) {
  return client.hoc({
    classes: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        text-align: center;\n        padding-bottom: 25vh;\n      ",
      headline: "\n        font-size: 24px;\n        padding: 20px;\n      ",
      'big-title': "\n        font-size: 32px;\n        padding: 20px;\n      ",
      title: "\n        font-size: 20px;\n        font-weight: bold;\n        padding: 20px;\n      ",
      paragraph: "\n        padding: 20px 20px 60px;\n        font-size: 18px;\n        color: hsl(0, 0%, 45%);\n      ",
      'hero-image': "\n        max-height: 50vh;\n      ",
      image: "\n        margin-top: 30px;\n        max-width: 30%;\n      "
    },
    render: function render(_ref) {
      var classes = _ref.classes;
      return client.ui.elements("div", {
        id: "agreements-wrapper",
        className: classes.wrapper
      }, client.lib.Agreements.map(function (item) {
        var type = item.type,
            url = item.url,
            text = item.text,
            className = item.className;
        var classStyles = classes[className];
        if (type === 'image') return client.ui.elements("img", {
          src: url,
          className: classStyles
        });
        return client.ui.elements("div", {
          className: classStyles
        }, text);
      })); // return (
      //   div({ id: 'agreements-wrapper', class: classes.wrapper },
      //     client.lib.Agreements.map(item => {
      //       const { type, url, text, className } = item;
      //       const classStyles = classes[className];
      //       if (type === 'image') return img({ src: url, class: classStyles });
      //       return div({ class: classStyles }, text);
      //     })
      //   )
      // );
    }
  });
};

exports.default = _default;
},{}],"ui/pages/<Faq>/Faq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client) {
  return client.hoc({
    classes: {
      wrapper: "\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        text-align: center;\n        padding-bottom: 25vh;\n      ",
      question: "\n        font-size: 24px;\n        font-weight: bold;\n        padding: 40px 20px;\n        margin-top: 50px;\n        color: ".concat(client.lib.Colors.BLUE_TEXT, ";\n      "),
      answer: "\n        font-size: 20px;\n        padding: 20px;\n      "
    },
    render: function render(_ref) {
      var classes = _ref.classes;
      return client.ui.elements("div", {
        id: "faq-wrapper",
        className: classes.wrapper
      }, client.lib.Faq.map(function (item) {
        var text = item.text,
            className = item.className;
        return client.ui.elements("div", {
          className: classes[className]
        }, text);
      })); // return (
      //   div({ id: 'faq-wrapper', class: classes.wrapper },
      //     client.lib.Faq.map(item => {
      //       const { text, className } = item;
      //       return div({ class: classes[className] }, text);
      //     })
      //   )
      // );
    }
  });
};

exports.default = _default;
},{}],"ui/Root.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(client) {
  var _client$ui$fragments = client.ui.fragments,
      Header = _client$ui$fragments.Header,
      Menu = _client$ui$fragments.Menu;
  var MenuIcon = client.ui.components.MenuIcon;
  return client.hoc({
    state: function state(props, store) {
      return {
        currentPage: store.get('currentPage') || 'home',
        isMenuOpen: store.get('isMenuOpen')
      };
    },
    actions: function actions(props, store) {
      return {
        onClickMenu: function onClickMenu() {
          store.toggle('isMenuOpen');
        }
      };
    },
    styles: {
      page: function page(isSelected) {
        return "\n        position: absolute;\n        width: 100%;\n        transition: opacity .3s ease;\n        opacity: ".concat(isSelected ? 1 : 0, ";\n        pointer-events: ").concat(isSelected ? 'auto' : 'none', ";\n      ");
      }
    },
    classes: {
      root: "\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      ",
      scrollable: "\n        position: relative;\n        width: 100%;\n        height: 100vh;\n        overflow-x: hidden;\n        overflow-y: scroll;\n        -webkit-overflow-scrolling: touch;\n      "
    },
    sections: {
      Home: require("./pages/<Home>/Home.js"),
      Agreements: require("./pages/<Agreements>/Agreements.js"),
      Faq: require("./pages/<Faq>/Faq.js")
    },
    render: function render(_ref) {
      var actions = _ref.actions,
          state = _ref.state,
          styles = _ref.styles,
          sections = _ref.sections,
          classes = _ref.classes;
      var onClickMenu = actions.onClickMenu;
      var currentPage = state.currentPage,
          isMenuOpen = state.isMenuOpen;
      var Home = sections.Home,
          Agreements = sections.Agreements,
          Faq = sections.Faq;
      console.log('root Rendered');
      return client.ui.elements("div", {
        id: "root",
        className: classes.root
      }, client.ui.elements(MenuIcon, {
        isOpen: isMenuOpen,
        onClick: onClickMenu,
        color: 'white',
        inStyle: 'left: 10px; top: 7px;'
      }), client.ui.elements(Header, null), client.ui.elements(Menu, null), client.ui.elements("div", {
        className: classes.scrollable
      }, client.ui.elements("div", {
        style: styles.page(currentPage === 'home')
      }, client.ui.elements(Home, null)), client.ui.elements("div", {
        style: styles.page(currentPage === 'agreements')
      }, client.ui.elements(Agreements, null)), client.ui.elements("div", {
        style: styles.page(currentPage === 'faq')
      }, client.ui.elements(Faq, null)))); // return (
      //   div({ id: 'root', class: classes.root },
      //     MenuIcon({
      //       isOpen: isMenuOpen,
      //       onClick: onClickMenu,
      //       color: 'white',
      //       inStyle: 'left: 10px; top: 7px;',
      //     }),
      //     Header(),
      //     Menu(),
      //     div({ class: classes.scrollable },
      //       div({ style: styles.page(currentPage === 'home') }, Home()),
      //       div({ style: styles.page(currentPage === 'agreements') }, Agreements()),
      //       div({ style: styles.page(currentPage === 'faq') }, Faq()),
      //     )
      //   )
      // );
    }
  });
};

exports.default = _default;
},{"./pages/<Home>/Home.js":"ui/pages/<Home>/Home.js","./pages/<Agreements>/Agreements.js":"ui/pages/<Agreements>/Agreements.js","./pages/<Faq>/Faq.js":"ui/pages/<Faq>/Faq.js"}],"../config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(require("./client/store"));

var lib = _interopRequireWildcard(require("./client/lib"));

var components = _interopRequireWildcard(require("./client/ui/components"));

var fragments = _interopRequireWildcard(require("./client/ui/fragments"));

var _Root = _interopRequireDefault(require("./client/ui/Root"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  client: {
    store: _store.default,
    rootComponent: _Root.default,
    lib: lib,
    components: components,
    fragments: fragments
  },
  env: {
    development: {
      httpPort: 4001,
      socketPort: null,
      baseUrl: 'localhost',
      baseFolder: '',
      useServiceWorker: false,
      useManifest: false
    },
    production: {
      httpPort: 4001,
      socketPort: null,
      baseUrl: 'museeker.io',
      baseFolder: 'base-www',
      useServiceWorker: true,
      useManifest: false
    }
  }
};
exports.default = _default;
},{"./client/store":"store/index.js","./client/lib":"lib/index.js","./client/ui/components":"ui/components/index.js","./client/ui/fragments":"ui/fragments/index.js","./client/ui/Root":"ui/Root.js"}],"../../../../../libs/client/node_modules/redom/dist/redom.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.svg = exports.s = exports.setChildren = exports.setStyle = exports.setAttr = exports.Router = exports.router = exports.Place = exports.place = exports.unmount = exports.mount = exports.ListPool = exports.listPool = exports.List = exports.list = exports.html = exports.h = exports.el = void 0;
var HASH = '#'.charCodeAt(0);
var DOT = '.'.charCodeAt(0);
var TAG_NAME = 0;
var ID = 1;
var CLASS_NAME = 2;

var parseQuery = function (query) {
  var tag = null;
  var id = null;
  var className = null;
  var mode = TAG_NAME;
  var offset = 0;

  for (var i = 0; i <= query.length; i++) {
    var char = query.charCodeAt(i);
    var isHash = char === HASH;
    var isDot = char === DOT;
    var isEnd = !char;

    if (isHash || isDot || isEnd) {
      if (mode === TAG_NAME) {
        if (i === 0) {
          tag = 'div';
        } else {
          tag = query.substring(offset, i);
        }
      } else if (mode === ID) {
        id = query.substring(offset, i);
      } else {
        if (className) {
          className += ' ' + query.substring(offset, i);
        } else {
          className = query.substring(offset, i);
        }
      }

      if (isHash) {
        mode = ID;
      } else if (isDot) {
        mode = CLASS_NAME;
      }

      offset = i + 1;
    }
  }

  return {
    tag: tag,
    id: id,
    className: className
  };
};

var createElement = function (query, ns) {
  var ref = parseQuery(query);
  var tag = ref.tag;
  var id = ref.id;
  var className = ref.className;
  var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);

  if (id) {
    element.id = id;
  }

  if (className) {
    if (ns) {
      element.setAttribute('class', className);
    } else {
      element.className = className;
    }
  }

  return element;
};

var unmount = function (parent, child) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (childEl.parentNode) {
    doUnmount(child, childEl, parentEl);
    parentEl.removeChild(childEl);
  }

  return child;
};

exports.unmount = unmount;

var doUnmount = function (child, childEl, parentEl) {
  var hooks = childEl.__redom_lifecycle;

  if (hooksAreEmpty(hooks)) {
    childEl.__redom_mounted = false;
    return;
  }

  var traverse = parentEl;

  if (childEl.__redom_mounted) {
    trigger(childEl, 'onunmount');
  }

  while (traverse) {
    var parentHooks = traverse.__redom_lifecycle || {};

    for (var hook in hooks) {
      if (parentHooks[hook]) {
        parentHooks[hook] -= hooks[hook];
      }
    }

    if (hooksAreEmpty(parentHooks)) {
      traverse.__redom_lifecycle = null;
    }

    traverse = traverse.parentNode;
  }
};

var hooksAreEmpty = function (hooks) {
  if (hooks == null) {
    return true;
  }

  for (var key in hooks) {
    if (hooks[key]) {
      return false;
    }
  }

  return true;
};

var hookNames = ['onmount', 'onremount', 'onunmount'];
var shadowRootAvailable = typeof window !== 'undefined' && 'ShadowRoot' in window;

var mount = function (parent, child, before, replace) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (child !== childEl) {
    childEl.__redom_view = child;
  }

  var wasMounted = childEl.__redom_mounted;
  var oldParent = childEl.parentNode;

  if (wasMounted && oldParent !== parentEl) {
    doUnmount(child, childEl, oldParent);
  }

  if (before != null) {
    if (replace) {
      parentEl.replaceChild(childEl, getEl(before));
    } else {
      parentEl.insertBefore(childEl, getEl(before));
    }
  } else {
    parentEl.appendChild(childEl);
  }

  doMount(child, childEl, parentEl, oldParent);
  return child;
};

exports.mount = mount;

var doMount = function (child, childEl, parentEl, oldParent) {
  var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
  var remount = parentEl === oldParent;
  var hooksFound = false;

  for (var i = 0, list = hookNames; i < list.length; i += 1) {
    var hookName = list[i];

    if (!remount) {
      // if already mounted, skip this phase
      if (child !== childEl) {
        // only Views can have lifecycle events
        if (hookName in child) {
          hooks[hookName] = (hooks[hookName] || 0) + 1;
        }
      }
    }

    if (hooks[hookName]) {
      hooksFound = true;
    }
  }

  if (!hooksFound) {
    childEl.__redom_mounted = true;
    return;
  }

  var traverse = parentEl;
  var triggered = false;

  if (remount || traverse && traverse.__redom_mounted) {
    trigger(childEl, remount ? 'onremount' : 'onmount');
    triggered = true;
  }

  while (traverse) {
    var parent = traverse.parentNode;
    var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});

    for (var hook in hooks) {
      parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
    }

    if (triggered) {
      break;
    } else {
      if (traverse === document || shadowRootAvailable && traverse instanceof window.ShadowRoot || parent && parent.__redom_mounted) {
        trigger(traverse, remount ? 'onremount' : 'onmount');
        triggered = true;
      }

      traverse = parent;
    }
  }
};

var trigger = function (el, eventName) {
  if (eventName === 'onmount' || eventName === 'onremount') {
    el.__redom_mounted = true;
  } else if (eventName === 'onunmount') {
    el.__redom_mounted = false;
  }

  var hooks = el.__redom_lifecycle;

  if (!hooks) {
    return;
  }

  var view = el.__redom_view;
  var hookCount = 0;
  view && view[eventName] && view[eventName]();

  for (var hook in hooks) {
    if (hook) {
      hookCount++;
    }
  }

  if (hookCount) {
    var traverse = el.firstChild;

    while (traverse) {
      var next = traverse.nextSibling;
      trigger(traverse, eventName);
      traverse = next;
    }
  }
};

var setStyle = function (view, arg1, arg2) {
  var el = getEl(view);

  if (arg2 !== undefined) {
    el.style[arg1] = arg2;
  } else if (typeof arg1 === 'string') {
    el.setAttribute('style', arg1);
  } else {
    for (var key in arg1) {
      setStyle(el, key, arg1[key]);
    }
  }
};
/* global SVGElement */


exports.setStyle = setStyle;
var xlinkns = 'http://www.w3.org/1999/xlink';

var setAttr = function (view, arg1, arg2) {
  var el = getEl(view);
  var isSVG = el instanceof SVGElement;
  var isFunc = typeof arg2 === 'function';

  if (arg2 !== undefined) {
    if (arg1 === 'style') {
      setStyle(el, arg2);
    } else if (isSVG && isFunc) {
      el[arg1] = arg2;
    } else if (arg1 === 'dataset') {
      setData(el, arg2);
    } else if (!isSVG && (arg1 in el || isFunc)) {
      el[arg1] = arg2;
    } else {
      if (isSVG && arg1 === 'xlink') {
        setXlink(el, arg2);
        return;
      }

      el.setAttribute(arg1, arg2);
    }
  } else {
    for (var key in arg1) {
      setAttr(el, key, arg1[key]);
    }
  }
};

exports.setAttr = setAttr;

function setXlink(el, obj) {
  for (var key in obj) {
    el.setAttributeNS(xlinkns, key, obj[key]);
  }
}

function setData(el, obj) {
  for (var key in obj) {
    el.dataset[key] = obj[key];
  }
}

var text = function (str) {
  return document.createTextNode(str != null ? str : '');
};

exports.text = text;

var parseArguments = function (element, args) {
  for (var i = 0, list = args; i < list.length; i += 1) {
    var arg = list[i];

    if (arg !== 0 && !arg) {
      continue;
    }

    var type = typeof arg; // support middleware

    if (type === 'function') {
      arg(element);
    } else if (type === 'string' || type === 'number') {
      element.appendChild(text(arg));
    } else if (isNode(getEl(arg))) {
      mount(element, arg);
    } else if (arg.length) {
      parseArguments(element, arg);
    } else if (type === 'object') {
      setAttr(element, arg);
    }
  }
};

var ensureEl = function (parent) {
  return typeof parent === 'string' ? html(parent) : getEl(parent);
};

var getEl = function (parent) {
  return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
};

var isNode = function (a) {
  return a && a.nodeType;
};

var htmlCache = {};

var memoizeHTML = function (query) {
  return htmlCache[query] || (htmlCache[query] = createElement(query));
};

var html = function (query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) args[len] = arguments[len + 1];

  var element;
  var type = typeof query;

  if (type === 'string') {
    element = memoizeHTML(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply(Query, [null].concat(args)))();
  } else {
    throw new Error('At least one argument required');
  }

  parseArguments(getEl(element), args);
  return element;
};

exports.html = html;

html.extend = function (query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) args[len] = arguments[len + 1];

  var clone = memoizeHTML(query);
  return html.bind.apply(html, [this, clone].concat(args));
};

var el = html;
exports.el = el;
var h = html;
exports.h = h;

var setChildren = function (parent) {
  var children = [],
      len = arguments.length - 1;

  while (len-- > 0) children[len] = arguments[len + 1];

  var parentEl = getEl(parent);
  var current = traverse(parent, children, parentEl.firstChild);

  while (current) {
    var next = current.nextSibling;
    unmount(parent, current);
    current = next;
  }
};

exports.setChildren = setChildren;

function traverse(parent, children, _current) {
  var current = _current;
  var childEls = new Array(children.length);

  for (var i = 0; i < children.length; i++) {
    childEls[i] = children[i] && getEl(children[i]);
  }

  for (var i$1 = 0; i$1 < children.length; i$1++) {
    var child = children[i$1];

    if (!child) {
      continue;
    }

    var childEl = childEls[i$1];

    if (childEl === current) {
      current = current.nextSibling;
      continue;
    }

    if (isNode(childEl)) {
      var next = current && current.nextSibling;
      var exists = child.__redom_index != null;
      var replace = exists && next === childEls[i$1 + 1];
      mount(parent, child, current, replace);

      if (replace) {
        current = next;
      }

      continue;
    }

    if (child.length != null) {
      current = traverse(parent, child, current);
    }
  }

  return current;
}

var propKey = function (key) {
  return function (item) {
    return item[key];
  };
};

var listPool = function (View, key, initData) {
  return new ListPool(View, key, initData);
};

exports.listPool = listPool;

var ListPool = function ListPool(View, key, initData) {
  this.View = View;
  this.initData = initData;
  this.oldLookup = {};
  this.lookup = {};
  this.oldViews = [];
  this.views = [];

  if (key != null) {
    this.key = typeof key === 'function' ? key : propKey(key);
  }
};

exports.ListPool = ListPool;

ListPool.prototype.update = function update(data, context) {
  var ref = this;
  var View = ref.View;
  var key = ref.key;
  var initData = ref.initData;
  var keySet = key != null;
  var oldLookup = this.lookup;
  var newLookup = {};
  var newViews = new Array(data.length);
  var oldViews = this.views;

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var view = void 0;

    if (keySet) {
      var id = key(item);
      view = oldLookup[id] || new View(initData, item, i, data);
      newLookup[id] = view;
      view.__redom_id = id;
    } else {
      view = oldViews[i] || new View(initData, item, i, data);
    }

    view.update && view.update(item, i, data, context);
    var el = getEl(view.el);
    el.__redom_view = view;
    newViews[i] = view;
  }

  this.oldViews = oldViews;
  this.views = newViews;
  this.oldLookup = oldLookup;
  this.lookup = newLookup;
};

var list = function (parent, View, key, initData) {
  return new List(parent, View, key, initData);
};

exports.list = list;

var List = function List(parent, View, key, initData) {
  this.__redom_list = true;
  this.View = View;
  this.initData = initData;
  this.views = [];
  this.pool = new ListPool(View, key, initData);
  this.el = ensureEl(parent);
  this.keySet = key != null;
};

exports.List = List;

List.prototype.update = function update(data, context) {
  if (data === void 0) data = [];
  var ref = this;
  var keySet = ref.keySet;
  var oldViews = this.views;
  this.pool.update(data, context);
  var ref$1 = this.pool;
  var views = ref$1.views;
  var lookup = ref$1.lookup;

  if (keySet) {
    for (var i = 0; i < oldViews.length; i++) {
      var oldView = oldViews[i];
      var id = oldView.__redom_id;

      if (lookup[id] == null) {
        oldView.__redom_index = null;
        unmount(this, oldView);
      }
    }
  }

  for (var i$1 = 0; i$1 < views.length; i$1++) {
    var view = views[i$1];
    view.__redom_index = i$1;
  }

  setChildren(this, views);

  if (keySet) {
    this.lookup = lookup;
  }

  this.views = views;
};

List.extend = function (parent, View, key, initData) {
  return List.bind(List, parent, View, key, initData);
};

list.extend = List.extend;
/* global Node */

var place = function (View, initData) {
  return new Place(View, initData);
};

exports.place = place;

var Place = function Place(View, initData) {
  this.el = text('');
  this.visible = false;
  this.view = null;
  this._placeholder = this.el;

  if (View instanceof Node) {
    this._el = View;
  } else {
    this._View = View;
  }

  this._initData = initData;
};

exports.Place = Place;

Place.prototype.update = function update(visible, data) {
  var placeholder = this._placeholder;
  var parentNode = this.el.parentNode;

  if (visible) {
    if (!this.visible) {
      if (this._el) {
        mount(parentNode, this._el, placeholder);
        unmount(parentNode, placeholder);
        this.el = this._el;
        this.visible = visible;
        return;
      }

      var View = this._View;
      var view = new View(this._initData);
      this.el = getEl(view);
      this.view = view;
      mount(parentNode, view, placeholder);
      unmount(parentNode, placeholder);
    }

    this.view && this.view.update && this.view.update(data);
  } else {
    if (this.visible) {
      if (this._el) {
        mount(parentNode, placeholder, this._el);
        unmount(parentNode, this._el);
        this.el = placeholder;
        this.visible = visible;
        return;
      }

      mount(parentNode, placeholder, this.view);
      unmount(parentNode, this.view);
      this.el = placeholder;
      this.view = null;
    }
  }

  this.visible = visible;
};

var router = function (parent, Views, initData) {
  return new Router(parent, Views, initData);
};

exports.router = router;

var Router = function Router(parent, Views, initData) {
  this.el = ensureEl(parent);
  this.Views = Views;
  this.initData = initData;
};

exports.Router = Router;

Router.prototype.update = function update(route, data) {
  if (route !== this.route) {
    var Views = this.Views;
    var View = Views[route];
    this.route = route;
    this.view = View && new View(this.initData, data);
    setChildren(this.el, [this.view]);
  }

  this.view && this.view.update && this.view.update(data, route);
};

var ns = 'http://www.w3.org/2000/svg';
var svgCache = {};

var memoizeSVG = function (query) {
  return svgCache[query] || (svgCache[query] = createElement(query, ns));
};

var svg = function (query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) args[len] = arguments[len + 1];

  var element;
  var type = typeof query;

  if (type === 'string') {
    element = memoizeSVG(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply(Query, [null].concat(args)))();
  } else {
    throw new Error('At least one argument required');
  }

  parseArguments(getEl(element), args);
  return element;
};

exports.svg = svg;

svg.extend = function (query) {
  var clone = memoizeSVG(query);
  return svg.bind(this, clone);
};

svg.ns = ns;
var s = svg;
exports.s = s;
},{}],"../../../../../libs/client/src/store/methods/get.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

function get(Store) {
  return function (registerNumber) {
    return function (field) {
      Store.methods.subscribe(registerNumber, field);
      return Store.objects.observables[field];
    };
  };
}
},{}],"../../../../../libs/client/src/store/methods/subscribe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;

function subscribe(Store) {
  return function (registerNumber, observable) {
    var findListener = Store.objects.listeners.find(function (item) {
      return item.observable === observable;
    });
    if (!findListener) return console.log("Listener not found on observable ".concat(observable));
    var currentListeners = findListener.components;
    var isSubscribed = currentListeners.find(function (item) {
      return item.registerNumber === registerNumber;
    });
    if (!isSubscribed) currentListeners.push({
      registerNumber: registerNumber
    });
  };
}
},{}],"../../../../../libs/client/src/store/methods/set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isPlainValue = function isPlainValue(v) {
  return ['string', 'number', 'boolean'].includes(_typeof(v));
};

var wasChanged = function wasChanged(v1, v2) {
  return v1 !== v2;
};

function set(Store) {
  return function (object) {
    if (!object) return;
    Object.keys(object).forEach(function (key) {
      var previousValue = Store.objects.observables[key];
      var previousValueClone = Array.isArray(previousValue) ? _toConsumableArray(previousValue) : _typeof(previousValue) === 'object' ? _objectSpread({}, previousValue) : previousValue;
      var nextValue = typeof object[key] === 'function' ? object[key](previousValueClone) : object[key];

      if (_typeof(previousValue) !== _typeof(nextValue)) {
        console.warn("Type does not match previous type in ".concat(key));
      } else {
        var shouldNotify = !isPlainValue(nextValue) || isPlainValue(nextValue) && wasChanged(previousValue, nextValue);

        if (shouldNotify) {
          Store.objects.observables[key] = nextValue;
          Store.methods.notify(key);
        }
      }
    });
  };
}
},{}],"../../../../../libs/client/src/store/methods/setItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setItem = setItem;

function setItem(Store) {
  return function (observable, item) {
    var findIndex = Store.objects.observables[observable].findIndex(function (x) {
      return x.id === item.id;
    });
    Store.objects.observables[observable][findIndex] = item;
    Store.methods.notify(observable);
  };
}
},{}],"../../../../../libs/client/src/store/methods/toggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggle(Store) {
  return function (observable, cb) {
    var currentValue = Store.objects.observables[observable];

    if (typeof currentValue === 'undefined') {
      console.warn("Observable [".concat(observable, "] does not exists."));
    } else if (typeof currentValue !== 'boolean') {
      console.warn("Observable [".concat(observable, "] is not a boolean."));
    } else {
      Store.methods.set(_defineProperty({}, observable, !currentValue));
      if (cb) cb(!currentValue);
    }
  };
}
},{}],"../../../../../libs/client/src/store/methods/notify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notify = notify;

function notify(Store) {
  return function (observable) {
    // Notify computed
    if (observable) {
      Object.keys(Store.objects.computed).forEach(function (key) {
        var take = Store.objects.computed[key].take;
        if (take.includes(observable)) Store.methods.compute(key);
      });
    } // Notify components
    // if (Store.flags.IS_MOUNTED) Store.methods.render();


    var findListener = Store.objects.listeners.find(function (item) {
      return item.observable === observable;
    });

    if (findListener && findListener.components) {
      findListener.components.forEach(function (item) {
        var registerNumber = item.registerNumber;
        var componentDefinition = Store.objects.components[registerNumber];

        componentDefinition.definition._update();
      });
    }
  };
}
},{}],"../../../../../libs/client/src/store/methods/compute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compute = compute;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function compute(Store) {
  return function (key) {
    var _Store$objects$comput = Store.objects.computed[key],
        take = _Store$objects$comput.take,
        calc = _Store$objects$comput.calc;
    var values = take.map(function (field) {
      return Store.objects.observables[field];
    });
    Store.objects.observables[key] = calc.apply(void 0, _toConsumableArray(values));
  };
}
},{}],"../../../../../libs/client/src/store/methods/computeAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeAll = computeAll;

function computeAll(Store) {
  return function () {
    Object.keys(Store.objects.computed).forEach(function (key) {
      Store.methods.compute(key);
    });
  };
}
},{}],"../../../../../libs/client/src/store/methods/emit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emit = emit;

function emit(Store) {
  return function (eventStr, cbProps) {
    if (eventStr === 'MOUNTED') Store.flags.IS_MOUNTED = true;
    var reactions = Store.objects.reactions.filter(function (item) {
      if (item.keepAlive) return item.eventStr === eventStr;
      return item.eventStr === eventStr && !item.done;
    });
    reactions.forEach(function (reaction) {
      reaction.done = true;
      reaction.callback(cbProps);
    });
  };
}
},{}],"../../../../../libs/client/src/store/methods/registerComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerComponent = registerComponent;
var currentRegisterNumber = 1000;

function registerComponent(Store) {
  return function (componentDef) {
    // if (componentDef.id) return componentDef.id;
    currentRegisterNumber++;
    Store.objects.components[currentRegisterNumber] = {
      definition: componentDef,
      element: null
    };
    return currentRegisterNumber;
  }; // return {
  //   definition: componentDef => {
  //     // if (componentDef.id) return componentDef.id;
  //     currentRegisterNumber++;
  //     Store.objects.components[currentRegisterNumber] = {
  //       definition: componentDef,
  //       element: null,
  //     };
  //     return currentRegisterNumber;
  //   },
  //   domNode: (registerNumber, { domNode, props, children }) => {
  //     Store.objects.components[currentRegisterNumber].domNode = domNode;
  //     Store.objects.components[currentRegisterNumber].props = props;
  //     Store.objects.components[currentRegisterNumber].children = children;
  //   },
  // };
}
},{}],"../../../../../libs/client/src/store/methods/on.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;

function on(Store) {
  return function (eventStr, callback) {
    Store.objects.reactions.push({
      eventStr: eventStr,
      callback: callback,
      keepAlive: true
    });
  };
}
},{}],"../../../../../libs/client/src/store/methods/once.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.once = once;

function once(Store) {
  return function (eventStr, callback) {
    Store.objects.reactions.push({
      eventStr: eventStr,
      callback: callback,
      done: false
    });
  };
}
},{}],"../../../../../libs/client/src/store/methods/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

function render(Store, mounter) {
  return function (Comp) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // console.log("render ------------------------------->", Comp, props);
    if (!Store.objects.rootComponent) Store.objects.rootComponent = function () {
      return Comp(props);
    };
    var Component = Comp || Store.objects.rootComponent; // mounter(document.body, Component(props));

    document.body.innerHTML = '';
    document.body.appendChild(Component(props));
  };
}
},{}],"../../../../../libs/client/src/store/methods/check.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = check;

function check(Store, checks) {
  return function (name, str) {
    var _checks$name = checks[name](str),
        result = _checks$name.result,
        message = _checks$name.message;

    return {
      result: result,
      message: message
    };
  };
}
},{}],"../../../../../libs/client/src/store/methods/alertOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertOn = alertOn;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function alertOn(Store, alerts) {
  return function () {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rand1000 = Math.floor(1000 * Math.random());
    var timestamp = Date.now();

    var _id = "".concat(timestamp, "--").concat(rand1000);

    var message = obj.name ? alerts[obj.name] : obj.name;
    Store.objects.alerts.push(_objectSpread({
      _id: _id
    }, obj, {
      message: message,
      timestamp: timestamp,
      isVisible: true
    })); // Maybe later we are going to notify only the exact component using alerts

    Store.methods.notify(null);

    if (obj.timeout) {
      setTimeout(function () {
        Store.methods.alertOff({
          _id: _id
        });
      }, obj.timeout);
    }
  };
}
},{}],"../../../../../libs/client/src/store/methods/alertOff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertOff = alertOff;

function alertOff(Store) {
  return function (_ref) {
    var _id = _ref._id;
    var findAlert = Store.objects.alerts.find(function (item) {
      return item._id === _id;
    });

    if (findAlert) {
      findAlert.isVisible = false; // Maybe later we are going to notify only the exact component using alerts

      Store.methods.notify(null);
    }
  };
}
},{}],"../../../../../libs/client/src/store/methods/callServerMethod.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callServerMethod = callServerMethod;

function callServerMethod(siteUrl) {
  return function (method) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // For each query string parameter sent, add it to the path
    // const requestUrl = Object.keys(queryStringObject).reduce((acum, key, index) => {
    //   const queryStr = `${key}=${queryStringObject[key]}`;
    //   if (index === 0) return `${acum}?${queryStr}`;
    //   return `${acum}&${queryStr}`;
    // }, `${baseUrl}/${path}`);
    return new Promise(function (resolve, reject) {
      // Form the http request as a JSON type
      var xhr = new window.XMLHttpRequest();
      xhr.open('POST', "".concat(siteUrl, "/api/methods"), true);
      xhr.setRequestHeader('Content-type', 'application/json'); // For each header sent, add it to the request
      // Object.keys(headers).forEach(key => {
      //   xhr.setRequestHeader(key, headers[key]);
      // });
      // When the request comes back, handle the response

      xhr.onreadystatechange = function () {
        if (xhr.readyState === window.XMLHttpRequest.DONE) {
          var statusCode = xhr.status;
          if (![200, 201].includes(statusCode)) reject('XHR request failed');
          var responseReturned = xhr.responseText;
          resolve(JSON.parse(responseReturned));
        }
      }; // Send the payload as JSON


      var payloadString = JSON.stringify({
        method: method,
        args: args
      });
      xhr.send(payloadString);
    });
  };
}
},{}],"../../../../../libs/client/src/globals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  SYSTEM_DB_USER_ID: '0000000-system-000000',
  WINDOW_APP_DATA: '__appData__',
  GET_MODEL_DATA_METHOD: '@server-model.getData'
};
exports.default = _default;
},{}],"../../../../../libs/client/src/store/db/getDataFromServer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataFromServer = getDataFromServer;

var _globals = _interopRequireDefault(require("../../globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDataFromServer(Store) {
  return function (args) {
    var _args$instance = args.instance,
        instance = _args$instance === void 0 ? null : _args$instance,
        user_id = args.user_id,
        _args$lastTimestamp = args.lastTimestamp,
        lastTimestamp = _args$lastTimestamp === void 0 ? 0 : _args$lastTimestamp,
        _args$localEntitiesId = args.localEntitiesIds,
        localEntitiesIds = _args$localEntitiesId === void 0 ? [] : _args$localEntitiesId;
    var requestArgs = {
      user_id: user_id,
      lastTimestamp: lastTimestamp,
      localEntitiesIds: localEntitiesIds
    };
    return new Promise(function (resolve, reject) {
      // Special method available ony for internal libs
      Store.methods.callServerMethod(_globals.default.GET_MODEL_DATA_METHOD, requestArgs).then(function (items) {
        if (!items) reject('Could not get data from server');
        var newTimestamp = Date.now();
        resolve({
          instance: instance,
          items: items,
          newTimestamp: newTimestamp
        });
      }).catch(reject);
    });
  };
}
},{"../../globals":"../../../../../libs/client/src/globals.js"}],"../../../../../libs/client/src/store/db/syncDataToDB.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncDataToDB = syncDataToDB;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function syncDataToDB(_ref) {
  var instance = _ref.instance,
      items = _ref.items,
      newTimestamp = _ref.newTimestamp;
  var counter = 0;
  return new Promise(function (resolve) {
    if (items.length === 0) resolve({
      instance: instance,
      counter: counter,
      newTimestamp: newTimestamp
    });
    var modelStore = instance.transaction(['model'], 'readwrite').objectStore('model');
    var requestPrevRecords = modelStore.getAll();

    requestPrevRecords.onsuccess = function () {
      var previousRecords = requestPrevRecords.result;
      items.forEach(function (item) {
        if (item.attrs.length > 0) {
          var findRecord = previousRecords.find(function (rec) {
            return rec._id === item._id;
          });
          var putRequest = modelStore.put({
            _id: item._id,
            domain: item.domain,
            attrs: findRecord ? [].concat(_toConsumableArray(findRecord.attrs), _toConsumableArray(item.attrs)) : item.attrs
          });

          putRequest.onsuccess = function () {
            counter++;
            if (counter === items.length) resolve({
              instance: instance,
              counter: counter,
              newTimestamp: newTimestamp
            });
          };
        }
      });
    };
  });
}
},{}],"../../../../../libs/client/src/store/db/getDBMetadata.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDBMetadata = getDBMetadata;

function getDBMetadata(_ref) {
  var instance = _ref.instance,
      user_id = _ref.user_id;
  return new Promise(function (resolve, reject) {
    var controlStore = instance.transaction('control').objectStore('control');
    var requestControlRecords = controlStore.getAll();

    requestControlRecords.onsuccess = function () {
      var controlRecords = requestControlRecords.result || [];
      var lastTimestamp = controlRecords.length > 0 ? controlRecords[controlRecords.length - 1].lastTimestamp : 0;
      var modelStore = instance.transaction('model').objectStore('model');
      var requestModelKeys = modelStore.getAllKeys();

      requestModelKeys.onsuccess = function () {
        var localEntitiesIds = requestModelKeys.result || [];
        resolve({
          instance: instance,
          user_id: user_id,
          lastTimestamp: lastTimestamp,
          localEntitiesIds: localEntitiesIds
        });
      };

      requestModelKeys.onerror = function () {
        return reject('Error getting Model Keys');
      };
    };

    requestControlRecords.onerror = function () {
      return reject('Error getting Control Records');
    };
  });
}
},{}],"../../../../../libs/client/src/store/db/updateDBControl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDBControl = updateDBControl;

function updateDBControl(_ref) {
  var instance = _ref.instance,
      counter = _ref.counter,
      newTimestamp = _ref.newTimestamp;
  return new Promise(function (resolve) {
    var controlStore = instance.transaction(['control'], 'readwrite').objectStore('control');
    var putRequest = controlStore.put({
      _id: newTimestamp,
      lastTimestamp: newTimestamp,
      counter: counter
    });

    putRequest.onsuccess = function () {
      resolve({
        instance: instance
      });
    };
  });
}
},{}],"../../../../../libs/client/src/store/db/getModelData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModelData = getModelData;

function getModelData(_ref) {
  var instance = _ref.instance;
  return new Promise(function (resolve) {
    var modelStore = instance.transaction('model').objectStore('model');
    var requestRecords = modelStore.getAll();

    requestRecords.onsuccess = function () {
      return resolve(requestRecords.result);
    };
  });
}
},{}],"../../../../../libs/client/src/store/db/start.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;

var _getDataFromServer = require("./getDataFromServer");

var _syncDataToDB = require("./syncDataToDB");

var _getDBMetadata = require("./getDBMetadata");

var _updateDBControl = require("./updateDBControl");

var _getModelData = require("./getModelData");

function start(Store, _ref) {
  var name = _ref.name,
      version = _ref.version,
      user_id = _ref.user_id;
  var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB; // No indexedDB, we just request all data always

  if (!indexedDB) {
    return new Promise(function (resolve, reject) {
      (0, _getDataFromServer.getDataFromServer)({
        user_id: user_id
      }).then(function (_ref2) {
        var items = _ref2.items;
        return resolve(items);
      }).catch(reject);
    });
  }

  return new Promise(function (resolve, reject) {
    var request = indexedDB.open(name, version);

    request.onsuccess = function () {
      return resolve({
        instance: request.result,
        user_id: user_id
      });
    };

    request.onerror = function () {
      return reject(request.error);
    };

    request.onupgradeneeded = function (e) {
      var instance = e.target.result;
      instance.model = instance.createObjectStore('model', {
        keyPath: '_id'
      });
      instance.control = instance.createObjectStore('control', {
        keyPath: '_id'
      });
    };
  }).then(_getDBMetadata.getDBMetadata).then((0, _getDataFromServer.getDataFromServer)(Store)).then(_syncDataToDB.syncDataToDB).then(_updateDBControl.updateDBControl).then(_getModelData.getModelData).catch(console.log);
}
},{"./getDataFromServer":"../../../../../libs/client/src/store/db/getDataFromServer.js","./syncDataToDB":"../../../../../libs/client/src/store/db/syncDataToDB.js","./getDBMetadata":"../../../../../libs/client/src/store/db/getDBMetadata.js","./updateDBControl":"../../../../../libs/client/src/store/db/updateDBControl.js","./getModelData":"../../../../../libs/client/src/store/db/getModelData.js"}],"../../../../../libs/client/src/store/db/hydrate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrate = hydrate;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getCurrentAttrs(attrs) {
  return attrs.reduce(function (acum, item) {
    var key = item.key,
        value = item.value,
        timestamp = item.timestamp;
    /*      value:        is always what is displayed at the UI, used in calculations, etc.        can be in 2 status      status:        0: value is "optimistic" and has not been validated yet by the server        1: value coherent with the server initial load,        2: optimistic value that was confirmed by the server        3: value that came from the server through web-sockets      dbValue:        is the last value that was confirmed by the server        if null indicates that the whole record is not confirmed yet      timestamp:        is the timestamp that reflects the last status coming from the server    */

    if (!acum[key]) acum[key] = {
      value: value,
      dbValue: value,
      status: 1,
      timestamp: timestamp
    };
    return _objectSpread({}, acum, _defineProperty({}, key, timestamp > acum[key].timestamp ? {
      value: value,
      dbValue: value,
      status: 1,
      timestamp: timestamp
    } : acum[key]));
  }, {});
}

function hydrate(Store) {
  return function (data) {
    if (data.length > 0) {
      Store.db.data = data.reduce(function (acum, item) {
        var _id = item._id,
            domain = item.domain,
            attrs = item.attrs;
        if (!acum[domain]) acum[domain] = [];
        return _objectSpread({}, acum, _defineProperty({}, domain, [].concat(_toConsumableArray(acum[domain]), [{
          _id: _id,
          attrs: getCurrentAttrs(attrs)
        }])));
      }, {}); // Renders the defaultComponent (Container)

      if (Store.flags.IS_MOUNTED) Store.methods.render();
    }
  };
}
},{}],"../../../../../libs/client/src/store/db/query.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;

function query(Store) {
  return function (domain) {
    if (!Store.db.data) return [];
    return Store.db.data[domain] || [];
  };
}
},{}],"../../../../../libs/client/src/store/db/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "start", {
  enumerable: true,
  get: function () {
    return _start.start;
  }
});
Object.defineProperty(exports, "hydrate", {
  enumerable: true,
  get: function () {
    return _hydrate.hydrate;
  }
});
Object.defineProperty(exports, "query", {
  enumerable: true,
  get: function () {
    return _query.query;
  }
});

var _start = require("./start");

var _hydrate = require("./hydrate");

var _query = require("./query");
},{"./start":"../../../../../libs/client/src/store/db/start.js","./hydrate":"../../../../../libs/client/src/store/db/hydrate.js","./query":"../../../../../libs/client/src/store/db/query.js"}],"../../../../../libs/client/src/store/sockets/initSocket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = initSocket;

function initSocket(_ref) {
  var socketUrl = _ref.socketUrl,
      user_id = _ref.user_id,
      onMessage = _ref.onMessage;

  if (!socketUrl) {
    console.log('SocketUrl not defined');
    return function () {
      return undefined;
    };
  }

  var wsSupport = 'WebSocket' in window;

  if (!wsSupport) {
    console.log('WebSocket not supported');
    return function () {
      return undefined;
    };
  }

  var ws = new window.WebSocket(socketUrl);

  var sendJSON = function sendJSON(obj) {
    return ws.send(JSON.stringify(obj));
  };

  ws.onopen = function () {
    console.log('WebSocket opened'); // tell the server user_id is connected

    if (user_id) sendJSON({
      user_id: user_id,
      isInitial: true
    });
  };

  ws.onclose = function (x) {
    return console.log('WebSocket closed', x);
  };

  ws.onmessage = function (obj) {
    onMessage(JSON.parse(obj.data));
  };

  return sendJSON;
}
},{}],"../../../../../libs/client/src/store/sockets/onMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMessage = onMessage;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function onMessage(Store) {
  return function (payload) {
    var data = payload.data,
        isInitial = payload.isInitial;
    if (isInitial) console.log('Socket first message --> ', payload);

    if (data) {
      var _id = data._id,
          domain = data.domain,
          attrs = data.attrs;
      if (!Store.db.data[domain]) Store.db.data[domain] = [];
      var findEntity = Store.db.data[domain].find(function (item) {
        return item._id === _id;
      });

      if (!findEntity) {
        // Create entity
        Store.db.data[domain].push({
          _id: _id,
          attrs: attrs.reduce(function (acum, item) {
            var key = item.key,
                value = item.value,
                timestamp = item.timestamp;
            return _objectSpread({}, acum, _defineProperty({}, key, {
              value: value,
              dbValue: value,
              status: 3,
              timestamp: timestamp
            }));
          }, {})
        });
      } else {
        // Update entity
        attrs.forEach(function (item) {
          var key = item.key,
              value = item.value,
              timestamp = item.timestamp;
          findEntity.attrs[key] = {
            value: value,
            dbValue: value,
            status: 3,
            timestamp: timestamp
          };
        });
      }

      Store.methods.render();
    }
  };
}
},{}],"../../../../../libs/client/src/store/sockets/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "initSocket", {
  enumerable: true,
  get: function () {
    return _initSocket.initSocket;
  }
});
Object.defineProperty(exports, "onMessage", {
  enumerable: true,
  get: function () {
    return _onMessage.onMessage;
  }
});

var _initSocket = require("./initSocket");

var _onMessage = require("./onMessage");
},{"./initSocket":"../../../../../libs/client/src/store/sockets/initSocket.js","./onMessage":"../../../../../libs/client/src/store/sockets/onMessage.js"}],"../../../../../../../../.npm-packages/lib/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../../../../libs/client/src/store/lifecycle/connectStoreToServer.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectStoreToServer = connectStoreToServer;

var db = _interopRequireWildcard(require("../db"));

var sockets = _interopRequireWildcard(require("../sockets"));

var _methods = require("../methods");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var isBrowser = process.browser;

function connectStoreToServer(Store, _ref) {
  var user_id = _ref.user_id,
      siteUrl = _ref.siteUrl,
      socketUrl = _ref.socketUrl;

  /* ----------------------------------------------------------------------------------------------    Initialize db && sockets  ---------------------------------------------------------------------------------------------- */
  Store.methods.callServerMethod = (0, _methods.callServerMethod)(siteUrl);

  if (isBrowser) {
    /* ----------------------------------------------------------------------------------------------    Initialize sockets  ---------------------------------------------------------------------------------------------- */
    var sendJSON = sockets.initSocket({
      socketUrl: socketUrl,
      user_id: user_id,
      onMessage: sockets.onMessage(Store)
    });
    Store.sockets = {
      sendJSON: sendJSON
    };
    /* ----------------------------------------------------------------------------------------------    Initialize db  ---------------------------------------------------------------------------------------------- */

    Store.db = {
      data: null,
      // already transformed and living free after initialization
      query: db.query(Store)
    };
    return db.start(Store, {
      name: 'asyncDB',
      version: 1,
      user_id: user_id
    }).then(db.hydrate(Store)).catch(console.log);
  }
}
},{"../db":"../../../../../libs/client/src/store/db/index.js","../sockets":"../../../../../libs/client/src/store/sockets/index.js","../methods":"../../../../../libs/client/src/store/methods/index.js","process":"../../../../../../../../.npm-packages/lib/node_modules/parcel-bundler/node_modules/process/browser.js"}],"../../../../../libs/client/src/store/methods/startApp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startApp = startApp;

var _connectStoreToServer = require("../lifecycle/connectStoreToServer");

function startApp(Store) {
  return function (_ref) {
    var appData = _ref.appData,
        rootComponent = _ref.rootComponent;
    var currentPage = appData.currentPage,
        query = appData.query,
        baseUrl = appData.baseUrl,
        baseFolder = appData.baseFolder,
        httpPort = appData.httpPort,
        socketPort = appData.socketPort,
        isProduction = appData.isProduction,
        useServiceWorker = appData.useServiceWorker;
    var siteUrl = isProduction ? "https://".concat(baseUrl, "/").concat(baseFolder) : "http://".concat(baseUrl, ":").concat(httpPort);
    var socketUrl = !socketPort ? null : isProduction ? "wss://".concat(baseUrl, "/").concat(baseFolder) : "ws://".concat(baseUrl, ":").concat(socketPort);
    /* ------------------------------------------------------------------------------------------------  Register Service Worker------------------------------------------------------------------------------------------------ */

    if (useServiceWorker && 'serviceWorker' in window.navigator) {
      window.navigator.serviceWorker.register('../sw.js', {
        scope: '/'
      }).then(function (registration) {
        console.log('Service Worker registration OK', registration);
      }).catch(function (error) {
        console.log('Service Worker registration FAILED', error);
      });
    }
    /* ------------------------------------------------------------------------------------------------  First Render && Connect to Server data------------------------------------------------------------------------------------------------ */


    if (currentPage) Store.methods.set({
      currentPage: currentPage
    });
    if (query.user) Store.methods.set({
      user_id: query.user
    });
    (0, _connectStoreToServer.connectStoreToServer)(Store, {
      user_id: query.user,
      siteUrl: siteUrl,
      socketUrl: socketUrl
    }).then(function () {
      Store.methods.render(rootComponent, {
        currentPage: currentPage
      });
      Store.methods.emit('MOUNTED');
    });
  };
}
},{"../lifecycle/connectStoreToServer":"../../../../../libs/client/src/store/lifecycle/connectStoreToServer.js"}],"../../../../../libs/client/src/store/methods/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "get", {
  enumerable: true,
  get: function () {
    return _get.get;
  }
});
Object.defineProperty(exports, "subscribe", {
  enumerable: true,
  get: function () {
    return _subscribe.subscribe;
  }
});
Object.defineProperty(exports, "set", {
  enumerable: true,
  get: function () {
    return _set.set;
  }
});
Object.defineProperty(exports, "setItem", {
  enumerable: true,
  get: function () {
    return _setItem.setItem;
  }
});
Object.defineProperty(exports, "toggle", {
  enumerable: true,
  get: function () {
    return _toggle.toggle;
  }
});
Object.defineProperty(exports, "notify", {
  enumerable: true,
  get: function () {
    return _notify.notify;
  }
});
Object.defineProperty(exports, "compute", {
  enumerable: true,
  get: function () {
    return _compute.compute;
  }
});
Object.defineProperty(exports, "computeAll", {
  enumerable: true,
  get: function () {
    return _computeAll.computeAll;
  }
});
Object.defineProperty(exports, "emit", {
  enumerable: true,
  get: function () {
    return _emit.emit;
  }
});
Object.defineProperty(exports, "registerComponent", {
  enumerable: true,
  get: function () {
    return _registerComponent.registerComponent;
  }
});
Object.defineProperty(exports, "on", {
  enumerable: true,
  get: function () {
    return _on.on;
  }
});
Object.defineProperty(exports, "once", {
  enumerable: true,
  get: function () {
    return _once.once;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return _render.render;
  }
});
Object.defineProperty(exports, "check", {
  enumerable: true,
  get: function () {
    return _check.check;
  }
});
Object.defineProperty(exports, "alertOn", {
  enumerable: true,
  get: function () {
    return _alertOn.alertOn;
  }
});
Object.defineProperty(exports, "alertOff", {
  enumerable: true,
  get: function () {
    return _alertOff.alertOff;
  }
});
Object.defineProperty(exports, "callServerMethod", {
  enumerable: true,
  get: function () {
    return _callServerMethod.callServerMethod;
  }
});
Object.defineProperty(exports, "startApp", {
  enumerable: true,
  get: function () {
    return _startApp.startApp;
  }
});

var _get = require("./get");

var _subscribe = require("./subscribe");

var _set = require("./set");

var _setItem = require("./setItem");

var _toggle = require("./toggle");

var _notify = require("./notify");

var _compute = require("./compute");

var _computeAll = require("./computeAll");

var _emit = require("./emit");

var _registerComponent = require("./registerComponent");

var _on = require("./on");

var _once = require("./once");

var _render = require("./render");

var _check = require("./check");

var _alertOn = require("./alertOn");

var _alertOff = require("./alertOff");

var _callServerMethod = require("./callServerMethod");

var _startApp = require("./startApp");
},{"./get":"../../../../../libs/client/src/store/methods/get.js","./subscribe":"../../../../../libs/client/src/store/methods/subscribe.js","./set":"../../../../../libs/client/src/store/methods/set.js","./setItem":"../../../../../libs/client/src/store/methods/setItem.js","./toggle":"../../../../../libs/client/src/store/methods/toggle.js","./notify":"../../../../../libs/client/src/store/methods/notify.js","./compute":"../../../../../libs/client/src/store/methods/compute.js","./computeAll":"../../../../../libs/client/src/store/methods/computeAll.js","./emit":"../../../../../libs/client/src/store/methods/emit.js","./registerComponent":"../../../../../libs/client/src/store/methods/registerComponent.js","./on":"../../../../../libs/client/src/store/methods/on.js","./once":"../../../../../libs/client/src/store/methods/once.js","./render":"../../../../../libs/client/src/store/methods/render.js","./check":"../../../../../libs/client/src/store/methods/check.js","./alertOn":"../../../../../libs/client/src/store/methods/alertOn.js","./alertOff":"../../../../../libs/client/src/store/methods/alertOff.js","./callServerMethod":"../../../../../libs/client/src/store/methods/callServerMethod.js","./startApp":"../../../../../libs/client/src/store/methods/startApp.js"}],"../../../../../libs/client/src/store/queue/addToQueue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToQueue = addToQueue;

function addToQueue(Store) {
  return function (_ref) {
    var name = _ref.name,
        steps = _ref.steps,
        onError = _ref.onError;

    var _id = Date.now();

    var objToQueue = {
      _id: _id,
      name: name,
      steps: steps,
      done: false
    };
    if (onError) objToQueue.onError = onError;
    Store.process.queue.splice(0, 0, objToQueue); // ads into the first element

    Store.process.runTask({
      _id: _id
    });
  };
}
},{}],"../../../../../libs/client/src/store/queue/createProcesses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProcesses = createProcesses;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createProcesses(Store, actions) {
  if (!actions) return function () {
    return undefined;
  };
  var processes = Object.keys(actions).reduce(function (acum, key) {
    var singleAction = actions[key];
    /*      We dont want to pass the whole Store to the action, just observables      So, the actions consumes the Store like:      const { language } = Store.observables;    */

    var observables = Store.objects.observables;
    return _objectSpread({}, acum, _defineProperty({}, key, function (args) {
      Store.process.addToQueue(_objectSpread({
        name: key
      }, singleAction({
        observables: observables
      })(args)));
    }));
  }, {});
  return function (name, args) {
    return processes[name](args);
  };
}
},{}],"../../../../../libs/client/src/store/queue/processOptimistic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processOptimistic = processOptimistic;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function processOptimistic(Store, args) {
  var _id = args._id,
      domain = args.domain,
      attrs = args.attrs;
  if (!Store.db.data[domain]) Store.db.data[domain] = [];
  var findEntity = Store.db.data[domain].find(function (item) {
    return item._id === _id;
  });
  /*
    Case 1: New Entity
  */

  if (!findEntity) {
    // Create entity
    Store.db.data[domain].push({
      _id: _id,
      attrs: Object.keys(attrs).reduce(function (acum, key) {
        return _objectSpread({}, acum, _defineProperty({}, key, {
          value: attrs[key],
          dbValue: null,
          status: 0,
          timestamp: Date.now()
        }));
      }, {})
    });
  } else {
    /*
      Case 2: Existing entity, new attrs
    */
    // Update entity
    Object.keys(attrs).forEach(function (key) {
      var dbValue = attrs[key].value;
      findEntity.attrs[key] = {
        value: attrs[key],
        dbValue: dbValue,
        status: 0,
        timestamp: Date.now()
      };
    });
  }

  Store.methods.render();
  return function (isOK) {
    if (!findEntity && !isOK) {
      // New Entity + error => Remove the entity
      Store.db.data[domain] = Store.db.data[domain].filter(function (item) {
        return item._id !== _id;
      });
    } else {
      // New Entity + ok || Existing entity => Update fields
      var entity = Store.db.data[domain].find(function (item) {
        return item._id === _id;
      });
      Object.keys(entity.attrs).forEach(function (key) {
        var field = entity.attrs[key];

        if (field.status === 0) {
          field.status = isOK ? 2 : 1;
          if (!isOK) field.value = field.dbValue;
          if (isOK) field.dbValue = field.value;
          field.timestamp = Date.now();
        }
      });
    }

    if (!isOK) Store.methods.render();
  };
}
},{}],"../../../../../libs/client/src/store/queue/processStep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStep = processStep;

var _processOptimistic = require("./processOptimistic");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function processStep(Store, step) {
  var previousArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _step = step(previousArgs),
      method = _step.method,
      domain = _step.domain,
      args = _step.args,
      sideEffect = _step.sideEffect,
      _step$optimistic = _step.optimistic,
      optimistic = _step$optimistic === void 0 ? true : _step$optimistic; // Backend may return something valuable for the next step


  if (domain === '_Backend_') {
    var resolveOptimistic = optimistic ? (0, _processOptimistic.processOptimistic)(Store, args) : function () {
      return undefined;
    };
    return new Promise(function (resolve, reject) {
      return Store.methods.callServerMethod(method, args).then(function (response) {
        var error = response.error;
        var data = response.data;
        resolveOptimistic(!error);
        resolve({
          error: error,
          data: _objectSpread({}, previousArgs.data, data)
        });
      }).catch(function (err) {
        resolveOptimistic(false);
        reject(err);
      });
    });
  } // Store works like simple local State


  if (domain === '_Store_') {
    Store.methods[method](args);
    if (sideEffect) sideEffect();
    return Promise.resolve(previousArgs);
  }
}
},{"./processOptimistic":"../../../../../libs/client/src/store/queue/processOptimistic.js"}],"../../../../../libs/client/src/store/queue/processor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processor = processor;

var _processStep = require("./processStep");

// import { resolveArgs } from './resolveArgs';
function processor(Store) {
  return function (steps) {
    // Promise build
    var promises = steps.map(function (step) {
      return function (previousArgs) {
        // const args = resolveArgs(step.args, prevArgs);
        // processStep(Store, step, args);
        return (0, _processStep.processStep)(Store, step, previousArgs);
      };
    }); // Promise execution

    var proceed = true;
    promises.reduce(function (p, fn) {
      return p.then(function (res) {
        if (proceed) return fn(res);
      }).catch(function (e) {
        console.log('Error in Promise chain execution', e);
        proceed = false;
      });
    }, Promise.resolve({}));
  };
}
},{"./processStep":"../../../../../libs/client/src/store/queue/processStep.js"}],"../../../../../libs/client/src/store/queue/runTask.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runTask = runTask;

function runTask(Store) {
  return function (_ref) {
    var _id = _ref._id;
    var task = Store.process.queue.find(function (item) {
      return item._id === _id;
    });
    Store.process.processor(task.steps);
    task.done = true;
  };
}
},{}],"../../../../../libs/client/src/store/queue/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addToQueue", {
  enumerable: true,
  get: function () {
    return _addToQueue.addToQueue;
  }
});
Object.defineProperty(exports, "createProcesses", {
  enumerable: true,
  get: function () {
    return _createProcesses.createProcesses;
  }
});
Object.defineProperty(exports, "processor", {
  enumerable: true,
  get: function () {
    return _processor.processor;
  }
});
Object.defineProperty(exports, "runTask", {
  enumerable: true,
  get: function () {
    return _runTask.runTask;
  }
});

var _addToQueue = require("./addToQueue");

var _createProcesses = require("./createProcesses");

var _processor = require("./processor");

var _runTask = require("./runTask");
},{"./addToQueue":"../../../../../libs/client/src/store/queue/addToQueue.js","./createProcesses":"../../../../../libs/client/src/store/queue/createProcesses.js","./processor":"../../../../../libs/client/src/store/queue/processor.js","./runTask":"../../../../../libs/client/src/store/queue/runTask.js"}],"../../../../../libs/client/src/store/lifecycle/createStore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;

var methods = _interopRequireWildcard(require("../methods"));

var queue = _interopRequireWildcard(require("../queue"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function createStore(definition, mounter) {
  var Store = {};
  var _definition$observabl = definition.observables,
      observables = _definition$observabl === void 0 ? {} : _definition$observabl,
      _definition$computed = definition.computed,
      computed = _definition$computed === void 0 ? {} : _definition$computed,
      _definition$actions = definition.actions,
      actions = _definition$actions === void 0 ? {} : _definition$actions,
      _definition$alerts = definition.alerts,
      alerts = _definition$alerts === void 0 ? {} : _definition$alerts,
      _definition$checks = definition.checks,
      checks = _definition$checks === void 0 ? {} : _definition$checks;
  /* ----------------------------------------------------------------------------------------------    Initialize flags  ---------------------------------------------------------------------------------------------- */

  Store.flags = {
    IS_MOUNTED: false
  };
  /* ----------------------------------------------------------------------------------------------    Initialize utils to the store for convenience.  ---------------------------------------------------------------------------------------------- */

  Store.utils = {
    hoc: null // will be attached after ui initialization

  };
  /* ----------------------------------------------------------------------------------------------    Initialize observables  ---------------------------------------------------------------------------------------------- */

  Store.objects = {
    rootComponent: null,
    observables: observables,
    computed: computed,
    listeners: [],
    reactions: [],
    components: {},
    alerts: []
  };
  /* ----------------------------------------------------------------------------------------------    Initialize methods  ---------------------------------------------------------------------------------------------- */

  Store.methods = {
    check: methods.check(Store, checks),
    get: methods.get(Store),
    subscribe: methods.subscribe(Store),
    set: methods.set(Store),
    setItem: methods.setItem(Store),
    toggle: methods.toggle(Store),
    notify: methods.notify(Store),
    emit: methods.emit(Store),
    on: methods.on(Store),
    once: methods.once(Store),
    render: methods.render(Store, mounter),
    compute: methods.compute(Store),
    computeAll: methods.computeAll(Store),
    registerComponent: methods.registerComponent(Store),
    alertOn: methods.alertOn(Store, alerts),
    alertOff: methods.alertOff(Store),
    callServerMethod: function callServerMethod() {
      return undefined;
    },
    // will be initialized on 'connectStoreToServer'
    startApp: methods.startApp(Store)
  };
  /* ----------------------------------------------------------------------------------------------    Initialize queued processes  ---------------------------------------------------------------------------------------------- */

  Store.process = {
    queue: [],
    addToQueue: queue.addToQueue(Store),
    processor: queue.processor(Store),
    runTask: queue.runTask(Store),
    call: queue.createProcesses(Store, actions) // client side method call

  };
  /* ----------------------------------------------------------------------------------------------    Initialize listeners  ---------------------------------------------------------------------------------------------- */

  Object.keys(Store.objects.observables).forEach(function (observable) {
    Store.objects.listeners.push({
      observable: observable,
      components: []
    });
  });
  /* ----------------------------------------------------------------------------------------------    Start with computed values up to date  ---------------------------------------------------------------------------------------------- */

  Store.methods.computeAll();
  return Store;
}
},{"../methods":"../../../../../libs/client/src/store/methods/index.js","../queue":"../../../../../libs/client/src/store/queue/index.js"}],"../../../../../libs/client/src/store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createStore = require("./lifecycle/createStore");

var _default = _createStore.createStore;
exports.default = _default;
},{"./lifecycle/createStore":"../../../../../libs/client/src/store/lifecycle/createStore.js"}],"../../../../../libs/client/node_modules/morphdom/dist/morphdom.js":[function(require,module,exports) {
'use strict';

var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var doc = typeof document === 'undefined' ? undefined : document;

var testEl = doc ?
    doc.body || doc.createElement('div') :
    {};

// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
var actualHasAttributeNS;

if (testEl.hasAttributeNS) {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttributeNS(namespaceURI, name);
    };
} else if (testEl.hasAttribute) {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttribute(name);
    };
} else {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.getAttributeNode(namespaceURI, name) != null;
    };
}

var hasAttributeNS = actualHasAttributeNS;


function toElement(str) {
    if (!range && doc.createRange) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = doc.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;

    if (fromNodeName === toNodeName) {
        return true;
    }

    if (toEl.actualize &&
        fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
        // If the target element is a virtual DOM node then we may need to normalize the tag name
        // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
        // are converted to upper case
        return fromNodeName === toNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;

                if (!hasAttributeNS(toNode, attrNamespaceURI, attrName)) {
                    fromNode.removeAttributeNS(attrNamespaceURI, attrName);
                }
            } else {
                if (!hasAttributeNS(toNode, null, attrName)) {
                    fromNode.removeAttribute(attrName);
                }
            }
        }
    }
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name, '');
        }
    }
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttributeNS(toEl, null, 'value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        var firstChild = fromEl.firstChild;
        if (firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            var oldValue = firstChild.nodeValue;

            if (oldValue == newValue || (!newValue && oldValue == fromEl.placeholder)) {
                return;
            }

            firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!hasAttributeNS(toEl, null, 'multiple')) {
            var selectedIndex = -1;
            var i = 0;
            var curChild = toEl.firstChild;
            while(curChild) {
                var nodeName = curChild.nodeName;
                if (nodeName && nodeName.toUpperCase() === 'OPTION') {
                    if (hasAttributeNS(curChild, null, 'selected')) {
                        selectedIndex = i;
                        break;
                    }
                    i++;
                }
                curChild = curChild.nextSibling;
            }

            fromEl.selectedIndex = i;
        }
    }
};

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdomFactory(morphAttrs) {

    return function morphdom(fromNode, toNode, options) {
        if (!options) {
            options = {};
        }

        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else {
                toNode = toElement(toNode);
            }
        }

        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;

        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = {};
        var keyedRemovalList;

        function addKeyedRemoval(key) {
            if (keyedRemovalList) {
                keyedRemovalList.push(key);
            } else {
                keyedRemovalList = [key];
            }
        }

        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {

                    var key = undefined;

                    if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                        // If we are skipping keyed nodes then we add the key
                        // to a list so that it can be handled at the very end.
                        addKeyedRemoval(key);
                    } else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) {
                            walkDiscardedChildNodes(curChild, skipKeyedNodes);
                        }
                    }

                    curChild = curChild.nextSibling;
                }
            }
        }

        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */
        function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) {
                return;
            }

            if (parentNode) {
                parentNode.removeChild(node);
            }

            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }

        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {
                    var key = getNodeKey(curChild);
                    if (key) {
                        fromNodesLookup[key] = curChild;
                    }

                    // Walk recursively
                    indexTree(curChild);

                    curChild = curChild.nextSibling;
                }
            }
        }

        indexTree(fromNode);

        function handleNodeAdded(el) {
            onNodeAdded(el);

            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphEl(unmatchedFromEl, curChild);
                    }
                }

                handleNodeAdded(curChild);
                curChild = nextSibling;
            }
        }

        function morphEl(fromEl, toEl, childrenOnly) {
            var toElKey = getNodeKey(toEl);
            var curFromNodeKey;

            if (toElKey) {
                // If an element with an ID is being morphed then it is will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
                return;
            }

            if (!childrenOnly) {
                if (onBeforeElUpdated(fromEl, toEl) === false) {
                    return;
                }

                morphAttrs(fromEl, toEl);
                onElUpdated(fromEl);

                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                    return;
                }
            }

            if (fromEl.nodeName !== 'TEXTAREA') {
                var curToNodeChild = toEl.firstChild;
                var curFromNodeChild = fromEl.firstChild;
                var curToNodeKey;

                var fromNextSibling;
                var toNextSibling;
                var matchingFromEl;

                outer: while (curToNodeChild) {
                    toNextSibling = curToNodeChild.nextSibling;
                    curToNodeKey = getNodeKey(curToNodeChild);

                    while (curFromNodeChild) {
                        fromNextSibling = curFromNodeChild.nextSibling;

                        if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        curFromNodeKey = getNodeKey(curFromNodeChild);

                        var curFromNodeType = curFromNodeChild.nodeType;

                        var isCompatible = undefined;

                        if (curFromNodeType === curToNodeChild.nodeType) {
                            if (curFromNodeType === ELEMENT_NODE) {
                                // Both nodes being compared are Element nodes

                                if (curToNodeKey) {
                                    // The target node has a key so we want to match it up with the correct element
                                    // in the original DOM tree
                                    if (curToNodeKey !== curFromNodeKey) {
                                        // The current element in the original DOM tree does not have a matching key so
                                        // let's check our lookup to see if there is a matching element in the original
                                        // DOM tree
                                        if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                            if (curFromNodeChild.nextSibling === matchingFromEl) {
                                                // Special case for single element removals. To avoid removing the original
                                                // DOM node out of the tree (since that can break CSS transitions, etc.),
                                                // we will instead discard the current node and wait until the next
                                                // iteration to properly match up the keyed target element with its matching
                                                // element in the original tree
                                                isCompatible = false;
                                            } else {
                                                // We found a matching keyed element somewhere in the original DOM tree.
                                                // Let's moving the original DOM node into the current position and morph
                                                // it.

                                                // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                                // the `removeNode()` function for the node that is being discarded so that
                                                // all lifecycle hooks are correctly invoked
                                                fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                                fromNextSibling = curFromNodeChild.nextSibling;

                                                if (curFromNodeKey) {
                                                    // Since the node is keyed it might be matched up later so we defer
                                                    // the actual removal to later
                                                    addKeyedRemoval(curFromNodeKey);
                                                } else {
                                                    // NOTE: we skip nested keyed nodes from being removed since there is
                                                    //       still a chance they will be matched up later
                                                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                                }

                                                curFromNodeChild = matchingFromEl;
                                            }
                                        } else {
                                            // The nodes are not compatible since the "to" node has a key and there
                                            // is no matching keyed node in the source tree
                                            isCompatible = false;
                                        }
                                    }
                                } else if (curFromNodeKey) {
                                    // The original has a key
                                    isCompatible = false;
                                }

                                isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                                if (isCompatible) {
                                    // We found compatible DOM elements so transform
                                    // the current "from" node to match the current
                                    // target DOM node.
                                    morphEl(curFromNodeChild, curToNodeChild);
                                }

                            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                                // Both nodes being compared are Text or Comment nodes
                                isCompatible = true;
                                // Simply update nodeValue on the original node to
                                // change the text value
                                if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                                }

                            }
                        }

                        if (isCompatible) {
                            // Advance both the "to" child and the "from" child since we found a match
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        // No compatible match so remove the old node from the DOM and continue trying to find a
                        // match in the original DOM. However, we only do this if the from node is not keyed
                        // since it is possible that a keyed node might match up with a node somewhere else in the
                        // target tree and we don't want to discard it just yet since it still might find a
                        // home in the final DOM tree. After everything is done we will remove any keyed nodes
                        // that didn't find a home
                        if (curFromNodeKey) {
                            // Since the node is keyed it might be matched up later so we defer
                            // the actual removal to later
                            addKeyedRemoval(curFromNodeKey);
                        } else {
                            // NOTE: we skip nested keyed nodes from being removed since there is
                            //       still a chance they will be matched up later
                            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                        }

                        curFromNodeChild = fromNextSibling;
                    }

                    // If we got this far then we did not find a candidate match for
                    // our "to node" and we exhausted all of the children "from"
                    // nodes. Therefore, we will just append the current "to" node
                    // to the end
                    if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                        fromEl.appendChild(matchingFromEl);
                        morphEl(matchingFromEl, curToNodeChild);
                    } else {
                        var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                        if (onBeforeNodeAddedResult !== false) {
                            if (onBeforeNodeAddedResult) {
                                curToNodeChild = onBeforeNodeAddedResult;
                            }

                            if (curToNodeChild.actualize) {
                                curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                            }
                            fromEl.appendChild(curToNodeChild);
                            handleNodeAdded(curToNodeChild);
                        }
                    }

                    curToNodeChild = toNextSibling;
                    curFromNodeChild = fromNextSibling;
                }

                // We have processed all of the "to nodes". If curFromNodeChild is
                // non-null then we still have some from nodes left over that need
                // to be removed
                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;
                    if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }
                    curFromNodeChild = fromNextSibling;
                }
            }

            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) {
                specialElHandler(fromEl, toEl);
            }
        } // END: morphEl(...)

        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;

        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else {
                    // Going from an element node to a text node
                    morphedNode = toNode;
                }
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                if (toNodeType === morphedNodeType) {
                    if (morphedNode.nodeValue !== toNode.nodeValue) {
                        morphedNode.nodeValue = toNode.nodeValue;
                    }

                    return morphedNode;
                } else {
                    // Text node to something else
                    morphedNode = toNode;
                }
            }
        }

        if (morphedNode === toNode) {
            // The "to node" was not compatible with the "from node" so we had to
            // toss out the "from node" and use the "to node"
            onNodeDiscarded(fromNode);
        } else {
            morphEl(morphedNode, toNode, childrenOnly);

            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) {
                for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                    var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                    if (elToRemove) {
                        removeNode(elToRemove, elToRemove.parentNode, false);
                    }
                }
            }
        }

        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) {
                morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            }
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }

        return morphedNode;
    };
}

var morphdom = morphdomFactory(morphAttrs);

module.exports = morphdom;

},{}],"../../../../../libs/client/src/ui/styles/getClasses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClasses = getClasses;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { processStyle } from './processStyle';
function getClasses(registerNumber) {
  var componentDefClasses = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(componentDefClasses).reduce(function (acum, key) {
    return _objectSpread({}, acum, _defineProperty({}, key, "".concat(key, "--").concat(registerNumber)));
  }, {}); // const classKeys = Object.keys(componentDefClasses);
  // const mapping = {};
  // const rules = classKeys.reduce((acum, key) => {
  //   const newClassName = `${key}--${registerNumber}`;
  //   mapping[key] = newClassName;
  //   return `${acum}${processStyle(newClassName, componentDefClasses[key])}`;
  // }, '');
  // return {
  //   rules,
  //   mapping,
  // };
}
},{}],"../../../../../libs/client/node_modules/stylis/stylis.js":[function(require,module,exports) {
var define;
/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	typeof exports === 'object' && typeof module !== 'undefined' ? (module['exports'] = factory(null)) :
		typeof define === 'function' && define['amd'] ? define(factory(null)) :
			(window['stylis'] = factory(null))
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 105 /* <at>i */
	var CHARSET = 99 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							switch (code = body.charCodeAt(caret)) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
								case FOWARDSLASH: {
									switch (second = body.charCodeAt(caret + 1)) {
										// /*, //
										case STAR:
										case FOWARDSLASH: {
											caret = delimited(second, caret, eol, body)
										}
									}
									break
								}
								// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
								case OPENBRACKET: {
									code++
								}
								// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
								case OPENPARENTHESES: {
									code++
								}
								// quote tail delimiter is identical to the head delimiter hence noop,
								// fallthrough clauses have been shifted to the correct tail delimiter
								case DOUBLEQUOTE:
								case SINGLEQUOTE: {
									while (caret++ < eol) {
										if (body.charCodeAt(caret) === code) {
											break
										}
									}
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first) {
								case NULL: {
									break
								}
								case AT: {
									if (second === IMPORT || second === CHARSET) {
										flat += chars + body.charAt(caret)
										break
									}
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON) {
										break
									}

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE:
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												// :globa<l>(
												if (pseudo + 7 === caret && tail === 108) {
													pseudo = 0
												}
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				if (out.charCodeAt(8) === DASH) {
					return webkit + out + out
				}

				// image-set(...)
				if (out.indexOf('image-set(', 11) > 0) {
					return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
				}

				return out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}
		if (out !== content) {
		  return out
		}
	}

	/**
	 * @param {number} code
	 * @param {number} index
	 * @param {number} length
	 * @param {string} body
	 * @return {number}
	 */
	function delimited (code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH: {
					if (code === STAR) {
						if (body.charCodeAt(i - 1) === STAR &&  index + 2 !== i) {
							return i + 1
						}
					}
					break
				}
				// //
				case NEWLINE: {
					if (code === FOWARDSLASH) {
						return i + 1
					}
				}
			}
		}

		return i
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @param {number} length
	 * @param {number} find
	 * @param {string} body
	 * @return {number}
	 */
	function match (type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type: {
					return i
				}
			}
		}

		return i
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				if (typeof plugin === 'function') {
					plugins[plugged++] = plugin
				}	else if (typeof plugin === 'object') {
					for (var i = 0, length = plugin.length; i < length; ++i) {
						use(plugin[i])
					}
				} else {
					unkwn = !!plugin|0
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));

},{}],"../../../../../libs/client/src/ui/styles/processStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyle = processStyle;

var _stylis = _interopRequireDefault(require("stylis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// stylis minify CSS and add vendor prefixes
function processStyle(key, rules) {
  if (key) return (0, _stylis.default)(".".concat(key), rules); // Inline styles does not need the class selector

  var out = (0, _stylis.default)('', rules);
  return out.substr(1, out.length - 2);
}
},{"stylis":"../../../../../libs/client/node_modules/stylis/stylis.js"}],"../../../../../libs/client/src/ui/styles/getStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = getStyles;

var _processStyle = require("./processStyle");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getStyles() {
  var componentStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var styleKeys = Object.keys(componentStyles); // Return only inlineStyles to be attached to the component

  return styleKeys.reduce(function (acum, key) {
    var isFunction = typeof componentStyles[key] === 'function';
    return _objectSpread({}, acum, _defineProperty({}, key, isFunction ? function () {
      return (0, _processStyle.processStyle)(null, componentStyles[key].apply(componentStyles, arguments));
    } : (0, _processStyle.processStyle)(null, componentStyles[key])));
  }, {});
}
},{"./processStyle":"../../../../../libs/client/src/ui/styles/processStyle.js"}],"../../../../../libs/client/src/ui/styles/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getClasses = require("./getClasses");

var _getStyles = require("./getStyles");

// import { registerStyles } from './registerStyles';
var _default = {
  // registerStyles,
  getClasses: _getClasses.getClasses,
  getStyles: _getStyles.getStyles
};
exports.default = _default;
},{"./getClasses":"../../../../../libs/client/src/ui/styles/getClasses.js","./getStyles":"../../../../../libs/client/src/ui/styles/getStyles.js"}],"../../../../../libs/client/src/ui/hoc/getFinalProps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFinalProps = getFinalProps;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getFinalProps(args) {
  var client = args.client,
      store = args.store,
      componentDef = args.componentDef,
      processedClasses = args.processedClasses,
      processedStyles = args.processedStyles;
  var _componentDef$state = componentDef.state,
      state = _componentDef$state === void 0 ? function () {
    return {};
  } : _componentDef$state,
      _componentDef$actions = componentDef.actions,
      actions = _componentDef$actions === void 0 ? function () {
    return {};
  } : _componentDef$actions;

  var sections = _objectSpread({}, Object.keys(componentDef.sections || {}).reduce(function (acum, key) {
    return _objectSpread({}, acum, _defineProperty({}, key, componentDef.sections[key].default(client)));
  }, {}));

  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      props: props,
      state: state(props, store),
      actions: actions(props, store),
      styles: processedStyles,
      classes: processedClasses,
      sections: sections
    };
  };
}
},{}],"../../../../../libs/client/src/ui/hoc/getStore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStore = getStore;

function getStore(Store, registerNumber) {
  return {
    alerts: Store.objects.alerts,
    check: Store.methods.check,
    toggle: Store.methods.toggle,
    measure: Store.utils.measure,
    set: Store.methods.set,
    setItem: Store.methods.setItem,
    call: Store.process.call,
    get: Store.methods.get(registerNumber),
    db: Store.db ? Store.db.query : function () {
      return undefined;
    }
  };
}
},{}],"../../../../../libs/client/src/ui/hoc/createHoc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _morphdom = _interopRequireDefault(require("morphdom"));

var _styles = _interopRequireDefault(require("../styles"));

var _getFinalProps = require("./getFinalProps");

var _getStore = require("./getStore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(Store, client) {
  return function (componentDef) {
    var registerNumber = Store.methods.registerComponent(componentDef);

    var processedClasses = _styles.default.getClasses(registerNumber, componentDef.classes); // Provoque Side Effect for classes styles
    // styles.registerStyles(registerNumber, processedClasses.rules);


    var store = (0, _getStore.getStore)(Store, registerNumber);

    var processedStyles = _styles.default.getStyles(componentDef.styles);

    var solveProps = (0, _getFinalProps.getFinalProps)({
      client: client,
      store: store,
      componentDef: componentDef,
      processedClasses: processedClasses,
      processedStyles: processedStyles
    });

    componentDef._render = function (props, children) {
      console.log("componentDef", componentDef);
      console.log("props", props);
      var domNode = componentDef.render(solveProps(props), children);
      return domNode;
    };

    return function renderComponent(props, children) {
      componentDef._update = function () {
        console.log("componentDef update", componentDef);

        var newDomNode = componentDef._render(solveProps(props), children);

        (0, _morphdom.default)(componentDef._domNode, newDomNode);
        componentDef._domNode = newDomNode;
      };

      var domNode = componentDef._render(props, children);

      componentDef._domNode = domNode; // Store.methods.registerComponent.domNode(registerNumber, { domNode, props, children });

      return domNode;
    };
  };
};

exports.default = _default;
},{"morphdom":"../../../../../libs/client/node_modules/morphdom/dist/morphdom.js","../styles":"../../../../../libs/client/src/ui/styles/index.js","./getFinalProps":"../../../../../libs/client/src/ui/hoc/getFinalProps.js","./getStore":"../../../../../libs/client/src/ui/hoc/getStore.js"}],"../../../../../libs/client/src/createClient.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = createClient;

var _createHoc = _interopRequireDefault(require("./ui/hoc/createHoc"));

var _redom = require("redom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createClient(args) {
  var Store = args.Store,
      lib = args.lib,
      components = args.components,
      fragments = args.fragments; // Initialization

  var client = {
    ui: {
      elements: function elements(tag) {
        var svgTags = ['svg', 'g', 'path'];

        for (var _len = arguments.length, elArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          elArgs[_key - 1] = arguments[_key];
        }

        if (svgTags.includes(tag)) return _redom.svg.apply(void 0, [tag].concat(elArgs));
        return _redom.el.apply(void 0, [tag].concat(elArgs));
      }
    }
  }; // Store is necessary to create the HOC

  client.hoc = (0, _createHoc.default)(Store, client); // Attach lib for convenience

  client.lib = lib; // Components will be available to fragments and pages

  client.ui.components = Object.keys(components).reduce(function (acum, key) {
    return _objectSpread({}, acum, _defineProperty({}, key, components[key](client)));
  }, {}); // Fragments will be available to pages

  client.ui.fragments = Object.keys(fragments).reduce(function (acum, key) {
    return _objectSpread({}, acum, _defineProperty({}, key, fragments[key](client)));
  }, {});
  return client;
}
},{"./ui/hoc/createHoc":"../../../../../libs/client/src/ui/hoc/createHoc.js","redom":"../../../../../libs/client/node_modules/redom/dist/redom.es.js"}],"../../../../../libs/client/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _redom = require("redom");

var _store = _interopRequireDefault(require("./store"));

var _createClient = require("./createClient");

var _globals = _interopRequireDefault(require("./globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const isProduction = process.env.NODE_ENV === 'production';
var client = {
  init: function init(args) {
    var store = args.store,
        lib = args.lib,
        rootComponent = args.rootComponent,
        _args$components = args.components,
        components = _args$components === void 0 ? {} : _args$components,
        _args$fragments = args.fragments,
        fragments = _args$fragments === void 0 ? {} : _args$fragments;
    var Store = (0, _store.default)(store, _redom.mount);
    window.Store = Store;

    var _client = (0, _createClient.createClient)({
      Store: Store,
      lib: lib,
      components: components,
      fragments: fragments
    });

    window.onload = function () {
      Store.methods.startApp({
        appData: window[_globals.default.WINDOW_APP_DATA],
        rootComponent: rootComponent(_client)
      });
    };

    return _client;
  }
};
exports.client = client;
},{"redom":"../../../../../libs/client/node_modules/redom/dist/redom.es.js","./store":"../../../../../libs/client/src/store/index.js","./createClient":"../../../../../libs/client/src/createClient.js","./globals":"../../../../../libs/client/src/globals.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDevelopment = "development" === 'development';
var client = isDevelopment ? require("../../../../../libs/client/src/index.js").client : window.jmaguirrei.client;

var _default = client.init(_config.default.client);

exports.default = _default;
},{"../config.js":"../config.js","../../../../../libs/client/src/index.js":"../../../../../libs/client/src/index.js"}]},{},["main.js"], null)