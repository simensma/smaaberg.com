import path from 'path'

export default {
  getRoutes: async () => {

    return [
      {
        path: '/resume',
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      'react-static-plugin-favicons',
      { 

        outputDir: path.join(__dirname, 'dist'),
        inputFile: path.resolve(__dirname, './src/icon.png') },
    ],
  ],
}
