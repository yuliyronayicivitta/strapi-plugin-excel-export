import App from "./pages/App";

export default {
  bootstrap(app) {
    app.getPlugin('content-manager').injectComponent('listView', 'actions', {
      name: "ExportPlugin",
      Component: App,
    });
  },
};
