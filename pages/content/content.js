const { articleCategories, articles, tools } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

Page({
  data: {
    articleCategories,
    a11yClass: '',
    articles,
    tools,
    mode: 'main',
    listTitle: '',
    visibleArticles: [],
    visibleTools: [],
    baseArticles: [],
    baseTools: [],
    searchKeyword: ''
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
  },

  goSelfTest() {
    wx.navigateTo({ url: '/pages/selftest/selftest' })
  },

  goContact() {
    wx.switchTab({ url: '/pages/about/about' })
  },

  openCategory(event) {
    const category = event.currentTarget.dataset.category
    this.setData({
      mode: 'articles',
      listTitle: category,
      baseArticles: articles.filter((item) => item.category === category),
      visibleArticles: articles.filter((item) => item.category === category),
      searchKeyword: ''
    })
  },

  showAllArticles() {
    this.setData({
      mode: 'articles',
      listTitle: '全部精选文章',
      baseArticles: articles,
      visibleArticles: articles,
      searchKeyword: ''
    })
  },

  showAllTools() {
    this.setData({
      mode: 'tools',
      listTitle: '全部工具分享',
      baseTools: tools,
      visibleTools: tools,
      searchKeyword: ''
    })
  },

  backToMain() {
    this.setData({
      mode: 'main',
      listTitle: '',
      visibleArticles: [],
      visibleTools: [],
      baseArticles: [],
      baseTools: [],
      searchKeyword: ''
    })
  },

  updateSearch(event) {
    const searchKeyword = event.detail.value.trim()
    const keyword = searchKeyword.toLowerCase()
    if (this.data.mode === 'articles') {
      const visibleArticles = this.data.baseArticles.filter((item) => {
        return [item.title, item.summary, item.category].join(' ').toLowerCase().includes(keyword)
      })
      this.setData({ searchKeyword, visibleArticles })
      return
    }

    if (this.data.mode === 'tools') {
      const visibleTools = this.data.baseTools.filter((item) => {
        return [item.title, item.summary, item.type].join(' ').toLowerCase().includes(keyword)
      })
      this.setData({ searchKeyword, visibleTools })
    }
  },

  openArticle(event) {
    wx.navigateTo({ url: `/pages/content-detail/content-detail?type=article&id=${event.currentTarget.dataset.id}` })
  },

  openTool(event) {
    wx.navigateTo({ url: `/pages/content-detail/content-detail?type=tool&id=${event.currentTarget.dataset.id}` })
  }
})
