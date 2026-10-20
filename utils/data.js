const orgTypes = [
  { id: 'museum', name: '博物馆 / 展览场馆', short: '场馆' },
  { id: 'mall', name: '商业空间 / 商场', short: '商业空间' },
  { id: 'enterprise', name: '企业 CSR / ESG', short: '企业' },
  { id: 'school', name: '学校 / 社区 / 公益机构', short: '学校社区' },
  { id: 'general', name: '通用内容与工具', short: '通用工具' }
]

const serviceCategories = [
  { id: 'assessment', name: '评估咨询' },
  { id: 'sensory', name: '感官友好工具' },
  { id: 'training', name: '培训与能力建设' },
  { id: 'activity', name: '融合活动与项目设计' },
  { id: 'content', name: '内容与传播产品' },
  { id: 'custom', name: '其他' }
]

const brand = {
  name: '博物馆学堂',
  company: '杭州齐物屿智能科技有限公司',
  role: '包容性空间与活动服务品牌',
  contact: {
    city: '杭州',
    phone: '待补充',
    email: '待补充',
    wechat: '待补充',
    redbookUrl: 'https://www.xiaohongshu.com/user/profile/6047759a000000000101cb7b?m_source=pwa',
    publicAccount: '待补充'
  }
}

const services = [
  {
    id: 'venue-assessment',
    name: '场馆整体无障碍与包容性评估',
    category: 'assessment',
    visual: { type: 'placeholder', label: '评估报告 / 现场观察照片' },
    orgs: ['museum', 'school'],
    summary: '从空间、信息、感官、服务和活动维度识别障碍，明确后续优化方向。',
    audience: '希望系统了解场馆无障碍与包容性现状，并获得改进建议的机构。',
    problem: '帮助机构识别空间、导览、服务、感官环境和信息传达中的障碍。',
    content: ['前期资料调研', '空间动线与基础无障碍观察', '感官环境与参观体验评估', '信息可达性与导览支持评估', '员工服务流程与特殊群体支持建议'],
    deliverables: ['无障碍与包容性评估报告', '问题清单', '初步优化建议', '可选后续升级服务建议'],
    price: '按面积报价，参考 ¥300 / 平方米。具体费用根据场馆规模、评估深度与差旅需求确认。',
    cta: '咨询评估服务'
  },
  {
    id: 'commercial-assessment',
    name: '商业空间无障碍与包容性评估',
    category: 'assessment',
    visual: { type: 'placeholder', label: '商业空间评估现场 / 报告示例' },
    orgs: ['mall'],
    summary: '识别顾客到达、动线、休息、信息、服务和感官体验中的障碍。',
    audience: '希望提升空间对残障人士、老人、儿童、亲子家庭、神经多样性人群和感官敏感人群友好度的商业机构。',
    problem: '帮助商业空间明确无障碍与包容性提升方向。',
    content: ['公共区域无障碍与动线观察', '关键点位评估', '噪音、光线、人流密度、气味等感官因素观察', '导视、信息提示与服务流程评估', '安静休息点或低刺激区域建议'],
    deliverables: ['商业空间无障碍与包容性评估报告', '问题清单', '改进优先级建议', '可选感官地图 / 感官指南 / 安静空间配置建议'],
    price: '定制报价。根据空间面积、业态复杂度、点位数量、评估深度与差旅需求确认。',
    cta: '咨询商业空间评估'
  },
  {
    id: 'quiet-space',
    name: '安静空间规划',
    category: 'assessment',
    visual: { type: 'placeholder', label: '安静空间示意 / 配置清单' },
    orgs: ['museum', 'mall', 'school'],
    summary: '规划可临时退出、恢复情绪、降低刺激的安静休息空间。',
    audience: '希望为感官敏感人群、儿童家庭、老人或需要短暂休息的访客设置安静休息空间的机构。',
    problem: '提升特殊群体和家庭访客的体验安全感。',
    content: ['安静空间选址建议', '空间功能与使用流程设计', '感官友好配置建议', '使用规则与提示文案建议', '员工支持流程建议'],
    deliverables: ['安静空间规划建议', '配置清单', '使用说明与服务流程建议', '可选标识与宣传文案建议'],
    price: '定制报价。根据空间规模、配置深度、是否需要物料采购与现场支持确认。',
    cta: '咨询安静空间规划'
  },
  {
    id: 'sensory-bag',
    name: '感官书包',
    category: 'sensory',
    visual: { type: 'placeholder', label: '感官书包实物图' },
    orgs: ['museum', 'mall', 'enterprise', 'school', 'general'],
    summary: '为感官敏感人群和家庭提供现场辅助工具。',
    audience: '希望为感官敏感人群、自闭症儿童、亲子家庭及其他需要感官调节支持的访客提供工具的机构。',
    problem: '帮助访客在嘈杂、拥挤或刺激较强的环境中获得更稳定的参观或活动体验。',
    content: ['标准感官书包配置建议', '适合机构场景的物品清单', '使用说明与借用流程建议', '员工使用提示', '可选定制书包、物料采购、品牌 logo 印制'],
    deliverables: ['标准感官书包及相关配件，或定制感官书包方案', '使用说明', '借还流程建议', '员工提示卡'],
    price: '标准配置参考 ¥500 / 套。定制服务根据物料、数量、品牌印制和采购需求确认。',
    cta: '咨询感官书包'
  },
  {
    id: 'sensory-guide',
    name: '感官指南',
    category: 'sensory',
    visual: { type: 'placeholder', label: '感官指南页面示例' },
    orgs: ['museum', 'mall', 'school', 'general'],
    summary: '帮助访客提前了解声音、光线、人流、气味、触摸体验等感官信息。',
    audience: '希望帮助访客建立到访预期、降低不确定性的机构。',
    problem: '帮助感官敏感人群和家庭选择更适合自己的路线、时间和活动方式。',
    content: ['空间或展区感官信息梳理', '声音、光线、人流、气味、触摸体验等要素标注', '参观建议与避开高刺激区域建议', '适合儿童和家庭理解的文字表达'],
    deliverables: ['感官指南 PDF 电子版', '可选印刷版设计文件', '可选配套图标或说明文案'],
    price: '参考 ¥100-200 / 平方米，套餐价起步参考 ¥16,000。具体费用根据面积、内容复杂度和设计需求确认。',
    cta: '咨询感官指南'
  },
  {
    id: 'sensory-map',
    name: '感官地图',
    category: 'sensory',
    visual: { type: 'placeholder', label: '感官地图版式示例' },
    orgs: ['museum', 'mall', 'school', 'general'],
    summary: '以地图形式呈现不同区域的感官特征和强度。',
    audience: '希望直观呈现空间中不同区域感官特征的机构。',
    problem: '帮助访客快速了解哪里更安静、哪里声音较大、哪里光线较强、哪里人流较密。',
    content: ['空间平面信息与参观动线梳理', '感官要素观察与标注', '不同区域感官强度分级', '图例与说明文字设计', '可选配套参观建议'],
    deliverables: ['感官地图 PDF 电子版', '可选印刷版设计文件', '可选配套图标、图例和说明文案'],
    price: '参考 ¥100-200 / 平方米，套餐价起步参考 ¥16,000。具体费用根据面积、点位数量、地图设计复杂度确认。',
    cta: '咨询感官地图'
  },
  {
    id: 'social-narrative',
    name: '社会叙事',
    category: 'sensory',
    visual: { type: 'placeholder', label: '社会叙事图文示例' },
    orgs: ['museum', 'mall', 'school', 'general'],
    summary: '用图文故事帮助访客提前理解到访流程、现场规则和可能变化。',
    audience: '希望帮助自闭症儿童、神经多样性人群、儿童家庭或首次到访者提前理解参观流程的机构。',
    problem: '降低陌生环境带来的焦虑，让访客知道会去哪里、会看到什么、可以怎么做。',
    content: ['到访流程与关键场景梳理', '现场规则与可能变化说明', '适合儿童和特殊群体理解的文字撰写', '图片拍摄建议或素材整理', '图文版式设计'],
    deliverables: ['社会叙事 PDF 电子版', '可选印刷版设计文件', '可选配套图片清单与说明文案'],
    price: '参考 ¥100-200 / 平方米，套餐价起步参考 ¥16,000。具体费用根据空间规模、流程复杂度、图片数量和设计需求确认。',
    cta: '咨询社会叙事'
  },
  {
    id: 'online-training',
    name: '员工培训（线上）',
    category: 'training',
    visual: { type: 'placeholder', label: '培训课件 / 线上课程截图' },
    orgs: ['museum', 'mall', 'enterprise', 'school'],
    summary: '提升员工无障碍意识、特殊群体理解能力和包容性服务能力。',
    audience: '希望组织线上培训的一线员工、教育员、导览员、客服人员、安保人员和活动执行人员。',
    problem: '帮助团队理解不同人群需求，掌握基础接待原则和服务方法。',
    content: ['无障碍与包容性基础认知', '特殊群体需求理解', '感官友好与神经多样性基础', '不同场景下的接待原则', '案例分析与问答'],
    deliverables: ['线上培训课程', '培训课件或学习材料', '可选课后小测或反馈表', '可选培训回放授权'],
    price: '按模块报价，参考 ¥10,000 / 模块。具体费用根据培训时长、模块数量、是否需要定制案例与回放授权确认。',
    cta: '咨询线上培训'
  },
  {
    id: 'offline-training',
    name: '员工培训（线下）',
    category: 'training',
    visual: { type: 'placeholder', label: '线下培训 / 工作坊照片' },
    orgs: ['museum', 'mall', 'enterprise', 'school'],
    summary: '通过面对面培训、工作坊或现场演练提升员工实际服务能力。',
    audience: '希望在真实空间和服务场景中提升员工服务能力的机构。',
    problem: '帮助员工学习更友好的沟通方式、接待流程和现场支持方法。',
    content: ['无障碍与包容性基础培训', '特殊群体需求与沟通方式', '场景化服务演练', '现场动线与服务触点讨论', '员工分组工作坊'],
    deliverables: ['线下培训 / 工作坊', '培训课件或学习材料', '现场练习与讨论记录', '可选培训反馈总结'],
    price: '按人数和培训设计费报价，参考 ¥1,800 / 人。每场建议不超过 20 人，具体费用根据培训时长、人数、城市、差旅和定制深度确认。',
    cta: '咨询线下培训'
  },
  {
    id: 'inclusive-camp',
    name: '普特融合博物馆探索营',
    category: 'activity',
    visual: { type: 'placeholder', label: '探索营活动照片' },
    orgs: ['museum', 'enterprise', 'school'],
    summary: '让普通儿童与特殊儿童在博物馆中共同探索、自然互动和共同学习。',
    audience: '希望开展普通儿童与特殊儿童共同参与的博物馆融合教育活动的机构、学校、社区、公益组织或企业公益项目。',
    problem: '通过共同参观、任务探索、互动体验和引导支持促进理解与接纳。',
    content: ['活动主题与路线设计', '共同参与机制设计', '任务卡或互动材料设计', '特殊群体参与支持方案', '工作人员协作流程', '现场执行或执行指导'],
    deliverables: ['活动方案', '活动流程', '任务材料 / 活动手册', '现场支持建议', '可选活动复盘报告'],
    price: '定制报价。根据活动人数、场次、场地、物料、人员配置和执行深度确认。',
    cta: '咨询探索营活动'
  },
  {
    id: 'friendly-visit',
    name: '特殊群体友好参观活动',
    category: 'activity',
    visual: { type: 'placeholder', label: '友好参观活动现场' },
    orgs: ['museum', 'mall', 'enterprise', 'school'],
    summary: '为不同特殊需求人群设计更可理解、更可参与、更有安全感的参观体验。',
    audience: '希望为自闭症儿童、视障人士、听障人士、认知障碍人士、老人或其他有特殊需求群体设计活动的机构。',
    problem: '根据不同人群的参观需求设计活动流程和现场支持方式。',
    content: ['目标人群需求分析', '参观路线与活动流程设计', '现场支持人员配置建议', '参观前准备材料设计', '互动环节与教育活动设计', '风险点与退出机制建议'],
    deliverables: ['友好参观活动方案', '参观流程与支持说明', '参观前准备材料', '可选活动物料与复盘报告'],
    price: '定制报价。根据目标人群、活动时长、参与人数、物料需求和现场支持深度确认。',
    cta: '咨询友好参观活动'
  },
  {
    id: 'enterprise-csr',
    name: '企业 CSR / ESG 包容性科普活动',
    category: 'activity',
    visual: { type: 'placeholder', label: '企业活动现场 / 互动材料' },
    orgs: ['enterprise'],
    summary: '把包容性理念转化为员工可参与、公众可理解、品牌可传播的活动。',
    audience: '希望围绕特殊群体、无障碍、包容性、多元共融、员工公益或品牌社会责任开展活动的企业。',
    problem: '支持企业开展 CSR、ESG、公益传播、员工文化和亲子家庭日等场景下的包容性活动。',
    content: ['包容性科普主题策划', '特殊群体体验与理解活动设计', '员工工作坊或亲子活动设计', '企业志愿者参与机制设计', '活动物料与传播内容建议'],
    deliverables: ['活动策划方案', '活动流程', '科普内容与互动材料', '执行支持建议', '可选活动复盘报告'],
    price: '定制报价。根据活动主题、参与人数、场次、城市、物料、嘉宾和执行需求确认。',
    cta: '咨询企业活动'
  },
  {
    id: 'knowledge-cards',
    name: '包容性知识卡片',
    category: 'content',
    visual: { type: 'placeholder', label: '知识卡片实物 / 设计稿' },
    orgs: ['museum', 'mall', 'enterprise', 'school', 'general'],
    summary: '把复杂的无障碍和包容性理念转化成简洁、友好的知识内容。',
    audience: '希望向员工、观众、顾客或公众科普无障碍与包容性知识的机构。',
    problem: '适合培训、活动、展陈、公众号或线下发放使用。',
    content: ['主题策划', '包容性知识内容撰写', '图文结构设计', '适合目标人群的语言转译', '可选印刷设计与物料制作建议'],
    deliverables: ['包容性知识卡片文案', '图文设计文件或印刷文件', '可选电子版传播图'],
    price: '标准版参考 ¥168 / 套，100 套起订。定制版参考 ¥268 / 套，100 套起订。具体费用根据主题数量、设计复杂度、印刷工艺和定制需求确认。',
    cta: '咨询知识卡片'
  },
  {
    id: 'sensory-cards',
    name: '感官宣传卡片',
    category: 'content',
    visual: { type: 'placeholder', label: '感官宣传卡片示例' },
    orgs: ['museum', 'mall', 'enterprise', 'school', 'general'],
    summary: '帮助公众理解感官友好、感官敏感、安静空间、感官书包等概念。',
    audience: '希望向公众解释感官友好支持的机构。',
    problem: '降低误解，提高现场配合度和接纳度。',
    content: ['感官友好主题内容撰写', '图文卡片设计', '使用场景建议', '可选结合具体活动或空间定制说明', '可选印刷文件制作'],
    deliverables: ['感官宣传卡片文案', '图文设计文件或印刷文件', '可选电子版传播图'],
    price: '参考 ¥168 / 套，100 套起订。具体费用根据主题数量、设计复杂度、印刷工艺和定制需求确认。',
    cta: '咨询感官宣传卡片'
  },
  {
    id: 'activity-handbook',
    name: '包容性活动手册',
    category: 'content',
    visual: { type: 'placeholder', label: '活动手册页面示例' },
    orgs: ['museum', 'enterprise', 'school', 'general'],
    summary: '把活动理念、流程、任务、参与提示和支持信息整理成清晰的活动材料。',
    audience: '希望围绕主题活动、融合教育项目或企业公益活动形成完整活动材料的机构。',
    problem: '帮助机构形成可执行、可传播的活动手册。',
    content: ['活动主题与内容结构梳理', '活动流程与任务内容撰写', '特殊群体参与提示', '家长 / 员工 / 志愿者支持说明', '图文版式设计'],
    deliverables: ['包容性活动手册 PDF 电子版', '可选印刷版设计文件', '可选活动任务卡或配套材料'],
    price: '参考 ¥48,900 / 套。一套主题路线，不超过 10 个展品或活动点。具体费用根据主题复杂度、点位数量、设计深度和印刷需求确认。',
    cta: '咨询活动手册'
  },
  {
    id: 'content-custom',
    name: '包容性内容与传播定制',
    category: 'content',
    visual: { type: 'placeholder', label: '内容传播物料示例' },
    orgs: ['museum', 'mall', 'enterprise', 'school', 'general'],
    summary: '围绕无障碍、特殊群体、包容性、多元共融等主题进行内容策划与传播。',
    audience: '希望进行公众号、小红书、活动物料、展览说明或内部培训材料定制的机构。',
    problem: '将专业议题转化为公众易理解、员工可学习、品牌可传播的内容。',
    content: ['主题策划', '科普文章或短内容撰写', '活动传播文案', '展览 / 空间包容性说明文案', '员工学习材料'],
    deliverables: ['内容策划方案', '文案内容', '可选图文排版建议', '可选系列内容规划'],
    price: '定制报价。根据内容类型、篇数、字数、专业深度、设计需求和传播渠道确认。',
    cta: '咨询内容定制'
  },
  {
    id: 'custom-service',
    name: '其他定制服务',
    category: 'custom',
    visual: { type: 'placeholder', label: '定制方案示例' },
    orgs: ['museum', 'mall', 'enterprise', 'school', 'general'],
    summary: '承接暂未列入标准服务的无障碍、包容性体验、特殊群体支持或融合活动需求。',
    audience: '有相关需求，但暂时不确定适合哪一类服务的机构。',
    problem: '帮助机构先明确问题，再匹配合适的服务路径。',
    content: ['需求沟通', '目标人群与场景梳理', '初步服务建议', '可选定制方案'],
    deliverables: ['初步建议', '定制服务方案', '报价说明'],
    price: '定制报价。',
    cta: '提交定制需求'
  }
]

const selfTestQuestions = [
  { id: 'q1', dimension: 'space', dimensionName: '空间可达性', text: '主要入口、通道、电梯、卫生间等关键区域，是否方便轮椅、婴儿车、行动不便者使用？' },
  { id: 'q2', dimension: 'space', dimensionName: '空间可达性', text: '访客是否可以清楚知道如何到达服务台、休息区、卫生间、出口等关键位置？' },
  { id: 'q3', dimension: 'info', dimensionName: '信息可理解性', text: '你们是否提供清晰的到访前信息，比如开放时间、路线、入口、设施、注意事项和适合人群？' },
  { id: 'q4', dimension: 'info', dimensionName: '信息可理解性', text: '你们是否为儿童、老人、认知障碍人士或首次到访者提供更易理解的说明材料？' },
  { id: 'q5', dimension: 'sensory', dimensionName: '感官友好度', text: '你们是否了解空间中哪些区域可能存在强光、噪音、拥挤、气味或其他感官刺激？' },
  { id: 'q6', dimension: 'sensory', dimensionName: '感官友好度', text: '你们是否提供安静休息区、感官支持工具或低刺激参观 / 活动选择？' },
  { id: 'q7', dimension: 'service', dimensionName: '服务支持能力', text: '一线员工是否接受过无障碍、特殊群体需求或包容性服务相关培训？' },
  { id: 'q8', dimension: 'service', dimensionName: '服务支持能力', text: '当访客出现焦虑、迷路、沟通困难或需要临时退出时，员工是否知道如何提供支持？' },
  { id: 'q9', dimension: 'activity', dimensionName: '活动包容性', text: '你们是否设计过适合不同能力、不同年龄或不同感官需求人群共同参与的活动？' },
  { id: 'q10', dimension: 'activity', dimensionName: '活动包容性', text: '在活动设计中，是否会提前考虑特殊群体的参与方式、支持人员、物料和退出机制？' }
]

const answerOptions = [
  { label: '已做到', value: 10 },
  { label: '部分做到', value: 6 },
  { label: '不确定', value: 3 },
  { label: '暂未做到', value: 0 }
]

const cases = [
  {
    id: 'adidas',
    title: '阿迪达斯特殊群体包容性科普活动',
    type: '企业 CSR / ESG',
    tags: ['企业 CSR / ESG', '培训与科普'],
    summary: '围绕特殊群体与包容性主题设计科普与互动活动，帮助参与者理解不同人群需求。',
    background: '企业希望通过科普和互动活动，让员工或公众更具体地理解特殊群体需求与包容性理念。',
    work: ['包容性科普主题策划', '互动活动内容设计', '现场参与流程建议', '传播内容与物料建议'],
    highlights: ['将专业议题转化为易参与的活动形式', '适合企业 CSR、ESG、员工文化和公益传播场景'],
    related: ['enterprise-csr', 'content-custom']
  },
  {
    id: 'cmg',
    title: '招商局包容性科普活动',
    type: '企业 CSR / ESG',
    tags: ['企业 CSR / ESG', '培训与科普'],
    summary: '面向企业场景设计无障碍与包容性科普内容，支持企业社会责任相关实践。',
    background: '企业希望围绕特殊群体、无障碍与包容性理念，开展面向员工或公众的科普活动。',
    work: ['科普主题梳理', '活动内容设计', '员工参与形式建议', '包容性传播文案支持'],
    highlights: ['适合企业内部倡导和社会责任项目', '帮助参与者形成对特殊群体需求的基础理解'],
    related: ['enterprise-csr', 'online-training']
  },
  {
    id: 'natural-museum-camp',
    title: '国家自然博物馆普特融合探索营',
    type: '融合教育活动',
    tags: ['博物馆 / 展览场馆', '融合教育活动'],
    summary: '视障儿童与普通儿童共同参与博物馆探索活动，在真实文化空间中自然互动与共同学习。',
    background: '在博物馆真实参观场景中，为视障儿童与普通儿童设计共同参与的融合探索活动。',
    work: ['活动主题与路线设计', '融合参与机制设计', '任务材料设计', '现场支持流程建议'],
    highlights: ['让不同能力儿童在共同任务中自然互动', '将博物馆教育、特殊群体支持和融合理念结合'],
    related: ['inclusive-camp', 'activity-handbook']
  },
  {
    id: 'sensory-tools',
    title: '博物馆感官友好支持工具案例',
    type: '内容与工具',
    tags: ['博物馆 / 展览场馆', '内容与工具'],
    summary: '围绕参观前、参观中和现场支持需求，设计感官地图、感官指南、社会叙事等工具。',
    background: '博物馆希望为感官敏感人群、儿童家庭和神经多样性观众提供更清晰的参观预期与现场支持。',
    work: ['参观流程梳理', '感官信息标注', '社会叙事内容撰写', '配套工具设计建议'],
    highlights: ['帮助观众提前理解参观环境', '可与员工培训、安静空间和整体评估组合使用'],
    related: ['sensory-map', 'sensory-guide', 'social-narrative']
  }
]

const articleCategories = ['无障碍基础', '感官友好', '普特融合', '特殊群体理解', '博物馆与公共文化空间', '商业空间包容性', '企业 CSR / ESG', '国际案例观察']

const articles = [
  {
    id: 'accessibility-basics',
    title: '无障碍不只是坡道',
    type: '科普文章',
    category: '无障碍基础',
    summary: '从空间、信息、感官、服务和活动五个维度理解无障碍与包容性体验。',
    body: ['很多人提到无障碍，首先想到的是坡道、电梯和无障碍卫生间。但对真实访客来说，无障碍还包括能否提前理解到访流程、是否能避开高刺激区域、员工是否知道如何提供支持，以及活动是否允许不同能力的人共同参与。', '博物馆学堂希望帮助机构把这些问题转化为可观察、可沟通、可落地的服务方案。'],
    related: ['venue-assessment', 'commercial-assessment']
  },
  {
    id: 'social-narrative-intro',
    title: '什么是社会叙事',
    type: '科普文章',
    category: '感官友好',
    summary: '社会叙事通过图文故事帮助儿童和神经多样性人群提前理解参观流程。',
    body: ['社会叙事会提前告诉访客将要去哪里、可能看到什么、现场有哪些规则、遇到变化时可以怎么做。', '它常用于博物馆、展览、活动和公共空间，帮助降低陌生环境带来的焦虑。'],
    related: ['social-narrative']
  },
  {
    id: 'sensory-map-intro',
    title: '什么是感官地图',
    type: '科普文章',
    category: '感官友好',
    summary: '感官地图用直观方式标注声音、光线、人流、气味等信息。',
    body: ['感官地图不是普通导览图，它重点呈现空间里的感官信息。比如哪些区域可能声音较大、光线较强、人流较密，哪些地方更适合短暂停留或休息。', '它可以帮助感官敏感人群和家庭更自主地安排路线。'],
    related: ['sensory-map', 'sensory-guide']
  }
]

const tools = [
  { id: 'venue-checklist', title: '场馆包容性自查清单', type: '自查清单', summary: '从空间、信息、感官、服务和活动五个方面进行快速自查。', body: ['主要入口、通道、电梯、卫生间等关键点位是否方便不同人群使用？', '是否提供清晰的到访前信息和易理解说明？', '是否识别过强光、噪音、拥挤、气味等感官压力点？', '员工是否知道如何支持特殊需求访客？'], related: ['venue-assessment'] },
  { id: 'social-narrative-sample', title: '社会叙事示例', type: '模板示例', summary: '了解社会叙事如何帮助儿童和神经多样性人群提前建立到访预期。', body: ['我会从入口进入场馆。', '如果我觉得声音太大，可以告诉身边的大人或工作人员。', '我可以选择休息一会儿，再继续参观。'], related: ['social-narrative'] },
  { id: 'sensory-map-sample', title: '感官地图示例', type: '感官友好工具', summary: '了解如何用地图标注声音、光线、人流等感官信息。', body: ['高声音区域：互动展项、放映空间、活动区。', '强光区域：临时展厅、玻璃展柜集中区域。', '低刺激区域：休息区、安静角落、服务台附近。'], related: ['sensory-map'] },
  { id: 'inclusive-activity-checklist', title: '普特融合活动准备清单', type: '活动准备', summary: '帮助活动组织者提前考虑人员、物料、支持方式和退出机制。', body: ['明确参与儿童的需求和支持方式。', '准备多感官方式参与的任务材料。', '设置临时退出和休息机制。', '让工作人员提前理解活动中的包容性原则。'], related: ['inclusive-camp', 'friendly-visit'] }
]

module.exports = {
  brand,
  orgTypes,
  serviceCategories,
  services,
  selfTestQuestions,
  answerOptions,
  cases,
  articleCategories,
  articles,
  tools
}
