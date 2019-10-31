module.exports = {
  name: 'movies',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/movies',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
