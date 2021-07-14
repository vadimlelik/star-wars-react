const {
  alias
} = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@constants': 'src/constants',
    '@hoc-healpers': 'src/hoc-healpers',
    '@services': 'src/services',
    '@utilits': 'src/utilits',
    '@styles': 'src/styles',
    '@PeoplePage': 'src/PeoplePage',
    '@routes': 'src/routes',
    '@static': 'src/static',
  })(config);

  return config;
}