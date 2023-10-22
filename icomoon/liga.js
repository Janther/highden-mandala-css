/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'winter solstice': '&#xe90c;',
            'imbolc': '&#xe90d;',
            'spring equinox': '&#xe90e;',
            'beltane': '&#xe90f;',
            'summer solstice': '&#xe910;',
            'lammas': '&#xe911;',
            'autumn equinox': '&#xe912;',
            'samhain': '&#xe913;',
            'aries': '&#xe901;',
            'taurus': '&#xe90a;',
            'gemini': '&#xe904;',
            'cancer': '&#xe902;',
            'leo': '&#xe905;',
            'virgo': '&#xe90b;',
            'libra': '&#xe906;',
            'scorpio': '&#xe909;',
            'sagitarius': '&#xe908;',
            'capricorn': '&#xe903;',
            'aquarius': '&#xe900;',
            'pisces': '&#xe907;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
