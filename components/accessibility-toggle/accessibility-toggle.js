const { getSettings, saveSettings, getA11yClass } = require('../../utils/settings')

Component({
  data: {
    open: false,
    settings: getSettings(),
    languageOptions: ['简体中文', 'English', '한국어', '日本語'],
    languageValues: ['zh-CN', 'en', 'ko', 'ja'],
    languageIndex: 0
  },

  lifetimes: {
    attached() {
      this.refresh()
    }
  },

  pageLifetimes: {
    show() {
      this.refresh()
    }
  },

  methods: {
    refresh() {
      const settings = getSettings()
      const languageIndex = this.data.languageValues.indexOf(settings.language)
      this.setData({
        settings,
        languageIndex: languageIndex >= 0 ? languageIndex : 0
      })
    },

    togglePanel() {
      this.setData({ open: !this.data.open })
    },

    closePanel() {
      this.setData({ open: false })
    },

    updateSetting(event) {
      const key = event.currentTarget.dataset.key
      const settings = {
        ...this.data.settings,
        [key]: event.detail.value
      }
      saveSettings(settings)
      this.setData({ settings })
      this.updateCurrentPage(settings)
      this.triggerEvent('settingschange', settings)
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
        languageIndex: Number(event.detail.value)
      })
      this.updateCurrentPage(settings)
      this.triggerEvent('settingschange', settings)
      wx.showToast({ title: '语言入口已预留', icon: 'none' })
    },

    updateCurrentPage(settings) {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]
      if (currentPage && currentPage.setData) {
        currentPage.setData({ a11yClass: getA11yClass(settings) })
      }
    }
  }
})
