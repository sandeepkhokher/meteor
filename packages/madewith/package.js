Package.describe({
  summary: "Made With Meteor badge",
  version: "1.0.0"
});

Package.on_use(function (api) {
  api.use(['livedata', 'mongo-livedata', 'underscore', 'spark', 'templating'], 'client');

  api.add_files([
    'madewith.css',
    'madewith_badge.css',
    'madewith.html',
    'madewith.js'], 'client');
});
