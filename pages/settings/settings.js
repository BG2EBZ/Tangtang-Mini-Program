const { getSettings, saveSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    settings: getSettings(),
    a11yClass: '',
    languageOptions: ['简体中文', 'English（预留）', '한국어（预留）', '日本語（预留）'],
    languageValues: ['zh-CN', 'en', 'ko', 'ja'],
    languageIndex: 0
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    const settings = getSettings()
    const languageIndex = this.data.languageValues.indexOf(settings.language)
    this.setData({
      settings,
      a11yClass: getA11yClass(settings),
      languageIndex: languageIndex >= 0 ? languageIndex : 0
    })
  },

  toggleSetting(event) {
    const key = event.currentTarget.dataset.key
    const settings = {
      ...this.data.settings,
      [key]: event.detail.value
    }
    saveSettings(settings)
    this.setData({
      settings,
      a11yClass: getA11yClass(settings)
    })
  },

  changeLanguage(event) {
    const language = this.data.languageValues[Number(event.detail.value)]
    const settings = {
      ...this.data.settings,
      language
    }
    saveSettings(settings)
    this.setData({
      settings,
      languageIndex: Number(event.detail.value),
      a11yClass: getA11yClass(settings)
    })
    wx.showToast({ title: '语言入口已预留', icon: 'none' })
  }
})
