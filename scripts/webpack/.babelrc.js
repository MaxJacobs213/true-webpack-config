module.exports = (api) => {
  const env = api.env();

  api.cache.using(() => env === 'development');

  const plugins = ['dynamic-import-node'];

  return {
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          shippedProposals: true,
          spec: true,
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins,
  };
};
