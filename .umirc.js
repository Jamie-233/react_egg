// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       {
  //         path: '/demo',
  //         component: './demo',
  //       },
  //       {
  //         path: '/class/index',
  //         component: './class/index',
  //       },
  //       {
  //         path: '/',
  //         component: '../pages/index',
  //       },
  //     ],
  //   },
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'react_Egg',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};