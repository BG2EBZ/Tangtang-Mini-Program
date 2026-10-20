const SETTINGS_KEY = 'displayAccessibilitySettings'

const defaultSettings = {
  largeText: false,
  highContrast: false,
  reduceDecoration: false,
  screenReaderHint: true,
  language: 'zh-CN'
}

function getSettings() {
  return {
    ...defaultSettings,
    ...(wx.getStorageSync(SETTINGS_KEY) || {})
  }
}

function saveSettings(settings) {
  wx.setStorageSync(SETTINGS_KEY, {
    ...defaultSettings,
    ...settings
  })
}

function getA11yClass(settings = getSettings()) {
  return [
    settings.largeText ? 'a11y-large' : '',
    settings.highContrast ? 'a11y-contrast' : '',
    settings.reduceDecoration ? 'a11y-reduced' : ''
  ].filter(Boolean).join(' ')
}

module.exports = {
  defaultSettings,
  getSettings,
  saveSettings,
  getA11yClass
}
