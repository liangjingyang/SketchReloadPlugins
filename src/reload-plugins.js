export default function(context) {
  let paneController = MSPreferencesController.sharedController();
  let pane = paneController.currentPreferencePane();
  if (!pane) {
    pane = MSPluginsPreferencePane.alloc().initWithPreferencesController(paneController);
  }
  console.log(pane);
  let pluginManager = pane.pluginManager();
  pluginManager.reloadPlugins();
  context.document.showMessage("Plugins reloaded 🙌");
}
