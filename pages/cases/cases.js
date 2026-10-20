const { cases } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    filters: ['全部', '博物馆 / 展览场馆', '企业 CSR / ESG', '融合教育活动', '内容与工具', '培训与科普'],
    a11yClass: '',
    active: '全部',
    cases,
    visibleCases: cases
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
  },

  selectFilter(event) {
    const active = event.currentTarget.dataset.name
    const visibleCases = active === '全部' ? cases : cases.filter((item) => item.tags.includes(active))
    this.setData({ active, visibleCases })
  },

  openCase(event) {
    wx.navigateTo({ url: `/pages/case-detail/case-detail?id=${event.currentTarget.dataset.id}` })
  },

  goContact() {
    wx.switchTab({ url: '/pages/about/about' })
  }
})
