const { orgTypes, services, selfTestQuestions, answerOptions } = require('../../utils/data')
const { getSettings, getA11yClass } = require('../../utils/settings')

const dimensionInfo = {
  space: { name: '空间可达性', serviceIds: ['venue-assessment', 'commercial-assessment', 'quiet-space'] },
  info: { name: '信息可理解性', serviceIds: ['social-narrative', 'sensory-guide', 'content-custom', 'knowledge-cards'] },
  sensory: { name: '感官友好度', serviceIds: ['sensory-map', 'sensory-guide', 'sensory-bag', 'quiet-space'] },
  service: { name: '服务支持能力', serviceIds: ['online-training', 'offline-training'] },
  activity: { name: '活动包容性', serviceIds: ['inclusive-camp', 'friendly-visit', 'enterprise-csr', 'activity-handbook'] }
}

function getLevel(score) {
  if (score < 40) {
    return {
      name: '起步阶段',
      text: '目前包容性支持基础较弱，建议先从基础评估和员工培训开始。'
    }
  }
  if (score < 60) {
    return {
      name: '改进阶段',
      text: '已经有一些友好措施，但还不系统，建议优先梳理空间、信息和服务流程。'
    }
  }
  if (score < 80) {
    return {
      name: '友好基础',
      text: '已有较好的包容性意识和部分支持工具，可以进一步完善感官友好工具和活动设计。'
    }
  }
  return {
    name: '较成熟阶段',
    text: '机构已经具备较好的包容性基础，可以考虑系统化升级、案例传播和标杆项目打造。'
  }
}

Page({
  data: {
    step: 'org',
    a11yClass: '',
    orgTypes: orgTypes.filter((item) => item.id !== 'general'),
    activeOrg: '',
    questions: selfTestQuestions,
    answerOptions,
    answers: {},
    result: null
  },

  onShow() {
    this.setData({ a11yClass: getA11yClass(getSettings()) })
  },

  selectOrg(event) {
    this.setData({
      activeOrg: event.currentTarget.dataset.id,
      step: 'questions'
    })
  },

  chooseAnswer(event) {
    const { question, value } = event.currentTarget.dataset
    this.setData({
      [`answers.${question}`]: Number(value)
    })
  },

  submitTest() {
    const { answers, questions, activeOrg } = this.data
    if (Object.keys(answers).length < questions.length) {
      wx.showToast({ title: '请先完成所有题目', icon: 'none' })
      return
    }

    const dimensionScores = {}
    questions.forEach((question) => {
      if (!dimensionScores[question.dimension]) {
        dimensionScores[question.dimension] = {
          key: question.dimension,
          name: question.dimensionName,
          score: 0,
          max: 0
        }
      }
      dimensionScores[question.dimension].score += answers[question.id]
      dimensionScores[question.dimension].max += 10
    })

    const dimensions = Object.values(dimensionScores)
    const total = dimensions.reduce((sum, item) => sum + item.score, 0)
    const lowDimensions = dimensions
      .filter((item) => item.score < 14)
      .sort((a, b) => a.score - b.score)

    const serviceIds = []
    lowDimensions.forEach((dimension) => {
      dimensionInfo[dimension.key].serviceIds.forEach((id) => {
        if (!serviceIds.includes(id)) serviceIds.push(id)
      })
    })

    if (serviceIds.length === 0) {
      serviceIds.push('venue-assessment', 'content-custom', 'custom-service')
    }

    let recommended = serviceIds
      .map((id) => services.find((service) => service.id === id))
      .filter((service) => service && (service.orgs.includes(activeOrg) || service.orgs.includes('general')))
      .slice(0, 4)

    if (recommended.length === 0) {
      recommended = ['content-custom', 'custom-service']
        .map((id) => services.find((service) => service.id === id))
        .filter(Boolean)
    }

    this.setData({
      step: 'result',
      result: {
        total,
        level: getLevel(total),
        dimensions,
        recommended
      }
    })
  },

  restart() {
    this.setData({
      step: 'org',
      activeOrg: '',
      answers: {},
      result: null
    })
  },

  openService(event) {
    wx.navigateTo({ url: `/pages/service-detail/service-detail?id=${event.currentTarget.dataset.id}` })
  },

  goContact() {
    wx.switchTab({ url: '/pages/about/about' })
  }
})
