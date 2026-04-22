// main.js - FKBook 插件核心代码
module.exports = {
  onload(plugin) {
    // 插件加载时触发，弹出提示
    plugin.registerEvent(
      plugin.app.workspace.on("layout-ready", () => {
        new Notice("FKBook 插件加载成功！");
      })
    );
  },
  onunload() {
    // 插件卸载时触发（可选）
    new Notice("FKBook 插件已卸载");
  }
};
