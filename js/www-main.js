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
      console.log("props", props);
      return client.h("div", {
        style: styles.wrapper(props),
        className: classes.wrapper,
        onclick: props.onClick
      }, client.h("div", {
        className: classes.line,
        style: styles.top(props)
      }), client.h("div", {
        className: classes.line,
        style: styles.middle(props)
      }), client.h("div", {
        className: classes.line,
        style: styles.bottom(props)
      }));
    },
    id: 1001
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
      return client.h("div", {
        id: "header",
        className: classes.header
      }, client.h("img", {
        src: client.lib.Paths.LOGO_LIGHT,
        style: styles.logo(state.isMenuOpen)
      }));
    },
    id: 1002
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
      return client.h("div", {
        id: "menu",
        style: styles.menu(state.isMenuOpen)
      }, client.h("div", {
        className: classes.link,
        onclick: function onclick() {
          return _onclick('home');
        }
      }, "Home"), client.h("div", {
        className: classes.link,
        onclick: function onclick() {
          return _onclick('agreements');
        }
      }, "Convenios"), client.h("div", {
        className: classes.link,
        onclick: function onclick() {
          return _onclick('faq');
        }
      }, "Preguntas Frecuentes"));
    },
    id: 1003
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
      return client.h("div", {
        id: "home-wrapper",
        className: classes.wrapper
      }, client.lib.Home.map(function (item) {
        var type = item.type,
            url = item.url,
            text = item.text,
            className = item.className;
        var classStyles = classes[className];
        if (type === 'image') return client.h("img", {
          src: url,
          className: classStyles
        });
        return client.h("div", {
          className: classStyles
        }, text);
      }));
    },
    id: 1004
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
      return client.h("div", {
        id: "agreements-wrapper",
        className: classes.wrapper
      }, client.lib.Agreements.map(function (item) {
        var type = item.type,
            url = item.url,
            text = item.text,
            className = item.className;
        var classStyles = classes[className];
        if (type === 'image') return client.h("img", {
          src: url,
          className: classStyles
        });
        return client.h("div", {
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
    },
    id: 1005
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
      return client.h("div", {
        id: "faq-wrapper",
        className: classes.wrapper
      }, client.lib.Faq.map(function (item, i) {
        var text = item.text,
            className = item.className;
        return client.h("div", {
          id: "faq-".concat(i),
          className: classes[className]
        }, text);
      }));
    },
    id: 1006
  });
};

exports.default = _default;
},{}],"ui/Root.js":[function(require,module,exports) {
var __filename = "/Users/jmaguirrei/MEGA/MEGAsync/Development/apps/museeker/www/src/client/ui/Root.js";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Home2 = _interopRequireDefault(require("./pages/<Home>/Home"));

var _Agreements2 = _interopRequireDefault(require("./pages/<Agreements>/Agreements"));

var _Faq2 = _interopRequireDefault(require("./pages/<Faq>/Faq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(client) {
  console.log("client.ui", client.ui);
  var _client$ui$fragments = client.ui.fragments,
      Header = _client$ui$fragments.Header,
      Menu = _client$ui$fragments.Menu;
  var MenuIcon = client.ui.components.MenuIcon;
  var _ref = [(0, _Home2.default)(client), (0, _Agreements2.default)(client), (0, _Faq2.default)(client)],
      Home = _ref[0],
      Agreements = _ref[1],
      Faq = _ref[2];
  return client.hoc(_defineProperty({
    id: function id() {
      return client.id(__filename);
    },
    state: function state(props, store) {
      return {
        currentPage: store.get('currentPage') || 'home',
        isMenuOpen: store.get('isMenuOpen')
      };
    },
    actions: function actions(props, store) {
      return {
        onClickMenu: function onClickMenu() {
          console.log("onClickMenu");
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
    render: function render(_ref2) {
      var actions = _ref2.actions,
          state = _ref2.state,
          styles = _ref2.styles,
          classes = _ref2.classes;
      var onClickMenu = actions.onClickMenu;
      var currentPage = state.currentPage,
          isMenuOpen = state.isMenuOpen;
      console.log('root Rendered');
      return client.h("div", {
        id: "root",
        className: classes.root
      }, client.h(MenuIcon, {
        isOpen: isMenuOpen,
        onClick: onClickMenu,
        color: 'white',
        inStyle: 'left: 10px; top: 7px;'
      }), client.h(Header, null), client.h(Menu, null), client.h("div", {
        className: classes.scrollable
      }, client.h("div", {
        style: styles.page(currentPage === 'home')
      }, client.h(Home, null)), client.h("div", {
        style: styles.page(currentPage === 'agreements')
      }, client.h(Agreements, null)), client.h("div", {
        style: styles.page(currentPage === 'faq')
      }, client.h(Faq, null))));
    }
  }, "id", 1000));
};

exports.default = _default;
},{"./pages/<Home>/Home":"ui/pages/<Home>/Home.js","./pages/<Agreements>/Agreements":"ui/pages/<Agreements>/Agreements.js","./pages/<Faq>/Faq":"ui/pages/<Faq>/Faq.js"}],"../config.js":[function(require,module,exports) {
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
    lib: lib,
    components: components,
    fragments: fragments,
    rootComponent: _Root.default,
    rootNodeId: 'root'
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
},{"./client/store":"store/index.js","./client/lib":"lib/index.js","./client/ui/components":"ui/components/index.js","./client/ui/fragments":"ui/fragments/index.js","./client/ui/Root":"ui/Root.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("config", _config.default); // const isDevelopment = process.env.NODE_ENV === 'development';
// const client = isDevelopment ? require('@jmaguirrei/client').client : window.jmaguirrei.client;

var client = window.jmaguirrei.client;

var _default = client.init(_config.default.client);

exports.default = _default;
},{"../config.js":"../config.js"}]},{},["main.js"], null)