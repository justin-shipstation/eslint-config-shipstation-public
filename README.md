# eslint-config-shipstation
ESLint configuration for ShipStation

## How to use this repo

First, ask yourself: am I using react or not? If you're using react, use `shipstation/react`, otherwise use `shipstation/base`.


In your eslint config add an extends line
```
{
    extends: 'shipstation/react',
    // OR
    extends: 'shipstation/base',
}
```


## TL;DR version of the rules
- use single quotes
- always use semicolons
- two spaces for indentation
- prefer stateless components as functions

## How this differs from airbnb
- `consistent-return` is turned `off` so you can do `return;`
- `arrow-body-style` is turned `off` so you can include braces around arrow functions where it makes sense.
- `class-methods-use-this` is turned `off` so `this` can be used in any method.
- `import/prefer-default-export` is set to `0` so you can export as many things as you want.
- `import/no-extraneous-dependencies` is much more strict as airbnb let you have more leeway in `devDependencies`
- `linebreak-style` is set to `off` since we have a mix of windows and mac users
- `max-len` is set to `off` as we don't care about the length of individual lines of code.
- `no-param-reassign` is set to `off`
- `no-alert` is set to `off` so we don't get warnings
- `no-plusplus` is set to `off` so you can use `++` or `--`
- `no-underscore-dangle` is set to always error. Airbnb was lenient in function names.
- `jsx-quotes` prefers `single` instead of `double`
- `react/jsx-filename-extension` is turned `off` so you can have jsx in `.js` files
- `jsx-a11y/label-has-for` is turned `off` so `label` elements don't have to have `htmlFor`
- `react/no-unescaped-entities` is turned `off` so invalid characters can appear in jsx markup
- `jsx-a11y/no-static-element-interactions` is turned `off` so elements such as `div`s can have handlers like `onClick`
- `jsx-a11y/click-events-have-key-events` is turned `off` so elements with `onClick` handlers aren't required to implement key events.
- `no-return-assign` is turned off so you can do things like `return x = y;`
- `react/forbid-prop-types` is turned `off`. Airbnb prohibits `any`, `array`, and `object`.
- `react/no-array-index-key` is turned `off` so you can use array indecies as keys.
- `react/jsx-key` is set to `error` as you are required to use the `key` attribute whenever you iterate.
- `indent` is a bit more loose as airbnb had a bunch of other cases.
- `padded-blocks` is more strict as it never allows for them.
- `prefer-promise-reject-errors` is set to `1`
- `no-console` is set to `error`. If you really need to console something do an eslint ignore.



## Where does all this come from?
This repo is based off of [airbnb's eslint config](https://github.com/airbnb/javascript). However it's tailored to our standards.

## Releasing a New Version
Check out [how to release a new version](RELEASE-NEW-VERSION.md)
