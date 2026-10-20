const { brand, orgTypes } = require('../../utils/data')
const { getSettings, saveSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    brand,
    a11yClass: '',
    settingsOpen: false,
    settings: getSettings(),
    languageOptions: ['简体中文', 'English', '한국어', '日本語'],
    languageValues: ['zh-CN', 'en', 'ko', 'ja'],
    languageIndex: 0,
    a11yMascot: '/assets/images/tangtang-a11y-peek.png',
    tangtangLogo: '/assets/images/tangtang-selftest.png',
    orgTypes: orgTypes.filter((item) => item.id !== 'general')
  },

  onShow() {
    this.refreshSettings()
  },

  refreshSettings() {
    const settings = getSettings()
    const languageIndex = this.data.languageValues.indexOf(settings.language)
    this.setData({
      settings,
      a11yClass: getA11yClass(settings),
      languageIndex: languageIndex >= 0 ? languageIndex : 0
    })
  },

  toggleSettings() {
    this.setData({ settingsOpen: !this.data.settingsOpen })
  },

  updateSetting(event) {
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
    const languageIndex = Number(event.detail.value)
    const settings = {
      ...this.data.settings,
      language: this.data.languageValues[languageIndex]
    }
    saveSettings(settings)
    this.setData({
      settings,
      languageIndex,
      a11yClass: getA11yClass(settings)
    })
    wx.showToast({ title: '语言入口已预留', icon: 'none' })
  },

  goServices() {
    wx.switchTab({ url: '/pages/services/services' })
  },

  goSelfTest() {
    wx.navigateTo({ url: '/pages/selftest/selftest' })
  },

  goAbout() {
    wx.switchTab({ url: '/pages/about/about' })
  },

  openOrg(event) {
    const org = event.currentTarget.dataset.org
    wx.setStorageSync('pendingServiceOrg', org)
    wx.switchTab({ url: '/pages/services/services' })
  },

  noop() {}
})
