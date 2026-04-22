const { Plugin, PluginSettingTab, Setting } = require('obsidian');

const DEFAULT_SETTINGS = {
	mySetting: 'default'
};

class FKBookPlugin extends Plugin {
	async onload() {
		await this.loadSettings();

		// 添加 ribbon 图标
		this.addRibbonIcon('book', 'FKBook', (evt) => {
			new Notice('FKBook 插件已激活!');
		});

		// 添加命令
		this.addCommand({
			id: 'open-fkbook',
			name: '打开 FKBook',
			callback: () => {
				new Notice('FKBook 命令已执行!');
			}
		});

		// 添加设置面板
		this.addSettingTab(new FKBookSettingTab(this.app, this));

		console.log('FKBook 插件已加载');
	}

	onunload() {
		console.log('FKBook 插件已卸载');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class FKBookSettingTab extends PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display() {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl('h2', { text: 'FKBook 设置' });

		new Setting(containerEl)
			.setName('我的设置')
			.setDesc('这是一个示例设置项')
			.addText(text => text
				.setPlaceholder('输入设置值')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}

module.exports = FKBookPlugin;
